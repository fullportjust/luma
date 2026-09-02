/* ===================================================================
   LANGUAGE / TRANSLATIONS for Lumi Nuru
   Add or edit languages here. Each key maps to the text shown.
   To translate a phrase, find its key and edit the text per language.
   =================================================================== */

const LANGS = { en:"EN", th:"ไทย", zh:"中文", ja:"日本語", ko:"한국어" };

const I18N = {
  // ---- nav ----
  "nav.home":   { en:"Home",  th:"หน้าแรก", zh:"首页", ja:"ホーム", ko:"홈" },
  "nav.menu":   { en:"Menu",  th:"เมนู",    zh:"菜单", ja:"メニュー", ko:"메뉴" },
  "nav.team":   { en:"Team",  th:"ทีมงาน",  zh:"团队", ja:"スタッフ", ko:"팀" },
  "nav.book":   { en:"Book",  th:"จอง",      zh:"预订", ja:"予約", ko:"예약" },
  "nav.language": { en:"Language", th:"ภาษา", zh:"语言", ja:"言語", ko:"언어" },

  // ---- shared / footer ----
  "foot.tag":   { en:"Private KTV & massage lounge — karaoke rooms, drink buffets and a full spa menu.",
                  th:"คาราโอเกะส่วนตัว & เลานจ์นวด — ห้องคาราโอเกะและเมนูสปาครบครัน",
                  zh:"私人KTV与按摩会所 — 卡拉OK包间和全套水疗菜单。",
                  ja:"プライベートKTV＆マッサージラウンジ — カラオケルーム、ドリンクビュッフェ、フルスパメニュー。", ko:"프라이빗 KTV & 마사지 라운지 — 노래방, 음료 뷔페, 풀 스파 메뉴." },
  "foot.open":  { en:"Open daily · 11am – 3am", th:"เปิดทุกวัน · 11:00 – 03:00", zh:"每日营业 · 上午11点至凌晨3点", ja:"年中無休 · 11時〜翌3時", ko:"매일 영업 · 오전 11시 ~ 새벽 3시" },
  "foot.visit": { en:"Visit", th:"ที่ตั้ง", zh:"地址", ja:"アクセス", ko:"오시는 길" },
  "foot.pages": { en:"Pages", th:"หน้าเพจ", zh:"页面", ja:"ページ", ko:"페이지" },
  "foot.legal": { en:"Strictly 20+. Please drink responsibly. Prices in Thai Baht (฿) and subject to change.",
                  th:"เฉพาะอายุ 20 ปีขึ้นไป ดื่มอย่างมีความรับผิดชอบ ราคาเป็นเงินบาท (฿) อาจเปลี่ยนแปลงได้",
                  zh:"仅限20岁以上。请理性饮酒。价格以泰铢(฿)计，可能变动。",
                  ja:"20歳以上限定。飲酒は適量を。価格はタイバーツ(฿)、変更の場合あり。", ko:"만 20세 이상만 이용 가능. 책임 있는 음주를 부탁드립니다. 가격은 태국 바트(฿) 기준이며 변경될 수 있습니다." },

  // ---- home ----
  "home.eyebrow": { en:"Karaoke · Massage · Nightlife", th:"คาราโอเกะ · นวด · ไนต์ไลฟ์", zh:"卡拉OK · 按摩 · 夜生活", ja:"カラオケ · マッサージ · ナイトライフ", ko:"노래방 · 마사지 · 나이트라이프" },
  "home.hero":    { en:"Private KTV rooms, free-flow drinks, and a full spa menu.",
                    th:"ห้องคาราโอเกะส่วนตัว เครื่องดื่มไม่อั้น และเมนูสปาครบครัน",
                    zh:"私人KTV包间、无限畅饮和全套水疗菜单。",
                    ja:"プライベートKTVルーム、フリードリンク、フルスパメニュー。", ko:"프라이빗 KTV 룸, 무제한 음료, 풀 스파 메뉴." },
  "home.book":    { en:"Book a Room", th:"จองห้อง", zh:"预订包间", ja:"予約する", ko:"룸 예약" },
  "home.viewmenu":{ en:"View Menu", th:"ดูเมนู", zh:"查看菜单", ja:"メニューを見る", ko:"메뉴 보기" },
  "home.offer":   { en:"What we offer", th:"บริการของเรา", zh:"我们提供", ja:"サービス", ko:"서비스 안내" },
  "home.worlds":  { en:"Two worlds, one address", th:"สองโลก ในที่เดียว", zh:"两个世界，一个地址", ja:"二つの世界が一つに", ko:"두 개의 세계, 하나의 공간" },
  "home.ktv":     { en:"Private KTV", th:"คาราโอเกะส่วนตัว", zh:"私人KTV", ja:"プライベートKTV", ko:"프라이빗 KTV" },
  "home.ktv.d":   { en:"Soundproof karaoke suites for 4–12 guests.", th:"ห้องคาราโอเกะเก็บเสียง สำหรับ 4–12 ท่าน", zh:"隔音卡拉OK套房，可容纳4–12人。", ja:"4〜12名様用の防音カラオケスイート。", ko:"4~12인용 방음 노래방 룸." },
  "home.drinks":  { en:"Drink Buffet", th:"บุฟเฟ่ต์เครื่องดื่ม", zh:"酒水自助", ja:"ドリンクビュッフェ", ko:"음료 뷔페" },
  "home.drinks.d":{ en:"Free-flow drinks, mixers included — plus beer & soju sets.", th:"เครื่องดื่มไม่อั้น รวมมิกเซอร์ — พร้อมเซ็ตเบียร์และโซจู", zh:"无限畅饮，含调酒 — 另有啤酒和烧酒套餐。", ja:"ミキサー付き飲み放題 — ビール・ソジュセットも。", ko:"믹서 포함 무제한 음료 — 맥주 & 소주 세트도 준비." },
  "home.spa":     { en:"Massage & Spa", th:"นวด & สปา", zh:"按摩与水疗", ja:"マッサージ＆スパ", ko:"마사지 & 스파" },
  "home.spa.d":   { en:"Thai, oil, soapy & Nuru courses in private rooms.", th:"นวดไทย น้ำมัน สบู่ & นูรุ ในห้องส่วนตัว", zh:"私人房间内的泰式、精油、泡泡及Nuru课程。", ja:"個室でのタイ式・オイル・ソープ・ヌルコース。", ko:"프라이빗 룸에서 즐기는 타이·오일·소피·누루 코스." },
  "home.from":    { en:"from", th:"เริ่มต้น", zh:"起", ja:"〜", ko:"부터" },
  "home.combo":   { en:"KTV + Nuru Combo", th:"เซ็ตคาราโอเกะ + นูรุ", zh:"KTV + Nuru 套餐", ja:"KTV + ヌル セット", ko:"KTV + 누루 세트" },
  "home.combo.d": { en:"1 hr karaoke + 1 hr Nuru massage —", th:"คาราโอเกะ 1 ชม. + นวดนูรุ 1 ชม. —", zh:"1小时卡拉OK + 1小时Nuru按摩 —", ja:"カラオケ1時間 + ヌルマッサージ1時間 —", ko:"노래방 1시간 + 누루 마사지 1시간 —" },
  "home.bestvalue":{ en:"Best Value", th:"คุ้มที่สุด", zh:"超值", ja:"お得", ko:"최고의 가치" },
  "home.reservecombo":{ en:"Reserve the combo", th:"จองเซ็ตนี้", zh:"预订套餐", ja:"セットを予約", ko:"세트 예약" },
  "home.firsttime.sub": { en:"Message us to book and see line up",
                          th:"ทักมาจองและดูรายชื่อพนักงาน",
                          zh:"消息我们预订并查看阵容",
                          ja:"ご予約やラインナップはメッセージで",
                          ko:"메시지로 예약하고 라인업 확인하세요" },
  "home.firsttime":  { en:"🎉 Free KTV room for 1 hour on your first visit!",
                        th:"🎉 รับฟรีห้องคาราโอเกะ 1 ชั่วโมง สำหรับการมาครั้งแรก!",
                        zh:"🎉 首次到店免费赠送 KTV 包间 1 小时！",
                        ja:"🎉 初回のお客様は KTV ルーム 1 時間無料！",
                        ko:"🎉 첫 방문 고객님, KTV 룸 1시간 무료!" },

  // ---- menu ----
  "menu.eyebrow": { en:"All prices in ฿ · service charge & VAT included", th:"ราคาทั้งหมดเป็นบาท · รวมเซอร์วิสชาร์จและภาษีแล้ว", zh:"所有价格以฿计 · 已含服务费和增值税", ja:"全価格฿表示 · サービス料・税込", ko:"모든 가격 ฿ 기준 · 봉사료 및 VAT 포함" },
  "menu.title":   { en:"Menu & Pricing", th:"เมนู & ราคา", zh:"菜单与价格", ja:"メニュー＆料金", ko:"메뉴 & 가격" },
  "menu.rooms":   { en:"KTV Rooms", th:"ห้องคาราโอเกะ", zh:"KTV包间", ja:"KTVルーム", ko:"KTV 룸" },
  "menu.drinkbuffet":{ en:"Drink Buffet", th:"บุฟเฟ่ต์เครื่องดื่ม", zh:"酒水自助", ja:"ドリンクビュッフェ", ko:"음료 뷔페" },
  "menu.drinknote":{ en:"Free refill on all buffet drinks — mixers included.", th:"เติมเครื่องดื่มบุฟเฟ่ต์ได้ไม่อั้น — รวมมิกเซอร์", zh:"自助酒水免费续杯 — 含调酒。", ja:"ビュッフェドリンクおかわり自由 — ミキサー込み。", ko:"모든 뷔페 음료 무한 리필 — 믹서 포함." },
  "menu.bottles": { en:"Bottles, Beer & Soju", th:"ขวด เบียร์ & โซจู", zh:"瓶装酒、啤酒和烧酒", ja:"ボトル・ビール・ソジュ", ko:"양주, 맥주 & 소주" },
  "menu.shots":   { en:"Shots", th:"ช็อต", zh:"烈酒杯", ja:"ショット", ko:"샷" },
  "menu.massage": { en:"Massage & Spa", th:"นวด & สปา", zh:"按摩与水疗", ja:"マッサージ＆スパ", ko:"마사지 & 스파" },
  "menu.special": { en:"Special Course", th:"คอร์สพิเศษ", zh:"特别课程", ja:"スペシャルコース", ko:"스페셜 코스" },
  "menu.special.sub":{ en:"· VIP room", th:"· ห้อง VIP", zh:"· VIP房", ja:"· VIPルーム", ko:"· VIP 룸" },
  "menu.longtime":{ en:"Long Time / Take Out", th:"ลองไทม์ / เทคเอาท์", zh:"长时间 / 外出", ja:"ロングタイム / テイクアウト", ko:"롱타임 / 테이크아웃" },
  "menu.promos":  { en:"Promotions", th:"โปรโมชั่น", zh:"优惠", ja:"プロモーション", ko:"프로모션" },
  "menu.bookbtn": { en:"Book a Room", th:"จองห้อง", zh:"预订包间", ja:"予約する", ko:"룸 예약" },

  // ---- team ----
  "team.eyebrow": { en:"Lumi Nuru", th:"Lumi Nuru", zh:"Lumi Nuru", ja:"Lumi Nuru", ko:"Lumi Nuru" },
  "team.title":   { en:"Our Team", th:"ทีมงานของเรา", zh:"我们的团队", ja:"スタッフ紹介", ko:"우리 팀" },
  "team.sub":     { en:"Meet the team behind Lumi Nuru.", th:"พบกับทีมงานของ Lumi Nuru", zh:"认识 Lumi Nuru 的团队。", ja:"Lumi Nuru のスタッフをご紹介します。", ko:"Lumi Nuru의 팀을 소개합니다." },

  // ---- book ----
  "book.eyebrow": { en:"Reservations", th:"การจอง", zh:"预订", ja:"ご予約", ko:"예약" },
  "book.title":   { en:"Book a Room", th:"จองห้อง", zh:"预订包间", ja:"予約する", ko:"룸 예약" },
  "book.intro":   { en:"Choose what you'd like and when. You'll get a reference number instantly — we confirm by phone or LINE. No payment online.",
                    th:"เลือกบริการและเวลาที่ต้องการ คุณจะได้รับหมายเลขอ้างอิงทันที — เรายืนยันทางโทรศัพท์หรือ LINE ไม่มีการชำระเงินออนไลน์",
                    zh:"选择您想要的服务和时间。您会立即获得预订编号 — 我们将通过电话或LINE确认。无需在线付款。",
                    ja:"ご希望の内容と日時をお選びください。予約番号がすぐに発行されます — 電話またはLINEで確認します。オンライン決済はありません。", ko:"원하시는 서비스와 시간을 선택하세요. 예약 번호가 즉시 발급됩니다 — 전화 또는 LINE으로 확인해 드립니다. 온라인 결제는 없습니다." },
  "book.q1":      { en:"1 · What are you here for?", th:"1 · คุณสนใจบริการใด?", zh:"1 · 您想要什么？", ja:"1 · ご希望のサービスは？", ko:"1 · 어떤 서비스를 원하시나요?" },
  "book.q2":      { en:"2 · When?", th:"2 · เมื่อไหร่?", zh:"2 · 何时？", ja:"2 · 日時は？", ko:"2 · 언제 방문하시나요?" },
  "book.q3":      { en:"3 · How many guests?", th:"3 · กี่ท่าน?", zh:"3 · 几位客人？", ja:"3 · 何名様？", ko:"3 · 몇 분이신가요?" },
  "book.q4":      { en:"4 · Your name", th:"4 · ชื่อของคุณ", zh:"4 · 您的姓名", ja:"4 · お名前", ko:"4 · 고객 성함" },
  "book.svc.ktv": { en:"🎤 Private KTV", th:"🎤 คาราโอเกะส่วนตัว", zh:"🎤 私人KTV", ja:"🎤 プライベートKTV", ko:"🎤 프라이빗 KTV" },
  "book.svc.massage":{ en:"💆 Massage & Spa", th:"💆 นวด & สปา", zh:"💆 按摩与水疗", ja:"💆 マッサージ＆スパ", ko:"💆 마사지 & 스파" },
  "book.svc.combo":{ en:"✨ KTV + Massage", th:"✨ คาราโอเกะ + นวด", zh:"✨ KTV + 按摩", ja:"✨ KTV + マッサージ", ko:"✨ KTV + 마사지" },
  "book.summary": { en:"Your reservation", th:"การจองของคุณ", zh:"您的预订", ja:"ご予約内容", ko:"예약 내용" },
  "book.submit":  { en:"Request reservation", th:"ส่งคำขอจอง", zh:"提交预订", ja:"予約をリクエスト", ko:"예약 요청" },
  "book.note":    { en:"Strictly 20+. We confirm availability before anything is final.", th:"เฉพาะอายุ 20 ปีขึ้นไป เรายืนยันคิวว่างก่อนการจองจะสมบูรณ์", zh:"仅限20岁以上。我们会先确认可用性。", ja:"20歳以上限定。確定前に空き状況を確認します。", ko:"만 20세 이상만 이용 가능. 확정 전 예약 가능 여부를 확인합니다." },
  "book.received":{ en:"✓ Request received", th:"✓ ได้รับคำขอแล้ว", zh:"✓ 已收到请求", ja:"✓ リクエストを受け付けました", ko:"✓ 요청이 접수되었습니다" },
  "book.ref":     { en:"Reference", th:"หมายเลขอ้างอิง", zh:"预订编号", ja:"予約番号", ko:"예약 번호" },
  "book.confirm.intro":{ en:"To lock it in, send your reference to us — details are pre-filled.", th:"เพื่อยืนยัน ส่งหมายเลขอ้างอิงมาหาเรา — กรอกรายละเอียดไว้ให้แล้ว", zh:"如需确认，请将编号发送给我们 — 信息已预填。", ja:"確定するには予約番号をお送りください — 内容は入力済みです。", ko:"확정하시려면 예약 번호를 보내주세요 — 내용은 미리 입력되어 있습니다." },
  "book.confirm.line":{ en:"Confirm via LINE", th:"ยืนยันผ่าน LINE", zh:"通过LINE确认", ja:"LINEで確認", ko:"LINE으로 확인" },
  "book.confirm.call":{ en:"Call to confirm", th:"โทรเพื่อยืนยัน", zh:"致电确认", ja:"電話で確認", ko:"전화로 확인" },
  "book.roomsize": { en:"Room size", th:"ขนาดห้อง", zh:"房间大小", ja:"ルームサイズ", ko:"룸 사이즈" },
  "book.room.small": { en:"Small Room · 4–6 persons · ฿800 / 2hr", th:"ห้องเล็ก · 4–6 ท่าน · ฿800 / 2 ชม.", zh:"小包间 · 4–6人 · ฿800/2小时", ja:"小ルーム · 4–6名 · ฿800/2時間", ko:"소룸 · 4–6명 · ฿800/2시간" },
  "book.room.large": { en:"Large Room · 8–12 persons · ฿1,200 / 2hr", th:"ห้องใหญ่ · 8–12 ท่าน · ฿1,200 / 2 ชม.", zh:"大包间 · 8–12人 · ฿1,200/2小时", ja:"大ルーム · 8–12名 · ฿1,200/2時間", ko:"대룸 · 8–12명 · ฿1,200/2시간" },
  "book.course":   { en:"Course", th:"คอร์ส", zh:"课程", ja:"コース", ko:"코스" },
  "book.combo":    { en:"Combo package", th:"แพ็กเกจcombo", zh:"套餐", ja:"コンボパッケージ", ko:"콤보 패키지" },
  "book.time.placeholder": { en:"Select a time…", th:"เลือกเวลา…", zh:"选择时间…", ja:"時間を選択…", ko:"시간 선택…" },
  "book.guests.1": { en:"1 guest", th:"1 ท่าน", zh:"1位客人", ja:"1名様", ko:"1명" },
  "book.guests.2": { en:"2 guests", th:"2 ท่าน", zh:"2位客人", ja:"2名様", ko:"2명" },
  "book.guests.3": { en:"3 guests", th:"3 ท่าน", zh:"3位客人", ja:"3名様", ko:"3명" },
  "book.guests.4": { en:"4 guests", th:"4 ท่าน", zh:"4位客人", ja:"4名様", ko:"4명" },
  "book.guests.5": { en:"5 guests", th:"5 ท่าน", zh:"5位客人", ja:"5名様", ko:"5명" },
  "book.guests.6": { en:"6 guests", th:"6 ท่าน", zh:"6位客人", ja:"6名様", ko:"6명" },
  "book.guests.8": { en:"7–8 guests", th:"7–8 ท่าน", zh:"7–8位客人", ja:"7–8名様", ko:"7–8명" },
  "book.guests.12":{ en:"9–12 guests", th:"9–12 ท่าน", zh:"9–12位客人", ja:"9–12名様", ko:"9–12명" },
  "book.name.placeholder": { en:"Your name", th:"ชื่อของคุณ", zh:"您的姓名", ja:"お名前", ko:"고객 성함" },
  "book.notes.label": { en:"Special requests (optional)", th:"คำขอพิเศษ (ถ้ามี)", zh:"特殊要求（可选）", ja:"特別なご要望（任意）", ko:"특별 요청 (선택사항)" },
  "book.notes.placeholder": { en:"Preferred therapist, occasion, song list…", th:"หมอที่ต้องการ, โอกาส, รายชื่อเพลง…", zh:"指定技师、场合、歌单…", ja:"希望のセラピスト、 occasion、曲リスト…", ko:"원하는 테라피스트, 상황, 곡 목록…" },
  "book.date.placeholder": { en:"Pick a date…", th:"เลือกวันที่…", zh:"选择日期…", ja:"日付を選択…", ko:"날짜 선택…" },
  "nav.lineup": { en:"Lineup", th:"ตารางงาน", zh:"今日阵容", ja:"ラインナップ", ko:"오늘의 라인업" },
  "nav.faq":    { en:"FAQ",    th:"คำถามที่พบบ่อย", zh:"常见问题", ja:"よくある質問", ko:"자주 묻는 질문" },
  "foot.directions": { en:"Get directions →", th:"เส้นทาง →", zh:"获取路线 →", ja:"道順 →", ko:"길 찾기 →" },
  "foot.payment": { en:"Payment", th:"การชำระเงิน", zh:"付款方式", ja:"お支払い", ko:"결제 수단" },
  "foot.hours":   { en:"Hours", th:"เวลาทำการ", zh:"营业时间", ja:"営業時間", ko:"영업 시간" },
  "foot.connect": { en:"Connect", th:"ติดต่อ", zh:"联系我们", ja:"お問い合わせ", ko:"연락처" },
  // ---- contact buttons ----
  "btn.open.line": { en:"Open in LINE", th:"เปิดใน LINE", zh:"在LINE中打开", ja:"LINEで開く", ko:"LINE에서 열기" },
  "btn.open.whatsapp": { en:"Open in WhatsApp", th:"เปิดใน WhatsApp", zh:"在WhatsApp中打开", ja:"WhatsAppで開く", ko:"WhatsApp에서 열기" },
  "btn.message.line": { en:"Message on LINE", th:"แชทใน LINE", zh:"在LINE上联系", ja:"LINEで連絡", ko:"LINE으로 메시지" },
  "btn.call.now": { en:"Call Now", th:"โทรเลย", zh:"立即致电", ja:"今すぐ電話", ko:"지금 전화" },
  "btn.call": { en:"Call", th:"โทร", zh:"电话", ja:"電話", ko:"전화" },
  "btn.get.directions": { en:"Get Directions", th:"ดูแผนที่", zh:"获取路线", ja:"地図を見る", ko:"길찾기" },
  "btn.open.maps": { en:"Open in Google Maps", th:"เปิดใน Google Maps", zh:"在Google地图中打开", ja:"Googleマップで開く", ko:"Google 지도에서 열기" },
  "qr.scan.phone": { en:"Scan with your phone", th:"สแกนด้วยโทรศัพท์", zh:"用手机扫描", ja:"スマホでスキャン", ko:"핸드폰으로 스캔" },
  "qr.copy.lineid": { en:"📋 Copy LINE ID: @370nwatk", th:"📋 คัดลอก LINE ID: @370nwatk", zh:"📋 复制LINE ID: @370nwatk", ja:"📋 LINE IDをコピー: @370nwatk", ko:"📋 LINE ID 복사: @370nwatk" },
  "qr.copied": { en:"✅ Copied!", th:"✅ คัดลอกแล้ว!", zh:"✅ 已复制!", ja:"✅ コピーしました!", ko:"✅ 복사되었습니다!" },
  "qr.scan.pill": { en:"Scan to chat", th:"สแกนเพื่อแชท", zh:"扫码聊天", ja:"スキャンしてチャット", ko:"스캔하여 채팅" },
  "qr.scan.modal.sub": { en:"Scan to chat on your phone", th:"สแกนด้วยโทรศัพท์เพื่อแชท", zh:"用手机扫描聊天", ja:"スマホでスキャンしてチャット", ko:"핸드폰으로 스캔하여 채팅" },
  "home.qr.title": { en:"Contact Us Directly", th:"ติดต่อเราโดยตรง", zh:"直接联系我们", ja:"直接お問い合わせ", ko:"직접 연락하기" },
  "home.qr.scan": { en:"Scan to chat", th:"สแกนเพื่อแชท", zh:"扫码聊天", ja:"スキャンしてチャット", ko:"스캔하여 채팅" },
  "lineup.eyebrow": { en:"Updated Daily", th:"อัปเดตทุกวัน", zh:"每日更新", ja:"毎日更新", ko:"매일 업데이트" },
  "lineup.title":   { en:"Today's Lineup", th:"ตารางงานวันนี้", zh:"今日阵容", ja:"本日のラインナップ", ko:"오늘의 라인업" },
  "lineup.sub":     { en:"Book your preferred therapist in advance — availability is limited.",
                      th:"จองนักบำบัดที่คุณต้องการล่วงหน้า — มีจำนวนจำกัด",
                      zh:"提前预订您喜欢的理疗师 — 名额有限。",
                      ja:"ご希望のセラピストは事前予約がおすすめ — 定員あり。",
                      ko:"선호하는 테라피스트를 미리 예약하세요 — 자리가 한정되어 있습니다." },
  "home.promo.eyebrow": { en:"Experience Lumi", th:"สัมผัส Lumi", zh:"体验 Lumi", ja:"Lumi を体験", ko:"Lumi 체험" },
  "home.promo.title":   { en:"Step Inside", th:"ก้าวเข้ามา", zh:"走进来", ja:"中へ", ko:"들어와 보세요" },
  "home.promo.sub":     { en:"Neon lights, private suites, and unforgettable nights — see what awaits.", th:"ไฟนีออน ห้องส่วนตัว และค่ำคืนที่ไม่ลืม — ดูว่ามีอะไรรออยู่", zh:"霓虹灯、私人套房、难忘的夜晚 — 看看有什么在等你。", ja:"ネオンライト、プライベートスイート、忘れられない夜 — 待ち受けるものを見てください。", ko:"네온사인, 프라이빗 스위트, 잊을 수 없는 밤 — 무엇이 기다리는지 확인하세요." },
  "home.promo.cta":     { en:"Book Your Night", th:"จองคืนนี้", zh:"预订今晚", ja:"今夜を予約", ko:"Tonight 예약" },
  "home.findus.eyebrow": { en:"Find Us", th:"ที่ตั้ง", zh:"找到我们", ja:"アクセス", ko:"오시는 길" },
  "home.findus.title":   { en:"Visit Lumi Nuru", th:"มาเยี่ยมชม Lumi Nuru", zh:"拜访 Lumi Nuru", ja:"Lumi Nuru へのアクセス", ko:"Lumi Nuru 방문하기" },
  "home.findus.address": { en:"Address", th:"ที่อยู่", zh:"地址", ja:"住所", ko:"주소" },
  "home.findus.directions":{ en:"Get directions →", th:"เส้นทาง →", zh:"获取路线 →", ja:"道順を見る →", ko:"길 찾기 →" },
  "home.findus.hours":   { en:"Opening Hours", th:"เวลาทำการ", zh:"营业时间", ja:"営業時間", ko:"영업 시간" },
  "home.findus.hours.val":{ en:"Daily · 11:00 AM – 3:00 AM", th:"ทุกวัน · 11:00 – 03:00", zh:"每日 · 上午11点至凌晨3点", ja:"毎日 · 11時〜翌3時", ko:"매일 · 오전 11시 ~ 새벽 3시" },
  "home.findus.phone":   { en:"Phone / WhatsApp", th:"โทรศัพท์", zh:"电话", ja:"電話", ko:"전화" },
};

