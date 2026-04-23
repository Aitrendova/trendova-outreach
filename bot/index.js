// Trendova Telegram bot — lightweight, handles lead intake + demo requests
// Env required:
//   TELEGRAM_BOT_TOKEN  - from @BotFather
//   ANTHROPIC_API_KEY   - Claude API
//   OWNER_CHAT_ID       - Ibrahim's Telegram chat ID (optional, for hand-off)
import { Telegraf, Markup } from 'telegraf'
import Anthropic from '@anthropic-ai/sdk'

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)
const claude = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
const OWNER = process.env.OWNER_CHAT_ID

// In-memory session store (Railway restarts wipe this — OK for MVP)
const sessions = new Map()

const SYSTEM_PROMPT = `أنت Trendova — وكيل خدمة عملاء عربي سعودي لشركة تبيع بوتات AI.
مهمتك:
1. ترحب بالعميل بود واحترافية
2. تفهم نشاطه وتحدياته في 3-5 رسائل
3. تقترح الخطة المناسبة (Tier 1: 299 ر/شهر + 1,500 إعداد / Tier 2: 499 + 2,500 / Tier 3: 999 + 5,000)
4. لو العميل جدي، تطلب منه إيميل/واتساب وتبشره إن فريق Trendova بيتواصل معه
5. تستعمل emojis بذكاء، وتكتب باللهجة السعودية المهذّبة

مهم جداً: لا تكذب، لا تعد بمواعيد محددة، لا تقطع وعود. لو سؤال خارج نطاقك (تقني عميق مثلاً) قل إنك تحوّله للفريق.`

bot.start(async (ctx) => {
  sessions.set(ctx.chat.id, { messages: [] })
  await ctx.reply(
    `أهلاً بك في Trendova 🌀

أنا هنا لأساعدك تأتمت أعمالك بالذكاء الاصطناعي.

إيش نوع نشاطك؟ وإيش الشي اللي ياخذ وقتك أكثر ومحتاج نأتمته؟`,
    Markup.keyboard([
      ['🛒 متجر إلكتروني', '🏥 عيادة / مركز'],
      ['🍔 مطعم', '💼 خدمات مهنية'],
      ['📞 شي ثاني'],
    ]).resize().oneTime()
  )
})

bot.command('demo', (ctx) =>
  ctx.reply(`شوف demo مباشر: https://web-production-e0b22.up.railway.app`)
)
bot.command('pricing', (ctx) =>
  ctx.replyWithMarkdown(`*الخطط:*

🟢 *Tier 1 — بوت خدمة عملاء*
  - إعداد: 1,500 ريال (مرة)
  - اشتراك: 299 ريال/شهر

🟡 *Tier 2 — أتمتة محتوى*
  - إعداد: 2,500 ريال
  - اشتراك: 499 ريال/شهر

🔵 *Tier 3 — مساعد AI شامل*
  - إعداد: 5,000 ريال
  - اشتراك: 999 ريال/شهر

🎁 *عرض أول 3 عملاء:* إعداد مجاني + شهر بـ 99 ريال`)
)
bot.command('contact', async (ctx) => {
  await ctx.reply(`راسلنا مباشرة:
📧 aitrendova@gmail.com
📱 واتساب: +966560885100
𝕏 تويتر: @AiTrendova`)
  if (OWNER) {
    await bot.telegram.sendMessage(
      OWNER,
      `🔔 عميل طلب contact:\n@${ctx.from.username || '—'} (${ctx.from.first_name})`
    ).catch(() => {})
  }
})

bot.on('text', async (ctx) => {
  const chatId = ctx.chat.id
  if (ctx.message.text.startsWith('/')) return
  let session = sessions.get(chatId) || { messages: [] }
  session.messages.push({ role: 'user', content: ctx.message.text })
  if (session.messages.length > 20) session.messages = session.messages.slice(-20)

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

    // Notify owner on every 3rd message (possible qualified lead)
    if (OWNER && session.messages.length === 6) {
      await bot.telegram.sendMessage(
        OWNER,
        `🔥 lead دخل في محادثة حقيقية: @${ctx.from.username || '—'} (chat ${chatId})`
      ).catch(() => {})
    }
  } catch (e) {
    console.error('AI error:', e.message)
    await ctx.reply('صار خطأ تقني مؤقت، جرّب مرة ثانية أو راسلنا على aitrendova@gmail.com')
  }
})

bot.launch()
console.log('🌀 Trendova bot running')

// Graceful shutdown
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
