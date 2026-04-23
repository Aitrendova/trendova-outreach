import Link from 'next/link'

const FAQS = [
  {
    q: 'كم ياخذ إعداد البوت؟',
    a: 'عادة ٣ أيام عمل من لحظة تسليم المعلومات. أحياناً أسرع لو البزنس بسيط.',
  },
  {
    q: 'هل البوت يرد بصوت طبيعي سعودي/عربي؟',
    a: 'نعم. نستخدم Claude مع prompts مخصصة للهجتك، وبالإمكان نضيف صوت ElevenLabs عربي للرسائل الصوتية.',
  },
  {
    q: 'إيش لو العميل سأل سؤال ما يعرفه البوت؟',
    a: 'البوت يحوّل المحادثة تلقائياً للإنسان (أنت أو فريقك) على الواتساب/تلقرام. ما نتركه يرد رد غلط.',
  },
  {
    q: 'هل يقدر يأخذ طلبات أو حجوزات؟',
    a: 'نعم في خطة Tier 2 وما فوق. نربطه بـ Google Sheets / Notion / أي CRM تستخدمه.',
  },
  {
    q: 'طرق الدفع؟',
    a: 'تحويل بنكي، STCPay، PayPal، أو أي طريقة تناسبك. نتفق مع كل عميل على الأنسب له.',
  },
  {
    q: 'هل فيه ضمان؟',
    a: 'نعم — استرداد كامل خلال ١٤ يوم من أول دفعة إذا ما رضيت عن النتيجة.',
  },
  {
    q: 'هل تشتغلون مع عملاء خارج السعودية؟',
    a: 'نعم، نشتغل مع الخليج والعالم العربي. الدفع بالـ PayPal للدوليين.',
  },
  {
    q: 'ليش ما أستخدم ChatGPT مباشرة؟',
    a: 'ChatGPT عام. Trendova مخصص لبزنسك بالكامل: يعرف أسعارك، منتجاتك، لهجتك، ومتى يحول للإنسان. وأنت تحتاج ترتيب وصيانة، نحن نسويها بدلاً عنك.',
  },
]

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-[#0f0a1f] to-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-white/5 py-6 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text">Trendova 🌀</Link>
          <Link
            href="/"
            className="text-sm text-slate-400 hover:text-white transition-colors"
          >
            ← العودة للرئيسية
          </Link>
        </div>
      </header>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl sm:text-5xl font-black mb-4">الأسئلة الشائعة</h1>
        <p className="text-slate-400 mb-12">
          كل اللي تحتاج تعرفه قبل ما تبدأ مع Trendova
        </p>

        <div className="space-y-5">
          {FAQS.map((f, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition-colors"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-3">
                <span className="font-bold text-lg">{f.q}</span>
                <span className="text-purple-400 text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-slate-300 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-white/10 text-center">
          <h2 className="text-2xl font-bold mb-3">سؤالك مو هنا؟</h2>
          <p className="text-slate-400 mb-6">راسلنا مباشرة ونرد خلال ساعات</p>
          <a
            href="mailto:aitrendova@gmail.com?subject=سؤال"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-gradient-to-l from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all"
          >
            📧 اسألنا
          </a>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8 px-6 mt-10">
        <div className="max-w-5xl mx-auto text-center text-slate-500 text-sm">
          © 2026 Trendova · جميع الحقوق محفوظة
        </div>
      </footer>
    </main>
  )
}