// auto-detect browser language on first visit, then respect saved choice
const LANG_MAP = { 'zh':'zh', 'zh-cn':'zh', 'zh-tw':'zh', 'zh-hans':'zh', 'zh-hant':'zh', 'ja':'ja', 'ko':'ko', 'th':'th', 'fr':'fr', 'de':'de', 'es':'es', 'pt':'pt' };
function detectBrowserLang(){
  const nav = (navigator.language || navigator.userLanguage || '').toLowerCase().replace('_','-');
  if(LANG_MAP[nav]) return LANG_MAP[nav];
  const base = nav.split('-')[0];
  if(LANG_MAP[base]) return LANG_MAP[base];
  return null;
}
function getLang(){
  const saved = localStorage.getItem('ln_lang');
  if(saved){
    // one-time fix: if saved as 'en' but browser is non-English, update
    if(saved === 'en'){
      const detected = detectBrowserLang();
      if(detected){
        localStorage.setItem('ln_lang', detected);
        return detected;
      }
    }
    return saved;
  }
  // first visit: detect from browser
  const detected = detectBrowserLang();
  if(detected){
    localStorage.setItem('ln_lang', detected);
    return detected;
  }
  return 'en';
}
function setLang(l){ localStorage.setItem('ln_lang', l); applyI18n(); }

