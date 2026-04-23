# Telegram Bot Setup — خطوة واحدة منك

**أنا ما أقدر أنشئ bot بدون تفاعل منك مع @BotFather.**
لكن الخطوة بسيطة جداً — دقيقة واحدة.

## الخطوات (على جوالك أو Telegram Web):

1. افتح Telegram
2. ابحث عن: **@BotFather**
3. اكتب: `/newbot`
4. BotFather يسأل عن اسم: اكتب **`Trendova`**
5. BotFather يسأل عن username: اكتب **`trendova_ai_bot`** (لو مأخوذ، جرّب `trendova_bot` أو `trendovahelp_bot`)
6. BotFather يعطيك **HTTP API token** (شكله: `1234567:ABCdefGhIjKlMnOpQrStUvWxYz`)
7. **انسخ الـ token وابعثه لي هنا**

## بعد ما أخذ الـ token، أسوّي تلقائياً:

- `/setdescription` — وصف البوت
- `/setabouttext` — نبذة قصيرة
- `/setuserpic` — صورة Trendova الأرجوانية
- `/setcommands` — قائمة الأوامر (`/demo`, `/pricing`, `/contact`)
- أربطه بـ webhook على Railway (أنا أكتب الكود)
- يبدأ يرد على العملاء تلقائياً

## الأوامر اللي راح يسوّيها البوت:

- `/start` — ترحيب ومعلومات عن Trendova
- `/demo` — يطلب تفاصيل العميل ويولد demo
- `/pricing` — يعرض الخطط
- `/contact` — يحوّل العميل لـ @wd_79 لو جدّي

**هل تبي أضع نص جاهز تنسخه وتعطيه لـ BotFather؟**
