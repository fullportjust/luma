# Languages

The site has a language switcher in the top menu: English, ไทย (Thai), 中文 (Chinese), 日本語 (Japanese).
The visitor's choice is remembered as they move between pages.

## How it works
All translatable text lives in ONE file: `i18n.js`.
Each phrase has a key and a translation per language, e.g.:

    "home.book": { en:"Book a Room", th:"จองห้อง", zh:"预订包间", ja:"予約する" },

## To fix or improve a translation
Open `i18n.js`, find the phrase, and edit the text for that language.
(The translations were done carefully but a native speaker may want to polish a few.)

## To add another language
1. Add it to the LANGS line near the top, e.g. add Korean:
       const LANGS = { en:"EN", th:"ไทย", zh:"中文", ja:"日本語", ko:"한국어" };
2. In each entry, add the new code with its translation:
       "home.book": { en:"Book a Room", th:"จองห้อง", zh:"预订包间", ja:"予約する", ko:"예약하기" },
   (If you skip a key for a language, it falls back to English automatically.)

## To remove a language
Delete it from the LANGS line. You can leave the translations in place.

## Note on the menu page
Prices, room sizes, and times stay as-is (numbers/฿) in every language — only the
section headings and descriptions translate. Massage course names like "Nuru" are
left untranslated on purpose since they're used as-is. Adjust in i18n.js if you prefer.
