/* CONSTANTS */

exports.skill = {
  appId: 'amzn1.ask.skill.05356ecf-b7d2-406b-8244-d2959e7a29bd',
  dynamoDBTableName: 'Deti-Online-Player',
};

/* TEST DATA */
/*exports.audioData = [
  {
    title: 'Avtomobil',
    url: 'https://stat2.deti-online.com/a/km6y4kPKFjPvlRqKOqtPug/1528541894/files/skazki/rasskazy-nosova/avtomobil.mp3',
  },
  {
    title: 'Belosnezhka i sem gnomov',
    url: 'https://stat1.deti-online.com/a/vysK4DT8shbX877DmM3HDA/1528538049/files/skazki/skazki-bratev-grimm/belosnezhka-i-sem-gnomov.mp3',
  },
];*/

/* PROD DATA */
exports.audioData = [
  {
    "duration": "06:45",
    "title": "Pro Hrabrogo Zaica Dlinnye Ushi Kosye Glaza Korotkii Hvost",
    "orig_title": "\u041f\u0440\u043e \u0445\u0440\u0430\u0431\u0440\u043e\u0433\u043e \u0417\u0430\u0439\u0446\u0430-\u0434\u043b\u0438\u043d\u043d\u044b\u0435 \u0443\u0448\u0438, \u043a\u043e\u0441\u044b\u0435 \u0433\u043b\u0430\u0437\u0430, \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u0445\u0432\u043e\u0441\u0442",
    "url": "https://stat1.deti-online.com/a/rcwtCQIZ6AY97mNJIkUwdQ/1528977631/files/skazki/skazki-mamina-sibirjaka/pro-hrabrogo-zaica-dlinnye-ushi-kosye-glaza-korotkii-hvost.mp3"
  },
  {
    "duration": "46:17",
    "title": "Pro Slavnogo Carja Goroha",
    "orig_title": "\u041f\u0440\u043e \u0441\u043b\u0430\u0432\u043d\u043e\u0433\u043e \u0446\u0430\u0440\u044f \u0413\u043e\u0440\u043e\u0445\u0430",
    "url": "https://stat2.deti-online.com/a/Xcdee8SrpEh-X0G-gi17ow/1528992388/files/skazki/skazki-mamina-sibirjaka/pro-slavnogo-carja-goroha.mp3"
  },
  {
    "duration": "19:01",
    "title": "Pro Repku",
    "orig_title": "\u041f\u0440\u043e \u0440\u0435\u043f\u043a\u0443",
    "url": "https://stat2.deti-online.com/a/eucbN-r6vku7kRmLGV3QZA/1528973999/files/skazki/rasskazy-nosova/pro-repku.mp3"
  },
  {
    "duration": "11:58",
    "title": "Pro Komara Komarovicha Dlinnyi Nos I Pro Mohnatogo Mishu Korotkii Hvost",
    "orig_title": "\u041f\u0440\u043e \u041a\u043e\u043c\u0430\u0440\u0430 \u041a\u043e\u043c\u0430\u0440\u043e\u0432\u0438\u0447\u0430-\u0434\u043b\u0438\u043d\u043d\u044b\u0439 \u043d\u043e\u0441 \u0438 \u043f\u0440\u043e \u043c\u043e\u0445\u043d\u0430\u0442\u043e\u0433\u043e \u041c\u0438\u0448\u0443-\u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u0445\u0432\u043e\u0441\u0442",
    "url": "https://stat1.deti-online.com/a/T_35GGRg0rw20poVz1Onxw/1528984868/files/skazki/skazki-mamina-sibirjaka/pro-komara-komarovicha-dlinnyi-nos-i-pro-mohnatogo-mishu-korotkii-hvost.mp3"
  },
  {
    "duration": "09:20",
    "title": "Pro Kozjavochku",
    "orig_title": "\u041f\u0440\u043e \u041a\u043e\u0437\u044f\u0432\u043e\u0447\u043a\u0443",
    "url": "https://stat2.deti-online.com/a/RgWgNSDQJQpC9jw5W0lR4A/1528982098/files/skazki/skazki-mamina-sibirjaka/pro-kozjavochku.mp3"
  },
  {
    "duration": "20:30",
    "title": "Pro Voronushku Chyornuyu Golovushku I Zhyoltuyu Ptichku Kanareiku",
    "orig_title": "\u041f\u0440\u043e \u0412\u043e\u0440\u043e\u043d\u0443\u0448\u043a\u0443-\u0447\u0451\u0440\u043d\u0443\u044e \u0433\u043e\u043b\u043e\u0432\u0443\u0448\u043a\u0443 \u0438 \u0436\u0451\u043b\u0442\u0443\u044e \u043f\u0442\u0438\u0447\u043a\u0443 \u041a\u0430\u043d\u0430\u0440\u0435\u0439\u043a\u0443",
    "url": "https://stat1.deti-online.com/a/MaCvtH8TgbjkdToRa2lEwQ/1528983788/files/skazki/skazki-mamina-sibirjaka/pro-voronushku-chyornuyu-golovushku-i-zhyoltuyu-ptichku-kanareiku.mp3"
  },
  {
    "duration": "17:19",
    "title": "Pro Vorobja Vorobeicha Ersha Ershovicha I Vesyologo Trubochista Jashu",
    "orig_title": "\u041f\u0440\u043e \u0412\u043e\u0440\u043e\u0431\u044c\u044f \u0412\u043e\u0440\u043e\u0431\u0435\u0438\u0447\u0430, \u0415\u0440\u0448\u0430 \u0415\u0440\u0448\u043e\u0432\u0438\u0447\u0430 \u0438 \u0432\u0435\u0441\u0451\u043b\u043e\u0433\u043e \u0442\u0440\u0443\u0431\u043e\u0447\u0438\u0441\u0442\u0430 \u042f\u0448\u0443",
    "url": "https://stat1.deti-online.com/a/b0VpkyXn7iOtXu-s81YTrA/1528985755/files/skazki/skazki-mamina-sibirjaka/pro-vorobja-vorobeicha-ersha-ershovicha-i-vesyologo-trubochista-jashu.mp3"
  },
  {
    "duration": "03:57",
    "title": "Pro Begemota Kotoryy Boyalsya Privivok",
    "orig_title": "\u041f\u0440\u043e \u0411\u0435\u0433\u0435\u043c\u043e\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u043e\u044f\u043b\u0441\u044f \u043f\u0440\u0438\u0432\u0438\u0432\u043e\u043a",
    "url": "https://stat1.deti-online.com/a/bABKBkZSZUZIxWboV9-8qA/1528972500/files/skazki/skazki-suteeva/pro-begemota-kotoryy-boyalsya-privivok.mp3"
  },
  {
    "duration": "03:10",
    "title": "Pro Babushku Starushku",
    "orig_title": "\u041f\u0440\u043e \u0431\u0430\u0431\u0443\u0448\u043a\u0443 \u0441\u0442\u0430\u0440\u0443\u0448\u043a\u0443",
    "url": "https://stat2.deti-online.com/a/Fal8_Tfg8pOGLXJoAI9Big/1528984109/files/skazki/russkie-narodnye-skazki/pro-babushku-starushku.mp3"
  },
  {
    "duration": "01:43",
    "title": "Priskazka",
    "orig_title": "\u041f\u0440\u0438\u0441\u043a\u0430\u0437\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/clC7WoxVsYxsUVkjKbRx8g/1529003095/files/skazki/skazki-mamina-sibirjaka/priskazka.mp3"
  },
  {
    "duration": "03:21",
    "title": "Princessa Na Goroshine",
    "orig_title": "\u041f\u0440\u0438\u043d\u0446\u0435\u0441\u0441\u0430 \u043d\u0430 \u0433\u043e\u0440\u043e\u0448\u0438\u043d\u0435",
    "url": "https://stat1.deti-online.com/a/9T4jI03eA6kzhuvnMwadhw/1528973085/files/skazki/skazki-andersena/princessa-na-goroshine.mp3"
  },
  {
    "duration": "02:48",
    "title": "Princ I Nischiy 34",
    "orig_title": "\u0413\u043b\u0430\u0432\u0430 1",
    "url": "https://stat2.deti-online.com/a/GbjVQP4QUT2QnYBgegyRlw/1528972748/files/skazki/romany-marka-tvena/princ-i-nischiy-34.mp3"
  },
  {
    "duration": "20:09",
    "title": "Priklyucheniya Toma Soyera 34",
    "orig_title": "\u0413\u043b\u0430\u0432\u0430 1",
    "url": "https://stat2.deti-online.com/a/KBpTTtNphpAaEOxciGsBug/1528971114/files/skazki/romany-marka-tvena/priklyucheniya-toma-soyera-34.mp3"
  },
  {
    "duration": "11:48",
    "title": "Priklyucheniya Sindbada Morehoda 3",
    "orig_title": "\u041f\u0435\u0440\u0432\u043e\u0435 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u043a \u043e\u0441\u0442\u0440\u043e\u0432\u0443, \u043e\u043a\u0430\u0437\u0430\u0432\u0448\u0435\u043c\u0443\u0441\u044f \u043a\u0438\u0442\u043e\u043c",
    "url": "https://stat1.deti-online.com/a/LddK32dabdibPtcjguL3aQ/1528971762/files/skazki/arabskie-skazki/priklyucheniya-sindbada-morehoda-3.mp3"
  },
  {
    "duration": "04:13",
    "title": "Priklyucheniya Pinokkio Istoriya Derevyannoy Kukly 36",
    "orig_title": "1. \u041a\u0430\u043a \u043c\u0430\u0441\u0442\u0435\u0440\u0443 \u0412\u0438\u0448\u043d\u0435 \u043f\u043e\u043f\u0430\u043b\u0441\u044f \u043a\u0443\u0441\u043e\u043a \u0434\u0435\u0440\u0435\u0432\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043b\u0430\u043a\u0430\u043b \u0438 \u0441\u043c\u0435\u044f\u043b\u0441\u044f \u043a\u0430\u043a \u0440\u0435\u0431\u0451\u043d\u043e\u043a",
    "url": "https://stat1.deti-online.com/a/IrUXJQTFb-B6U5FePFp0Uw/1528974222/files/skazki/sbornik-skazok/priklyucheniya-pinokkio-istoriya-derevyannoy-kukly-36.mp3"
  },
  {
    "duration": "28:49",
    "title": "Priklyuchenija Bibigona",
    "orig_title": "\u041f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0411\u0438\u0431\u0438\u0433\u043e\u043d\u0430",
    "url": "https://stat1.deti-online.com/a/wFXhuUSkv0jA4D8hKu-bRA/1528977758/files/skazki/skazki-chukovskogo/priklyuchenija-bibigona.mp3"
  },
  {
    "duration": "1:32",
    "title": "Priklyucheniya Barona Myunhauzena",
    "orig_title": "\u041f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0431\u0430\u0440\u043e\u043d\u0430 \u041c\u044e\u043d\u0445\u0430\u0443\u0437\u0435\u043d\u0430",
    "url": "https://stat1.deti-online.com/a/leNGNb2un6dvXD2wWeIwBQ/1528972791/files/skazki/sbornik-skazok/priklyucheniya-barona-myunhauzena.mp3"
  },
  {
    "duration": "19:07",
    "title": "Attalea Princeps",
    "orig_title": "Attalea princeps",
    "url": "https://stat1.deti-online.com/a/R23xzesQjm3HvGFKIMHlgw/1528991779/files/skazki/skazki-garshina/attalea-princeps.mp3"
  },
  {
    "duration": "20:31",
    "title": "Priemysh",
    "orig_title": "\u041f\u0440\u0438\u0435\u043c\u044b\u0448",
    "url": "https://stat2.deti-online.com/a/nxrD14DErj6HzVgEEb_RYA/1528993209/files/skazki/skazki-mamina-sibirjaka/priemysh.mp3"
  },
  {
    "duration": "15:21",
    "title": "Premudryy Peskar",
    "orig_title": "\u041f\u0440\u0435\u043c\u0443\u0434\u0440\u044b\u0439 \u043f\u0435\u0441\u043a\u0430\u0440\u044c",
    "url": "https://stat2.deti-online.com/a/7rWdqfM9yNxdM1ZDCJg6Mg/1528988560/files/skazki/skazki-saltykova-schedrina/premudryy-peskar.mp3"
  },
  {
    "duration": "03:26",
    "title": "Portochki",
    "orig_title": "\u041f\u043e\u0440\u0442\u043e\u0447\u043a\u0438",
    "url": "https://stat1.deti-online.com/a/aLtgaArVUKuQbw3bET7ROg/1529006078/files/skazki/skazki-tolstogo/portochki.mp3"
  },
  {
    "duration": "23:05",
    "title": "Pora Spat",
    "orig_title": "\u041f\u043e\u0440\u0430 \u0441\u043f\u0430\u0442\u044c",
    "url": "https://stat1.deti-online.com/a/4GCrFELZAPD8nm7lL_-X1w/1528984078/files/skazki/skazki-mamina-sibirjaka/pora-spat.mp3"
  },
  {
    "duration": "11:41",
    "title": "Pozhar Vo Fligele Ili Podvig Vo Ldah",
    "orig_title": "\u041f\u043e\u0436\u0430\u0440 \u0432\u043e \u0444\u043b\u0438\u0433\u0435\u043b\u0435, \u0438\u043b\u0438 \u043f\u043e\u0434\u0432\u0438\u0433 \u0432\u043e \u043b\u044c\u0434\u0430\u0445",
    "url": "https://stat1.deti-online.com/a/NymkIE5bSDbbgEmx-2ApWA/1528980361/files/skazki/rasskazy-dragunskogo/pozhar-vo-fligele-ili-podvig-vo-ldah.mp3"
  },
  {
    "duration": "46:07",
    "title": "Podi Tuda Ne Znayu Kuda Prinesi To Ne Znayu Chto",
    "orig_title": "\u041f\u043e\u0434\u0438 \u0442\u0443\u0434\u0430-\u043d\u0435 \u0437\u043d\u0430\u044e \u043a\u0443\u0434\u0430, \u043f\u0440\u0438\u043d\u0435\u0441\u0438 \u0442\u043e-\u043d\u0435 \u0437\u043d\u0430\u044e \u0447\u0442\u043e",
    "url": "https://stat1.deti-online.com/a/QGy3z29QfxCaMqnh_m5YaA/1528971962/files/skazki/russkie-narodnye-skazki/podi-tuda-ne-znayu-kuda-prinesi-to-ne-znayu-chto.mp3"
  },
  {
    "duration": "07:04",
    "title": "Barmalei",
    "orig_title": "\u0411\u0430\u0440\u043c\u0430\u043b\u0435\u0439",
    "url": "https://stat1.deti-online.com/a/menUe1a6yiKSBFIrhstnbQ/1528971955/files/skazki/skazki-chukovskogo/barmalei.mp3"
  },
  {
    "duration": "09:19",
    "title": "Babushka Metelica",
    "orig_title": "\u0411\u0430\u0431\u0443\u0448\u043a\u0430 \u041c\u0435\u0442\u0435\u043b\u0438\u0446\u0430",
    "url": "https://stat2.deti-online.com/a/IuaBOj7AoQ8QKa4jMm0iRg/1528977448/files/skazki/skazki-bratev-grimm/babushka-metelica.mp3"
  },
  {
    "duration": "02:24",
    "title": "Babochka",
    "orig_title": "\u0411\u0430\u0431\u043e\u0447\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/e-KOHqiqJn9H9Rv0HPCn7w/1528986279/files/skazki/skazki-suteeva/babochka.mp3"
  },
  {
    "duration": "12:53",
    "title": "Boi Na Kalinovom Mostu",
    "orig_title": "\u0411\u043e\u0439 \u043d\u0430 \u041a\u0430\u043b\u0438\u043d\u043e\u0432\u043e\u043c \u043c\u043e\u0441\u0442\u0443",
    "url": "https://stat2.deti-online.com/a/lE_JGXG039rmNOnqSHU_-w/1528978641/files/skazki/russkie-narodnye-skazki/boi-na-kalinovom-mostu.mp3"
  },
  {
    "duration": "04:58",
    "title": "Yabloko",
    "orig_title": "\u042f\u0431\u043b\u043e\u043a\u043e",
    "url": "https://stat2.deti-online.com/a/0wWVnH6pzoUjphFNWA1Diw/1528973101/files/skazki/skazki-suteeva/yabloko.mp3"
  },
  {
    "duration": "07:15",
    "title": "Eto Chto Za Ptica",
    "orig_title": "\u042d\u0442\u043e \u0447\u0442\u043e \u0437\u0430 \u043f\u0442\u0438\u0446\u0430?",
    "url": "https://stat2.deti-online.com/a/--mJTuw7ORoPNF8RtgqE1w/1528976705/files/skazki/skazki-suteeva/eto-chto-za-ptica.mp3"
  },
  {
    "duration": "05:08",
    "title": "Etazhi Lesa",
    "orig_title": "\u042d\u0442\u0430\u0436\u0438 \u043b\u0435\u0441\u0430",
    "url": "https://stat2.deti-online.com/a/Q6Z9pjv646cxK7kJyKPX9w/1528995691/files/skazki/rasskazy-prishvina/etazhi-lesa.mp3"
  },
  {
    "duration": "13:07",
    "title": "Yelf Rozovogo Kusta",
    "orig_title": "\u042d\u043b\u044c\u0444 \u0440\u043e\u0437\u043e\u0432\u043e\u0433\u043e \u043a\u0443\u0441\u0442\u0430",
    "url": "https://stat2.deti-online.com/a/4k_Saq_L-Of_VuU9xKn3uA/1528979541/files/skazki/skazki-andersena/yelf-rozovogo-kusta.mp3"
  },
  {
    "duration": "08:28",
    "title": "Aibolit",
    "orig_title": "\u0410\u0439\u0431\u043e\u043b\u0438\u0442",
    "url": "https://stat2.deti-online.com/a/B-PZl_LHRVsrl5lTSEr5fg/1528970800/files/skazki/skazki-chukovskogo/aibolit.mp3"
  },
  {
    "duration": "55:37",
    "title": "Shelkunchik I Myshinyi Korol",
    "orig_title": "\u0429\u0435\u043b\u043a\u0443\u043d\u0447\u0438\u043a \u0438 \u043c\u044b\u0448\u0438\u043d\u044b\u0439 \u043a\u043e\u0440\u043e\u043b\u044c",
    "url": "https://stat1.deti-online.com/a/mLXLIPJfxwssMPmi3GEqAA/1528970390/files/skazki/skazki-gofmana/shelkunchik-i-myshinyi-korol.mp3"
  },
  {
    "duration": "10:18",
    "title": "Baba Jaga",
    "orig_title": "\u0411\u0430\u0431\u0430-\u044f\u0433\u0430",
    "url": "https://stat2.deti-online.com/a/m-NSRBOsoIfH5qHwf9OqjA/1528971058/files/skazki/russkie-narodnye-skazki/baba-jaga.mp3"
  },
  {
    "duration": "10:54",
    "title": "Shurik U Dedushki",
    "orig_title": "\u0428\u0443\u0440\u0438\u043a \u0443 \u0434\u0435\u0434\u0443\u0448\u043a\u0438",
    "url": "https://stat1.deti-online.com/a/IxEK3VzJGD1WITpXxFVH1Q/1528974631/files/skazki/rasskazy-nosova/shurik-u-dedushki.mp3"
  },
  {
    "duration": "20:10",
    "title": "Shest Lebedey",
    "orig_title": "\u0428\u0435\u0441\u0442\u044c \u043b\u0435\u0431\u0435\u0434\u0435\u0439",
    "url": "https://stat2.deti-online.com/a/TruUE9T75oQkDHKNkXHNog/1528975990/files/skazki/skazki-bratev-grimm/shest-lebedey.mp3"
  },
  {
    "duration": "1:11",
    "title": "Chuk I Gek",
    "orig_title": "\u0427\u0443\u043a \u0438 \u0413\u0435\u043a",
    "url": "https://stat1.deti-online.com/a/6R0BPBA_Vo3ROiXSFyZOYw/1528974324/files/skazki/rasskazy-gaydara/chuk-i-gek.mp3"
  },
  {
    "duration": "01:21",
    "title": "Chudo Derevo",
    "orig_title": "\u0427\u0443\u0434\u043e-\u0434\u0435\u0440\u0435\u0432\u043e",
    "url": "https://stat2.deti-online.com/a/TKxUwYS6tzn50tWZRldj2g/1528977107/files/skazki/skazki-chukovskogo/chudo-derevo.mp3"
  },
  {
    "duration": "02:55",
    "title": "Baba Jaga I Jagody",
    "orig_title": "\u0411\u0430\u0431\u0430 \u042f\u0433\u0430 \u0438 \u044f\u0433\u043e\u0434\u044b",
    "url": "https://stat2.deti-online.com/a/O0yjri_7bwJRrWFUx9bJtQ/1528972513/files/skazki/russkie-narodnye-skazki/baba-jaga-i-jagody.mp3"
  },
  {
    "duration": "1:59",
    "title": "Chudesnoe Puteshestvie Nilsa S Dikimi Gusyami",
    "orig_title": "\u0427\u0443\u0434\u0435\u0441\u043d\u043e\u0435 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u041d\u0438\u043b\u044c\u0441\u0430 \u0441 \u0434\u0438\u043a\u0438\u043c\u0438 \u0433\u0443\u0441\u044f\u043c\u0438",
    "url": "https://stat1.deti-online.com/a/SA3e4iR0qT5vX6JT9XJPfg/1528972350/files/skazki/sbornik-skazok/chudesnoe-puteshestvie-nilsa-s-dikimi-gusyami.mp3"
  },
  {
    "duration": "13:09",
    "title": "Chudesnaja Rubashka",
    "orig_title": "\u0427\u0443\u0434\u0435\u0441\u043d\u0430\u044f \u0440\u0443\u0431\u0430\u0448\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/_SStECqm4qcnCefOo23X4Q/1528972057/files/skazki/russkie-narodnye-skazki/chudesnaja-rubashka.mp3"
  },
  {
    "duration": "04:21",
    "title": "Chto Ya Lyublyu",
    "orig_title": "\u0427\u0442\u043e \u044f \u043b\u044e\u0431\u043b\u044e",
    "url": "https://stat1.deti-online.com/a/vXfrimium0_CQ9AOsj8Whg/1528981039/files/skazki/rasskazy-dragunskogo/chto-ya-lyublyu.mp3"
  },
  {
    "duration": "05:59",
    "title": "Tarakanishe",
    "orig_title": "\u0422\u0430\u0440\u0430\u043a\u0430\u043d\u0438\u0449\u0435",
    "url": "https://stat1.deti-online.com/a/Xb72g90kxRMUXAPHA5ivhg/1528972272/files/skazki/skazki-chukovskogo/tarakanishe.mp3"
  },
  {
    "duration": "16:56",
    "title": "Podzemnyy Chelovechek",
    "orig_title": "\u041f\u043e\u0434\u0437\u0435\u043c\u043d\u044b\u0439 \u0447\u0435\u043b\u043e\u0432\u0435\u0447\u0435\u043a",
    "url": "https://stat1.deti-online.com/a/L93VRmnT1bYpog26UmWLcQ/1528984164/files/skazki/skazki-bratev-grimm/podzemnyy-chelovechek.mp3"
  },
  {
    "duration": "05:39",
    "title": "Malenkie Chelovechki",
    "orig_title": "\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0435 \u0447\u0435\u043b\u043e\u0432\u0435\u0447\u043a\u0438",
    "url": "https://stat2.deti-online.com/a/pFasyL5fNRJxxfZvqaVn9w/1528977737/files/skazki/skazki-bratev-grimm/malenkie-chelovechki.mp3"
  },
  {
    "duration": "30:07",
    "title": "Ali Baba I Sorok Razboynikov",
    "orig_title": "\u0410\u043b\u0438-\u0411\u0430\u0431\u0430 \u0438 \u0441\u043e\u0440\u043e\u043a \u0440\u0430\u0437\u0431\u043e\u0439\u043d\u0438\u043a\u043e\u0432",
    "url": "https://stat2.deti-online.com/a/mEY8XYDJV4SnkH_SPyxd_Q/1528973012/files/skazki/arabskie-skazki/ali-baba-i-sorok-razboynikov.mp3"
  },
  {
    "duration": "06:37",
    "title": "Taynoe Stanovitsya Yavnym",
    "orig_title": "\u0422\u0430\u0439\u043d\u043e\u0435 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u044f\u0432\u043d\u044b\u043c",
    "url": "https://stat2.deti-online.com/a/3FvHGiM3Zzx13OKytu_kGQ/1528972600/files/skazki/rasskazy-dragunskogo/taynoe-stanovitsya-yavnym.mp3"
  },
  {
    "duration": "08:56",
    "title": "Podarki Fei",
    "orig_title": "\u041f\u043e\u0434\u0430\u0440\u043a\u0438 \u0444\u0435\u0438",
    "url": "https://stat2.deti-online.com/a/Q-wProfaV2HEZlLStXRUuw/1528975279/files/skazki/skazki-sharlja-perro/podarki-fei.mp3"
  },
  {
    "duration": "12:51",
    "title": "Lyagushka Puteshestvennica",
    "orig_title": "\u041b\u044f\u0433\u0443\u0448\u043a\u0430-\u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0438\u0446\u0430",
    "url": "https://stat2.deti-online.com/a/efu7o851LtGXCJrxRm5i2Q/1528975460/files/skazki/skazki-garshina/lyagushka-puteshestvennica.mp3"
  },
  {
    "duration": "09:37",
    "title": "Schastlivoe Semeistvo",
    "orig_title": "\u0421\u0447\u0430\u0441\u0442\u043b\u0438\u0432\u043e\u0435 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u043e",
    "url": "https://stat1.deti-online.com/a/-db3a_JE8lE2D2m9qpGFCA/1528982810/files/skazki/skazki-andersena/schastlivoe-semeistvo.mp3"
  },
  {
    "duration": "03:32",
    "title": "Pod Gribom",
    "orig_title": "\u041f\u043e\u0434 \u0433\u0440\u0438\u0431\u043e\u043c",
    "url": "https://stat2.deti-online.com/a/PcDaLLgcf35BE0aBgg0ETg/1528974268/files/skazki/skazki-suteeva/pod-gribom.mp3"
  },
  {
    "duration": "03:23",
    "title": "Lisichkin Hleb",
    "orig_title": "\u041b\u0438\u0441\u0438\u0447\u043a\u0438\u043d \u0445\u043b\u0435\u0431",
    "url": "https://stat1.deti-online.com/a/G38DhMHwPxlWCH7MbDlVPg/1528992833/files/skazki/rasskazy-prishvina/lisichkin-hleb.mp3"
  },
  {
    "duration": "18:20",
    "title": "Sunduk Samolet",
    "orig_title": "\u0421\u0443\u043d\u0434\u0443\u043a-\u0441\u0430\u043c\u043e\u043b\u0451\u0442",
    "url": "https://stat2.deti-online.com/a/-NBk-zX0_3kxKyC356_0FQ/1528978606/files/skazki/skazki-andersena/sunduk-samolet.mp3"
  },
  {
    "duration": "19:34",
    "title": "Povest O Tom Kak Odin Muzhik Dvuh Generalov Prokormil",
    "orig_title": "\u041f\u043e\u0432\u0435\u0441\u0442\u044c \u043e \u0442\u043e\u043c, \u043a\u0430\u043a \u043e\u0434\u0438\u043d \u043c\u0443\u0436\u0438\u043a \u0434\u0432\u0443\u0445 \u0433\u0435\u043d\u0435\u0440\u0430\u043b\u043e\u0432 \u043f\u0440\u043e\u043a\u043e\u0440\u043c\u0438\u043b",
    "url": "https://stat2.deti-online.com/a/ijC8874yi4PN9SGorWGILg/1528986431/files/skazki/skazki-saltykova-schedrina/povest-o-tom-kak-odin-muzhik-dvuh-generalov-prokormil.mp3"
  },
  {
    "duration": "02:09",
    "title": "Lisa I Teterev",
    "orig_title": "\u041b\u0438\u0441\u0430 \u0438 \u0442\u0435\u0442\u0435\u0440\u0435\u0432",
    "url": "https://stat2.deti-online.com/a/W7xX9x1Pmlw3W6mlVm6NlQ/1528988095/files/skazki/russkie-narodnye-skazki/lisa-i-teterev.mp3"
  },
  {
    "duration": "07:51",
    "title": "Bremenskie Muzykanty",
    "orig_title": "\u0411\u0440\u0435\u043c\u0435\u043d\u0441\u043a\u0438\u0435 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u044b",
    "url": "https://stat1.deti-online.com/a/kTt6DTXVQpA3mslv0hasww/1528970729/files/skazki/skazki-bratev-grimm/bremenskie-muzykanty.mp3"
  },
  {
    "duration": "13:20",
    "title": "Stoptannye Tufelki",
    "orig_title": "\u0421\u0442\u043e\u043f\u0442\u0430\u043d\u043d\u044b\u0435 \u0442\u0443\u0444\u0435\u043b\u044c\u043a\u0438",
    "url": "https://stat1.deti-online.com/a/Om0iEKV0GymhggBMZ64IhA/1528975803/files/skazki/skazki-bratev-grimm/stoptannye-tufelki.mp3"
  },
  {
    "duration": "29:23",
    "title": "Pobratimy",
    "orig_title": "\u041f\u043e\u0431\u0440\u0430\u0442\u0438\u043c\u044b",
    "url": "https://stat1.deti-online.com/a/NKnXcukIGvjYXFhtCAwZNw/1528997636/files/skazki/skazki-andersena/pobratimy.mp3"
  },
  {
    "duration": "09:08",
    "title": "Lisa I Medved",
    "orig_title": "\u041b\u0438\u0441\u0430 \u0438 \u043c\u0435\u0434\u0432\u0435\u0434\u044c",
    "url": "https://stat1.deti-online.com/a/qTv1us15lnYd4BXtvXC_cA/1528978241/files/skazki/russkie-narodnye-skazki/lisa-i-medved.mp3"
  },
  {
    "duration": "10:23",
    "title": "Belosnezhka I Sem Gnomov",
    "orig_title": "\u0411\u0435\u043b\u043e\u0441\u043d\u0435\u0436\u043a\u0430 \u0438 \u0441\u0435\u043c\u044c \u0433\u043d\u043e\u043c\u043e\u0432",
    "url": "https://stat1.deti-online.com/a/Z7o9_LRplvzyLGpICRFRrA/1528970062/files/skazki/skazki-bratev-grimm/belosnezhka-i-sem-gnomov.mp3"
  },
  {
    "duration": "28:03",
    "title": "Stolik Sam Nakroysya Zolotoy Osel I Dubinka Iz Meshka",
    "orig_title": "\u0421\u0442\u043e\u043b\u0438\u043a, \u0441\u0430\u043c \u043d\u0430\u043a\u0440\u043e\u0439\u0441\u044f, \u0437\u043e\u043b\u043e\u0442\u043e\u0439 \u043e\u0441\u0435\u043b \u0438 \u0434\u0443\u0431\u0438\u043d\u043a\u0430 \u0438\u0437 \u043c\u0435\u0448\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/obM8WBnBzt12Rmz9CyMq8A/1528982658/files/skazki/skazki-bratev-grimm/stolik-sam-nakroysya-zolotoy-osel-i-dubinka-iz-meshka.mp3"
  },
  {
    "duration": "16:49",
    "title": "Po Shuchemu Velenyu",
    "orig_title": "\u041f\u043e \u0449\u0443\u0447\u044c\u0435\u043c\u0443 \u0432\u0435\u043b\u0435\u043d\u044c\u044e",
    "url": "https://stat1.deti-online.com/a/Rt5fetm4uRg11vqOSYP5pA/1528972051/files/skazki/russkie-narodnye-skazki/po-shuchemu-velenyu.mp3"
  },
  {
    "duration": "01:55",
    "title": "Lisa I Kozel",
    "orig_title": "\u041b\u0438\u0441\u0430 \u0438 \u043a\u043e\u0437\u0435\u043b",
    "url": "https://stat1.deti-online.com/a/vwQtqkMMoMcum5dtX-TvZg/1528995920/files/skazki/russkie-narodnye-skazki/lisa-i-kozel.mp3"
  },
  {
    "duration": "12:45",
    "title": "Stoikii Olovjannyi Soldatik",
    "orig_title": "\u0421\u0442\u043e\u0439\u043a\u0438\u0439 \u043e\u043b\u043e\u0432\u044f\u043d\u043d\u044b\u0439 \u0441\u043e\u043b\u0434\u0430\u0442\u0438\u043a",
    "url": "https://stat2.deti-online.com/a/SfmWFl4ElS4-uuPRXkMQlA/1528973132/files/skazki/skazki-andersena/stoikii-olovjannyi-soldatik.mp3"
  },
  {
    "duration": "25:13",
    "title": "Piter Pen 17",
    "orig_title": "\u0413\u043b\u0430\u0432\u0430 1",
    "url": "https://stat2.deti-online.com/a/GmXhVHdkyjbKcE1-AG6TQw/1528971977/files/skazki/sbornik-skazok/piter-pen-17.mp3"
  },
  {
    "duration": "02:22",
    "title": "Lisa I Zhuravl",
    "orig_title": "\u041b\u0438\u0441\u0430 \u0438 \u0436\u0443\u0440\u0430\u0432\u043b\u044c",
    "url": "https://stat1.deti-online.com/a/-oPY7K_q3Smz2A0Jwu9OhQ/1528975401/files/skazki/russkie-narodnye-skazki/lisa-i-zhuravl.mp3"
  },
  {
    "duration": "41:27",
    "title": "Alenkii Cvetochek 2",
    "orig_title": "\u0410\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u0446\u0432\u0435\u0442\u043e\u0447\u0435\u043a",
    "url": "https://stat1.deti-online.com/a/R98H4kNmnnouyUvLdgX9ZA/1528970440/files/skazki/skazki-aksakova/alenkii-cvetochek-2.mp3"
  },
  {
    "duration": "22:05",
    "title": "Staryy Ulichnyy Fonar",
    "orig_title": "\u0421\u0442\u0430\u0440\u044b\u0439 \u0443\u043b\u0438\u0447\u043d\u044b\u0439 \u0444\u043e\u043d\u0430\u0440\u044c",
    "url": "https://stat2.deti-online.com/a/lMrv1tCUU-R8zLkG3tjOhQ/1528992563/files/audioskazki/staryy-ulichnyy-fonar.mp3"
  },
  {
    "duration": "51:36",
    "title": "Petya Ivanov I Volshebnik Tik Tak",
    "orig_title": "\u041f\u0435\u0442\u044f \u0418\u0432\u0430\u043d\u043e\u0432 \u0438 \u0432\u043e\u043b\u0448\u0435\u0431\u043d\u0438\u043a \u0422\u0438\u043a-\u0422\u0430\u043a",
    "url": "https://stat1.deti-online.com/a/yubwo3vRZVoH5KHhadY4Dw/1528977325/files/skazki/skazki-suteeva/petya-ivanov-i-volshebnik-tik-tak.mp3"
  },
  {
    "duration": "04:37",
    "title": "Lisa I Volk",
    "orig_title": "\u041b\u0438\u0441\u0430 \u0438 \u0432\u043e\u043b\u043a (\u0436\u0435\u043d\u0441\u043a\u0438\u0439 \u0433\u043e\u043b\u043e\u0441)",
    "url": "https://stat2.deti-online.com/a/jw6L1cwV9P816lSXDCHa9g/1528973092/files/skazki/russkie-narodnye-skazki/lisa-i-volk.mp3"
  },
  {
    "duration": "20:58",
    "title": "Staryy Dom",
    "orig_title": "\u0421\u0442\u0430\u0440\u044b\u0439 \u0434\u043e\u043c",
    "url": "https://stat1.deti-online.com/a/1rQqSHV77yCd1_KHIzTkwA/1528983375/files/skazki/skazki-andersena/staryy-dom.mp3"
  },
  {
    "duration": "16:46",
    "title": "Petya I Krasnaya Shapochka",
    "orig_title": "\u041f\u0435\u0442\u044f \u0438 \u041a\u0440\u0430\u0441\u043d\u0430\u044f \u0428\u0430\u043f\u043e\u0447\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/tRHkhwp1ezt9rXbmSgk7nQ/1528974542/files/skazki/skazki-suteeva/petya-i-krasnaya-shapochka.mp3"
  },
  {
    "duration": "01:29",
    "title": "Lisa",
    "orig_title": "\u041b\u0438\u0441\u0430",
    "url": "https://stat2.deti-online.com/a/KVEzOGL9s370ywHKOmI7IQ/1529010318/files/skazki/skazki-tolstogo/lisa.mp3"
  },
  {
    "duration": "07:00",
    "title": "Starik Iz Stekljannoi Gory",
    "orig_title": "\u0421\u0442\u0430\u0440\u0438\u043a \u0438\u0437 \u0441\u0442\u0435\u043a\u043b\u044f\u043d\u043d\u043e\u0439 \u0433\u043e\u0440\u044b",
    "url": "https://stat1.deti-online.com/a/DMklidPCZI-kPJhyDwkxEA/1528978093/files/skazki/skazki-bratev-grimm/starik-iz-stekljannoi-gory.mp3"
  },
  {
    "duration": "02:42",
    "title": "Petushok I Bobovoe Zernyshko",
    "orig_title": "\u041f\u0435\u0442\u0443\u0448\u043e\u043a \u0438 \u0431\u043e\u0431\u043e\u0432\u043e\u0435 \u0437\u0435\u0440\u043d\u044b\u0448\u043a\u043e",
    "url": "https://stat2.deti-online.com/a/JOt5j2oxEVzH-WpnsboaMA/1528972558/files/skazki/russkie-narodnye-skazki/petushok-i-bobovoe-zernyshko.mp3"
  },
  {
    "duration": "00:36",
    "title": "Lis I Myshonok",
    "orig_title": "\u041b\u0438\u0441 \u0438 \u043c\u044b\u0448\u043e\u043d\u043e\u043a",
    "url": "https://stat2.deti-online.com/a/wFx_tAwf1EwE7MifjgUhqg/1528977287/files/skazki/rasskazy-bianki/lis-i-myshonok.mp3"
  },
  {
    "duration": "07:37",
    "title": "Srazhenie U Chistoy Rechki",
    "orig_title": "\u0421\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0443 \u0447\u0438\u0441\u0442\u043e\u0439 \u0440\u0435\u0447\u043a\u0438",
    "url": "https://stat1.deti-online.com/a/OfIWB9DJML-5vxyhQh5KkA/1528978222/files/skazki/rasskazy-dragunskogo/srazhenie-u-chistoy-rechki.mp3"
  },
  {
    "duration": "04:48",
    "title": "Petushok Zolotoi Grebeshok",
    "orig_title": "\u041f\u0435\u0442\u0443\u0448\u043e\u043a \u0437\u043e\u043b\u043e\u0442\u043e\u0439 \u0433\u0440\u0435\u0431\u0435\u0448\u043e\u043a",
    "url": "https://stat1.deti-online.com/a/SFit-2Q47QSrpWVkIlkTdw/1528971303/files/skazki/russkie-narodnye-skazki/petushok-zolotoi-grebeshok.mp3"
  },
  {
    "duration": "24:33",
    "title": "Letuchii Korabl",
    "orig_title": "\u041b\u0435\u0442\u0443\u0447\u0438\u0439 \u043a\u043e\u0440\u0430\u0431\u043b\u044c",
    "url": "https://stat1.deti-online.com/a/hToLWw-mBrHGn-zWft4nww/1528972532/files/skazki/russkie-narodnye-skazki/letuchii-korabl.mp3"
  },
  {
    "duration": "13:30",
    "title": "Belosnezhka I Alocvetik",
    "orig_title": "\u0411\u0435\u043b\u043e\u0441\u043d\u0435\u0436\u043a\u0430 \u0438 \u0410\u043b\u043e\u0446\u0432\u0435\u0442\u0438\u043a",
    "url": "https://stat2.deti-online.com/a/OLK98OqO6UOc9Cj26helBA/1528981172/files/skazki/skazki-bratev-grimm/belosnezhka-i-alocvetik.mp3"
  },
  {
    "duration": "03:14",
    "title": "Aybolit I Vorobey",
    "orig_title": "\u0410\u0439\u0431\u043e\u043b\u0438\u0442 \u0438 \u0432\u043e\u0440\u043e\u0431\u0435\u0439",
    "url": "https://stat1.deti-online.com/a/HmdF0qwFx8G0AFboMo6GXQ/1528981928/files/skazki/skazki-chukovskogo/aybolit-i-vorobey.mp3"
  },
  {
    "duration": "24:56",
    "title": "Spjashaja Krasavica",
    "orig_title": "\u0421\u043f\u044f\u0449\u0430\u044f \u043a\u0440\u0430\u0441\u0430\u0432\u0438\u0446\u0430",
    "url": "https://stat1.deti-online.com/a/dPzNeRushA7VtAiCfpNr8A/1528971398/files/skazki/skazki-sharlja-perro/spjashaja-krasavica.mp3"
  },
  {
    "duration": "02:05",
    "title": "Petushki",
    "orig_title": "\u041f\u0435\u0442\u0443\u0448\u043a\u0438",
    "url": "https://stat2.deti-online.com/a/OLcBymYk8RJ235MEIbHMng/1529017209/files/skazki/skazki-tolstogo/petushki.mp3"
  },
  {
    "duration": "08:08",
    "title": "Lesnaya Staruha",
    "orig_title": "\u041b\u0435\u0441\u043d\u0430\u044f \u0441\u0442\u0430\u0440\u0443\u0445\u0430",
    "url": "https://stat1.deti-online.com/a/NXdqoSyCenplCKYT8aXGBg/1528983234/files/skazki/skazki-bratev-grimm/lesnaya-staruha.mp3"
  },
  {
    "duration": "02:37",
    "title": "Soroka",
    "orig_title": "\u0421\u043e\u0440\u043e\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/hwKl-KqX3qHGcB6cCwPEYA/1529000779/files/skazki/skazki-tolstogo/soroka.mp3"
  },
  {
    "duration": "00:55",
    "title": "Petuh I Kraski",
    "orig_title": "\u041f\u0435\u0442\u0443\u0445 \u0438 \u043a\u0440\u0430\u0441\u043a\u0438",
    "url": "https://stat2.deti-online.com/a/64s1RAo7BFfxGB7IBgP5zA/1528974799/files/skazki/skazki-suteeva/petuh-i-kraski.mp3"
  },
  {
    "duration": "07:50",
    "title": "Lenivyi Geinc",
    "orig_title": "\u041b\u0435\u043d\u0438\u0432\u044b\u0439 \u0425\u0430\u0439\u043d\u0446",
    "url": "https://stat1.deti-online.com/a/KfOL7knH9pZ1bjAUopyNWQ/1528993812/files/skazki/skazki-bratev-grimm/lenivyi-geinc.mp3"
  },
  {
    "duration": "03:36",
    "title": "Solominka Ugolek I Bob",
    "orig_title": "\u0421\u043e\u043b\u043e\u043c\u0438\u043d\u043a\u0430, \u0443\u0433\u043e\u043b\u0435\u043a \u0438 \u0431\u043e\u0431",
    "url": "https://stat1.deti-online.com/a/NhNp-Oec_r-iFkn9fLXWDg/1528976106/files/skazki/skazki-bratev-grimm/solominka-ugolek-i-bob.mp3"
  },
  {
    "duration": "04:53",
    "title": "Petuh I Zhernovcy",
    "orig_title": "\u041f\u0435\u0442\u0443\u0445 \u0438 \u0436\u0435\u0440\u043d\u043e\u0432\u0446\u044b",
    "url": "https://stat2.deti-online.com/a/aWGa_rVnHA3gVA_aeMU1Og/1528983588/files/skazki/russkie-narodnye-skazki/petuh-i-zhernovcy.mp3"
  },
  {
    "duration": "14:08",
    "title": "Lyon",
    "orig_title": "\u041b\u0451\u043d",
    "url": "https://stat1.deti-online.com/a/NsYsd4FGSdGnyptYcE2dzg/1528985914/files/skazki/skazki-andersena/lyon.mp3"
  },
  {
    "duration": "31:43",
    "title": "Solovei",
    "orig_title": "\u0421\u043e\u043b\u043e\u0432\u0435\u0439",
    "url": "https://stat2.deti-online.com/a/WaF4ONoash0015HpSKYzrA/1528977274/files/skazki/skazki-andersena/solovei.mp3"
  },
  {
    "duration": "1:51",
    "title": "Pesochnyy Chelovek",
    "orig_title": "\u041f\u0435\u0441\u043e\u0447\u043d\u044b\u0439 \u0447\u0435\u043b\u043e\u0432\u0435\u043a",
    "url": "https://stat1.deti-online.com/a/r1dbyagoOsT8GU7rt3IgIw/1528979672/files/skazki/skazki-gofmana/pesochnyy-chelovek.mp3"
  },
  {
    "duration": "04:00",
    "title": "Ledenec",
    "orig_title": "\u041b\u0435\u0434\u0435\u043d\u0435\u0446",
    "url": "https://stat1.deti-online.com/a/_ECYbz6K2TPG5g7vqwzYnQ/1528975926/files/skazki/rasskazy-nosova/ledenec.mp3"
  },
  {
    "duration": "17:07",
    "title": "Belye Amadiny",
    "orig_title": "\u0411\u0435\u043b\u044b\u0435 \u0430\u043c\u0430\u0434\u0438\u043d\u044b",
    "url": "https://stat2.deti-online.com/a/ZxQbVl5L5fdHUimDDHWMhA/1528981138/files/skazki/rasskazy-dragunskogo/belye-amadiny.mp3"
  },
  {
    "duration": "02:00",
    "title": "Sova I Kot",
    "orig_title": "\u0421\u043e\u0432\u0430 \u0438 \u043a\u043e\u0442",
    "url": "https://stat2.deti-online.com/a/LPFIUVKv_ASZK2GoCVflGQ/1528997184/files/skazki/skazki-tolstogo/sova-i-kot.mp3"
  },
  {
    "duration": "06:13",
    "title": "Pervaya Ohota",
    "orig_title": "\u041f\u0435\u0440\u0432\u0430\u044f \u043e\u0445\u043e\u0442\u0430",
    "url": "https://stat1.deti-online.com/a/yN2lkaQwSwk5TBytxE5huA/1528979409/files/skazki/rasskazy-bianki/pervaya-ohota.mp3"
  },
  {
    "duration": "01:06",
    "title": "Kurochka Rjaba",
    "orig_title": "\u041a\u0443\u0440\u043e\u0447\u043a\u0430 \u0420\u044f\u0431\u0430 (\u043a\u043e\u0440\u043e\u0442\u043a\u0430\u044f)",
    "url": "https://stat1.deti-online.com/a/1PAw5wItBy0UrcjzdWGeSw/1528970284/files/skazki/russkie-narodnye-skazki/kurochka-rjaba.mp3"
  },
  {
    "duration": "1:08",
    "title": "Snezhnaja Koroleva 2",
    "orig_title": "\u0421\u043d\u0435\u0436\u043d\u0430\u044f \u043a\u043e\u0440\u043e\u043b\u0435\u0432\u0430",
    "url": "https://stat1.deti-online.com/a/L_hmjTn78UQpNuoTAjxTkg/1528970034/files/skazki/skazki-andersena/snezhnaja-koroleva-2.mp3"
  },
  {
    "duration": "29:08",
    "title": "Peppi 2 08",
    "orig_title": "\u0413\u043b\u0430\u0432\u0430 1. \u041a\u0430\u043a \u041f\u0435\u043f\u043f\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0437\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0430\u043c\u0438",
    "url": "https://stat2.deti-online.com/a/_6aU84QY3oyQ9iAR9hLUeg/1528971854/files/skazki/skazki-lindgren/peppi-2-08.mp3"
  },
  {
    "duration": "09:49",
    "title": "Kurinyy Bulon",
    "orig_title": "\u041a\u0443\u0440\u0438\u043d\u044b\u0439 \u0431\u0443\u043b\u044c\u043e\u043d",
    "url": "https://stat2.deti-online.com/a/f_kwoD12uFHi8dq1Q7cVKg/1528978648/files/skazki/rasskazy-dragunskogo/kurinyy-bulon.mp3"
  },
  {
    "duration": "10:47",
    "title": "Batrak",
    "orig_title": "\u0411\u0430\u0442\u0440\u0430\u043a",
    "url": "https://stat2.deti-online.com/a/4_Jj58VMwWFQS4A160s4Ag/1528992072/files/skazki/russkie-narodnye-skazki/batrak.mp3"
  },
  {
    "duration": "04:55",
    "title": "Snegurushka I Lisa",
    "orig_title": "\u0421\u043d\u0435\u0433\u0443\u0440\u0443\u0448\u043a\u0430 \u0438 \u043b\u0438\u0441\u0430",
    "url": "https://stat2.deti-online.com/a/jA1GI-DEEYgbni3UDAa2yw/1528982276/files/skazki/russkie-narodnye-skazki/snegurushka-i-lisa.mp3"
  },
  {
    "duration": "16:13",
    "title": "Peppi 1 11",
    "orig_title": "\u0413\u043b\u0430\u0432\u0430 1. \u041a\u0430\u043a \u041f\u0435\u043f\u043f\u0438 \u043f\u043e\u0441\u0435\u043b\u0438\u043b\u0430\u0441\u044c \u0432 \u0432\u0438\u043b\u043b\u0435 \u041a\u0443\u0440\u0438\u0446\u0430",
    "url": "https://stat2.deti-online.com/a/214RKTglcjuENR028Fv86g/1528970798/files/skazki/skazki-lindgren/peppi-1-11.mp3"
  },
  {
    "duration": "02:23",
    "title": "Kurinyy Bog",
    "orig_title": "\u041a\u0443\u0440\u0438\u043d\u044b\u0439 \u0431\u043e\u0433",
    "url": "https://stat1.deti-online.com/a/nZmszlofEbchwh21A2lKUw/1529006671/files/skazki/skazki-tolstogo/kurinyy-bog.mp3"
  },
  {
    "duration": "11:45",
    "title": "Snegurochka",
    "orig_title": "\u0421\u043d\u0435\u0433\u0443\u0440\u043e\u0447\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/SqsKJtJMdmninKdSeorHyQ/1528971762/files/skazki/russkie-narodnye-skazki/snegurochka.mp3"
  },
  {
    "duration": "18:00",
    "title": "Peppi 3 12",
    "orig_title": "\u0413\u043b\u0430\u0432\u0430 1. \u041a\u0430\u043a \u0443 \u041f\u0435\u043f\u043f\u0438 \u043f\u043e\u043a\u0443\u043f\u0430\u044e\u0442 \u0432\u0438\u043b\u043b\u0443 \u041a\u0443\u0440\u0438\u0446\u0430",
    "url": "https://stat1.deti-online.com/a/AuBIyLFlIANw2HLzeUBHCQ/1528972170/files/skazki/skazki-lindgren/peppi-3-12.mp3"
  },
  {
    "duration": "06:16",
    "title": "Kto Skazal Myau",
    "orig_title": "\u041a\u0442\u043e \u0441\u043a\u0430\u0437\u0430\u043b \u00ab\u041c\u042f\u0423\u00bb?",
    "url": "https://stat2.deti-online.com/a/ZP-6bKK9zM6Ey-B76WFacw/1528973401/files/skazki/skazki-suteeva/kto-skazal-myau.mp3"
  },
  {
    "duration": "10:25",
    "title": "Aisty",
    "orig_title": "\u0410\u0438\u0441\u0442\u044b",
    "url": "https://stat1.deti-online.com/a/vF7UgVVB3eYIF1nM3pXBoQ/1528982343/files/skazki/skazki-andersena/aisty.mp3"
  },
  {
    "duration": "13:55",
    "title": "Snegovik",
    "orig_title": "\u0421\u043d\u0435\u0433\u043e\u0432\u0438\u043a",
    "url": "https://stat1.deti-online.com/a/BhJd7SQRYfCyN64HOKyNmA/1528982438/files/skazki/skazki-andersena/snegovik.mp3"
  },
  {
    "duration": "10:30",
    "title": "Pastushja Dudochka",
    "orig_title": "\u041f\u0430\u0441\u0442\u0443\u0448\u044c\u044f \u0434\u0443\u0434\u043e\u0447\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/AN49PFcY_Xb9PCOWm5p5eg/1528978478/files/skazki/russkie-narodnye-skazki/pastushja-dudochka.mp3"
  },
  {
    "duration": "06:22",
    "title": "Kto Zagovorit Pervyi",
    "orig_title": "\u041a\u0442\u043e \u0437\u0430\u0433\u043e\u0432\u043e\u0440\u0438\u0442 \u043f\u0435\u0440\u0432\u044b\u0439",
    "url": "https://stat2.deti-online.com/a/SZDeMbZlnBzC0LS9oK9CVA/1528983255/files/skazki/russkie-narodnye-skazki/kto-zagovorit-pervyi.mp3"
  },
  {
    "duration": "14:28",
    "title": "Smert Shpiona Gadyukina",
    "orig_title": "\u0421\u043c\u0435\u0440\u0442\u044c \u0448\u043f\u0438\u043e\u043d\u0430 \u0413\u0430\u0434\u044e\u043a\u0438\u043d\u0430",
    "url": "https://stat2.deti-online.com/a/XhqH1e-0ZAfz9ADleTjY8A/1528979083/files/skazki/rasskazy-dragunskogo/smert-shpiona-gadyukina.mp3"
  },
  {
    "duration": "15:22",
    "title": "Pastushka I Trubochist",
    "orig_title": "\u041f\u0430\u0441\u0442\u0443\u0448\u043a\u0430 \u0438 \u0442\u0440\u0443\u0431\u043e\u0447\u0438\u0441\u0442",
    "url": "https://stat1.deti-online.com/a/OXDLtyGyAESe36tOwZY5sw/1528990649/files/skazki/skazki-andersena/pastushka-i-trubochist.mp3"
  },
  {
    "duration": "11:01",
    "title": "Kroshka Enot I Tot Kto Sidit V Prudu",
    "orig_title": "\u041a\u0440\u043e\u0448\u043a\u0430 \u0415\u043d\u043e\u0442 \u0438 \u0442\u043e\u0442, \u043a\u0442\u043e \u0441\u0438\u0434\u0438\u0442 \u0432 \u043f\u0440\u0443\u0434\u0443",
    "url": "https://stat2.deti-online.com/a/zi4xCrzI3gdzNc4J5WfjvQ/1528972954/files/skazki/sbornik-skazok/kroshka-enot-i-tot-kto-sidit-v-prudu.mp3"
  },
  {
    "duration": "07:00",
    "title": "Slovo",
    "orig_title": "\u0421\u043b\u043e\u0432\u043e",
    "url": "https://stat1.deti-online.com/a/nzGu2wTnqgJ-t3AMQM0xgw/1528983058/files/skazki/russkie-narodnye-skazki/slovo.mp3"
  },
  {
    "duration": "07:53",
    "title": "Palochka Vyruchalochka",
    "orig_title": "\u041f\u0430\u043b\u043e\u0447\u043a\u0430-\u0432\u044b\u0440\u0443\u0447\u0430\u043b\u043e\u0447\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/XfZ9-Pxu2Qkb7hGmg1ECGQ/1528972600/files/skazki/skazki-suteeva/palochka-vyruchalochka.mp3"
  },
  {
    "duration": "07:37",
    "title": "Kroshechka Havroshechka",
    "orig_title": "\u041a\u0440\u043e\u0448\u0435\u0447\u043a\u0430-\u0425\u0430\u0432\u0440\u043e\u0448\u0435\u0447\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/lpEak0LRav1NMolYX3bPEA/1528974722/files/skazki/russkie-narodnye-skazki/kroshechka-havroshechka.mp3"
  },
  {
    "duration": "22:00",
    "title": "Buzinnaya Matushka",
    "orig_title": "\u0411\u0443\u0437\u0438\u043d\u043d\u0430\u044f \u043c\u0430\u0442\u0443\u0448\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/GFhC0NOZEaTzTUt7lu2bNg/1528992553/files/skazki/skazki-andersena/buzinnaya-matushka.mp3"
  },
  {
    "duration": "00:42",
    "title": "Skryuchennaya Pesnya",
    "orig_title": "\u0421\u043a\u0440\u044e\u0447\u0435\u043d\u043d\u0430\u044f \u043f\u0435\u0441\u043d\u044f",
    "url": "https://stat2.deti-online.com/a/cIocz6pcE-jzrFwZiNk0Jg/1528995281/files/skazki/skazki-chukovskogo/skryuchennaya-pesnya.mp3"
  },
  {
    "duration": "01:54",
    "title": "Ocheski",
    "orig_title": "\u041e\u0447\u0435\u0441\u043a\u0438",
    "url": "https://stat2.deti-online.com/a/3uuW80chXUwbNiTUh2jOAw/1528996023/files/skazki/skazki-bratev-grimm/ocheski.mp3"
  },
  {
    "duration": "14:18",
    "title": "Krokodil",
    "orig_title": "\u041a\u0440\u043e\u043a\u043e\u0434\u0438\u043b",
    "url": "https://stat1.deti-online.com/a/X_MBQYlKlqyoAy6rb8PzBQ/1528973948/files/skazki/skazki-chukovskogo/krokodil.mp3"
  },
  {
    "duration": "21:02",
    "title": "Skoryi Gonec",
    "orig_title": "\u0421\u043a\u043e\u0440\u044b\u0439 \u0433\u043e\u043d\u0435\u0446",
    "url": "https://stat2.deti-online.com/a/exHsOeT0ou5WpStriBma1A/1528984569/files/skazki/russkie-narodnye-skazki/skoryi-gonec.mp3"
  },
  {
    "duration": "1:18",
    "title": "Pervaja Kniga Dzhunglei Ohota Pitona Kaa",
    "orig_title": "\u041e\u0445\u043e\u0442\u0430 \u043f\u0438\u0442\u043e\u043d\u0430 \u041a\u0430\u0430",
    "url": "https://stat1.deti-online.com/a/tSaKG5MzQyClRk0Ty8p2Eg/1528988542/files/skazki/skazki-kiplinga/pervaja-kniga-dzhunglei-ohota-pitona-kaa.mp3"
  },
  {
    "duration": "06:31",
    "title": "Krasnyy Sharik V Sinem Nebe",
    "orig_title": "\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0448\u0430\u0440\u0438\u043a \u0432 \u0441\u0438\u043d\u0435\u043c \u043d\u0435\u0431\u0435",
    "url": "https://stat1.deti-online.com/a/GCH13A-F1h1xNTkYqqTkYQ/1528980962/files/skazki/rasskazy-dragunskogo/krasnyy-sharik-v-sinem-nebe.mp3"
  },
  {
    "duration": "47:06",
    "title": "Chto Ya Videl 20",
    "orig_title": "\u0416\u0435\u043b\u0435\u0437\u043d\u0430\u044f \u0434\u043e\u0440\u043e\u0433\u0430",
    "url": "https://stat1.deti-online.com/a/PD4ZgKyWOV6yoaO5eKI0_w/1528974318/files/skazki/rasskazy-zhitkova/chto-ya-videl-20.mp3"
  },
  {
    "duration": "06:05",
    "title": "Skazka Ob Umnom Myshonke",
    "orig_title": "\u0421\u043a\u0430\u0437\u043a\u0430 \u043e\u0431 \u0443\u043c\u043d\u043e\u043c \u043c\u044b\u0448\u043e\u043d\u043a\u0435",
    "url": "https://stat2.deti-online.com/a/tD2YFhdGzOPy1Kclog-hgw/1528974463/files/skazki/skazki-marshaka/skazka-ob-umnom-myshonke.mp3"
  },
  {
    "duration": "00:28",
    "title": "Chto Sdelala Mura",
    "orig_title": "\u0427\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u043b\u0430 \u041c\u0443\u0440\u0430",
    "url": "https://stat1.deti-online.com/a/ncBEnQ1dE70GA4rM5PJyww/1528984640/files/skazki/skazki-chukovskogo/chto-sdelala-mura.mp3"
  },
  {
    "duration": "10:04",
    "title": "Skazka O Chetyreh Gluhih",
    "orig_title": "\u0421\u043a\u0430\u0437\u043a\u0430 \u043e \u0447\u0435\u0442\u044b\u0440\u0451\u0445 \u0433\u043b\u0443\u0445\u0438\u0445",
    "url": "https://stat1.deti-online.com/a/eZOxkOqDMQ_Cv4vXiyPrRQ/1528990474/files/skazki/skazki-odoevskogo/skazka-o-chetyreh-gluhih.mp3"
  },
  {
    "duration": "03:14",
    "title": "Chto Byvalo 10",
    "orig_title": "\u041d\u0430\u0432\u043e\u0434\u043d\u0435\u043d\u0438\u0435",
    "url": "https://stat2.deti-online.com/a/jlXyf-2Z8AudPdGOUAKhmw/1528980335/files/skazki/rasskazy-zhitkova/chto-byvalo-10.mp3"
  },
  {
    "duration": "44:36",
    "title": "Skazka O Care Saltane",
    "orig_title": "\u0421\u043a\u0430\u0437\u043a\u0430 \u043e \u0446\u0430\u0440\u0435 \u0421\u0430\u043b\u0442\u0430\u043d\u0435",
    "url": "https://stat2.deti-online.com/a/OEjxBX9F9B__zmt4SNJFvg/1528970631/files/skazki/skazki-pushkina/skazka-o-care-saltane.mp3"
  },
  {
    "duration": "1:40",
    "title": "Chernaya Kurica",
    "orig_title": "\u0427\u0435\u0440\u043d\u0430\u044f \u043a\u0443\u0440\u0438\u0446\u0430, \u0438\u043b\u0438 \u041f\u043e\u0434\u0437\u0435\u043c\u043d\u044b\u0435 \u0436\u0438\u0442\u0435\u043b\u0438",
    "url": "https://stat2.deti-online.com/a/ZxLNmI9p8sNbh1xcE4PuEA/1528974081/files/skazki/sbornik-skazok/chernaya-kurica.mp3"
  },
  {
    "duration": "12:16",
    "title": "Skazka O Rybake I Rybke",
    "orig_title": "\u0421\u043a\u0430\u0437\u043a\u0430 \u043e \u0440\u044b\u0431\u0430\u043a\u0435 \u0438 \u0440\u044b\u0431\u043a\u0435",
    "url": "https://stat1.deti-online.com/a/6GCXpe_VHy4jAAiLiYYCsg/1528971179/files/skazki/skazki-pushkina/skazka-o-rybake-i-rybke.mp3"
  },
  {
    "duration": "00:41",
    "title": "Cherepaha",
    "orig_title": "\u0427\u0435\u0440\u0435\u043f\u0430\u0445\u0430",
    "url": "https://stat1.deti-online.com/a/2dqfNikIgSO3APG22weyyg/1528991222/files/skazki/skazki-chukovskogo/cherepaha.mp3"
  },
  {
    "duration": "31:13",
    "title": "Skazka O Rybake I Ego Zhene",
    "orig_title": "\u0421\u043a\u0430\u0437\u043a\u0430 \u043e \u0440\u044b\u0431\u0430\u043a\u0435 \u0438 \u0435\u0433\u043e \u0436\u0435\u043d\u0435",
    "url": "https://stat2.deti-online.com/a/HoLd2En9yZe6EI_FpbMljA/1528981428/files/skazki/skazki-bratev-grimm/skazka-o-rybake-i-ego-zhene.mp3"
  },
  {
    "duration": "06:16",
    "title": "Chey Nos Luchshe",
    "orig_title": "\u0427\u0435\u0439 \u043d\u043e\u0441 \u043b\u0443\u0447\u0448\u0435",
    "url": "https://stat2.deti-online.com/a/dsb10HbFmfRDLKYJbQXO_w/1528976197/files/skazki/rasskazy-bianki/chey-nos-luchshe.mp3"
  },
  {
    "duration": "09:30",
    "title": "Skazka O Pope I O Rabotnike Ego Balde",
    "orig_title": "\u0421\u043a\u0430\u0437\u043a\u0430 \u043e \u043f\u043e\u043f\u0435 \u0438 \u043e \u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0435 \u0435\u0433\u043e \u0411\u0430\u043b\u0434\u0435",
    "url": "https://stat2.deti-online.com/a/qg1LYWTlwqTH8Xg-6l56OQ/1528973068/files/skazki/skazki-pushkina/skazka-o-pope-i-o-rabotnike-ego-balde.mp3"
  },
  {
    "duration": "09:50",
    "title": "Chego Tolko Ne Pridumayut",
    "orig_title": "\u0427\u0435\u0433\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0435 \u043f\u0440\u0438\u0434\u0443\u043c\u0430\u044e\u0442",
    "url": "https://stat2.deti-online.com/a/1nr59d9Wa8sm7Z6M6YaSNg/1528991894/files/audioskazki/chego-tolko-ne-pridumayut.mp3"
  },
  {
    "duration": "28:09",
    "title": "Skazka O Myortvoi Carevne I Semi Bogatyrjah",
    "orig_title": "\u0421\u043a\u0430\u0437\u043a\u0430 \u043e \u043c\u0451\u0440\u0442\u0432\u043e\u0439 \u0446\u0430\u0440\u0435\u0432\u043d\u0435 \u0438 \u0441\u0435\u043c\u0438 \u0431\u043e\u0433\u0430\u0442\u044b\u0440\u044f\u0445",
    "url": "https://stat2.deti-online.com/a/uXowtD7R1V76QjPYL0NYVA/1528970484/files/skazki/skazki-pushkina/skazka-o-myortvoi-carevne-i-semi-bogatyrjah.mp3"
  },
  {
    "duration": "05:46",
    "title": "Chaynik",
    "orig_title": "\u0427\u0430\u0439\u043d\u0438\u043a",
    "url": "https://stat2.deti-online.com/a/4uX3Yj9ZnjZu1LuIDy5j3Q/1528988733/files/audioskazki/chaynik.mp3"
  },
  {
    "duration": "11:40",
    "title": "Skazka O Zolotom Petushke",
    "orig_title": "\u0421\u043a\u0430\u0437\u043a\u0430 \u043e \u0437\u043e\u043b\u043e\u0442\u043e\u043c \u043f\u0435\u0442\u0443\u0448\u043a\u0435",
    "url": "https://stat2.deti-online.com/a/HwM9A_87o7MB-Pz4zoDe0w/1528972154/files/skazki/skazki-pushkina/skazka-o-zolotom-petushke.mp3"
  },
  {
    "duration": "15:39",
    "title": "Cvety Malenkoi Idy",
    "orig_title": "\u0426\u0432\u0435\u0442\u044b \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u043e\u0439 \u0418\u0434\u044b",
    "url": "https://stat1.deti-online.com/a/0UW3UhsTIKsCoHGfJ--ZfA/1528987003/files/skazki/skazki-andersena/cvety-malenkoi-idy.mp3"
  },
  {
    "duration": "04:57",
    "title": "Skazka O Glupom Myshonke",
    "orig_title": "\u0421\u043a\u0430\u0437\u043a\u0430 \u043e \u0433\u043b\u0443\u043f\u043e\u043c \u043c\u044b\u0448\u043e\u043d\u043a\u0435",
    "url": "https://stat2.deti-online.com/a/OnzDKIlRsZwdHQvrizIspw/1528972058/files/skazki/skazki-marshaka/skazka-o-glupom-myshonke.mp3"
  },
  {
    "duration": "19:28",
    "title": "Cvetik Semicvetik",
    "orig_title": "\u0426\u0432\u0435\u0442\u0438\u043a-\u0441\u0435\u043c\u0438\u0446\u0432\u0435\u0442\u0438\u043a",
    "url": "https://stat1.deti-online.com/a/FxmhiHYnI29njvpJYU7JDA/1528969912/files/skazki/sbornik-skazok/cvetik-semicvetik.mp3"
  },
  {
    "duration": "26:35",
    "title": "Skazanie O Gordom Aggee",
    "orig_title": "\u0421\u043a\u0430\u0437\u0430\u043d\u0438\u0435 \u043e \u0433\u043e\u0440\u0434\u043e\u043c \u0410\u0433\u0433\u0435\u0435",
    "url": "https://stat2.deti-online.com/a/Husqv43KaESLKq5c_9_Txw/1528995578/files/skazki/skazki-garshina/skazanie-o-gordom-aggee.mp3"
  },
  {
    "duration": "07:11",
    "title": "Carica Pchel",
    "orig_title": "\u0426\u0430\u0440\u0438\u0446\u0430 \u043f\u0447\u0435\u043b",
    "url": "https://stat1.deti-online.com/a/umtLrTHxQizAame3I9YVcg/1528980188/files/skazki/skazki-bratev-grimm/carica-pchel.mp3"
  },
  {
    "duration": "12:09",
    "title": "Sinjaja Boroda",
    "orig_title": "\u0421\u0438\u043d\u044f\u044f \u0431\u043e\u0440\u043e\u0434\u0430",
    "url": "https://stat1.deti-online.com/a/xl20lMmAM9GvYMz4wLdZkw/1528975032/files/skazki/skazki-sharlja-perro/sinjaja-boroda.mp3"
  },
  {
    "duration": "18:00",
    "title": "Carevna Ljagushka",
    "orig_title": "\u0426\u0430\u0440\u0435\u0432\u043d\u0430-\u043b\u044f\u0433\u0443\u0448\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/JNFRNPa3zMy91-N44u-Ekw/1528970958/files/skazki/russkie-narodnye-skazki/carevna-ljagushka.mp3"
  },
  {
    "duration": "06:45",
    "title": "Siniy Lapot",
    "orig_title": "\u0421\u0438\u043d\u0438\u0439 \u043b\u0430\u043f\u043e\u0442\u044c",
    "url": "https://stat2.deti-online.com/a/f3eBCZ32hlz__w2uAp5a-A/1528995680/files/skazki/rasskazy-prishvina/siniy-lapot.mp3"
  },
  {
    "duration": "05:55",
    "title": "Carevna Nesmeyana",
    "orig_title": "\u0426\u0430\u0440\u0435\u0432\u043d\u0430 \u041d\u0435\u0441\u043c\u0435\u044f\u043d\u0430",
    "url": "https://stat1.deti-online.com/a/IoG82qYOc9olU_1A65uBqg/1528973993/files/skazki/russkie-narodnye-skazki/carevna-nesmeyana.mp3"
  },
  {
    "duration": "05:52",
    "title": "Siniy Kinzhal",
    "orig_title": "\u0421\u0438\u043d\u0438\u0439 \u043a\u0438\u043d\u0436\u0430\u043b",
    "url": "https://stat2.deti-online.com/a/s_LlvJwONeAvgo3qm5atHg/1528987076/files/skazki/rasskazy-dragunskogo/siniy-kinzhal.mp3"
  },
  {
    "duration": "09:11",
    "title": "Hrustalnyy Shar",
    "orig_title": "\u0425\u0440\u0443\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0439 \u0448\u0430\u0440",
    "url": "https://stat2.deti-online.com/a/G5QOMRiBg0oMJR2jNRvefw/1528985935/files/skazki/skazki-bratev-grimm/hrustalnyy-shar.mp3"
  },
  {
    "duration": "16:10",
    "title": "Sivka Burka",
    "orig_title": "\u0421\u0438\u0432\u043a\u0430-\u0431\u0443\u0440\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/2Q_xcPSTpUzf2XYGybip1g/1528971677/files/skazki/russkie-narodnye-skazki/sivka-burka.mp3"
  },
  {
    "duration": "05:56",
    "title": "Hrustalnaja Gora",
    "orig_title": "\u0425\u0440\u0443\u0441\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u0433\u043e\u0440\u0430",
    "url": "https://stat2.deti-online.com/a/yM6k5Imr4NLOpCqlzGwhjw/1528977958/files/skazki/russkie-narodnye-skazki/hrustalnaja-gora.mp3"
  },
  {
    "duration": "06:52",
    "title": "Sestrica Alyonushka I Bratec Ivanushka",
    "orig_title": "\u0421\u0435\u0441\u0442\u0440\u0438\u0446\u0430 \u0410\u043b\u0451\u043d\u0443\u0448\u043a\u0430 \u0438 \u0431\u0440\u0430\u0442\u0435\u0446 \u0418\u0432\u0430\u043d\u0443\u0448\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/uSf3GNLhpn5vpKoEv_YCzQ/1528973519/files/skazki/russkie-narodnye-skazki/sestrica-alyonushka-i-bratec-ivanushka.mp3"
  },
  {
    "duration": "03:34",
    "title": "Hromka",
    "orig_title": "\u0425\u0440\u043e\u043c\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/ja16fgHW04CSggJ3pYUeeg/1528997604/files/skazki/rasskazy-prishvina/hromka.mp3"
  },
  {
    "duration": "08:23",
    "title": "Sestra Moya Kseniya",
    "orig_title": "\u0421\u0435\u0441\u0442\u0440\u0430 \u043c\u043e\u044f \u041a\u0441\u0435\u043d\u0438\u044f",
    "url": "https://stat1.deti-online.com/a/OeqDsQjT6PDdm6fg0S-qMQ/1528975586/files/skazki/rasskazy-dragunskogo/sestra-moya-kseniya.mp3"
  },
  {
    "duration": "15:46",
    "title": "Hrabryi Portnjazhka",
    "orig_title": "\u0425\u0440\u0430\u0431\u0440\u044b\u0439 \u043f\u043e\u0440\u0442\u043d\u044f\u0436\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/yyQ1Tt4DY5tP4jUMX-C--A/1528976232/files/skazki/skazki-bratev-grimm/hrabryi-portnjazhka.mp3"
  },
  {
    "duration": "15:35",
    "title": "Serebrjanoe Blyudechko I Nalivnoe Jablochko",
    "orig_title": "\u0421\u0435\u0440\u0435\u0431\u0440\u044f\u043d\u043e\u0435 \u0431\u043b\u044e\u0434\u0435\u0447\u043a\u043e \u0438 \u043d\u0430\u043b\u0438\u0432\u043d\u043e\u0435 \u044f\u0431\u043b\u043e\u0447\u043a\u043e",
    "url": "https://stat1.deti-online.com/a/whqN9R4aM1XkheX9tlzK4A/1528976059/files/skazki/russkie-narodnye-skazki/serebrjanoe-blyudechko-i-nalivnoe-jablochko.mp3"
  },
  {
    "duration": "56:00",
    "title": "Holodnoe Serdce",
    "orig_title": "\u0425\u043e\u043b\u043e\u0434\u043d\u043e\u0435 \u0441\u0435\u0440\u0434\u0446\u0435",
    "url": "https://stat1.deti-online.com/a/FkuiiSgUbiardDpEQyP6pA/1528973249/files/skazki/skazki-gaufa/holodnoe-serdce.mp3"
  },
  {
    "duration": "13:32",
    "title": "Serebrjanaja Monetka",
    "orig_title": "\u0421\u0435\u0440\u0435\u0431\u0440\u044f\u043d\u0430\u044f \u043c\u043e\u043d\u0435\u0442\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/jST6P6TlY-gWCvL1wuDnPw/1528986924/files/skazki/skazki-andersena/serebrjanaja-monetka.mp3"
  },
  {
    "duration": "04:09",
    "title": "Hleb I Zoloto",
    "orig_title": "\u0425\u043b\u0435\u0431 \u0438 \u0437\u043e\u043b\u043e\u0442\u043e",
    "url": "https://stat1.deti-online.com/a/CnpyFDSGepOBCPoDCfiFfA/1528988306/files/skazki/arabskie-skazki/hleb-i-zoloto.mp3"
  },
  {
    "duration": "21:32",
    "title": "Seraja Sheika",
    "orig_title": "\u0421\u0435\u0440\u0430\u044f \u0428\u0435\u0439\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/yJ6_9V0jx5NbMxeqb_cKUg/1528974590/files/skazki/skazki-mamina-sibirjaka/seraja-sheika.mp3"
  },
  {
    "duration": "09:11",
    "title": "Hitryy Sposob",
    "orig_title": "\u0425\u0438\u0442\u0440\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431",
    "url": "https://stat2.deti-online.com/a/mtAvz3dHp5amKw1qt69wQw/1528984008/files/skazki/rasskazy-dragunskogo/hitryy-sposob.mp3"
  },
  {
    "duration": "13:45",
    "title": "Sem Simeonov",
    "orig_title": "\u0421\u0435\u043c\u044c \u0421\u0438\u043c\u0435\u043e\u043d\u043e\u0432",
    "url": "https://stat1.deti-online.com/a/Z11s96dBTDzoIRpSqDlIuQ/1528981704/files/skazki/russkie-narodnye-skazki/sem-simeonov.mp3"
  },
  {
    "duration": "14:16",
    "title": "Hitraja Nauka",
    "orig_title": "\u0425\u0438\u0442\u0440\u0430\u044f \u043d\u0430\u0443\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/d7S1YpyCx3WvQa9RmkWk6w/1528978201/files/skazki/russkie-narodnye-skazki/hitraja-nauka.mp3"
  },
  {
    "duration": "07:13",
    "title": "Sem Voronov",
    "orig_title": "\u0421\u0435\u043c\u044c \u0432\u043e\u0440\u043e\u043d\u043e\u0432",
    "url": "https://stat2.deti-online.com/a/5kANdtIGcn7a6gOcDSVKcw/1528987635/files/skazki/skazki-bratev-grimm/sem-voronov.mp3"
  },
  {
    "duration": "19:16",
    "title": "Finist Jasnyi Sokol",
    "orig_title": "\u0424\u0438\u043d\u0438\u0441\u0442-\u044f\u0441\u043d\u044b\u0439 \u0441\u043e\u043a\u043e\u043b",
    "url": "https://stat1.deti-online.com/a/h45iMLRqPZM-94vQwmISmQ/1528975057/files/skazki/russkie-narodnye-skazki/finist-jasnyi-sokol.mp3"
  },
  {
    "duration": "06:34",
    "title": "Svinja Kopilka",
    "orig_title": "\u0421\u0432\u0438\u043d\u044c\u044f-\u043a\u043e\u043f\u0438\u043b\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/9kIu8UJ2ul8bAov_amdkwQ/1528984044/files/skazki/skazki-andersena/svinja-kopilka.mp3"
  },
  {
    "duration": "06:42",
    "title": "Fedorino Gore",
    "orig_title": "\u0424\u0435\u0434\u043e\u0440\u0438\u043d\u043e \u0433\u043e\u0440\u0435",
    "url": "https://stat1.deti-online.com/a/ke5RMbFkAxqx13lFLndCyg/1528971509/files/skazki/skazki-chukovskogo/fedorino-gore.mp3"
  },
  {
    "duration": "11:30",
    "title": "Svinopas",
    "orig_title": "\u0421\u0432\u0438\u043d\u043e\u043f\u0430\u0441",
    "url": "https://stat1.deti-online.com/a/cQO-mJerUWWw9P6xmMYZBA/1528983087/files/skazki/skazki-andersena/svinopas.mp3"
  },
  {
    "duration": "05:58",
    "title": "Fedina Zadacha",
    "orig_title": "\u0424\u0435\u0434\u0438\u043d\u0430 \u0437\u0430\u0434\u0430\u0447\u0430",
    "url": "https://stat1.deti-online.com/a/PJIShoPP0n_QqiuZD2IGyA/1528974909/files/skazki/rasskazy-nosova/fedina-zadacha.mp3"
  },
  {
    "duration": "08:38",
    "title": "Sverhu Vniz Naiskosok",
    "orig_title": "\u0421\u0432\u0435\u0440\u0445\u0443 \u0432\u043d\u0438\u0437, \u043d\u0430\u0438\u0441\u043a\u043e\u0441\u043e\u043a",
    "url": "https://stat2.deti-online.com/a/ALg5F0zeSNF6uJR8guS_FQ/1528978317/files/skazki/rasskazy-dragunskogo/sverhu-vniz-naiskosok.mp3"
  },
  {
    "duration": "12:15",
    "title": "Elena Premudraya",
    "orig_title": "\u0415\u043b\u0435\u043d\u0430 \u041f\u0440\u0435\u043c\u0443\u0434\u0440\u0430\u044f",
    "url": "https://stat1.deti-online.com/a/WEdmfxi6qQz2DfNXURWbJQ/1528978026/files/skazki/russkie-narodnye-skazki/elena-premudraya.mp3"
  },
  {
    "duration": "05:05",
    "title": "Krasnaja Shapochka 2",
    "orig_title": "\u041a\u0440\u0430\u0441\u043d\u0430\u044f \u0448\u0430\u043f\u043e\u0447\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/IfGgetWKItimSgmQQmB63A/1528970631/files/audioskazki/krasnaja-shapochka-2.mp3"
  },
  {
    "duration": "35:45",
    "title": "Volshebnyy Magazin",
    "orig_title": "\u0412\u043e\u043b\u0448\u0435\u0431\u043d\u044b\u0439 \u043c\u0430\u0433\u0430\u0437\u0438\u043d",
    "url": "https://stat2.deti-online.com/a/dxV1GCpwkdCnK83Of3kAXQ/1528975525/files/skazki/skazki-suteeva/volshebnyy-magazin.mp3"
  },
  {
    "duration": "03:55",
    "title": "Kradenoe Solnce",
    "orig_title": "\u041a\u0440\u0430\u0434\u0435\u043d\u043e\u0435 \u0441\u043e\u043b\u043d\u0446\u0435",
    "url": "https://stat1.deti-online.com/a/lVRGXuHiWAdnQIEWd5XfXA/1528972923/files/skazki/skazki-chukovskogo/kradenoe-solnce.mp3"
  },
  {
    "duration": "00:17",
    "title": "Ezhiki Smeyutsya",
    "orig_title": "\u0415\u0436\u0438\u043a\u0438 \u0441\u043c\u0435\u044e\u0442\u0441\u044f",
    "url": "https://stat1.deti-online.com/a/SFSlOevbQxEMiEfzFOLGqg/1528983729/files/skazki/skazki-chukovskogo/ezhiki-smeyutsya.mp3"
  },
  {
    "duration": "24:56",
    "title": "Volshebnoe Jablochko",
    "orig_title": "\u0412\u043e\u043b\u0448\u0435\u0431\u043d\u043e\u0435 \u044f\u0431\u043b\u043e\u0447\u043a\u043e",
    "url": "https://stat1.deti-online.com/a/7R5quqd8hiNXFbq3JSH2Aw/1528974651/files/skazki/russkie-narodnye-skazki/volshebnoe-jablochko.mp3"
  },
  {
    "duration": "35:16",
    "title": "Koshkin Dom",
    "orig_title": "\u041a\u043e\u0448\u043a\u0438\u043d \u0434\u043e\u043c",
    "url": "https://stat1.deti-online.com/a/2hENXn2OGHGnWHVimcxC-A/1528971012/files/skazki/skazki-marshaka/koshkin-dom.mp3"
  },
  {
    "duration": "06:10",
    "title": "Ezh",
    "orig_title": "\u0401\u0436",
    "url": "https://stat2.deti-online.com/a/v-g-Uu4FgB6kV0c2CY6uqA/1528980589/files/skazki/rasskazy-prishvina/ezh.mp3"
  },
  {
    "duration": "42:14",
    "title": "Volshebnoe Kolco",
    "orig_title": "\u0412\u043e\u043b\u0448\u0435\u0431\u043d\u043e\u0435 \u043a\u043e\u043b\u044c\u0446\u043e",
    "url": "https://stat2.deti-online.com/a/uYtOvCjxNvciHIz-XUpRZw/1528974706/files/skazki/russkie-narodnye-skazki/volshebnoe-kolco.mp3"
  },
  {
    "duration": "00:37",
    "title": "Buterbrod",
    "orig_title": "\u0411\u0443\u0442\u0435\u0440\u0431\u0440\u043e\u0434",
    "url": "https://stat2.deti-online.com/a/ZD3HqOZl__VUnyzVec8SJw/1528983723/files/skazki/skazki-chukovskogo/buterbrod.mp3"
  },
  {
    "duration": "33:25",
    "title": "Koshka Kotoraya Gulyala Sama Po Sebe",
    "orig_title": "\u041a\u043e\u0448\u043a\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0433\u0443\u043b\u044f\u043b\u0430 \u0441\u0430\u043c\u0430 \u043f\u043e \u0441\u0435\u0431\u0435",
    "url": "https://stat1.deti-online.com/a/goLEEey5yanM0xP2UtLO_g/1528975443/files/skazki/skazki-kiplinga/koshka-kotoraya-gulyala-sama-po-sebe.mp3"
  },
  {
    "duration": "01:14",
    "title": "Ezh",
    "orig_title": "\u0415\u0436",
    "url": "https://stat2.deti-online.com/a/NuuDVRs4Ij-SRlWD3_GhPQ/1529000919/files/skazki/skazki-tolstogo/ezh.mp3"
  },
  {
    "duration": "5:18",
    "title": "Volshebnik Izumrudnogo Goroda",
    "orig_title": "\u0412\u043e\u043b\u0448\u0435\u0431\u043d\u0438\u043a \u0418\u0437\u0443\u043c\u0440\u0443\u0434\u043d\u043e\u0433\u043e \u0433\u043e\u0440\u043e\u0434\u0430",
    "url": "https://stat1.deti-online.com/a/FUMMPOdgNASsnTaj9FCfUg/1528970295/files/skazki/sbornik-skazok/volshebnik-izumrudnogo-goroda.mp3"
  },
  {
    "duration": "00:47",
    "title": "Kotausi I Mausi",
    "orig_title": "\u041a\u043e\u0442\u0430\u0443\u0441\u0438 \u0438 \u041c\u0430\u0443\u0441\u0438",
    "url": "https://stat1.deti-online.com/a/hcARb5VLm823MGfV-CJ0jQ/1528995275/files/skazki/skazki-chukovskogo/kotausi-i-mausi.mp3"
  },
  {
    "duration": "06:10",
    "title": "Dyadya Misha 2",
    "orig_title": "\u0414\u044f\u0434\u044f \u041c\u0438\u0448\u0430",
    "url": "https://stat2.deti-online.com/a/ynBupNKgZjD6tGYCV41Bvw/1528973139/files/audioskazki/dyadya-misha-2.mp3"
  },
  {
    "duration": "43:41",
    "title": "Volshebnaya Lampa Alladina",
    "orig_title": "\u0412\u043e\u043b\u0448\u0435\u0431\u043d\u0430\u044f \u043b\u0430\u043c\u043f\u0430 \u0410\u043b\u0430\u0434\u0434\u0438\u043d\u0430",
    "url": "https://stat2.deti-online.com/a/IVM7S60q56WxewKIbPS2vg/1528972596/files/skazki/arabskie-skazki/volshebnaya-lampa-alladina.mp3"
  },
  {
    "duration": "07:53",
    "title": "Kot Rybolov",
    "orig_title": "\u041a\u043e\u0442-\u0440\u044b\u0431\u043e\u043b\u043e\u0432",
    "url": "https://stat1.deti-online.com/a/49B47u0-KkJqY7LUdCcxMw/1528976862/files/skazki/skazki-suteeva/kot-rybolov.mp3"
  },
  {
    "duration": "29:09",
    "title": "Dyuimovochka",
    "orig_title": "\u0414\u044e\u0439\u043c\u043e\u0432\u043e\u0447\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/rOBWAWzUp-YxJ4g3ouKM9Q/1528969899/files/skazki/skazki-andersena/dyuimovochka.mp3"
  },
  {
    "duration": "07:47",
    "title": "Volshebnaya Dudochka",
    "orig_title": "\u0412\u043e\u043b\u0448\u0435\u0431\u043d\u0430\u044f \u0434\u0443\u0434\u043e\u0447\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/WDDzBRiXDS6Ztj6oeAwk_Q/1528981815/files/skazki/russkie-narodnye-skazki/volshebnaya-dudochka.mp3"
  },
  {
    "duration": "01:46",
    "title": "Kot Vaska",
    "orig_title": "\u041a\u043e\u0442 \u0412\u0430\u0441\u044c\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/y8SgJ3U-Z2GeDO9M9twKkQ/1528996767/files/skazki/skazki-tolstogo/kot-vaska.mp3"
  },
  {
    "duration": "13:24",
    "title": "Dudochka I Kuvshinchik",
    "orig_title": "\u0414\u0443\u0434\u043e\u0447\u043a\u0430 \u0438 \u043a\u0443\u0432\u0448\u0438\u043d\u0447\u0438\u043a",
    "url": "https://stat1.deti-online.com/a/4A2rw7gmJnn5WMTrinf9iQ/1528970347/files/skazki/sbornik-skazok/dudochka-i-kuvshinchik.mp3"
  },
  {
    "duration": "08:05",
    "title": "Volk I Semero Kozljat",
    "orig_title": "\u0412\u043e\u043b\u043a \u0438 \u0441\u0435\u043c\u0435\u0440\u043e \u043a\u043e\u0437\u043b\u044f\u0442",
    "url": "https://stat1.deti-online.com/a/wVDqje_NHKIsLxCn3ZYa-Q/1528970079/files/skazki/skazki-bratev-grimm/volk-i-semero-kozljat.mp3"
  },
  {
    "duration": "14:03",
    "title": "Kot V Sapogah",
    "orig_title": "\u041a\u043e\u0442 \u0432 \u0441\u0430\u043f\u043e\u0433\u0430\u0445",
    "url": "https://stat2.deti-online.com/a/KyVA3tkrhDxoqYYYF5Z6Ow/1528971717/files/skazki/skazki-sharlja-perro/kot-v-sapogah.mp3"
  },
  {
    "duration": "05:38",
    "title": "Druzhba Koshki I Myshki",
    "orig_title": "\u0414\u0440\u0443\u0436\u0431\u0430 \u043a\u043e\u0448\u043a\u0438 \u0438 \u043c\u044b\u0448\u043a\u0438",
    "url": "https://stat1.deti-online.com/a/0YhId0FyBzBr8Rdta-b--w/1528991687/files/skazki/skazki-bratev-grimm/druzhba-koshki-i-myshki.mp3"
  },
  {
    "duration": "21:55",
    "title": "Vitya Maleev 21",
    "orig_title": "\u0413\u043b\u0430\u0432\u0430 1",
    "url": "https://stat2.deti-online.com/a/ke6fnh2qFeazVYUjUjtlQA/1528970181/files/skazki/rasskazy-nosova/vitya-maleev-21.mp3"
  },
  {
    "duration": "03:10",
    "title": "Kot",
    "orig_title": "\u041a\u043e\u0442",
    "url": "https://stat2.deti-online.com/a/l9fNYcD-EdrVWToMHhywrw/1528997060/files/skazki/rasskazy-prishvina/kot.mp3"
  },
  {
    "duration": "07:25",
    "title": "Drug Detstva",
    "orig_title": "\u0414\u0440\u0443\u0433 \u0434\u0435\u0442\u0441\u0442\u0432\u0430",
    "url": "https://stat2.deti-online.com/a/al83oEtrEVpiRfCPgnRkdA/1528975465/files/skazki/rasskazy-dragunskogo/drug-detstva.mp3"
  },
  {
    "duration": "1:37",
    "title": "Vinni Puh I Vse Vse Vse",
    "orig_title": "\u0412\u0438\u043d\u043d\u0438-\u041f\u0443\u0445 \u0438 \u0432\u0441\u0435-\u0432\u0441\u0435-\u0432\u0441\u0435",
    "url": "https://stat1.deti-online.com/a/FTWAZwLmdyMKaG-MYRUkLg/1528970481/files/skazki/sbornik-skazok/vinni-puh-i-vse-vse-vse.mp3"
  },
  {
    "duration": "10:09",
    "title": "Korol Ljagushonok Ili Zheleznyi Genrih",
    "orig_title": "\u041a\u043e\u0440\u043e\u043b\u044c-\u043b\u044f\u0433\u0443\u0448\u043e\u043d\u043e\u043a, \u0438\u043b\u0438 \u0416\u0435\u043b\u0435\u0437\u043d\u044b\u0439 \u0413\u0435\u043d\u0440\u0438\u0445",
    "url": "https://stat1.deti-online.com/a/YCDZgOyFPrLm2wHXpAEYUw/1528977516/files/skazki/skazki-bratev-grimm/korol-ljagushonok-ili-zheleznyi-genrih.mp3"
  },
  {
    "duration": "08:42",
    "title": "Doch Semiletka",
    "orig_title": "\u0414\u043e\u0447\u044c-\u0441\u0435\u043c\u0438\u043b\u0435\u0442\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/Cv2DXRD7kmbI8TMlCTPLmQ/1528989538/files/skazki/russkie-narodnye-skazki/doch-semiletka.mp3"
  },
  {
    "duration": "02:26",
    "title": "Vesnoy",
    "orig_title": "\u0412\u0435\u0441\u043d\u043e\u0439",
    "url": "https://stat1.deti-online.com/a/vS7185J3gXRDrm1xOiGdog/1528977195/files/skazki/skazki-suteeva/vesnoy.mp3"
  },
  {
    "duration": "14:43",
    "title": "Korol Drozdoborod",
    "orig_title": "\u041a\u043e\u0440\u043e\u043b\u044c \u0414\u0440\u043e\u0437\u0434\u043e\u0431\u043e\u0440\u043e\u0434",
    "url": "https://stat2.deti-online.com/a/Vl8jazrIngo5Sv_Z83lFeA/1528979045/files/skazki/skazki-bratev-grimm/korol-drozdoborod.mp3"
  },
  {
    "duration": "08:44",
    "title": "Doch I Padcherica",
    "orig_title": "\u0414\u043e\u0447\u044c \u0438 \u043f\u0430\u0434\u0447\u0435\u0440\u0438\u0446\u0430",
    "url": "https://stat2.deti-online.com/a/HlfOq1q3Om7GvHzWchqcVQ/1528978079/files/skazki/russkie-narodnye-skazki/doch-i-padcherica.mp3"
  },
  {
    "duration": "43:31",
    "title": "Vtoraja Kniga Dzhunglei Vesna",
    "orig_title": "\u0412\u0435\u0441\u043d\u0430",
    "url": "https://stat2.deti-online.com/a/9kkz9O3N0dzao_JkzFVmmA/1528988185/files/skazki/skazki-kiplinga/vtoraja-kniga-dzhunglei-vesna.mp3"
  },
  {
    "duration": "09:14",
    "title": "Korolek I Medved",
    "orig_title": "\u041a\u043e\u0440\u043e\u043b\u0435\u043a \u0438 \u043c\u0435\u0434\u0432\u0435\u0434\u044c",
    "url": "https://stat1.deti-online.com/a/wybftzU4klFqwHKL4d5tAw/1528993655/files/skazki/skazki-bratev-grimm/korolek-i-medved.mp3"
  },
  {
    "duration": "1:54",
    "title": "Domovenok Kuzya",
    "orig_title": "\u0414\u043e\u043c\u043e\u0432\u0451\u043d\u043e\u043a \u041a\u0443\u0437\u044f",
    "url": "https://stat1.deti-online.com/a/OQeCHmlkDOMGwG8GqlUZsw/1528970828/files/skazki/sbornik-skazok/domovenok-kuzya.mp3"
  },
  {
    "duration": "01:56",
    "title": "Vershki I Koreshki",
    "orig_title": "\u0412\u0435\u0440\u0448\u043a\u0438 \u0438 \u043a\u043e\u0440\u0435\u0448\u043a\u0438",
    "url": "https://stat2.deti-online.com/a/Tt6fnKYrVMPauJ5QJK5CwQ/1528976386/files/skazki/russkie-narodnye-skazki/vershki-i-koreshki.mp3"
  },
  {
    "duration": "3:10",
    "title": "Korolevstvo Krivyh Zerkal",
    "orig_title": "\u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0441\u0442\u0432\u043e \u043a\u0440\u0438\u0432\u044b\u0445 \u0437\u0435\u0440\u043a\u0430\u043b",
    "url": "https://stat2.deti-online.com/a/g8MrK9rDM-J7MtgzV_t6Gg/1528971306/files/skazki/sbornik-skazok/korolevstvo-krivyh-zerkal.mp3"
  },
  {
    "duration": "02:08",
    "title": "Vernoe Sredstvo",
    "orig_title": "\u0412\u0435\u0440\u043d\u043e\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043e",
    "url": "https://stat2.deti-online.com/a/v31JSBy6XK_Dcg9KpauG1A/1528989674/files/skazki/arabskie-skazki/vernoe-sredstvo.mp3"
  },
  {
    "duration": "19:38",
    "title": "Dikiy Pomeschik",
    "orig_title": "\u0414\u0438\u043a\u0438\u0439 \u043f\u043e\u043c\u0435\u0449\u0438\u043a",
    "url": "https://stat1.deti-online.com/a/b4GoGgvOSPDP9PUJVwDlKg/1528983730/files/skazki/skazki-saltykova-schedrina/dikiy-pomeschik.mp3"
  },
  {
    "duration": "06:22",
    "title": "Bychok Chernyy Bochok Belye Kopytca",
    "orig_title": "\u0411\u044b\u0447\u043e\u043a - \u0447\u0451\u0440\u043d\u044b\u0439 \u0431\u043e\u0447\u043e\u043a, \u0431\u0435\u043b\u044b\u0435 \u043a\u043e\u043f\u044b\u0442\u0446\u0430",
    "url": "https://stat1.deti-online.com/a/a0Ttyej8y3quUYHAP1cljw/1528984112/files/skazki/russkie-narodnye-skazki/bychok-chernyy-bochok-belye-kopytca.mp3"
  },
  {
    "duration": "55:15",
    "title": "Vtoraja Kniga Dzhunglei Korolevskii Ankas",
    "orig_title": "\u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0441\u043a\u0438\u0439 \u0430\u043d\u043a\u0430\u0441",
    "url": "https://stat1.deti-online.com/a/hXZ1xGSUoDuRkZi77P7hHw/1528991901/files/skazki/skazki-kiplinga/vtoraja-kniga-dzhunglei-korolevskii-ankas.mp3"
  },
  {
    "duration": "12:35",
    "title": "Dikie Lebedi",
    "orig_title": "\u0414\u0438\u043a\u0438\u0435 \u043b\u0435\u0431\u0435\u0434\u0438",
    "url": "https://stat2.deti-online.com/a/B0HBAwcUXg0WTy8qwubk_Q/1528975967/files/skazki/skazki-andersena/dikie-lebedi.mp3"
  },
  {
    "duration": "09:15",
    "title": "Vereteno Tkackiy Chelnok I Igolka",
    "orig_title": "\u0412\u0435\u0440\u0435\u0442\u0435\u043d\u043e, \u0442\u043a\u0430\u0446\u043a\u0438\u0439 \u0447\u0435\u043b\u043d\u043e\u043a \u0438 \u0438\u0433\u043e\u043b\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/QaxAGPTnP4ZkM_FG2RtL5Q/1528992442/files/skazki/skazki-bratev-grimm/vereteno-tkackiy-chelnok-i-igolka.mp3"
  },
  {
    "duration": "28:41",
    "title": "Korolevskie Deti",
    "orig_title": "\u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0441\u043a\u0438\u0435 \u0434\u0435\u0442\u0438",
    "url": "https://stat1.deti-online.com/a/BTilQ4se3De9SiE1TF4TMg/1528982955/files/skazki/skazki-bratev-grimm/korolevskie-deti.mp3"
  },
  {
    "duration": "03:03",
    "title": "Verblyud",
    "orig_title": "\u0412\u0435\u0440\u0431\u043b\u044e\u0434",
    "url": "https://stat1.deti-online.com/a/Y5iKtxfb2zxnAYRz1GdWLg/1529000398/files/skazki/skazki-tolstogo/verblyud.mp3"
  },
  {
    "duration": "02:17",
    "title": "Korablik",
    "orig_title": "\u041a\u043e\u0440\u0430\u0431\u043b\u0438\u043a",
    "url": "https://stat1.deti-online.com/a/s6Pe7Unucwx_IwgEjMy4kQ/1528975545/files/skazki/skazki-suteeva/korablik.mp3"
  },
  {
    "duration": "12:20",
    "title": "Divo Divnoe Chudo Chudnoe",
    "orig_title": "\u0414\u0438\u0432\u043e \u0434\u0438\u0432\u043d\u043e\u0435, \u0447\u0443\u0434\u043e \u0447\u0443\u0434\u043d\u043e\u0435",
    "url": "https://stat1.deti-online.com/a/srhgKTd7NQ-ruWUiSiNq3A/1528974389/files/skazki/russkie-narodnye-skazki/divo-divnoe-chudo-chudnoe.mp3"
  },
  {
    "duration": "15:26",
    "title": "Vasya Veselkin",
    "orig_title": "\u0412\u0430\u0441\u044f \u0412\u0435\u0441\u0451\u043b\u043a\u0438\u043d",
    "url": "https://stat2.deti-online.com/a/354NlAKa7n3CCyfr9t0LMg/1528986010/files/skazki/rasskazy-prishvina/vasya-veselkin.mp3"
  },
  {
    "duration": "16:20",
    "title": "Konyaga",
    "orig_title": "\u041a\u043e\u043d\u044f\u0433\u0430",
    "url": "https://stat2.deti-online.com/a/TngPU0DGzoxzMN9auQwf7A/1529001902/files/skazki/skazki-saltykova-schedrina/konyaga.mp3"
  },
  {
    "duration": "08:19",
    "title": "Dzhelsomino V Strane Lzhecov 21",
    "orig_title": "\u0413\u043b\u0430\u0432\u0430 1",
    "url": "https://stat2.deti-online.com/a/AL0Ewl9QUvtOBt_-MnHjAQ/1528972775/files/skazki/skazki-rodari/dzhelsomino-v-strane-lzhecov-21.mp3"
  },
  {
    "duration": "23:24",
    "title": "Vasilisa Prekrasnaja",
    "orig_title": "\u0412\u0430\u0441\u0438\u043b\u0438\u0441\u0430 \u041f\u0440\u0435\u043a\u0440\u0430\u0441\u043d\u0430\u044f",
    "url": "https://stat1.deti-online.com/a/1sYZkob8_Q9nYa0yYtf0mg/1528970548/files/skazki/russkie-narodnye-skazki/vasilisa-prekrasnaja.mp3"
  },
  {
    "duration": "38:02",
    "title": "Konek Gorbunok 3",
    "orig_title": "\u0427\u0430\u0441\u0442\u044c \u043f\u0435\u0440\u0432\u0430\u044f. \u041d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441\u043a\u0430\u0437\u043a\u0430 \u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f\u2026",
    "url": "https://stat1.deti-online.com/a/8lU_oc0NpyMoK6rWpOzCtA/1528970771/files/skazki/sbornik-skazok/konek-gorbunok-3.mp3"
  },
  {
    "duration": "13:14",
    "title": "Derevyannyy Orel",
    "orig_title": "\u0414\u0435\u0440\u0435\u0432\u044f\u043d\u043d\u044b\u0439 \u043e\u0440\u0435\u043b",
    "url": "https://stat2.deti-online.com/a/nMYB15qy66VnF3UxQhs5rg/1528976317/files/skazki/russkie-narodnye-skazki/derevyannyy-orel.mp3"
  },
  {
    "duration": "19:34",
    "title": "Vankiny Imeniny",
    "orig_title": "\u0412\u0430\u043d\u044c\u043a\u0438\u043d\u044b \u0438\u043c\u0435\u043d\u0438\u043d\u044b",
    "url": "https://stat1.deti-online.com/a/byK1pkGJvNmX2UAphpMVLA/1528982500/files/skazki/skazki-mamina-sibirjaka/vankiny-imeniny.mp3"
  },
  {
    "duration": "04:29",
    "title": "Kolobok 2",
    "orig_title": "\u041a\u043e\u043b\u043e\u0431\u043e\u043a",
    "url": "https://stat2.deti-online.com/a/kk_9H_5ANn4H67hpy3TcgQ/1528970145/files/audioskazki/kolobok-2.mp3"
  },
  {
    "duration": "21:36",
    "title": "Devushka Dikarka",
    "orig_title": "\u0414\u0435\u0432\u0443\u0448\u043a\u0430-\u0434\u0438\u043a\u0430\u0440\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/f9JhnYjBOZaBmb01Q-Ip0w/1528981370/files/skazki/skazki-bratev-grimm/devushka-dikarka.mp3"
  },
  {
    "duration": "2:55",
    "title": "V Strane Nevyuchennyh Urokov",
    "orig_title": "\u0412 \u0441\u0442\u0440\u0430\u043d\u0435 \u043d\u0435\u0432\u044b\u0443\u0447\u0435\u043d\u043d\u044b\u0445 \u0443\u0440\u043e\u043a\u043e\u0432",
    "url": "https://stat2.deti-online.com/a/hGLsRPL4pK1fe7o1-T9CzQ/1528971433/files/skazki/sbornik-skazok/v-strane-nevyuchennyh-urokov.mp3"
  },
  {
    "duration": "08:31",
    "title": "Kozlenok Kotoryy Schital Do Desyati",
    "orig_title": "\u041a\u043e\u0437\u043b\u0451\u043d\u043e\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u0447\u0438\u0442\u0430\u043b \u0434\u043e \u0434\u0435\u0441\u044f\u0442\u0438",
    "url": "https://stat1.deti-online.com/a/fLvxG_OsOzrzyoTSrZXv-g/1528974587/files/skazki/sbornik-skazok/kozlenok-kotoryy-schital-do-desyati.mp3"
  },
  {
    "duration": "10:00",
    "title": "Devochka So Spichkami",
    "orig_title": "\u0414\u0435\u0432\u043e\u0447\u043a\u0430 \u0441\u043e \u0441\u043f\u0438\u0447\u043a\u0430\u043c\u0438",
    "url": "https://stat1.deti-online.com/a/ctkGuIDrtzNvKXAraktpfw/1528984046/files/skazki/skazki-andersena/devochka-so-spichkami.mp3"
  },
  {
    "duration": "07:21",
    "title": "Bychok Smoljanoi Bochok",
    "orig_title": "\u0411\u044b\u0447\u043e\u043a-\u0441\u043c\u043e\u043b\u044f\u043d\u043e\u0439 \u0431\u043e\u0447\u043e\u043a",
    "url": "https://stat1.deti-online.com/a/oN7mLav9A5V9wmO44KQDow/1528972043/files/skazki/russkie-narodnye-skazki/bychok-smoljanoi-bochok.mp3"
  },
  {
    "duration": "01:31",
    "title": "Kozel",
    "orig_title": "\u041a\u043e\u0437\u0435\u043b",
    "url": "https://stat2.deti-online.com/a/aS9lBA1FwvBmATPmfcnhAg/1529004562/files/skazki/skazki-tolstogo/kozel.mp3"
  },
  {
    "duration": "16:52",
    "title": "Devochka Na Share",
    "orig_title": "\u0414\u0435\u0432\u043e\u0447\u043a\u0430 \u043d\u0430 \u0448\u0430\u0440\u0435",
    "url": "https://stat2.deti-online.com/a/SvyIwepYS9IBXurw4Qdm5w/1528973616/files/skazki/rasskazy-dragunskogo/devochka-na-share.mp3"
  },
  {
    "duration": "05:03",
    "title": "Koza Dereza",
    "orig_title": "\u041a\u043e\u0437\u0430 \u0434\u0435\u0440\u0435\u0437\u0430",
    "url": "https://stat2.deti-online.com/a/V-k8E8_wbN5ZCCs8E8M8cw/1528975854/files/skazki/russkie-narodnye-skazki/koza-dereza.mp3"
  },
  {
    "duration": "24:34",
    "title": "12 Mesjacev",
    "orig_title": "\u0414\u0432\u0435\u043d\u0430\u0434\u0446\u0430\u0442\u044c \u043c\u0435\u0441\u044f\u0446\u0435\u0432",
    "url": "https://stat1.deti-online.com/a/hPUWLWLjU5Cp5RFwkI9kzQ/1528971319/files/skazki/skazki-marshaka/12-mesjacev.mp3"
  },
  {
    "duration": "05:41",
    "title": "Klyaksa",
    "orig_title": "\u041a\u043b\u044f\u043a\u0441\u0430",
    "url": "https://stat1.deti-online.com/a/Db0Xscsz7wa-MZO3zEml4A/1528975272/files/skazki/rasskazy-nosova/klyaksa.mp3"
  },
  {
    "duration": "17:22",
    "title": "Dvenadcat Bratev",
    "orig_title": "\u0414\u0432\u0435\u043d\u0430\u0434\u0446\u0430\u0442\u044c \u0431\u0440\u0430\u0442\u044c\u0435\u0432",
    "url": "https://stat1.deti-online.com/a/yV48DxQUB5iWhaWzpQnrLg/1528985429/files/skazki/skazki-bratev-grimm/dvenadcat-bratev.mp3"
  },
  {
    "duration": "06:45",
    "title": "Kladovaya Solnca 12",
    "orig_title": "\u0413\u043b\u0430\u0432\u0430 1",
    "url": "https://stat1.deti-online.com/a/gV6MrXJozAHWaJr0yVXqWg/1528971654/files/skazki/rasskazy-prishvina/kladovaya-solnca-12.mp3"
  },
  {
    "duration": "10:00",
    "title": "Dvadcat Let Pod Krovatyu",
    "orig_title": "\u0414\u0432\u0430\u0434\u0446\u0430\u0442\u044c \u043b\u0435\u0442 \u043f\u043e\u0434 \u043a\u0440\u043e\u0432\u0430\u0442\u044c\u044e",
    "url": "https://stat1.deti-online.com/a/TjaDWHGw5_UNnyjZQvjw2w/1528976944/files/skazki/rasskazy-dragunskogo/dvadcat-let-pod-krovatyu.mp3"
  },
  {
    "duration": "02:17",
    "title": "Ohota Za Babochkoy",
    "orig_title": "\u041e\u0445\u043e\u0442\u0430 \u0437\u0430 \u0431\u0430\u0431\u043e\u0447\u043a\u043e\u0439",
    "url": "https://stat1.deti-online.com/a/n_luzI49lk30cbR2BlwiDA/1528998447/files/skazki/rasskazy-prishvina/ohota-za-babochkoy.mp3"
  },
  {
    "duration": "05:04",
    "title": "Dva Moroza",
    "orig_title": "\u0414\u0432\u0430 \u043c\u043e\u0440\u043e\u0437\u0430",
    "url": "https://stat2.deti-online.com/a/mzw3XGjXQocJvNGF9y6ITA/1528982438/files/skazki/russkie-narodnye-skazki/dva-moroza.mp3"
  },
  {
    "duration": "12:09",
    "title": "Oslik",
    "orig_title": "\u041e\u0441\u043b\u0438\u043a",
    "url": "https://stat2.deti-online.com/a/t8KnedU6v-5KSRy--5ySGw/1528991036/files/skazki/skazki-bratev-grimm/oslik.mp3"
  },
  {
    "duration": "36:25",
    "title": "Dva Ivana Soldatskih Syna",
    "orig_title": "\u0414\u0432\u0430 \u0418\u0432\u0430\u043d\u0430-\u0441\u043e\u043b\u0434\u0430\u0442\u0441\u043a\u0438\u0445 \u0441\u044b\u043d\u0430",
    "url": "https://stat2.deti-online.com/a/2pKOKc_ZTeJYHH1iRtW0PQ/1528979687/files/skazki/russkie-narodnye-skazki/dva-ivana-soldatskih-syna.mp3"
  },
  {
    "duration": "05:12",
    "title": "On Zhivoy I Svetitsya",
    "orig_title": "\u041e\u043d \u0436\u0438\u0432\u043e\u0439 \u0438 \u0441\u0432\u0435\u0442\u0438\u0442\u0441\u044f",
    "url": "https://stat2.deti-online.com/a/UvNuA3_ct8Csxt6X6Qeung/1528978203/files/skazki/rasskazy-dragunskogo/on-zhivoy-i-svetitsya.mp3"
  },
  {
    "duration": "12:41",
    "title": "Gusinoe Gorlyshko",
    "orig_title": "\u0413\u0443\u0441\u0438\u043d\u043e\u0435 \u0433\u043e\u0440\u043b\u044b\u0448\u043a\u043e",
    "url": "https://stat2.deti-online.com/a/wfLCSGToTpBvhsLEjU08Sg/1528978984/files/skazki/rasskazy-dragunskogo/gusinoe-gorlyshko.mp3"
  },
  {
    "duration": "10:37",
    "title": "Arbuznyy Pereulok",
    "orig_title": "\u0410\u0440\u0431\u0443\u0437\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u0443\u043b\u043e\u043a",
    "url": "https://stat1.deti-online.com/a/ExedUM5G51vPA5fiKclTDQ/1528977854/files/skazki/rasskazy-dragunskogo/arbuznyy-pereulok.mp3"
  },
  {
    "duration": "30:14",
    "title": "Ole Lukoie",
    "orig_title": "\u041e\u043b\u0435-\u041b\u0443\u043a\u043e\u0439\u0435",
    "url": "https://stat1.deti-online.com/a/OJYN6m-MBl_JjCLqoqxMvA/1528976883/files/skazki/skazki-andersena/ole-lukoie.mp3"
  },
  {
    "duration": "03:37",
    "title": "Gusi Lebedi",
    "orig_title": "\u0413\u0443\u0441\u0438-\u043b\u0435\u0431\u0435\u0434\u0438",
    "url": "https://stat1.deti-online.com/a/tkEkXw819aNYsA1rXPV-jw/1528970579/files/skazki/russkie-narodnye-skazki/gusi-lebedi.mp3"
  },
  {
    "duration": "07:23",
    "title": "Okameneloe Carstvo",
    "orig_title": "\u041e\u043a\u0430\u043c\u0435\u043d\u0435\u043b\u043e\u0435 \u0446\u0430\u0440\u0441\u0442\u0432\u043e",
    "url": "https://stat2.deti-online.com/a/zL4KtcFggRoDUP3c3ekg3A/1528983643/files/skazki/russkie-narodnye-skazki/okameneloe-carstvo.mp3"
  },
  {
    "duration": "04:17",
    "title": "Gusak",
    "orig_title": "\u0413\u0443\u0441\u0430\u043a",
    "url": "https://stat1.deti-online.com/a/BgkIh8HJa08OXW0m0MQDhQ/1529001471/files/skazki/skazki-tolstogo/gusak.mp3"
  },
  {
    "duration": "18:42",
    "title": "Odnoglazka Dvuglazka I Treglazka",
    "orig_title": "\u041e\u0434\u043d\u043e\u0433\u043b\u0430\u0437\u043a\u0430, \u0434\u0432\u0443\u0433\u043b\u0430\u0437\u043a\u0430 \u0438 \u0442\u0440\u0435\u0433\u043b\u0430\u0437\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/JFJ3RJlyWgm6pbhZqGQHXQ/1528979410/files/skazki/skazki-bratev-grimm/odnoglazka-dvuglazka-i-treglazka.mp3"
  },
  {
    "duration": "05:25",
    "title": "Griby",
    "orig_title": "\u0413\u0440\u0438\u0431\u044b",
    "url": "https://stat1.deti-online.com/a/jyf-KmektnL7J-dX3KefzQ/1529000069/files/skazki/skazki-tolstogo/griby.mp3"
  },
  {
    "duration": "05:46",
    "title": "Odna Kaplya Ubivaet Loshad",
    "orig_title": "\u041e\u0434\u043d\u0430 \u043a\u0430\u043f\u043b\u044f \u0443\u0431\u0438\u0432\u0430\u0435\u0442 \u043b\u043e\u0448\u0430\u0434\u044c",
    "url": "https://stat2.deti-online.com/a/9om89fp4j2-TiZM_llqq9A/1528980987/files/skazki/rasskazy-dragunskogo/odna-kaplya-ubivaet-loshad.mp3"
  },
  {
    "duration": "04:13",
    "title": "Grechiha",
    "orig_title": "\u0413\u0440\u0435\u0447\u0438\u0445\u0430",
    "url": "https://stat2.deti-online.com/a/m3lcgEhQd1aS1njnMtoIOg/1528992500/files/skazki/skazki-andersena/grechiha.mp3"
  },
  {
    "duration": "04:49",
    "title": "Anglichanin Pavlya",
    "orig_title": "\u0410\u043d\u0433\u043b\u0438\u0447\u0430\u043d\u0438\u043d \u041f\u0430\u0432\u043b\u044f",
    "url": "https://stat2.deti-online.com/a/mMoDDFuWoDhUIA6DYBs7FQ/1528977158/files/skazki/rasskazy-dragunskogo/anglichanin-pavlya.mp3"
  },
  {
    "duration": "21:55",
    "title": "Ognivo",
    "orig_title": "\u041e\u0433\u043d\u0438\u0432\u043e",
    "url": "https://stat1.deti-online.com/a/Kd8Wp4bCE7jconrk1YwkSQ/1528972831/files/skazki/skazki-andersena/ognivo.mp3"
  },
  {
    "duration": "11:50",
    "title": "Goryachiy Kamen",
    "orig_title": "\u0413\u043e\u0440\u044f\u0447\u0438\u0439 \u043a\u0430\u043c\u0435\u043d\u044c",
    "url": "https://stat2.deti-online.com/a/dUkwEhaAO7DzLD4ICgZNrA/1528981314/files/skazki/rasskazy-gaydara/goryachiy-kamen.mp3"
  },
  {
    "duration": "25:00",
    "title": "O Tom Kak Zhila Byla Poslednjaja Muha",
    "orig_title": "\u041e \u0442\u043e\u043c, \u043a\u0430\u043a \u0436\u0438\u043b\u0430-\u0431\u044b\u043b\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u041c\u0443\u0445\u0430",
    "url": "https://stat1.deti-online.com/a/AwbO7G6IPkaSd_-xPhXXrQ/1528982508/files/skazki/skazki-mamina-sibirjaka/o-tom-kak-zhila-byla-poslednjaja-muha.mp3"
  },
  {
    "duration": "02:27",
    "title": "Gorshochek Kashi",
    "orig_title": "\u0413\u043e\u0440\u0448\u043e\u0447\u0435\u043a \u043a\u0430\u0448\u0438",
    "url": "https://stat2.deti-online.com/a/xa3GH3oCGH3PrrDt1bpCXA/1528974042/files/skazki/skazki-bratev-grimm/gorshochek-kashi.mp3"
  },
  {
    "duration": "10:35",
    "title": "O Molochke Ovsjanoi Kashke I Serom Kotishke Murke",
    "orig_title": "\u041e \u041c\u043e\u043b\u043e\u0447\u043a\u0435, \u043e\u0432\u0441\u044f\u043d\u043e\u0439 \u041a\u0430\u0448\u043a\u0435 \u0438 \u0441\u0435\u0440\u043e\u043c \u043a\u043e\u0442\u0438\u0448\u043a\u0435 \u041c\u0443\u0440\u043a\u0435",
    "url": "https://stat1.deti-online.com/a/LbCEU3Jl3C7pMxKragEjvQ/1528982243/files/skazki/skazki-mamina-sibirjaka/o-molochke-ovsjanoi-kashke-i-serom-kotishke-murke.mp3"
  },
  {
    "duration": "04:46",
    "title": "Gorshok",
    "orig_title": "\u0413\u043e\u0440\u0448\u043e\u043a",
    "url": "https://stat2.deti-online.com/a/oxlMgG3jmvEa7bT_UVMTtw/1529001646/files/skazki/skazki-tolstogo/gorshok.mp3"
  },
  {
    "duration": "35:02",
    "title": "O Molodilnyh Yablokah I Zhivoy Vode",
    "orig_title": "\u041e \u043c\u043e\u043b\u043e\u0434\u0438\u043b\u044c\u043d\u044b\u0445 \u044f\u0431\u043b\u043e\u043a\u0430\u0445 \u0438 \u0436\u0438\u0432\u043e\u0439 \u0432\u043e\u0434\u0435",
    "url": "https://stat2.deti-online.com/a/se7NrNVjYi1bKcgbPDqJXA/1528975703/files/skazki/russkie-narodnye-skazki/o-molodilnyh-yablokah-i-zhivoy-vode.mp3"
  },
  {
    "duration": "10:41",
    "title": "Gorshenja",
    "orig_title": "\u0413\u043e\u0440\u0448\u0435\u043d\u044f",
    "url": "https://stat1.deti-online.com/a/AB79fEx4R8am4vfq3NCuRw/1528983321/files/skazki/russkie-narodnye-skazki/gorshenja.mp3"
  },
  {
    "duration": "18:15",
    "title": "O Zhabe I Roze",
    "orig_title": "\u041e \u0436\u0430\u0431\u0435 \u0438 \u0440\u043e\u0437\u0435",
    "url": "https://stat1.deti-online.com/a/HIc4r3Sr_FDpFUhxyGDZeg/1528991278/files/skazki/skazki-garshina/o-zhabe-i-roze.mp3"
  },
  {
    "duration": "18:11",
    "title": "Gorodok V Tabakerke",
    "orig_title": "\u0413\u043e\u0440\u043e\u0434\u043e\u043a \u0432 \u0442\u0430\u0431\u0430\u043a\u0435\u0440\u043a\u0435",
    "url": "https://stat1.deti-online.com/a/ph2F9FT-rey3mpDebpaPfg/1528977752/files/skazki/skazki-odoevskogo/gorodok-v-tabakerke.mp3"
  },
  {
    "duration": "24:22",
    "title": "Malchish Kibalchish",
    "orig_title": "\u041e \u0412\u043e\u0435\u043d\u043d\u043e\u0439 \u0442\u0430\u0439\u043d\u0435, \u043e \u041c\u0430\u043b\u044c\u0447\u0438\u0448\u0435-\u041a\u0438\u0431\u0430\u043b\u044c\u0447\u0438\u0448\u0435 \u0438 \u0435\u0433\u043e \u0442\u0432\u0451\u0440\u0434\u043e\u043c \u0441\u043b\u043e\u0432\u0435",
    "url": "https://stat1.deti-online.com/a/JoQj5AswEmXBKfMgtmA9ag/1528976741/files/skazki/rasskazy-gaydara/malchish-kibalchish.mp3"
  },
  {
    "duration": "1:01",
    "title": "Golubaya Chashka",
    "orig_title": "\u0413\u043e\u043b\u0443\u0431\u0430\u044f \u0447\u0430\u0448\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/aWGIgaI_ViPWuD8Y2X8cBg/1528980853/files/skazki/rasskazy-gaydara/golubaya-chashka.mp3"
  },
  {
    "duration": "11:26",
    "title": "Novoe Plate Korolja",
    "orig_title": "\u041d\u043e\u0432\u043e\u0435 \u043f\u043b\u0430\u0442\u044c\u0435 \u043a\u043e\u0440\u043e\u043b\u044f",
    "url": "https://stat1.deti-online.com/a/ITHSrnhw4oPHivLlmuILTA/1528977534/files/skazki/skazki-andersena/novoe-plate-korolja.mp3"
  },
  {
    "duration": "02:00",
    "title": "Govoryaschiy Grach",
    "orig_title": "\u0413\u043e\u0432\u043e\u0440\u044f\u0449\u0438\u0439 \u0433\u0440\u0430\u0447",
    "url": "https://stat1.deti-online.com/a/JZ-PT-SJ47knrVUCA5iyYw/1528999492/files/skazki/rasskazy-prishvina/govoryaschiy-grach.mp3"
  },
  {
    "duration": "45:59",
    "title": "Alye Parusa 17",
    "orig_title": "1. \u041f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d\u0438\u0435. \u0427\u0438\u0442\u0430\u0435\u0442 \u0412\u0430\u043b\u0435\u0440\u0438\u0439 \u0417\u0430\u0445\u0430\u0440\u044c\u0435\u0432",
    "url": "https://stat2.deti-online.com/a/oJhMcz16fLZnVUSxi-HOiQ/1528973431/files/skazki/povesti/alye-parusa-17.mp3"
  },
  {
    "duration": "03:22",
    "title": "Nischiy I Schaste",
    "orig_title": "\u041d\u0438\u0449\u0438\u0439 \u0438 \u0441\u0447\u0430\u0441\u0442\u044c\u0435",
    "url": "https://stat1.deti-online.com/a/iGf9lL92OFPd-ZNmGFybKw/1528989539/files/skazki/arabskie-skazki/nischiy-i-schaste.mp3"
  },
  {
    "duration": "16:05",
    "title": "Gnom Tihogrom",
    "orig_title": "\u0413\u043d\u043e\u043c-\u0422\u0438\u0445\u043e\u0433\u0440\u043e\u043c",
    "url": "https://stat2.deti-online.com/a/563XHyMQPt9yrTKuHlb9vw/1528979198/files/skazki/skazki-bratev-grimm/gnom-tihogrom.mp3"
  },
  {
    "duration": "09:34",
    "title": "Nichego Izmenit Nelzya",
    "orig_title": "\u041d\u0438\u0447\u0435\u0433\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0435\u043b\u044c\u0437\u044f",
    "url": "https://stat1.deti-online.com/a/YTqZ-TWvwA7kndlaTBN5Ww/1528981249/files/skazki/rasskazy-dragunskogo/nichego-izmenit-nelzya.mp3"
  },
  {
    "duration": "00:45",
    "title": "Glotok Moloka",
    "orig_title": "\u0413\u043b\u043e\u0442\u043e\u043a \u043c\u043e\u043b\u043e\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/ZmxuGmi_ClfS9Yvkw9MnIQ/1529019187/files/skazki/rasskazy-prishvina/glotok-moloka.mp3"
  },
  {
    "duration": "1:05",
    "title": "Pervaja Kniga Dzhunglei Bratja Maugli",
    "orig_title": "\u0411\u0440\u0430\u0442\u044c\u044f \u041c\u0430\u0443\u0433\u043b\u0438",
    "url": "https://stat2.deti-online.com/a/S6VLcFXEakUakuHEXBeKjA/1528974192/files/skazki/skazki-kiplinga/pervaja-kniga-dzhunglei-bratja-maugli.mp3"
  },
  {
    "duration": "11:08",
    "title": "Nezavisimyy Gorbushka",
    "orig_title": "\u041d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0439 \u0413\u043e\u0440\u0431\u0443\u0448\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/z74mJ6rAxKNqLlEPcYRwlg/1528980554/files/skazki/rasskazy-dragunskogo/nezavisimyy-gorbushka.mp3"
  },
  {
    "duration": "08:57",
    "title": "Glavnye Reki Ameriki",
    "orig_title": "\u0413\u043b\u0430\u0432\u043d\u044b\u0435 \u0440\u0435\u043a\u0438 \u0410\u043c\u0435\u0440\u0438\u043a\u0438",
    "url": "https://stat2.deti-online.com/a/tcKCfbb_7mFWr4UgthhZ0A/1528979576/files/skazki/rasskazy-dragunskogo/glavnye-reki-ameriki.mp3"
  },
  {
    "duration": "1:12",
    "title": "Vtoraja Kniga Dzhunglei Nashestvie Dzhunglei",
    "orig_title": "\u041d\u0430\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u0434\u0436\u0443\u043d\u0433\u043b\u0435\u0439",
    "url": "https://stat1.deti-online.com/a/HsYOxoVtxhomNE2jK9Fxag/1528995478/files/skazki/skazki-kiplinga/vtoraja-kniga-dzhunglei-nashestvie-dzhunglei.mp3"
  },
  {
    "duration": "24:10",
    "title": "Genzel I Gretel",
    "orig_title": "\u0413\u0435\u043d\u0437\u0435\u043b\u044c \u0438 \u0413\u0440\u0435\u0442\u0435\u043b\u044c",
    "url": "https://stat2.deti-online.com/a/q9TpC2lVx13YGB-A0DvR5A/1528973647/files/skazki/skazki-bratev-grimm/genzel-i-gretel.mp3"
  },
  {
    "duration": "04:56",
    "title": "Nahodchivost",
    "orig_title": "\u041d\u0430\u0445\u043e\u0434\u0447\u0438\u0432\u043e\u0441\u0442\u044c",
    "url": "https://stat2.deti-online.com/a/4P5WGsxeT-EiSvpGvMYn7A/1528978443/files/skazki/rasskazy-nosova/nahodchivost.mp3"
  },
  {
    "duration": "16:46",
    "title": "Gde Eto Vidano Gde Eto Slyhano",
    "orig_title": "\u0413\u0434\u0435 \u044d\u0442\u043e \u0432\u0438\u0434\u0430\u043d\u043e, \u0433\u0434\u0435 \u044d\u0442\u043e \u0441\u043b\u044b\u0445\u0430\u043d\u043e",
    "url": "https://stat2.deti-online.com/a/u3DL0XtfzQXHU42F5TSXow/1528973847/files/skazki/rasskazy-dragunskogo/gde-eto-vidano-gde-eto-slyhano.mp3"
  },
  {
    "duration": "1:30",
    "title": "Alisa V Strane Chudes",
    "orig_title": "\u0410\u043b\u0438\u0441\u0430 \u0432 \u0441\u0442\u0440\u0430\u043d\u0435 \u0447\u0443\u0434\u0435\u0441",
    "url": "https://stat1.deti-online.com/a/1RZZDJX9yQJ0KGnReDDE7w/1528971505/files/skazki/sbornik-skazok/alisa-v-strane-chudes.mp3"
  },
  {
    "duration": "16:18",
    "title": "Nakazannaya Carevna",
    "orig_title": "\u041d\u0430\u043a\u0430\u0437\u0430\u043d\u043d\u0430\u044f \u0446\u0430\u0440\u0435\u0432\u043d\u0430",
    "url": "https://stat1.deti-online.com/a/Baeh4r61P9-dYJjf5UTHKQ/1528975531/files/skazki/russkie-narodnye-skazki/nakazannaya-carevna.mp3"
  },
  {
    "duration": "09:24",
    "title": "Gans Churban",
    "orig_title": "\u0413\u0430\u043d\u0441 \u0427\u0443\u0440\u0431\u0430\u043d",
    "url": "https://stat2.deti-online.com/a/FzvBxZWyO63EJqRZYNZD9Q/1528996868/files/skazki/skazki-andersena/gans-churban.mp3"
  },
  {
    "duration": "06:17",
    "title": "Nado Imet Chuvstvo Yumora",
    "orig_title": "\u041d\u0430\u0434\u043e \u0438\u043c\u0435\u0442\u044c \u0447\u0443\u0432\u0441\u0442\u0432\u043e \u044e\u043c\u043e\u0440\u0430",
    "url": "https://stat1.deti-online.com/a/0dxiJWn1-hnUK7qNj7QC2g/1528980260/files/skazki/rasskazy-dragunskogo/nado-imet-chuvstvo-yumora.mp3"
  },
  {
    "duration": "02:48",
    "title": "Gaechki",
    "orig_title": "\u0413\u0430\u0435\u0447\u043a\u0438",
    "url": "https://stat1.deti-online.com/a/mPNauO9D5YvKVHAwlh3LGg/1529003479/files/skazki/rasskazy-prishvina/gaechki.mp3"
  },
  {
    "duration": "20:46",
    "title": "Meri Poppins 8",
    "orig_title": "\u0413\u043b\u0430\u0432\u0430 1. \u0412\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439 \u0432\u0435\u0442\u0435\u0440",
    "url": "https://stat1.deti-online.com/a/nNwjwSnrjMLBUDuKkggjsQ/1528972248/files/skazki/sbornik-skazok/meri-poppins-8.mp3"
  },
  {
    "duration": "25:22",
    "title": "Gadkii Utenok",
    "orig_title": "\u0413\u0430\u0434\u043a\u0438\u0439 \u0443\u0442\u0451\u043d\u043e\u043a",
    "url": "https://stat1.deti-online.com/a/yVxQoJHxEm9E6ml5UBdALw/1528970530/files/skazki/skazki-andersena/gadkii-utenok.mp3"
  },
  {
    "duration": "58:36",
    "title": "Myshonok Pik",
    "orig_title": "\u041c\u044b\u0448\u043e\u043d\u043e\u043a \u041f\u0438\u043a",
    "url": "https://stat2.deti-online.com/a/UXbpoI0ZYnu-cLLYlWYLBg/1528972232/files/skazki/rasskazy-bianki/myshonok-pik.mp3"
  },
  {
    "duration": "05:19",
    "title": "Vyskochka",
    "orig_title": "\u0412\u044b\u0441\u043a\u043e\u0447\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/jukT3bcuhfTUGdJkoL0s4Q/1529001189/files/skazki/rasskazy-prishvina/vyskochka.mp3"
  },
  {
    "duration": "05:12",
    "title": "Boltunya",
    "orig_title": "\u0411\u043e\u043b\u0442\u0443\u043d\u044c\u044f",
    "url": "https://stat1.deti-online.com/a/KuckoT8DKmo5tglF5DL88g/1528992001/files/skazki/russkie-narodnye-skazki/boltunya.mp3"
  },
  {
    "duration": "03:24",
    "title": "Myshonok I Karandash",
    "orig_title": "\u041c\u044b\u0448\u043e\u043d\u043e\u043a \u0438 \u043a\u0430\u0440\u0430\u043d\u0434\u0430\u0448",
    "url": "https://stat1.deti-online.com/a/9NocsxKzVdkWaqVvRzU1fA/1528975315/files/skazki/skazki-suteeva/myshonok-i-karandash.mp3"
  },
  {
    "duration": "06:10",
    "title": "Vorotnichok",
    "orig_title": "\u0412\u043e\u0440\u043e\u0442\u043d\u0438\u0447\u043e\u043a",
    "url": "https://stat2.deti-online.com/a/lRXQn3YOWF0MxKFgQASuFA/1529001139/files/skazki/skazki-andersena/vorotnichok.mp3"
  },
  {
    "duration": "14:40",
    "title": "Sasha",
    "orig_title": "\u0421\u0430\u0448\u0430",
    "url": "https://stat2.deti-online.com/a/nQWyNxeJlMKf5WlErmh_yA/1528974431/files/skazki/rasskazy-nosova/sasha.mp3"
  },
  {
    "duration": "08:40",
    "title": "Fantazery",
    "orig_title": "\u0424\u0430\u043d\u0442\u0430\u0437\u0451\u0440\u044b",
    "url": "https://stat2.deti-online.com/a/Ng4Ku3Eb-gkKJJPWIUan-w/1528971734/files/skazki/rasskazy-nosova/fantazery.mp3"
  },
  {
    "duration": "02:38",
    "title": "Kasha Iz Topora",
    "orig_title": "\u041a\u0430\u0448\u0430 \u0438\u0437 \u0442\u043e\u043f\u043e\u0440\u0430",
    "url": "https://stat1.deti-online.com/a/Yx6KqcPXpNqvI3n3mm4OJg/1528971554/files/skazki/russkie-narodnye-skazki/kasha-iz-topora.mp3"
  },
  {
    "duration": "04:20",
    "title": "Umnyy Muzhik",
    "orig_title": "\u0423\u043c\u043d\u044b\u0439 \u043c\u0443\u0436\u0438\u043a",
    "url": "https://stat2.deti-online.com/a/DeoYVXmzmiORqB5z_Wplcg/1528983802/files/skazki/russkie-narodnye-skazki/umnyy-muzhik.mp3"
  },
  {
    "duration": "06:03",
    "title": "Samoe Dorogoe",
    "orig_title": "\u0421\u0430\u043c\u043e\u0435 \u0434\u043e\u0440\u043e\u0433\u043e\u0435",
    "url": "https://stat2.deti-online.com/a/A14yrTJtjGtR2N9V3zml-w/1528996592/files/skazki/russkie-narodnye-skazki/samoe-dorogoe.mp3"
  },
  {
    "duration": "01:54",
    "title": "Kartina",
    "orig_title": "\u041a\u0430\u0440\u0442\u0438\u043d\u0430",
    "url": "https://stat2.deti-online.com/a/5sTDfX6LW5NTZDVK5Z5-ZA/1529002026/files/skazki/skazki-tolstogo/kartina.mp3"
  },
  {
    "duration": "20:54",
    "title": "Umnee Vseh",
    "orig_title": "\u0423\u043c\u043d\u0435\u0435 \u0432\u0441\u0435\u0445",
    "url": "https://stat2.deti-online.com/a/A7VoeBZ-d2EaqFW0YRhAxw/1528984091/files/skazki/skazki-mamina-sibirjaka/umnee-vseh.mp3"
  },
  {
    "duration": "1:12",
    "title": "Vtoraja Kniga Dzhunglei Ryzhie Sobaki",
    "orig_title": "\u0420\u044b\u0436\u0438\u0435 \u0441\u043e\u0431\u0430\u043a\u0438",
    "url": "https://stat1.deti-online.com/a/ZXmV1RIM8BS_H7iIS0o1Og/1528995321/files/skazki/skazki-kiplinga/vtoraja-kniga-dzhunglei-ryzhie-sobaki.mp3"
  },
  {
    "duration": "11:07",
    "title": "Karlson 3 25",
    "orig_title": "\u0413\u043b\u0430\u0432\u0430 1. \u0427\u0430\u0441\u0442\u044c 1",
    "url": "https://stat2.deti-online.com/a/bfli5Z540ADyqNnrOjvx0A/1528971191/files/skazki/skazki-lindgren/karlson-3-25.mp3"
  },
  {
    "duration": "08:44",
    "title": "Umnaja Gretel",
    "orig_title": "\u0423\u043c\u043d\u0430\u044f \u0413\u0440\u0435\u0442\u0435\u043b\u044c",
    "url": "https://stat1.deti-online.com/a/PnKSILr7uvuUei5wH35b2Q/1528975806/files/skazki/skazki-bratev-grimm/umnaja-gretel.mp3"
  },
  {
    "duration": "27:14",
    "title": "Rusalochka 2",
    "orig_title": "\u0420\u0443\u0441\u0430\u043b\u043e\u0447\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/tP0i1LUnwE0HGmz0Y855OQ/1528970752/files/skazki/skazki-andersena/rusalochka-2.mp3"
  },
  {
    "duration": "11:15",
    "title": "Karlson 2 24",
    "orig_title": "\u0413\u043b\u0430\u0432\u0430 1. \u0427\u0430\u0441\u0442\u044c 1",
    "url": "https://stat2.deti-online.com/a/9JBoZIL5EsDo7HxINewLuQ/1528971802/files/skazki/skazki-lindgren/karlson-2-24.mp3"
  },
  {
    "duration": "06:44",
    "title": "Ulitka I Roza",
    "orig_title": "\u0423\u043b\u0438\u0442\u043a\u0430 \u0438 \u0440\u043e\u0437\u0430",
    "url": "https://stat2.deti-online.com/a/jHYQxqDKpWnv3DYNkpI2KQ/1528987319/files/skazki/skazki-andersena/ulitka-i-roza.mp3"
  },
  {
    "duration": "10:47",
    "title": "Rumpelshtilchen",
    "orig_title": "\u0420\u0443\u043c\u043f\u0435\u043b\u044c\u0448\u0442\u0438\u043b\u044c\u0446\u0445\u0435\u043d",
    "url": "https://stat2.deti-online.com/a/VKuPfz8LwzW0E1GMjJ-QSA/1528975735/files/skazki/skazki-bratev-grimm/rumpelshtilchen.mp3"
  },
  {
    "duration": "09:57",
    "title": "Karlson 1 22",
    "orig_title": "\u0413\u043b\u0430\u0432\u0430 1. \u0427\u0430\u0441\u0442\u044c 1",
    "url": "https://stat1.deti-online.com/a/dN1XI8A8DRMO-s34KfnVEQ/1528970387/files/skazki/skazki-lindgren/karlson-1-22.mp3"
  },
  {
    "duration": "02:03",
    "title": "U Lukomorja Dub Zelenyi",
    "orig_title": "\u0423 \u041b\u0443\u043a\u043e\u043c\u043e\u0440\u044c\u044f \u0434\u0443\u0431 \u0437\u0435\u043b\u0435\u043d\u044b\u0439",
    "url": "https://stat2.deti-online.com/a/gur_v9lbz4bWxRJUZp5MCw/1528972501/files/skazki/skazki-pushkina/u-lukomorja-dub-zelenyi.mp3"
  },
  {
    "duration": "6:33",
    "title": "Roni Doch Razboynika",
    "orig_title": "\u0420\u043e\u043d\u0438, \u0434\u043e\u0447\u044c \u0440\u0430\u0437\u0431\u043e\u0439\u043d\u0438\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/shgmjZLIgyTQHsD5wJYfnw/1528973089/files/skazki/skazki-lindgren/roni-doch-razboynika.mp3"
  },
  {
    "duration": "46:33",
    "title": "Karlik Nos 2",
    "orig_title": "\u041a\u0430\u0440\u043b\u0438\u043a \u041d\u043e\u0441",
    "url": "https://stat1.deti-online.com/a/paxcCAljdfnBhZHHuPCdCg/1528970166/files/skazki/skazki-gaufa/karlik-nos-2.mp3"
  },
  {
    "duration": "12:37",
    "title": "Tuk Tuk Tuk",
    "orig_title": "\u0422\u0443\u043a-\u0442\u0443\u043a-\u0442\u0443\u043a",
    "url": "https://stat1.deti-online.com/a/OBV3G8vFFHScX3KY__Evfw/1528972771/files/skazki/rasskazy-nosova/tuk-tuk-tuk.mp3"
  },
  {
    "duration": "10:55",
    "title": "Romashka",
    "orig_title": "\u0420\u043e\u043c\u0430\u0448\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/9XLyvaihza6d1UakxD3k2A/1528974969/files/skazki/skazki-andersena/romashka.mp3"
  },
  {
    "duration": "27:50",
    "title": "Karas Idealist",
    "orig_title": "\u041a\u0430\u0440\u0430\u0441\u044c-\u0438\u0434\u0435\u0430\u043b\u0438\u0441\u0442",
    "url": "https://stat2.deti-online.com/a/AFWZhkdLOZpqT_TQQdhx8g/1528999485/files/skazki/skazki-saltykova-schedrina/karas-idealist.mp3"
  },
  {
    "duration": "06:11",
    "title": "Rovno 25 Kilo",
    "orig_title": "\u0420\u043e\u0432\u043d\u043e 25 \u043a\u0438\u043b\u043e",
    "url": "https://stat1.deti-online.com/a/Tib3FI8dyq6Lo7yq6Hq6Xg/1528978221/files/skazki/rasskazy-dragunskogo/rovno-25-kilo.mp3"
  },
  {
    "duration": "12:28",
    "title": "Karasik",
    "orig_title": "\u041a\u0430\u0440\u0430\u0441\u0438\u043a",
    "url": "https://stat2.deti-online.com/a/pou105bna-ec74S1Rmnttw/1528973030/files/skazki/rasskazy-nosova/karasik.mp3"
  },
  {
    "duration": "08:44",
    "title": "Tri Schastlivchika",
    "orig_title": "\u0422\u0440\u0438 \u0441\u0447\u0430\u0441\u0442\u043b\u0438\u0432\u0447\u0438\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/JtSjdd6YXyDgwSnaQte7mg/1528993685/files/skazki/skazki-bratev-grimm/tri-schastlivchika.mp3"
  },
  {
    "duration": "38:53",
    "title": "Pervaja Kniga Dzhunglei Rikki Tikki Tavi",
    "orig_title": "\u0420\u0438\u043a\u043a\u0438 \u0422\u0438\u043a\u043a\u0438 \u0422\u0430\u0432\u0438",
    "url": "https://stat1.deti-online.com/a/FWO9M2dMuQfC1pUpjgOWbw/1528973388/files/skazki/skazki-kiplinga/pervaja-kniga-dzhunglei-rikki-tikki-tavi.mp3"
  },
  {
    "duration": "04:09",
    "title": "Kapriznaya Koshka",
    "orig_title": "\u041a\u0430\u043f\u0440\u0438\u0437\u043d\u0430\u044f \u043a\u043e\u0448\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/IKS2zt9-UfU5Z153jXG5SA/1528974425/files/skazki/skazki-suteeva/kapriznaya-koshka.mp3"
  },
  {
    "duration": "07:23",
    "title": "Tri Pryahi",
    "orig_title": "\u0422\u0440\u0438 \u043f\u0440\u044f\u0445\u0438",
    "url": "https://stat1.deti-online.com/a/3M5UmGyIMn8olydIGZmTsw/1528992526/files/skazki/skazki-bratev-grimm/tri-pryahi.mp3"
  },
  {
    "duration": "13:57",
    "title": "Rike S Hoholkom",
    "orig_title": "\u0420\u0438\u043a\u0435 \u0441 \u0445\u043e\u0445\u043e\u043b\u043a\u043e\u043c",
    "url": "https://stat1.deti-online.com/a/QRHe_paKOaQj6ba6Jh1lGQ/1528977966/files/skazki/skazki-sharlja-perro/rike-s-hoholkom.mp3"
  },
  {
    "duration": "04:27",
    "title": "Kaplja Vody",
    "orig_title": "\u041a\u0430\u043f\u043b\u044f \u0432\u043e\u0434\u044b",
    "url": "https://stat1.deti-online.com/a/vXszpZKiEkekstWmp6KJZg/1528998935/files/skazki/skazki-andersena/kaplja-vody.mp3"
  },
  {
    "duration": "18:28",
    "title": "Tri Porosenka",
    "orig_title": "\u0422\u0440\u0438 \u043f\u043e\u0440\u043e\u0441\u0435\u043d\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/btpKCcL3sVvQh1pt6_mlew/1528969968/files/skazki/sbornik-skazok/tri-porosenka.mp3"
  },
  {
    "duration": "01:30",
    "title": "Repka",
    "orig_title": "\u0420\u0435\u043f\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/fOd9Ds00NKazvmadH1kGRA/1528971275/files/skazki/russkie-narodnye-skazki/repka.mp3"
  },
  {
    "duration": "26:49",
    "title": "Kalif Aist",
    "orig_title": "\u041a\u0430\u043b\u0438\u0444 \u0430\u0438\u0441\u0442",
    "url": "https://stat1.deti-online.com/a/LY4cimssjSUlG_G26LrQ_Q/1528976431/files/skazki/skazki-gaufa/kalif-aist.mp3"
  },
  {
    "duration": "10:36",
    "title": "Tri Ohotnika",
    "orig_title": "\u0422\u0440\u0438 \u043e\u0445\u043e\u0442\u043d\u0438\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/rnFykIEyXoRwxHNrD4VVgw/1528975483/files/skazki/rasskazy-nosova/tri-ohotnika.mp3"
  },
  {
    "duration": "03:10",
    "title": "Rebyata I Utyata",
    "orig_title": "\u0420\u0435\u0431\u044f\u0442\u0430 \u0438 \u0443\u0442\u044f\u0442\u0430",
    "url": "https://stat2.deti-online.com/a/i2TVfVp13Bf3vO4fdUgOfA/1528990550/files/skazki/rasskazy-prishvina/rebyata-i-utyata.mp3"
  },
  {
    "duration": "03:42",
    "title": "Kak Sobaka Druga Iskala",
    "orig_title": "\u041a\u0430\u043a \u0441\u043e\u0431\u0430\u043a\u0430 \u0434\u0440\u0443\u0433\u0430 \u0438\u0441\u043a\u0430\u043b\u0430",
    "url": "https://stat2.deti-online.com/a/G0tlZethp9AHGAGo9kYOZg/1528977499/files/skazki/russkie-narodnye-skazki/kak-sobaka-druga-iskala.mp3"
  },
  {
    "duration": "06:21",
    "title": "Tri Medvedya",
    "orig_title": "\u0422\u0440\u0438 \u043c\u0435\u0434\u0432\u0435\u0434\u044f",
    "url": "https://stat1.deti-online.com/a/F2L2D_z9JAGPrU6Z-cDWTg/1528970598/files/skazki/russkie-narodnye-skazki/tri-medvedya.mp3"
  },
  {
    "duration": "03:59",
    "title": "Rachya Svadba",
    "orig_title": "\u0420\u0430\u0447\u044c\u044f \u0441\u0432\u0430\u0434\u044c\u0431\u0430",
    "url": "https://stat1.deti-online.com/a/QZGgQ2fsM7CY3-uJ6-iMmw/1529005096/files/skazki/skazki-tolstogo/rachya-svadba.mp3"
  },
  {
    "duration": "14:26",
    "title": "Kak Muravishka Domoy Speshil",
    "orig_title": "\u041a\u0430\u043a \u043c\u0443\u0440\u0430\u0432\u044c\u0438\u0448\u043a\u0430 \u0434\u043e\u043c\u043e\u0439 \u0441\u043f\u0435\u0448\u0438\u043b",
    "url": "https://stat1.deti-online.com/a/sTz__j8kCxAYSbfXEy71Pg/1528973906/files/skazki/rasskazy-bianki/kak-muravishka-domoy-speshil.mp3"
  },
  {
    "duration": "11:02",
    "title": "Tri Zmeinyh Listochka",
    "orig_title": "\u0422\u0440\u0438 \u0437\u043c\u0435\u0438\u043d\u044b\u0445 \u043b\u0438\u0441\u0442\u043e\u0447\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/oAAJahl16QRa2FMFhNfN3w/1528990307/files/skazki/skazki-bratev-grimm/tri-zmeinyh-listochka.mp3"
  },
  {
    "duration": "15:20",
    "title": "Rasskazy O Zhivotnyh 11",
    "orig_title": "\u0411\u0435\u0441\u043f\u0440\u0438\u0437\u043e\u0440\u043d\u0430\u044f \u043a\u043e\u0448\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/MbZIxR2TeIKqHO0Mwfb3_g/1528974377/files/skazki/rasskazy-zhitkova/rasskazy-o-zhivotnyh-11.mp3"
  },
  {
    "duration": "01:23",
    "title": "Kak Lisa Uchilas Letat",
    "orig_title": "\u041a\u0430\u043a \u043b\u0438\u0441\u0430 \u0443\u0447\u0438\u043b\u0430\u0441\u044c \u043b\u0435\u0442\u0430\u0442\u044c",
    "url": "https://stat1.deti-online.com/a/zpvE_i4HsN3z3Rl4tNr_Cg/1528976751/files/skazki/russkie-narodnye-skazki/kak-lisa-uchilas-letat.mp3"
  },
  {
    "duration": "05:08",
    "title": "Tri Brata",
    "orig_title": "\u0422\u0440\u0438 \u0431\u0440\u0430\u0442\u0430",
    "url": "https://stat2.deti-online.com/a/CWCLgH0J_UqX7BKLh8ORRQ/1528982145/files/skazki/skazki-bratev-grimm/tri-brata.mp3"
  },
  {
    "duration": "13:14",
    "title": "Rasskazhite Mne Pro Singapur",
    "orig_title": "\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043c\u043d\u0435 \u043f\u0440\u043e \u0421\u0438\u043d\u0433\u0430\u043f\u0443\u0440",
    "url": "https://stat1.deti-online.com/a/0cqgs-kLLncYlt_5YJ7gXA/1528979574/files/skazki/rasskazy-dragunskogo/rasskazhite-mne-pro-singapur.mp3"
  },
  {
    "duration": "02:06",
    "title": "Kak Lisa S Ovcoi Volka Nakazali",
    "orig_title": "\u041a\u0430\u043a \u043b\u0438\u0441\u0430 \u0441 \u043e\u0432\u0446\u043e\u0439 \u0432\u043e\u043b\u043a\u0430 \u043d\u0430\u043a\u0430\u0437\u0430\u043b\u0438",
    "url": "https://stat1.deti-online.com/a/arOqF2EHHJN_6FNZRFiIOA/1528982620/files/skazki/russkie-narodnye-skazki/kak-lisa-s-ovcoi-volka-nakazali.mp3"
  },
  {
    "duration": "04:37",
    "title": "Toptygin I Lisa",
    "orig_title": "\u0422\u043e\u043f\u0442\u044b\u0433\u0438\u043d \u0438 \u043b\u0438\u0441\u0430",
    "url": "https://stat2.deti-online.com/a/VfQwtekuKIbp9uGfYfikYA/1528979319/files/skazki/skazki-chukovskogo/toptygin-i-lisa.mp3"
  },
  {
    "duration": "14:20",
    "title": "Rapuncel",
    "orig_title": "\u0420\u0430\u043f\u0443\u043d\u0446\u0435\u043b\u044c",
    "url": "https://stat1.deti-online.com/a/wX7wU54lXYHo49MO91UlfA/1528971066/files/skazki/skazki-bratev-grimm/rapuncel.mp3"
  },
  {
    "duration": "52:11",
    "title": "Vtoraja Kniga Dzhunglei Kak V Dzhungli Prishyol Strah",
    "orig_title": "\u041a\u0430\u043a \u0432 \u0434\u0436\u0443\u043d\u0433\u043b\u0438 \u043f\u0440\u0438\u0448\u0451\u043b \u0441\u0442\u0440\u0430\u0445",
    "url": "https://stat1.deti-online.com/a/trpN9zmdsahqOB8G_KPVMA/1528991845/files/skazki/skazki-kiplinga/vtoraja-kniga-dzhunglei-kak-v-dzhungli-prishyol-strah.mp3"
  },
  {
    "duration": "10:51",
    "title": "To Chego Ne Bylo",
    "orig_title": "\u0422\u043e, \u0447\u0435\u0433\u043e \u043d\u0435 \u0431\u044b\u043b\u043e",
    "url": "https://stat1.deti-online.com/a/Wg2qpk13W-qS9fegYTsmqg/1528994981/files/skazki/skazki-garshina/to-chego-ne-bylo.mp3"
  },
  {
    "duration": "49:15",
    "title": "Raiskii Sad",
    "orig_title": "\u0420\u0430\u0439\u0441\u043a\u0438\u0439 \u0441\u0430\u0434",
    "url": "https://stat2.deti-online.com/a/VN6BWmapObcsCD2WHmjHwA/1528984477/files/skazki/skazki-andersena/raiskii-sad.mp3"
  },
  {
    "duration": "07:07",
    "title": "Istinnaja Pravda",
    "orig_title": "\u0418\u0441\u0442\u0438\u043d\u043d\u0430\u044f \u043f\u0440\u0430\u0432\u0434\u0430",
    "url": "https://stat1.deti-online.com/a/jD96StbwV6GoMBfOmIcvNA/1528998849/files/skazki/skazki-andersena/istinnaja-pravda.mp3"
  },
  {
    "duration": "10:34",
    "title": "Tiha Ukrainskaya Noch",
    "orig_title": "\u0422\u0438\u0445\u0430 \u0443\u043a\u0440\u0430\u0438\u043d\u0441\u043a\u0430\u044f \u043d\u043e\u0447\u044c",
    "url": "https://stat1.deti-online.com/a/m3JNf7Soa3DXuGXDT9ix6w/1528979078/files/skazki/rasskazy-dragunskogo/tiha-ukrainskaya-noch.mp3"
  },
  {
    "duration": "03:39",
    "title": "Raznye Kolesa",
    "orig_title": "\u0420\u0430\u0437\u043d\u044b\u0435 \u043a\u043e\u043b\u0451\u0441\u0430",
    "url": "https://stat2.deti-online.com/a/idGkkpOQp0ZaTNgKfq4pFg/1528975004/files/skazki/skazki-suteeva/raznye-kolesa.mp3"
  },
  {
    "duration": "14:57",
    "title": "Ilja Muromec I Solovei Razboinik",
    "orig_title": "\u0418\u043b\u044c\u044f \u041c\u0443\u0440\u043e\u043c\u0435\u0446 \u0438 \u0421\u043e\u043b\u043e\u0432\u0435\u0439 \u0440\u0430\u0437\u0431\u043e\u0439\u043d\u0438\u043a",
    "url": "https://stat2.deti-online.com/a/PiY5w5SHpx4rbZ9GShikoQ/1528971433/files/skazki/russkie-narodnye-skazki/ilja-muromec-i-solovei-razboinik.mp3"
  },
  {
    "duration": "13:00",
    "title": "Timur I Ego Komanda 12",
    "orig_title": "\u0427\u0430\u0441\u0442\u044c 1",
    "url": "https://stat2.deti-online.com/a/ZyoePb4WDumFC80kd6lWNw/1528972401/files/skazki/rasskazy-gaydara/timur-i-ego-komanda-12.mp3"
  },
  {
    "duration": "06:58",
    "title": "Raz Dva Druzhno",
    "orig_title": "\u0420\u0430\u0437, \u0434\u0432\u0430 \u2014 \u0434\u0440\u0443\u0436\u043d\u043e!",
    "url": "https://stat2.deti-online.com/a/YqEU1py0rzhuVwaK5Qhatw/1528978798/files/skazki/skazki-suteeva/raz-dva-druzhno.mp3"
  },
  {
    "duration": "08:40",
    "title": "Izobretatel",
    "orig_title": "\u0418\u0437\u043e\u0431\u0440\u0435\u0442\u0430\u0442\u0435\u043b\u044c",
    "url": "https://stat1.deti-online.com/a/wGgLTcF2HnU86MlCUn1ong/1528988946/files/skazki/rasskazy-prishvina/izobretatel.mp3"
  },
  {
    "duration": "51:39",
    "title": "Pervaja Kniga Dzhunglei Tigr  Tigr ",
    "orig_title": "\u0422\u0438\u0433\u0440! \u0422\u0438\u0433\u0440!",
    "url": "https://stat1.deti-online.com/a/YCyDlwj3WIKiQrCOif64wg/1528983587/files/skazki/skazki-kiplinga/pervaja-kniga-dzhunglei-tigr!-tigr!.mp3"
  },
  {
    "duration": "00:54",
    "title": "Radost",
    "orig_title": "\u0420\u0430\u0434\u043e\u0441\u0442\u044c",
    "url": "https://stat2.deti-online.com/a/htR0VTnyl5-TWFMbxbtTkA/1528995003/files/skazki/skazki-chukovskogo/radost.mp3"
  },
  {
    "duration": "08:09",
    "title": "Ivanushka Durachok",
    "orig_title": "\u0418\u0432\u0430\u043d\u0443\u0448\u043a\u0430-\u0434\u0443\u0440\u0430\u0447\u043e\u043a",
    "url": "https://stat1.deti-online.com/a/y0a-kMWiMZ6RCro0hNjN7w/1528980047/files/skazki/russkie-narodnye-skazki/ivanushka-durachok.mp3"
  },
  {
    "duration": "04:38",
    "title": "Teremok2",
    "orig_title": "\u0422\u0435\u0440\u0435\u043c\u043e\u043a",
    "url": "https://stat1.deti-online.com/a/s5UQZoixe4B_OUzC-GtbBg/1528970258/files/skazki/russkie-narodnye-skazki/teremok2.mp3"
  },
  {
    "duration": "02:34",
    "title": "Putanica",
    "orig_title": "\u041f\u0443\u0442\u0430\u043d\u0438\u0446\u0430",
    "url": "https://stat1.deti-online.com/a/-qVZ6CYWCFvQkfJYuXXU7Q/1528976702/files/skazki/skazki-chukovskogo/putanica.mp3"
  },
  {
    "duration": "17:15",
    "title": "Ivan Carevich I Seryy Volk",
    "orig_title": "\u0418\u0432\u0430\u043d-\u0446\u0430\u0440\u0435\u0432\u0438\u0447 \u0438 \u0441\u0435\u0440\u044b\u0439 \u0432\u043e\u043b\u043a",
    "url": "https://stat1.deti-online.com/a/DhOY-7czRubSh5q32NCGrQ/1528971557/files/skazki/russkie-narodnye-skazki/ivan-carevich-i-seryy-volk.mp3"
  },
  {
    "duration": "07:15",
    "title": "Terem Teremok",
    "orig_title": "\u0422\u0435\u0440\u0435\u043c-\u0442\u0435\u0440\u0435\u043c\u043e\u043a",
    "url": "https://stat1.deti-online.com/a/aQ02MXYefoOTA6Ex8Ynzbw/1528974289/files/skazki/skazki-suteeva/terem-teremok.mp3"
  },
  {
    "duration": "05:04",
    "title": "Pryatki",
    "orig_title": "\u041f\u0440\u044f\u0442\u043a\u0438",
    "url": "https://stat2.deti-online.com/a/kcxcby9bazzWePZQIkeWpg/1528979164/files/skazki/rasskazy-nosova/pryatki.mp3"
  },
  {
    "duration": "25:05",
    "title": "Ivan Krestjanskii Syn I Chudo Yudo",
    "orig_title": "\u0418\u0432\u0430\u043d-\u043a\u0440\u0435\u0441\u0442\u044c\u044f\u043d\u0441\u043a\u0438\u0439 \u0441\u044b\u043d \u0438 \u0447\u0443\u0434\u043e-\u044e\u0434\u043e",
    "url": "https://stat1.deti-online.com/a/t7sBFmpfsy5X0rZDbwo7ZA/1528971126/files/skazki/russkie-narodnye-skazki/ivan-krestjanskii-syn-i-chudo-yudo.mp3"
  },
  {
    "duration": "37:53",
    "title": "Ten",
    "orig_title": "\u0422\u0435\u043d\u044c",
    "url": "https://stat1.deti-online.com/a/skmvCLnM6liv5YuX_iWPTw/1528990768/files/skazki/skazki-andersena/ten.mp3"
  },
  {
    "duration": "12:15",
    "title": "Prjanichnyi Domik",
    "orig_title": "\u041f\u0440\u044f\u043d\u0438\u0447\u043d\u044b\u0439 \u0434\u043e\u043c\u0438\u043a",
    "url": "https://stat2.deti-online.com/a/YUiX9Hp26_qKSNH73ksUFg/1528975127/files/skazki/skazki-sharlja-perro/prjanichnyi-domik.mp3"
  },
  {
    "duration": "21:00",
    "title": "Zolushka Ili Hrustalnaja Tufelka",
    "orig_title": "\u0417\u043e\u043b\u0443\u0448\u043a\u0430 \u0438\u043b\u0438 \u0445\u0440\u0443\u0441\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u0442\u0443\u0444\u0435\u043b\u044c\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/9lQL7UDxAnrNpEd92mT11g/1528970484/files/skazki/skazki-sharlja-perro/zolushka-ili-hrustalnaja-tufelka.mp3"
  },
  {
    "duration": "03:56",
    "title": "Telefon",
    "orig_title": "\u0422\u0435\u043b\u0435\u0444\u043e\u043d",
    "url": "https://stat2.deti-online.com/a/3a3mD3b5kqDgjyt8wPp5cw/1528972716/files/skazki/skazki-chukovskogo/telefon.mp3"
  },
  {
    "duration": "05:47",
    "title": "Professor Kislyh Schey",
    "orig_title": "\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u043e\u0440 \u043a\u0438\u0441\u043b\u044b\u0445 \u0449\u0435\u0439",
    "url": "https://stat2.deti-online.com/a/0qPq-MDGtyOMWtqMSbvz8Q/1528980957/files/skazki/rasskazy-dragunskogo/professor-kislyh-schey.mp3"
  },
  {
    "duration": "01:58",
    "title": "Zolotoi Topor",
    "orig_title": "\u0417\u043e\u043b\u043e\u0442\u043e\u0439 \u0442\u043e\u043f\u043e\u0440",
    "url": "https://stat1.deti-online.com/a/ZqJnPuR0tLpkm9OPfIcLAg/1528976844/files/skazki/russkie-narodnye-skazki/zolotoi-topor.mp3"
  },
  {
    "duration": "04:54",
    "title": "Avtomobil",
    "orig_title": "\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c",
    "url": "https://stat1.deti-online.com/a/SsdhgsinTdW0XX01AN8IhA/1528973998/files/skazki/rasskazy-nosova/avtomobil.mp3"
  },
  {
    "duration": "02:07",
    "title": "Zolotoy Lug",
    "orig_title": "\u0417\u043e\u043b\u043e\u0442\u043e\u0439 \u043b\u0443\u0433",
    "url": "https://stat1.deti-online.com/a/eK3eOZSgGTZbKUvvcunUaA/1528999718/files/skazki/rasskazy-prishvina/zolotoy-lug.mp3"
  },
  {
    "duration": "01:07",
    "title": "Myshka",
    "orig_title": "\u041c\u044b\u0448\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/95iBQem71uDF8DGmywnsDQ/1529003202/files/skazki/skazki-tolstogo/myshka.mp3"
  },
  {
    "duration": "07:53",
    "title": "My Ischem Klyaksu",
    "orig_title": "\u041c\u044b \u0438\u0449\u0435\u043c \u043a\u043b\u044f\u043a\u0441\u0443",
    "url": "https://stat1.deti-online.com/a/YolPE-SpviHcqEG_PpLC5g/1528979665/files/skazki/skazki-suteeva/my-ischem-klyaksu.mp3"
  },
  {
    "duration": "02:35",
    "title": "Buratino 29",
    "orig_title": "\u0413\u043b\u0430\u0432\u0430 1",
    "url": "https://stat2.deti-online.com/a/Bf1kmXIhgQ6fLZgvvewpig/1528970235/files/skazki/skazki-tolstogo/buratino-29.mp3"
  },
  {
    "duration": "04:10",
    "title": "Muha Cokotuha",
    "orig_title": "\u041c\u0443\u0445\u0430-\u0426\u043e\u043a\u043e\u0442\u0443\u0445\u0430",
    "url": "https://stat1.deti-online.com/a/ZLwUkcFi3plKur5104R6kg/1528970957/files/skazki/skazki-chukovskogo/muha-cokotuha.mp3"
  },
  {
    "duration": "12:08",
    "title": "Zolotoy Gus",
    "orig_title": "\u0417\u043e\u043b\u043e\u0442\u043e\u0439 \u0433\u0443\u0441\u044c",
    "url": "https://stat2.deti-online.com/a/e7q8A1RPTwSgTqfPRCv_SQ/1528977217/files/skazki/skazki-bratev-grimm/zolotoy-gus.mp3"
  },
  {
    "duration": "03:03",
    "title": "Muravey",
    "orig_title": "\u041c\u0443\u0440\u0430\u0432\u0435\u0439",
    "url": "https://stat2.deti-online.com/a/CndmZ0r375cQnjsb_tc3Ng/1528999314/files/skazki/skazki-tolstogo/muravey.mp3"
  },
  {
    "duration": "4:06",
    "title": "Zolotoy Gorshok",
    "orig_title": "\u0417\u043e\u043b\u043e\u0442\u043e\u0439 \u0433\u043e\u0440\u0448\u043e\u043a",
    "url": "https://stat1.deti-online.com/a/3mK7_XJzv3A3c0L1W8KKYQ/1528977503/files/skazki/skazki-gofmana/zolotoy-gorshok.mp3"
  },
  {
    "duration": "02:34",
    "title": "Mudrec",
    "orig_title": "\u041c\u0443\u0434\u0440\u0435\u0446",
    "url": "https://stat2.deti-online.com/a/Zx541gxOMsp95ouGWvy8Bw/1529005462/files/skazki/skazki-tolstogo/mudrec.mp3"
  },
  {
    "duration": "08:08",
    "title": "Zimove Zverei",
    "orig_title": "\u0417\u0438\u043c\u043e\u0432\u044c\u0435 \u0437\u0432\u0435\u0440\u0435\u0439",
    "url": "https://stat1.deti-online.com/a/Q13ZO0PqUGiQerxWeG_eeA/1528975241/files/skazki/russkie-narodnye-skazki/zimove-zverei.mp3"
  },
  {
    "duration": "03:26",
    "title": "Moya Rodina",
    "orig_title": "\u041c\u043e\u044f \u0440\u043e\u0434\u0438\u043d\u0430",
    "url": "https://stat2.deti-online.com/a/swLzG2O6NKGipAIZoJdQ-g/1528990805/files/skazki/rasskazy-prishvina/moya-rodina.mp3"
  },
  {
    "duration": "07:39",
    "title": "Zelenchatye Leopardy",
    "orig_title": "\u0417\u0435\u043b\u0435\u043d\u0447\u0430\u0442\u044b\u0435 \u043b\u0435\u043e\u043f\u0430\u0440\u0434\u044b",
    "url": "https://stat2.deti-online.com/a/RwGDOUDtAtwq8vCzonZxlg/1528979135/files/skazki/rasskazy-dragunskogo/zelenchatye-leopardy.mp3"
  },
  {
    "duration": "08:14",
    "title": "Motogonki Po Otvesnoy Stene",
    "orig_title": "\u041c\u043e\u0442\u043e\u0433\u043e\u043d\u043a\u0438 \u043f\u043e \u043e\u0442\u0432\u0435\u0441\u043d\u043e\u0439 \u0441\u0442\u0435\u043d\u0435",
    "url": "https://stat1.deti-online.com/a/3Y-p_PfZYNb3JjIegloWnw/1528981045/files/skazki/rasskazy-dragunskogo/motogonki-po-otvesnoy-stene.mp3"
  },
  {
    "duration": "02:20",
    "title": "Zayac",
    "orig_title": "\u0417\u0430\u044f\u0446",
    "url": "https://stat1.deti-online.com/a/-LDA4XPrDsb0yZ8VMWm8nQ/1528998806/files/skazki/skazki-tolstogo/zayac.mp3"
  },
  {
    "duration": "17:16",
    "title": "Morskoy Car I Vasilisa Premudraya",
    "orig_title": "\u041c\u043e\u0440\u0441\u043a\u043e\u0439 \u0446\u0430\u0440\u044c \u0438 \u0412\u0430\u0441\u0438\u043b\u0438\u0441\u0430 \u041f\u0440\u0435\u043c\u0443\u0434\u0440\u0430\u044f",
    "url": "https://stat2.deti-online.com/a/BgGL4Y2kOKnlpNLWGNKCzw/1528976343/files/skazki/russkie-narodnye-skazki/morskoy-car-i-vasilisa-premudraya.mp3"
  },
  {
    "duration": "03:26",
    "title": "Zateyniki",
    "orig_title": "\u0417\u0430\u0442\u0435\u0439\u043d\u0438\u043a\u0438",
    "url": "https://stat1.deti-online.com/a/VH7sSn3eZZGxajpJDoMWdA/1528975914/files/skazki/rasskazy-nosova/zateyniki.mp3"
  },
  {
    "duration": "05:08",
    "title": "Morozko",
    "orig_title": "\u041c\u043e\u0440\u043e\u0437\u043a\u043e",
    "url": "https://stat2.deti-online.com/a/yjl4mMTUw6KJcs8X84EgiA/1528971617/files/skazki/russkie-narodnye-skazki/morozko.mp3"
  },
  {
    "duration": "03:49",
    "title": "Zaplatka",
    "orig_title": "\u0417\u0430\u043f\u043b\u0430\u0442\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/96quJzSzB4JvowOXYFtj6Q/1528973515/files/skazki/rasskazy-nosova/zaplatka.mp3"
  },
  {
    "duration": "18:55",
    "title": "Moroz Ivanovich",
    "orig_title": "\u041c\u043e\u0440\u043e\u0437 \u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447",
    "url": "https://stat2.deti-online.com/a/Vz65Fwn7Hr-IOr8Vv_F0UQ/1528978374/files/skazki/skazki-odoevskogo/moroz-ivanovich.mp3"
  },
  {
    "duration": "14:47",
    "title": "Zamarashka",
    "orig_title": "\u0417\u0430\u043c\u0430\u0440\u0430\u0448\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/tEIB4QxDcgvBd9POWXbWGA/1528974543/files/skazki/skazki-sharlja-perro/zamarashka.mp3"
  },
  {
    "duration": "02:50",
    "title": "Moroz I Zajac",
    "orig_title": "\u041c\u043e\u0440\u043e\u0437 \u0438 \u0437\u0430\u044f\u0446",
    "url": "https://stat2.deti-online.com/a/p-gIFyCYIxtrdjiZsIpyEA/1528980290/files/skazki/russkie-narodnye-skazki/moroz-i-zajac.mp3"
  },
  {
    "duration": "05:44",
    "title": "Zamazka",
    "orig_title": "\u0417\u0430\u043c\u0430\u0437\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/aX-JqPpA57nkYy9N10dNOQ/1528974359/files/skazki/rasskazy-nosova/zamazka.mp3"
  },
  {
    "duration": "05:34",
    "title": "Moidodyr",
    "orig_title": "\u041c\u043e\u0439\u0434\u043e\u0434\u044b\u0440",
    "url": "https://stat2.deti-online.com/a/t-PNtS1xusChGYYsU7hPzw/1528970591/files/skazki/skazki-chukovskogo/moidodyr.mp3"
  },
  {
    "duration": "20:04",
    "title": "Zakoldovannaya Korolevna",
    "orig_title": "\u0417\u0430\u043a\u043e\u043b\u0434\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u0440\u043e\u043b\u0435\u0432\u043d\u0430",
    "url": "https://stat1.deti-online.com/a/Q2qfC8QU7j90o1G66l15PQ/1528974666/files/skazki/russkie-narodnye-skazki/zakoldovannaya-korolevna.mp3"
  },
  {
    "duration": "03:44",
    "title": "Zakoldovannaya Bukva",
    "orig_title": "\u0417\u0430\u043a\u043e\u043b\u0434\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430",
    "url": "https://stat1.deti-online.com/a/2sYVUkL-XRJgxUSkJT5ANQ/1528973965/files/skazki/rasskazy-dragunskogo/zakoldovannaya-bukva.mp3"
  },
  {
    "duration": "15:06",
    "title": "Mishkina Kasha",
    "orig_title": "\u041c\u0438\u0448\u043a\u0438\u043d\u0430 \u043a\u0430\u0448\u0430",
    "url": "https://stat2.deti-online.com/a/q3gF2nf4KQD2qMOasnyxRA/1528971825/files/skazki/rasskazy-nosova/mishkina-kasha.mp3"
  },
  {
    "duration": "12:23",
    "title": "Meshok Yablok",
    "orig_title": "\u041c\u0435\u0448\u043e\u043a \u044f\u0431\u043b\u043e\u043a",
    "url": "https://stat1.deti-online.com/a/d77CYdxO3hlq4exsxFZJpA/1528971210/files/skazki/skazki-suteeva/meshok-yablok.mp3"
  },
  {
    "duration": "00:35",
    "title": "Zakalyaka",
    "orig_title": "\u0417\u0430\u043a\u0430\u043b\u044f\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/Qegm3BBSY3lYqPIfoXK5PA/1528995286/files/skazki/skazki-chukovskogo/zakalyaka.mp3"
  },
  {
    "duration": "02:59",
    "title": "Merin",
    "orig_title": "\u041c\u0435\u0440\u0438\u043d",
    "url": "https://stat2.deti-online.com/a/mnNIuP-bYVHKah8qZOU7xQ/1529004096/files/skazki/skazki-tolstogo/merin.mp3"
  },
  {
    "duration": "06:02",
    "title": "Zaikina Izbushka",
    "orig_title": "\u0417\u0430\u0439\u043a\u0438\u043d\u0430 \u0438\u0437\u0431\u0443\u0448\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/fcslEubBqEpWD_RfXV3mmw/1528971721/files/skazki/russkie-narodnye-skazki/zaikina-izbushka.mp3"
  },
  {
    "duration": "04:38",
    "title": "Mena",
    "orig_title": "\u041c\u0435\u043d\u0430",
    "url": "https://stat2.deti-online.com/a/rg4QDBHnyxdJBXxzvH3c2A/1528985042/files/skazki/russkie-narodnye-skazki/mena.mp3"
  },
  {
    "duration": "04:47",
    "title": "Zaykin Korablik",
    "orig_title": "\u0417\u0430\u0439\u043a\u0438\u043d \u043a\u043e\u0440\u0430\u0431\u043b\u0438\u043a",
    "url": "https://stat2.deti-online.com/a/WCdQeqrXtTqU3F55SzgMWg/1528985395/files/skazki/skazki-suteeva/zaykin-korablik.mp3"
  },
  {
    "duration": "31:03",
    "title": "Medved Na Voevodstve",
    "orig_title": "\u041c\u0435\u0434\u0432\u0435\u0434\u044c \u043d\u0430 \u0432\u043e\u0435\u0432\u043e\u0434\u0441\u0442\u0432\u0435",
    "url": "https://stat1.deti-online.com/a/_ja4MRibn5zNr8bX6gW15A/1528998670/files/skazki/skazki-saltykova-schedrina/medved-na-voevodstve.mp3"
  },
  {
    "duration": "02:43",
    "title": "Zhurka",
    "orig_title": "\u0416\u0443\u0440\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/9XNDH9J8aIYh1U12tTqk9Q/1528997806/files/skazki/rasskazy-prishvina/zhurka.mp3"
  },
  {
    "duration": "03:01",
    "title": "Masha I Myshki",
    "orig_title": "\u041c\u0430\u0448\u0430 \u0438 \u043c\u044b\u0448\u043a\u0438",
    "url": "https://stat2.deti-online.com/a/LWR-QMwh8ehdzH1ZWMqCYw/1528997594/files/skazki/skazki-tolstogo/masha-i-myshki.mp3"
  },
  {
    "duration": "04:06",
    "title": "Zhuravl I Caplja",
    "orig_title": "\u0416\u0443\u0440\u0430\u0432\u043b\u044c \u0438 \u0446\u0430\u043f\u043b\u044f",
    "url": "https://stat1.deti-online.com/a/H_Sh8gA-8kmFeBc5wYAJ9w/1528978402/files/skazki/russkie-narodnye-skazki/zhuravl-i-caplja.mp3"
  },
  {
    "duration": "03:38",
    "title": "Zhivaya Shlyapa",
    "orig_title": "\u0416\u0438\u0432\u0430\u044f \u0448\u043b\u044f\u043f\u0430",
    "url": "https://stat2.deti-online.com/a/uIgWHnS2EQdq64iKFj-4nw/1528972637/files/skazki/rasskazy-nosova/zhivaya-shlyapa.mp3"
  },
  {
    "duration": "06:11",
    "title": "Masha I Medved",
    "orig_title": "\u041c\u0430\u0448\u0430 \u0438 \u043c\u0435\u0434\u0432\u0435\u0434\u044c",
    "url": "https://stat1.deti-online.com/a/RXPZwEl9cVwmidydfy-wcw/1528970068/files/skazki/russkie-narodnye-skazki/masha-i-medved.mp3"
  },
  {
    "duration": "27:01",
    "title": "Marja Morevna",
    "orig_title": "\u041c\u0430\u0440\u044c\u044f \u041c\u043e\u0440\u0435\u0432\u043d\u0430",
    "url": "https://stat2.deti-online.com/a/YWLsYsXTZd2qlIpYgYKCTw/1528975392/files/skazki/russkie-narodnye-skazki/marja-morevna.mp3"
  },
  {
    "duration": "19:08",
    "title": "Zhivaya Voda",
    "orig_title": "\u0416\u0438\u0432\u0430\u044f \u0432\u043e\u0434\u0430",
    "url": "https://stat1.deti-online.com/a/sFO4Pn5LoLJN3xAXigv2tA/1528973265/files/skazki/skazki-bratev-grimm/zhivaya-voda.mp3"
  },
  {
    "duration": "13:24",
    "title": "Malchik S Palchik",
    "orig_title": "\u041c\u0430\u043b\u044c\u0447\u0438\u043a \u0441 \u043f\u0430\u043b\u044c\u0447\u0438\u043a",
    "url": "https://stat1.deti-online.com/a/vyiTueMT8weLoMKKkGCVjA/1528973271/files/skazki/skazki-sharlja-perro/malchik-s-palchik.mp3"
  },
  {
    "duration": "10:25",
    "title": "Zhar Ptica I Vasilisa Carevna",
    "orig_title": "\u0416\u0430\u0440-\u043f\u0442\u0438\u0446\u0430 \u0438 \u0412\u0430\u0441\u0438\u043b\u0438\u0441\u0430-\u0446\u0430\u0440\u0435\u0432\u043d\u0430",
    "url": "https://stat2.deti-online.com/a/qLRUKsh88El8wcA2qU-rng/1528974305/files/skazki/russkie-narodnye-skazki/zhar-ptica-i-vasilisa-carevna.mp3"
  },
  {
    "duration": "05:54",
    "title": "Zhadnyi Velmozha",
    "orig_title": "\u0416\u0430\u0434\u043d\u044b\u0439 \u0432\u0435\u043b\u044c\u043c\u043e\u0436\u0430",
    "url": "https://stat1.deti-online.com/a/9Xxo5M6Z8R3BiN2C_G6XXg/1528987196/files/skazki/russkie-narodnye-skazki/zhadnyi-velmozha.mp3"
  },
  {
    "duration": "1:12",
    "title": "Malenkiy Princ 2",
    "orig_title": "\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u043f\u0440\u0438\u043d\u0446",
    "url": "https://stat1.deti-online.com/a/KFGK1pS9BFQp9BKPBfCfDQ/1528970896/files/skazki/sbornik-skazok/malenkiy-princ-2.mp3"
  },
  {
    "duration": "33:44",
    "title": "Malenkii Muk",
    "orig_title": "\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u041c\u0443\u043a",
    "url": "https://stat2.deti-online.com/a/NTLbLxuVTl_54pUEhKF_xA/1528973217/files/skazki/skazki-gaufa/malenkii-muk.mp3"
  },
  {
    "duration": "04:44",
    "title": "Esli By Ya Byl Vzroslym",
    "orig_title": "\u0415\u0441\u043b\u0438 \u0431\u044b \u044f \u0431\u044b\u043b \u0432\u0437\u0440\u043e\u0441\u043b\u044b\u043c",
    "url": "https://stat2.deti-online.com/a/DtgicJccaOIA1stYh5H46g/1528974646/files/skazki/rasskazy-dragunskogo/esli-by-ya-byl-vzroslym.mp3"
  },
  {
    "duration": "27:52",
    "title": "Malenkiy Klaus I Bolshoy Klaus",
    "orig_title": "\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u041a\u043b\u0430\u0443\u0441 \u0438 \u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u041a\u043b\u0430\u0443\u0441",
    "url": "https://stat1.deti-online.com/a/d5WrYpd_JdwBA7uYyUjV3w/1528988662/files/audioskazki/malenkiy-klaus-i-bolshoy-klaus.mp3"
  },
  {
    "duration": "00:39",
    "title": "Elka",
    "orig_title": "\u0415\u043b\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/113fDRADkXMesKQfqTtBzw/1528995265/files/skazki/skazki-chukovskogo/elka.mp3"
  }
];