// Trendova Telegram bot — v1 (no AI, lean lead capture + forward)
// Env:
//   TELEGRAM_BOT_TOKEN  - required
//   OWNER_CHAT_ID       - required for lead forwarding
//   OPS_CHAT_ID         - optional, for ops notifications
//   ANTHROPIC_API_KEY   - optional, enables AI replies
import { Telegraf, Markup } from 'telegraf'

const TOKEN = process.env.TELEGRAM_BOT_TOKEN
if (!TOKEN) { console.error('Missing TELEGRAM_BOT_TOKEN'); process.exit(1) }

const bot = new Telegraf(TOKEN)
const OWNER = process.env.OWNER_CHAT_ID
const OPS = process.env.OPS_CHAT_ID
const HAS_AI = Boolean(process.env.ANTHROPIC_API_KEY)

let claude = null
if (HAS_AI) {
  const { default: Anthropic } = await import('@anthropic-ai/sdk')
  claude = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
}

const sessions = new Map()

const SITE = 'https://web-production-e0b22.up.railway.app'
const WELCOME = `أهلاً بك في Trendova 🌀

أنا وكيل ذكاء اصطناعي عربي. نبني لأصحاب الأعمال:
✦ بوتات خدمة عملاء
✦ أتمتة محتوى سوشيال
✦ مساعد AI شامل

اختار الخدمة اللي تهمك أو اكتب سؤالك:`

const SYSTEM_PROMPT = `أنت Trendova — وكيل خدمة عملاء عربي سعودي لشركة تبيع بوتات AI.
- ترحب، تفهم نشاط العميل وتحدياته في 3-5 رسائل
- تقترح الخطة: Tier1 (299/شهر+1500) / Tier2 (499+2500) / Tier3 (999+5000)
- لو جدي: طلب إيميل/واتساب + بشره إن الفريق بيتواصل
- لا تكذب، لا تعد بمواعيد، حوّل للفريق لو السؤال تقني عميق
- لهجة سعودية مهذّبة، emojis بذكاء`

function notifyOwner(text, extra = '') {
  if (!OWNER) return
  bot.telegram.sendMessage(OWNER, `${text}\n${extra}`).catch(() => {})
}
function notifyOps(text) {
  if (!OPS) return
  bot.telegram.sendMessage(OPS, text).catch(() => {})
}

// ========== COMMANDS ==========
bot.start(async (ctx) => {
  sessions.set(ctx.chat.id, { messages: [], user: ctx.from })
  await ctx.reply(
    WELCOME,
    Markup.keyboard([
      ['🛒 متجر إلكتروني', '🏥 عيادة/مركز'],
      ['🍔 مطعم', '💼 خدمات مهنية'],
      ['💬 تواصل مباشر'],
    ]).resize()
  )
  notifyOps(`🆕 محادثة جديدة: @${ctx.from.username || '—'} (${ctx.from.first_name})`)
})

bot.command('demo', (ctx) => ctx.reply(`شوف demo مباشر: ${SITE}`))
bot.command('pricing', (ctx) => ctx.replyWithMarkdown(`*الخطط:*

🟢 *Tier 1 — بوت خدمة عملاء*
• إعداد: 1,500 ريال (مرة)
• اشتراك: 299 ريال/شهر

🟡 *Tier 2 — أتمتة محتوى*
• إعداد: 2,500 ريال
• اشتراك: 499 ريال/شهر

🔵 *Tier 3 — مساعد AI شامل*
• إعداد: 5,000 ريال
• اشتراك: 999 ريال/شهر

🎁 *عرض أول 3 عملاء:* إعداد مجاني + شهر بـ 99 ريال`))

bot.command('contact', async (ctx) => {
  await ctx.reply(`تواصل مباشر:
📧 aitrendova@gmail.com
📱 واتساب: +966560885100
𝕏 @AiTrendova
🌐 ${SITE}`)
  notifyOwner(`🔔 طلب contact: @${ctx.from.username || '—'} (${ctx.from.first_name}) — chat ${ctx.chat.id}`)
})

// Admin command — only owner
bot.command('stats', async (ctx) => {
  if (String(ctx.chat.id) !== OWNER) return
  const total = sessions.size
  await ctx.reply(`📊 *Trendova stats*\n• محادثات نشطة: ${total}\n• AI: ${HAS_AI ? 'مفعّل' : 'معطّل'}`, { parse_mode: 'Markdown' })
})

// ========== TEXT HANDLER ==========
bot.on('text', async (ctx) => {
  if (ctx.message.text.startsWith('/')) return
  const chatId = ctx.chat.id

  let session = sessions.get(chatId) || { messages: [], user: ctx.from }
  session.messages.push({ role: 'user', content: ctx.message.text })
  if (session.messages.length > 20) session.messages = session.messages.slice(-20)
  sessions.set(chatId, session)

  // Forward to owner on 3rd message (qualified interest)
  if (session.messages.filter(m => m.role === 'user').length === 3) {
    notifyOwner(
      `🔥 lead جدّي:\n• @${ctx.from.username || '—'} (${ctx.from.first_name})\n• chat_id: ${chatId}\n• آخر رسالة: ${ctx.message.text.slice(0, 200)}`
    )
  }

  if (!HAS_AI) {
    // Fallback static flow without AI
    await ctx.reply(
      `شكراً على رسالتك 🌀

نحتاج منك:
1. نشاطك إيش؟
2. أكبر تحدي يومي؟
3. إيميل/واتساب للتواصل؟

ونرد عليك خلال ساعات بخطة مخصصة + demo.`
    )
    return
  }

  // AI reply
  try {
    await ctx.sendChatAction('typing')
    const resp = await claude.messages.create({
      model: 'claude-3-5-haiku-latest',
      max_tokens: 400,
      system: SYSTEM_PROMPT,
      messages: session.messages,
    })
    const reply = resp.content[0].text
    session.messages.push({ role: 'assistant', content: reply })
    sessions.set(chatId, session)
    await ctx.reply(reply)
  } catch (e) {
    console.error('AI err:', e.message)
    await ctx.reply(`شكراً على رسالتك. الفريق بيتواصل معك خلال ساعات 🌀\nأو راسلنا مباشرة: aitrendova@gmail.com`)
    notifyOwner(`⚠️ AI error: ${e.message}\nchat: ${chatId} @${ctx.from.username || '—'}`)
  }
})

// ========== GROUP EVENTS ==========
bot.on('new_chat_members', (ctx) => {
  const me = ctx.botInfo || {}
  if (ctx.message.new_chat_members.some(m => m.username === me.username)) {
    ctx.reply(`🌀 Trendova ops bot مربوط.\nchat_id: \`${ctx.chat.id}\`\n\nاحفظ هذا الرقم في env var OPS_CHAT_ID.`, { parse_mode: 'Markdown' })
  }
})

bot.launch()
console.log(`🌀 Trendova bot running (AI: ${HAS_AI ? 'ON' : 'OFF'})`)
notifyOps(`🚀 Bot started (AI: ${HAS_AI ? 'ON' : 'OFF'})`)

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
