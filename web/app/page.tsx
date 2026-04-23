export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-slate-100 overflow-x-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold gradient-text">Trendova 🌀</span>
          <a
            href="mailto:aitrendova@gmail.com?subject=طلب%20demo"
            className="text-sm px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors text-white font-medium"
          >
            احجز demo
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-32 px-6 text-center overflow-hidden">
        {/* background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 translate-x-20 w-[400px] h-[300px] bg-purple-600/15 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            متاح الآن — سلّم خلال 3 أيام
          </div>

          <h1 className="text-4xl sm:text-6xl font-black leading-tight mb-6 text-white">
            وكيل ذكاء اصطناعي{' '}
            <span className="gradient-text">لأعمالك</span>
          </h1>

          <p className="text-lg sm:text-2xl text-slate-400 mb-10 leading-relaxed">
            يرد على عملائك، يكتب محتواك،{' '}
            <br className="hidden sm:block" />
            ويشتغل <span className="text-white font-semibold">24/7</span> — بالعربي
          </p>

          <a
            href="mailto:aitrendova@gmail.com?subject=طلب%20demo"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-lg font-bold text-white
              bg-gradient-to-l from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500
              shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 hover:shadow-indigo-500/40"
          >
            🚀 احجز demo مجاني
          </a>

          <p className="mt-4 text-slate-500 text-sm">بدون التزام · رد خلال ساعات</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-[#0d0d16]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-4 text-white">
            وش نسوّيه لك؟
          </h2>
          <p className="text-center text-slate-400 mb-14">3 خدمات تحوّل طريقة شغلك</p>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                emoji: '💬',
                title: 'بوت خدمة عملاء',
                desc: 'بوت واتساب/تلقرام يرد على عملائك تلقائياً 24/7 — بدون ما تتعب أنت',
                color: 'from-indigo-600/20 to-indigo-600/5',
                border: 'border-indigo-500/20',
              },
              {
                emoji: '✍️',
                title: 'أتمتة المحتوى',
                desc: 'نشر تلقائي على تويتر وتيكتوك بصوتك وأسلوبك — بدون جهد يومي',
                color: 'from-purple-600/20 to-purple-600/5',
                border: 'border-purple-500/20',
              },
              {
                emoji: '🤖',
                title: 'مساعد AI شامل',
                desc: 'إيميل + تقارير + محتوى + رد على عملاء — Trendova كامل لعملك',
                color: 'from-pink-600/20 to-pink-600/5',
                border: 'border-pink-500/20',
              },
            ].map((f) => (
              <div
                key={f.title}
                className={`rounded-2xl p-6 bg-gradient-to-b ${f.color} border ${f.border} hover:scale-[1.02] transition-transform`}
              >
                <div className="text-4xl mb-4">{f.emoji}</div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-4 text-white">كيف نشتغل؟</h2>
          <p className="text-center text-slate-400 mb-14">4 خطوات بسيطة</p>

          <div className="grid sm:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'تواصل معنا', desc: 'راسلنا على الإيميل أو السوشيال' },
              { step: '02', title: 'نفهم احتياجك', desc: 'جلسة قصيرة نفهم فيها شغلك وأهدافك' },
              { step: '03', title: 'نسلّم خلال 3 أيام', desc: 'نبني الحل ونسلّمه جاهز للاستخدام' },
              { step: '04', title: 'متابعة شهرية', desc: 'نتابع معك ونطور الحل باستمرار' },
            ].map((s) => (
              <div key={s.step} className="relative text-center group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-black text-sm mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {s.step}
                </div>
                <h3 className="font-bold text-white mb-1 text-sm">{s.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 bg-[#0d0d16]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-4 text-white">الأسعار</h2>
          <p className="text-center text-slate-400 mb-14">شفافية كاملة — بدون مفاجآت</p>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                name: 'بوت خدمة عملاء',
                emoji: '💬',
                setup: '1,500',
                monthly: '299',
                features: ['بوت واتساب / تلقرام', 'ردود تلقائية 24/7', 'تسليم خلال 3 أيام', 'دعم شهري'],
                popular: false,
                color: 'border-indigo-500/30',
                glow: 'shadow-indigo-500/10',
              },
              {
                name: 'أتمتة المحتوى',
                emoji: '✍️',
                setup: '2,500',
                monthly: '499',
                features: ['نشر تلقائي تويتر/تيكتوك', 'صوت مخصص (ElevenLabs)', 'جدولة ذكية', 'تقارير أسبوعية'],
                popular: true,
                color: 'border-purple-500/50',
                glow: 'shadow-purple-500/20',
              },
              {
                name: 'مساعد AI شامل',
                emoji: '🤖',
                setup: '5,000',
                monthly: '999',
                features: ['كل مميزات Tier 1 & 2', 'إدارة إيميل', 'تقارير يومية/أسبوعية', 'أولوية في الدعم'],
                popular: false,
                color: 'border-pink-500/30',
                glow: 'shadow-pink-500/10',
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl p-6 border ${tier.color} bg-white/[0.03] shadow-lg ${tier.glow} ${tier.popular ? 'scale-[1.03]' : ''} hover:bg-white/[0.05] transition-colors`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-l from-indigo-600 to-purple-600 text-white text-xs font-bold">
                    الأكثر طلباً
                  </div>
                )}
                <div className="text-3xl mb-3">{tier.emoji}</div>
                <h3 className="text-lg font-bold text-white mb-4">{tier.name}</h3>

                <div className="mb-1">
                  <span className="text-slate-400 text-sm">إعداد: </span>
                  <span className="text-2xl font-black text-white">{tier.setup}</span>
                  <span className="text-slate-400 text-sm"> ريال</span>
                </div>
                <div className="mb-6">
                  <span className="text-slate-400 text-sm">شهرياً: </span>
                  <span className="text-xl font-bold gradient-text">{tier.monthly}</span>
                  <span className="text-slate-400 text-sm"> ريال</span>
                </div>

                <ul className="space-y-2 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="text-indigo-400 text-xs">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="mailto:aitrendova@gmail.com?subject=طلب%20demo"
                  className={`block text-center py-3 rounded-xl font-bold text-sm transition-all
                    ${tier.popular
                      ? 'bg-gradient-to-l from-indigo-600 to-purple-600 text-white hover:opacity-90'
                      : 'border border-white/10 text-slate-300 hover:bg-white/5'
                    }`}
                >
                  ابدأ الآن
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-600/15 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-4">
            جاهز تبدأ؟ 🚀
          </h2>
          <p className="text-slate-400 mb-4">
            راسلنا وخلال ساعات نرسلك خطة مخصصة لعملك
          </p>
          <p className="text-slate-500 text-sm mb-8">
            💳 طرق الدفع: تحويل بنكي · STCPay · PayPal · وغيرها — حسب الأنسب لك
          </p>
          <a
            href="mailto:aitrendova@gmail.com?subject=طلب%20demo"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-lg font-bold text-white
              bg-gradient-to-l from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500
              shadow-lg shadow-indigo-500/25 transition-all hover:scale-105"
          >
            احجز demo مجاني
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xl font-bold gradient-text">Trendova 🌀</span>

          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="mailto:aitrendova@gmail.com" className="hover:text-white transition-colors flex items-center gap-1.5">
              <span>📧</span> aitrendova@gmail.com
            </a>
            <a href="https://x.com/Aitrendova" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
              <span>𝕏</span> @Aitrendova
            </a>
            <a href="https://tiktok.com/@aitrendova" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
              <span>🎵</span> @aitrendova
            </a>
          </div>

          <p className="text-slate-600 text-xs">© 2026 Trendova · جميع الحقوق محفوظة</p>
        </div>
      </footer>

    </main>
  )
}