function t(key){
  const e = I18N[key];
  if(!e) return key;
  return e[getLang()] || e.en || key;
}

// translate every element that has a data-i18n="key" attribute
function applyI18n(){
  const lang = getLang();
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  // re-render any dynamic content that listens for language changes
  if(typeof onLangChange === 'function') onLangChange();
  // reflect the active language in the switcher
  document.querySelectorAll('.lang-opt').forEach(o=>{
    o.classList.toggle('active', o.dataset.lang===lang);
  });
  // update dropdown toggle text
  document.querySelectorAll('.lang-toggle').forEach(btn=>{
    btn.innerHTML = '🌐 ' + (LANGS[lang] || 'EN');
  });
}

// build the language switcher markup
function langSwitcherHTML(){
  const current = getLang();
  const currentLabel = LANGS[current] || 'EN';
  return `<div class="lang-dropdown">
    <button class="lang-toggle" ontouchstart="event.preventDefault();this.parentElement.classList.toggle('open')" onclick="this.parentElement.classList.toggle('open')">🌐 ${currentLabel}</button>
    <div class="lang-options">
      ${Object.entries(LANGS).map(([code,label])=>
        `<button class="lang-opt${code===current?' active':''}" data-lang="${code}" onclick="setLang('${code}');this.closest('.lang-dropdown').classList.remove('open')">${label}</button>`
      ).join('')}
    </div>
  </div>`;
}

// close dropdown when clicking outside
document.addEventListener('click',e=>{
  document.querySelectorAll('.lang-dropdown.open').forEach(d=>{
    if(!d.contains(e.target)) d.classList.remove('open');
  });
});
document.addEventListener('touchstart',e=>{
  document.querySelectorAll('.lang-dropdown.open').forEach(d=>{
    if(!d.contains(e.target)) d.classList.remove('open');
  });
});
