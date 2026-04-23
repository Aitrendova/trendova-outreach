import Link from 'next/link'

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-[#0f0a1f] to-slate-950 text-white flex items-center justify-center p-6">
      <div className="max-w-xl w-full text-center">
        <div className="text-7xl mb-6">🌀</div>
        <h1 className="text-4xl sm:text-5xl font-black mb-4">وصلنا طلبك</h1>
        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
          شكراً لثقتك. نرد عليك خلال ساعات بخطة مخصصة لعملك،
          <br />
          مع demo سريع يعرض لك كيف Trendova يشتغل.
        </p>

        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8 text-right">
          <h3 className="font-bold mb-3">في الوقت الحالي تقدر:</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>📖 تقرأ <Link href="/faq" className="text-purple-400 hover:text-purple-300">الأسئلة الشائعة</Link></li>
            <li>𝕏 تتابعنا على <a href="https://x.com/AiTrendova" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">@AiTrendova</a></li>
            <li>🎵 نشوفك على TikTok <a href="https://tiktok.com/@aitrendova" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">@aitrendova</a></li>
          </ul>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
        >
          ← العودة للرئيسية
        </Link>
      </div>
    </main>
  )
}
