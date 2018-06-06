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
    "duration": "07:39",
    "title": "Zelenchatye Leopardy",
    "orig_title": "\u0417\u0435\u043b\u0435\u043d\u0447\u0430\u0442\u044b\u0435 \u043b\u0435\u043e\u043f\u0430\u0440\u0434\u044b",
    "url": "https://stat2.deti-online.com/a/Eu-427jNWXR8UWs8fsIjWQ/1528546564/files/skazki/rasskazy-dragunskogo/zelenchatye-leopardy.mp3"
  },
  {
    "duration": "22:05",
    "title": "Staryy Ulichnyy Fonar",
    "orig_title": "\u0421\u0442\u0430\u0440\u044b\u0439 \u0443\u043b\u0438\u0447\u043d\u044b\u0439 \u0444\u043e\u043d\u0430\u0440\u044c",
    "url": "https://stat1.deti-online.com/a/PGU3Xm2xvXQSjTz73bPEZg/1528558669/files/audioskazki/staryy-ulichnyy-fonar.mp3"
  },
  {
    "duration": "02:22",
    "title": "Lisa I Zhuravl",
    "orig_title": "\u041b\u0438\u0441\u0430 \u0438 \u0436\u0443\u0440\u0430\u0432\u043b\u044c",
    "url": "https://stat2.deti-online.com/a/8Blb2HhrmpWydTnJj0zLsQ/1528542969/files/skazki/russkie-narodnye-skazki/lisa-i-zhuravl.mp3"
  },
  {
    "duration": "02:20",
    "title": "Zayac",
    "orig_title": "\u0417\u0430\u044f\u0446",
    "url": "https://stat2.deti-online.com/a/edrfZUYQRY7AU06IxG6s3A/1528565626/files/skazki/skazki-tolstogo/zayac.mp3"
  },
  {
    "duration": "04:49",
    "title": "Anglichanin Pavlya",
    "orig_title": "\u0410\u043d\u0433\u043b\u0438\u0447\u0430\u043d\u0438\u043d \u041f\u0430\u0432\u043b\u044f",
    "url": "https://stat1.deti-online.com/a/ju2B70wOT4bMLOku57t4ew/1528545139/files/skazki/rasskazy-dragunskogo/anglichanin-pavlya.mp3"
  },
  {
    "duration": "04:37",
    "title": "Lisa I Volk",
    "orig_title": "\u041b\u0438\u0441\u0430 \u0438 \u0432\u043e\u043b\u043a (\u0436\u0435\u043d\u0441\u043a\u0438\u0439 \u0433\u043e\u043b\u043e\u0441)",
    "url": "https://stat1.deti-online.com/a/dCahwopSQuQ6zAEVy0OiXA/1528540689/files/skazki/russkie-narodnye-skazki/lisa-i-volk.mp3"
  },
  {
    "duration": "03:26",
    "title": "Zateyniki",
    "orig_title": "\u0417\u0430\u0442\u0435\u0439\u043d\u0438\u043a\u0438",
    "url": "https://stat2.deti-online.com/a/EroRzguT5FaVWp6JH7eRjw/1528543130/files/skazki/rasskazy-nosova/zateyniki.mp3"
  },
  {
    "duration": "20:58",
    "title": "Staryy Do",
    "orig_title": "\u0421\u0442\u0430\u0440\u044b\u0439 \u0434\u043e\u043c",
    "url": "https://stat1.deti-online.com/a/t5ql1bkS8lfM0vdY4i-WfA/1528550630/files/skazki/skazki-andersena/staryy-dom.mp3"
  },
  {
    "duration": "01:29",
    "title": "Lisa",
    "orig_title": "\u041b\u0438\u0441\u0430",
    "url": "https://stat2.deti-online.com/a/__8zYZ7-s2hogGXoum-UIw/1528577706/files/skazki/skazki-tolstogo/lisa.mp3"
  },
  {
    "duration": "03:49",
    "title": "Zaplatka",
    "orig_title": "\u0417\u0430\u043f\u043b\u0430\u0442\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/gj8PWrD_m2U3uYIYJSrQ_A/1528541461/files/skazki/rasskazy-nosova/zaplatka.mp3"
  },
  {
    "duration": "45:59",
    "title": "Alye Parusa 17",
    "orig_title": "1. \u041f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d\u0438\u0435. \u0427\u0438\u0442\u0430\u0435\u0442 \u0412\u0430\u043b\u0435\u0440\u0438\u0439 \u0417\u0430\u0445\u0430\u0440\u044c\u0435\u0432",
    "url": "https://stat1.deti-online.com/a/Fx_E3k9-PxFvhIGy67pk2g/1528541344/files/skazki/povesti/alye-parusa-17.mp3"
  },
  {
    "duration": "07:00",
    "title": "Starik Iz Stekljannoi Gory",
    "orig_title": "\u0421\u0442\u0430\u0440\u0438\u043a \u0438\u0437 \u0441\u0442\u0435\u043a\u043b\u044f\u043d\u043d\u043e\u0439 \u0433\u043e\u0440\u044b",
    "url": "https://stat2.deti-online.com/a/TyTkf0EEgJ6fJkY8rMHjrQ/1528546077/files/skazki/skazki-bratev-grimm/starik-iz-stekljannoi-gory.mp3"
  },
  {
    "duration": "00:36",
    "title": "Lis I Myshonok",
    "orig_title": "\u041b\u0438\u0441 \u0438 \u043c\u044b\u0448\u043e\u043d\u043e\u043a",
    "url": "https://stat2.deti-online.com/a/TMcT0H6qg5e3GqV7nzPSMQ/1528544773/files/skazki/rasskazy-bianki/lis-i-myshonok.mp3"
  },
  {
    "duration": "14:47",
    "title": "Zamarashka",
    "orig_title": "\u0417\u0430\u043c\u0430\u0440\u0430\u0448\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/_oGB90gWA0GLYF-2XMVrww/1528542096/files/skazki/skazki-sharlja-perro/zamarashka.mp3"
  },
  {
    "duration": "07:37",
    "title": "Srazhenie U Chistoy Rechki",
    "orig_title": "\u0421\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0443 \u0447\u0438\u0441\u0442\u043e\u0439 \u0440\u0435\u0447\u043a\u0438",
    "url": "https://stat1.deti-online.com/a/02Z38cImlw8YF3Y0lIEh7A/1528545574/files/skazki/rasskazy-dragunskogo/srazhenie-u-chistoy-rechki.mp3"
  },
  {
    "duration": "24:33",
    "title": "Letuchii Korabl",
    "orig_title": "\u041b\u0435\u0442\u0443\u0447\u0438\u0439 \u043a\u043e\u0440\u0430\u0431\u043b\u044c",
    "url": "https://stat1.deti-online.com/a/Op4z4Db4n1xtuu2QOtTtmA/1528540435/files/skazki/russkie-narodnye-skazki/letuchii-korabl.mp3"
  },
  {
    "duration": "05:44",
    "title": "Zamazka",
    "orig_title": "\u0417\u0430\u043c\u0430\u0437\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/58sIhyNAtLFMpLwmlHjkag/1528542313/files/skazki/rasskazy-nosova/zamazka.mp3"
  },
  {
    "duration": "24:56",
    "title": "Spjashaja Krasavica",
    "orig_title": "\u0421\u043f\u044f\u0449\u0430\u044f \u043a\u0440\u0430\u0441\u0430\u0432\u0438\u0446\u0430",
    "url": "https://stat2.deti-online.com/a/oMYN2V39767aP5PhvT_lgg/1528539335/files/skazki/skazki-sharlja-perro/spjashaja-krasavica.mp3"
  },
  {
    "duration": "08:08",
    "title": "Lesnaya Staruha",
    "orig_title": "\u041b\u0435\u0441\u043d\u0430\u044f \u0441\u0442\u0430\u0440\u0443\u0445\u0430",
    "url": "https://stat1.deti-online.com/a/67boxW62G0R-9yxGKb3COQ/1528549664/files/skazki/skazki-bratev-grimm/lesnaya-staruha.mp3"
  },
  {
    "duration": "20:04",
    "title": "Zakoldovannaya Korolevna",
    "orig_title": "\u0417\u0430\u043a\u043e\u043b\u0434\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u0440\u043e\u043b\u0435\u0432\u043d\u0430",
    "url": "https://stat2.deti-online.com/a/ecnY0yt9Q_DY92mB5IAkVA/1528542620/files/skazki/russkie-narodnye-skazki/zakoldovannaya-korolevna.mp3"
  },
  {
    "duration": "02:37",
    "title": "Soroka",
    "orig_title": "\u0421\u043e\u0440\u043e\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/nsVb0BbY7OdsE-_9aqinaw/1528568382/files/skazki/skazki-tolstogo/soroka.mp3"
  },
  {
    "duration": "07:50",
    "title": "Lenivyi Geinc",
    "orig_title": "\u041b\u0435\u043d\u0438\u0432\u044b\u0439 \u0425\u0430\u0439\u043d\u0446",
    "url": "https://stat1.deti-online.com/a/EUMgCge2vsawLyuV3dfr9Q/1528561233/files/skazki/skazki-bratev-grimm/lenivyi-geinc.mp3"
  },
  {
    "duration": "03:44",
    "title": "Zakoldovannaya Bukva",
    "orig_title": "\u0417\u0430\u043a\u043e\u043b\u0434\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430",
    "url": "https://stat1.deti-online.com/a/_WvahBMEt_iCcUIW-7JUeQ/1528541675/files/skazki/rasskazy-dragunskogo/zakoldovannaya-bukva.mp3"
  },
  {
    "duration": "03:36",
    "title": "Solominka Ugolek I Bob",
    "orig_title": "\u0421\u043e\u043b\u043e\u043c\u0438\u043d\u043a\u0430, \u0443\u0433\u043e\u043b\u0435\u043a \u0438 \u0431\u043e\u0431",
    "url": "https://stat2.deti-online.com/a/LOMYFjC5nxvBOTNWetR-2A/1528544075/files/skazki/skazki-bratev-grimm/solominka-ugolek-i-bob.mp3"
  },
  {
    "duration": "14:08",
    "title": "Lyon",
    "orig_title": "\u041b\u0451\u043d",
    "url": "https://stat1.deti-online.com/a/KciDTLkE8YY_Cr-6Ww4B8Q/1528552021/files/skazki/skazki-andersena/lyon.mp3"
  },
  {
    "duration": "00:35",
    "title": "Zakalyaka",
    "orig_title": "\u0417\u0430\u043a\u0430\u043b\u044f\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/c-Hr8M7vlGs6cN4_SBynfQ/1528563038/files/skazki/skazki-chukovskogo/zakalyaka.mp3"
  },
  {
    "duration": "1:30",
    "title": "Alisa V Strane Chudes",
    "orig_title": "\u0410\u043b\u0438\u0441\u0430 \u0432 \u0441\u0442\u0440\u0430\u043d\u0435 \u0447\u0443\u0434\u0435\u0441",
    "url": "https://stat2.deti-online.com/a/cKPp-ZAxxzU_AwzgYxrZ1A/1528539429/files/skazki/sbornik-skazok/alisa-v-strane-chudes.mp3"
  },
  {
    "duration": "31:43",
    "title": "Solovei",
    "orig_title": "\u0421\u043e\u043b\u043e\u0432\u0435\u0439",
    "url": "https://stat1.deti-online.com/a/Yqk8oADrHbVAR70SzOKLUA/1528544874/files/skazki/skazki-andersena/solovei.mp3"
  },
  {
    "duration": "04:00",
    "title": "Ledenec",
    "orig_title": "\u041b\u0435\u0434\u0435\u043d\u0435\u0446",
    "url": "https://stat2.deti-online.com/a/a32WPKtDRDqnd1w3gz0pow/1528543866/files/skazki/rasskazy-nosova/ledenec.mp3"
  },
  {
    "duration": "06:02",
    "title": "Zaikina Izbushka",
    "orig_title": "\u0417\u0430\u0439\u043a\u0438\u043d\u0430 \u0438\u0437\u0431\u0443\u0448\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/AY2zowFO4VyLPAlaqPvLrA/1528539678/files/skazki/russkie-narodnye-skazki/zaikina-izbushka.mp3"
  },
  {
    "duration": "02:00",
    "title": "Sova I Kot",
    "orig_title": "\u0421\u043e\u0432\u0430 \u0438 \u043a\u043e\u0442",
    "url": "https://stat1.deti-online.com/a/13iVhONU6gwik54N47ZtUA/1528561407/files/skazki/skazki-tolstogo/sova-i-kot.mp3"
  },
  {
    "duration": "01:06",
    "title": "Kurochka Rjaba",
    "orig_title": "\u041a\u0443\u0440\u043e\u0447\u043a\u0430 \u0420\u044f\u0431\u0430 (\u043a\u043e\u0440\u043e\u0442\u043a\u0430\u044f)",
    "url": "https://stat1.deti-online.com/a/aHvpcYhicdTA62cZ6f1Euw/1528538261/files/skazki/russkie-narodnye-skazki/kurochka-rjaba.mp3"
  },
  {
    "duration": "04:47",
    "title": "Zaykin Korablik",
    "orig_title": "\u0417\u0430\u0439\u043a\u0438\u043d \u043a\u043e\u0440\u0430\u0431\u043b\u0438\u043a",
    "url": "https://stat2.deti-online.com/a/-AeD18H-D95938CJfqBjsQ/1528552896/files/skazki/skazki-suteeva/zaykin-korablik.mp3"
  },
  {
    "duration": "1:08",
    "title": "Snezhnaja Koroleva 2",
    "orig_title": "\u0421\u043d\u0435\u0436\u043d\u0430\u044f \u043a\u043e\u0440\u043e\u043b\u0435\u0432\u0430",
    "url": "https://stat2.deti-online.com/a/6AAqu8UGqGxPxNj_ylXe8w/1528538029/files/skazki/skazki-andersena/snezhnaja-koroleva-2.mp3"
  },
  {
    "duration": "09:49",
    "title": "Kurinyy Bulon",
    "orig_title": "\u041a\u0443\u0440\u0438\u043d\u044b\u0439 \u0431\u0443\u043b\u044c\u043e\u043d",
    "url": "https://stat1.deti-online.com/a/uD4IvqGGmfWIRDmFtCO0iQ/1528544732/files/skazki/rasskazy-dragunskogo/kurinyy-bulon.mp3"
  },
  {
    "duration": "02:43",
    "title": "Zhurka",
    "orig_title": "\u0416\u0443\u0440\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/j7lp5Pd0dwcBJZjvqMYuRg/1528563695/files/skazki/rasskazy-prishvina/zhurka.mp3"
  },
  {
    "duration": "04:55",
    "title": "Snegurushka I Lisa",
    "orig_title": "\u0421\u043d\u0435\u0433\u0443\u0440\u0443\u0448\u043a\u0430 \u0438 \u043b\u0438\u0441\u0430",
    "url": "https://stat2.deti-online.com/a/eTK5pdCZ2dBL9s6-y2-S9Q/1528550249/files/skazki/russkie-narodnye-skazki/snegurushka-i-lisa.mp3"
  },
  {
    "duration": "02:23",
    "title": "Kurinyy Bog",
    "orig_title": "\u041a\u0443\u0440\u0438\u043d\u044b\u0439 \u0431\u043e\u0433",
    "url": "https://stat1.deti-online.com/a/qLgtnaRN471XbzUL9SdCng/1528574582/files/skazki/skazki-tolstogo/kurinyy-bog.mp3"
  },
  {
    "duration": "04:06",
    "title": "Zhuravl I Caplja",
    "orig_title": "\u0416\u0443\u0440\u0430\u0432\u043b\u044c \u0438 \u0446\u0430\u043f\u043b\u044f",
    "url": "https://stat2.deti-online.com/a/wpk4xfqcSm3w6UulVRbkvg/1528545708/files/skazki/russkie-narodnye-skazki/zhuravl-i-caplja.mp3"
  },
  {
    "duration": "11:45",
    "title": "Snegurochka",
    "orig_title": "\u0421\u043d\u0435\u0433\u0443\u0440\u043e\u0447\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/rHTjJNUC4Drt2nYb9wiECg/1528539367/files/skazki/russkie-narodnye-skazki/snegurochka.mp3"
  },
  {
    "duration": "06:16",
    "title": "Kto Skazal Myau",
    "orig_title": "\u041a\u0442\u043e \u0441\u043a\u0430\u0437\u0430\u043b \u00ab\u041c\u042f\u0423\u00bb?",
    "url": "https://stat2.deti-online.com/a/mCeh5HxH3_iUYl_qvTLC3w/1528541086/files/skazki/skazki-suteeva/kto-skazal-myau.mp3"
  },
  {
    "duration": "03:38",
    "title": "Zhivaya Shlyapa",
    "orig_title": "\u0416\u0438\u0432\u0430\u044f \u0448\u043b\u044f\u043f\u0430",
    "url": "https://stat1.deti-online.com/a/MABIk-Opmpl6T89kbswuZg/1528540574/files/skazki/rasskazy-nosova/zhivaya-shlyapa.mp3"
  },
  {
    "duration": "01:55",
    "title": "Lisa I Kozel",
    "orig_title": "\u041b\u0438\u0441\u0430 \u0438 \u043a\u043e\u0437\u0435\u043b",
    "url": "https://stat1.deti-online.com/a/DT_YQligTfjz6B9UvutTEA/1528563673/files/skazki/russkie-narodnye-skazki/lisa-i-kozel.mp3"
  },
  {
    "duration": "30:07",
    "title": "Ali Baba I Sorok Razboynikov",
    "orig_title": "\u0410\u043b\u0438-\u0411\u0430\u0431\u0430 \u0438 \u0441\u043e\u0440\u043e\u043a \u0440\u0430\u0437\u0431\u043e\u0439\u043d\u0438\u043a\u043e\u0432",
    "url": "https://stat2.deti-online.com/a/uTC9AD1-YwANsGPhCG0p8Q/1528540737/files/skazki/arabskie-skazki/ali-baba-i-sorok-razboynikov.mp3"
  },
  {
    "duration": "13:55",
    "title": "Snegovik",
    "orig_title": "\u0421\u043d\u0435\u0433\u043e\u0432\u0438\u043a",
    "url": "https://stat1.deti-online.com/a/pZfb50WqkVVjnkJRCU8JYg/1528550306/files/skazki/skazki-andersena/snegovik.mp3"
  },
  {
    "duration": "06:22",
    "title": "Kto Zagovorit Pervyi",
    "orig_title": "\u041a\u0442\u043e \u0437\u0430\u0433\u043e\u0432\u043e\u0440\u0438\u0442 \u043f\u0435\u0440\u0432\u044b\u0439",
    "url": "https://stat1.deti-online.com/a/tRN73h_w7o-UJD24g_-WVw/1528550725/files/skazki/russkie-narodnye-skazki/kto-zagovorit-pervyi.mp3"
  },
  {
    "duration": "19:08",
    "title": "Zhivaya Voda",
    "orig_title": "\u0416\u0438\u0432\u0430\u044f \u0432\u043e\u0434\u0430",
    "url": "https://stat2.deti-online.com/a/23nndYQbzOzEGgqg0uJvqA/1528541241/files/skazki/skazki-bratev-grimm/zhivaya-voda.mp3"
  },
  {
    "duration": "1:05",
    "title": "Ervaja Kniga Dzhunglei Bratja Maugli",
    "orig_title": "\u0411\u0440\u0430\u0442\u044c\u044f \u041c\u0430\u0443\u0433\u043b\u0438",
    "url": "https://stat2.deti-online.com/a/2omFlg3R5MGh-b_X49EhqQ/1528541942/files/skazki/skazki-kiplinga/pervaja-kniga-dzhunglei-bratja-maugli.mp3"
  },
  {
    "duration": "14:28",
    "title": "Smert Shpiona Gadyukina",
    "orig_title": "\u0421\u043c\u0435\u0440\u0442\u044c \u0448\u043f\u0438\u043e\u043d\u0430 \u0413\u0430\u0434\u044e\u043a\u0438\u043d\u0430",
    "url": "https://stat1.deti-online.com/a/fUky_j_zXBeJMiBRzGO_Kw/1528546730/files/skazki/rasskazy-dragunskogo/smert-shpiona-gadyukina.mp3"
  },
  {
    "duration": "11:01",
    "title": "Kroshka Enot I Tot Kto Sidit V Prudu",
    "orig_title": "\u041a\u0440\u043e\u0448\u043a\u0430 \u0415\u043d\u043e\u0442 \u0438 \u0442\u043e\u0442, \u043a\u0442\u043e \u0441\u0438\u0434\u0438\u0442 \u0432 \u043f\u0440\u0443\u0434\u0443",
    "url": "https://stat1.deti-online.com/a/VBC3y-8i0WaWtAxAcp9QQw/1528540908/files/skazki/sbornik-skazok/kroshka-enot-i-tot-kto-sidit-v-prudu.mp3"
  },
  {
    "duration": "10:25",
    "title": "Zhar Ptica I Vasilisa Carevna",
    "orig_title": "\u0416\u0430\u0440-\u043f\u0442\u0438\u0446\u0430 \u0438 \u0412\u0430\u0441\u0438\u043b\u0438\u0441\u0430-\u0446\u0430\u0440\u0435\u0432\u043d\u0430",
    "url": "https://stat1.deti-online.com/a/-QrjaTzljwNkAroReXPrXA/1528542230/files/skazki/russkie-narodnye-skazki/zhar-ptica-i-vasilisa-carevna.mp3"
  },
  {
    "duration": "07:00",
    "title": "Slovo",
    "orig_title": "\u0421\u043b\u043e\u0432\u043e",
    "url": "https://stat2.deti-online.com/a/5ySaaDORSIz9U27uFeLE7g/1528550317/files/skazki/russkie-narodnye-skazki/slovo.mp3"
  },
  {
    "duration": "07:37",
    "title": "Kroshechka Havroshechka",
    "orig_title": "\u041a\u0440\u043e\u0448\u0435\u0447\u043a\u0430-\u0425\u0430\u0432\u0440\u043e\u0448\u0435\u0447\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/Gw4RwHxXKhseZIxkbZmK7g/1528542717/files/skazki/russkie-narodnye-skazki/kroshechka-havroshechka.mp3"
  },
  {
    "duration": "05:54",
    "title": "Zhadnyi Velmozha",
    "orig_title": "\u0416\u0430\u0434\u043d\u044b\u0439 \u0432\u0435\u043b\u044c\u043c\u043e\u0436\u0430",
    "url": "https://stat2.deti-online.com/a/tqF1Ymemk_a38Xd7eCXQ-w/1528554855/files/skazki/russkie-narodnye-skazki/zhadnyi-velmozha.mp3"
  },
  {
    "duration": "00:42",
    "title": "Skryuchennaya Pesnya",
    "orig_title": "\u0421\u043a\u0440\u044e\u0447\u0435\u043d\u043d\u0430\u044f \u043f\u0435\u0441\u043d\u044f",
    "url": "https://stat1.deti-online.com/a/3_AQ7iSIy1BsqHEV3IAMyw/1528563016/files/skazki/skazki-chukovskogo/skryuchennaya-pesnya.mp3"
  },
  {
    "duration": "14:18",
    "title": "Krokodil",
    "orig_title": "\u041a\u0440\u043e\u043a\u043e\u0434\u0438\u043b",
    "url": "https://stat2.deti-online.com/a/WlP8G4fxtm1gNiDDy9fVUA/1528541744/files/skazki/skazki-chukovskogo/krokodil.mp3"
  },
  {
    "duration": "04:44",
    "title": "Esli By Ya Byl Vzrosly",
    "orig_title": "\u0415\u0441\u043b\u0438 \u0431\u044b \u044f \u0431\u044b\u043b \u0432\u0437\u0440\u043e\u0441\u043b\u044b\u043c",
    "url": "https://stat1.deti-online.com/a/Deh3JvHb0C48sNwPWGUNEQ/1528542091/files/skazki/rasskazy-dragunskogo/esli-by-ya-byl-vzroslym.mp3"
  },
  {
    "duration": "21:02",
    "title": "Skoryi Gonec",
    "orig_title": "\u0421\u043a\u043e\u0440\u044b\u0439 \u0433\u043e\u043d\u0435\u0446",
    "url": "https://stat1.deti-online.com/a/lqSU0Q4qO_YuGEnDUlz-wQ/1528551468/files/skazki/russkie-narodnye-skazki/skoryi-gonec.mp3"
  },
  {
    "duration": "06:31",
    "title": "Krasnyy Sharik V Sinem Nebe",
    "orig_title": "\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0448\u0430\u0440\u0438\u043a \u0432 \u0441\u0438\u043d\u0435\u043c \u043d\u0435\u0431\u0435",
    "url": "https://stat2.deti-online.com/a/7WkOGcJH-5b1PWMRzn0MWA/1528548858/files/skazki/rasskazy-dragunskogo/krasnyy-sharik-v-sinem-nebe.mp3"
  },
  {
    "duration": "00:39",
    "title": "Elka",
    "orig_title": "\u0415\u043b\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/CUXQWbVMEDRYJFg7O5qdgw/1528562860/files/skazki/skazki-chukovskogo/elka.mp3"
  },
  {
    "duration": "06:05",
    "title": "Skazka Ob Umnom Myshonke",
    "orig_title": "\u0421\u043a\u0430\u0437\u043a\u0430 \u043e\u0431 \u0443\u043c\u043d\u043e\u043c \u043c\u044b\u0448\u043e\u043d\u043a\u0435",
    "url": "https://stat2.deti-online.com/a/2I_TYsbiICeH3ekw_y65GQ/1528542124/files/skazki/skazki-marshaka/skazka-ob-umnom-myshonke.mp3"
  },
  {
    "duration": "05:05",
    "title": "Krasnaja Shapochka 2",
    "orig_title": "\u041a\u0440\u0430\u0441\u043d\u0430\u044f \u0448\u0430\u043f\u043e\u0447\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/IpT2u2tD7A_SRc1Ku-VbwQ/1528538593/files/audioskazki/krasnaja-shapochka-2.mp3"
  },
  {
    "duration": "12:15",
    "title": "Elena Premudraya",
    "orig_title": "\u0415\u043b\u0435\u043d\u0430 \u041f\u0440\u0435\u043c\u0443\u0434\u0440\u0430\u044f",
    "url": "https://stat1.deti-online.com/a/gDa8MlVWlhFtLvDsor_hJA/1528545928/files/skazki/russkie-narodnye-skazki/elena-premudraya.mp3"
  },
  {
    "duration": "10:04",
    "title": "Skazka O Chetyreh Gluhih",
    "orig_title": "\u0421\u043a\u0430\u0437\u043a\u0430 \u043e \u0447\u0435\u0442\u044b\u0440\u0451\u0445 \u0433\u043b\u0443\u0445\u0438\u0445",
    "url": "https://stat1.deti-online.com/a/fm-Wo556wd3Xoa0JsSEubg/1528557920/files/skazki/skazki-odoevskogo/skazka-o-chetyreh-gluhih.mp3"
  },
  {
    "duration": "03:55",
    "title": "Kradenoe Solnce",
    "orig_title": "\u041a\u0440\u0430\u0434\u0435\u043d\u043e\u0435 \u0441\u043e\u043b\u043d\u0446\u0435",
    "url": "https://stat1.deti-online.com/a/12k4FFHrLJl162d14h-ATQ/1528540856/files/skazki/skazki-chukovskogo/kradenoe-solnce.mp3"
  },
  {
    "duration": "00:17",
    "title": "Ezhiki Smeyutsya",
    "orig_title": "\u0415\u0436\u0438\u043a\u0438 \u0441\u043c\u0435\u044e\u0442\u0441\u044f",
    "url": "https://stat2.deti-online.com/a/ipKDoAlfD67hU2h7_KsR6w/1528551602/files/skazki/skazki-chukovskogo/ezhiki-smeyutsya.mp3"
  },
  {
    "duration": "44:36",
    "title": "Skazka O Care Saltane",
    "orig_title": "\u0421\u043a\u0430\u0437\u043a\u0430 \u043e \u0446\u0430\u0440\u0435 \u0421\u0430\u043b\u0442\u0430\u043d\u0435",
    "url": "https://stat2.deti-online.com/a/f88Wkgj8z_pDj-iAgDndkA/1528538616/files/skazki/skazki-pushkina/skazka-o-care-saltane.mp3"
  },
  {
    "duration": "35:16",
    "title": "Koshkin Do",
    "orig_title": "\u041a\u043e\u0448\u043a\u0438\u043d \u0434\u043e\u043c",
    "url": "https://stat2.deti-online.com/a/58tufRbDKupSkn9xnhBltA/1528538990/files/skazki/skazki-marshaka/koshkin-dom.mp3"
  },
  {
    "duration": "06:10",
    "title": "Ezh",
    "orig_title": "\u0401\u0436",
    "url": "https://stat1.deti-online.com/a/up9-Oa2i-jKECb3WzAJgsg/1528546463/files/skazki/rasskazy-prishvina/ezh.mp3"
  },
  {
    "duration": "41:27",
    "title": "Alenkii Cvetochek 2",
    "orig_title": "\u0410\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u0446\u0432\u0435\u0442\u043e\u0447\u0435\u043a",
    "url": "https://stat2.deti-online.com/a/Y0kpkvKrqGjV8iBEuv7hmw/1528538432/files/skazki/skazki-aksakova/alenkii-cvetochek-2.mp3"
  },
  {
    "duration": "12:16",
    "title": "Skazka O Rybake I Rybke",
    "orig_title": "\u0421\u043a\u0430\u0437\u043a\u0430 \u043e \u0440\u044b\u0431\u0430\u043a\u0435 \u0438 \u0440\u044b\u0431\u043a\u0435",
    "url": "https://stat2.deti-online.com/a/kc7gsSxNn9WybjSZCL6tVQ/1528539152/files/skazki/skazki-pushkina/skazka-o-rybake-i-rybke.mp3"
  },
  {
    "duration": "33:25",
    "title": "Koshka Kotoraya Gulyala Sama Po Sebe",
    "orig_title": "\u041a\u043e\u0448\u043a\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0433\u0443\u043b\u044f\u043b\u0430 \u0441\u0430\u043c\u0430 \u043f\u043e \u0441\u0435\u0431\u0435",
    "url": "https://stat2.deti-online.com/a/epB_114xiJjGtFb0SxPzQw/1528543109/files/skazki/skazki-kiplinga/koshka-kotoraya-gulyala-sama-po-sebe.mp3"
  },
  {
    "duration": "01:14",
    "title": "Ezh",
    "orig_title": "\u0415\u0436",
    "url": "https://stat2.deti-online.com/a/-vAgNss_JoSDKuCvU7jDEQ/1528568586/files/skazki/skazki-tolstogo/ezh.mp3"
  },
  {
    "duration": "31:13",
    "title": "Skazka O Rybake I Ego Zhene",
    "orig_title": "\u0421\u043a\u0430\u0437\u043a\u0430 \u043e \u0440\u044b\u0431\u0430\u043a\u0435 \u0438 \u0435\u0433\u043e \u0436\u0435\u043d\u0435",
    "url": "https://stat2.deti-online.com/a/QarWW376Cay0El1Gcoc_3Q/1528546582/files/skazki/skazki-bratev-grimm/skazka-o-rybake-i-ego-zhene.mp3"
  },
  {
    "duration": "00:47",
    "title": "Kotausi I Mausi",
    "orig_title": "\u041a\u043e\u0442\u0430\u0443\u0441\u0438 \u0438 \u041c\u0430\u0443\u0441\u0438",
    "url": "https://stat2.deti-online.com/a/RvRcD9OZN-Q3dgeizcvTcA/1528562947/files/skazki/skazki-chukovskogo/kotausi-i-mausi.mp3"
  },
  {
    "duration": "06:10",
    "title": "Dyadya Misha 2",
    "orig_title": "\u0414\u044f\u0434\u044f \u041c\u0438\u0448\u0430",
    "url": "https://stat1.deti-online.com/a/epWQeZyuogkAMCwmGSv3rA/1528541002/files/audioskazki/dyadya-misha-2.mp3"
  },
  {
    "duration": "16:49",
    "title": "O Shuchemu Velenyu",
    "orig_title": "\u041f\u043e \u0449\u0443\u0447\u044c\u0435\u043c\u0443 \u0432\u0435\u043b\u0435\u043d\u044c\u044e",
    "url": "https://stat2.deti-online.com/a/xq2Jaf3EGFzxTFHqXn5K9Q/1528539332/files/skazki/russkie-narodnye-skazki/po-shuchemu-velenyu.mp3"
  },
  {
    "duration": "07:47",
    "title": "Volshebnaya Dudochka",
    "orig_title": "\u0412\u043e\u043b\u0448\u0435\u0431\u043d\u0430\u044f \u0434\u0443\u0434\u043e\u0447\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/LwDbTte_GB6Oq8vEo2-gRA/1528547968/files/skazki/russkie-narodnye-skazki/volshebnaya-dudochka.mp3"
  },
  {
    "duration": "25:13",
    "title": "Iter Pen 17",
    "orig_title": "\u0413\u043b\u0430\u0432\u0430 1",
    "url": "https://stat1.deti-online.com/a/FdJPcCQVLPPXRhi0ZxW2Iw/1528539952/files/skazki/sbornik-skazok/piter-pen-17.mp3"
  },
  {
    "duration": "08:05",
    "title": "Volk I Semero Kozljat",
    "orig_title": "\u0412\u043e\u043b\u043a \u0438 \u0441\u0435\u043c\u0435\u0440\u043e \u043a\u043e\u0437\u043b\u044f\u0442",
    "url": "https://stat2.deti-online.com/a/KmCZw7Lpn8aC69XruVRfcQ/1528538028/files/skazki/skazki-bratev-grimm/volk-i-semero-kozljat.mp3"
  },
  {
    "duration": "12:53",
    "title": "Boi Na Kalinovom Mostu",
    "orig_title": "\u0411\u043e\u0439 \u043d\u0430 \u041a\u0430\u043b\u0438\u043d\u043e\u0432\u043e\u043c \u043c\u043e\u0441\u0442\u0443",
    "url": "https://stat1.deti-online.com/a/FBH7ZtuN7dUcJi7LwyPXgQ/1528546209/files/skazki/russkie-narodnye-skazki/boi-na-kalinovom-mostu.mp3"
  },
  {
    "duration": "03:14",
    "title": "Aybolit I Vorobey",
    "orig_title": "\u0410\u0439\u0431\u043e\u043b\u0438\u0442 \u0438 \u0432\u043e\u0440\u043e\u0431\u0435\u0439",
    "url": "https://stat1.deti-online.com/a/RXj7tgcE88ZvUruf0CZQ0Q/1528549125/files/skazki/skazki-chukovskogo/aybolit-i-vorobey.mp3"
  },
  {
    "duration": "10:23",
    "title": "Belosnezhka I Sem Gnomov",
    "orig_title": "\u0411\u0435\u043b\u043e\u0441\u043d\u0435\u0436\u043a\u0430 \u0438 \u0441\u0435\u043c\u044c \u0433\u043d\u043e\u043c\u043e\u0432",
    "url": "https://stat1.deti-online.com/a/vysK4DT8shbX877DmM3HDA/1528538049/files/skazki/skazki-bratev-grimm/belosnezhka-i-sem-gnomov.mp3"
  },
  {
    "duration": "51:36",
    "title": "Etya Ivanov I Volshebnik Tik Tak",
    "orig_title": "\u041f\u0435\u0442\u044f \u0418\u0432\u0430\u043d\u043e\u0432 \u0438 \u0432\u043e\u043b\u0448\u0435\u0431\u043d\u0438\u043a \u0422\u0438\u043a-\u0422\u0430\u043a",
    "url": "https://stat1.deti-online.com/a/EIb1Kp2-SnhrZoULxUuRKQ/1528544396/files/skazki/skazki-suteeva/petya-ivanov-i-volshebnik-tik-tak.mp3"
  },
  {
    "duration": "21:55",
    "title": "Vitya Maleev 21",
    "orig_title": "\u0413\u043b\u0430\u0432\u0430 1",
    "url": "https://stat2.deti-online.com/a/Z43XP9QcPjVAN4PxXYC30A/1528538180/files/skazki/rasskazy-nosova/vitya-maleev-21.mp3"
  },
  {
    "duration": "16:46",
    "title": "Etya I Krasnaya Shapochka",
    "orig_title": "\u041f\u0435\u0442\u044f \u0438 \u041a\u0440\u0430\u0441\u043d\u0430\u044f \u0428\u0430\u043f\u043e\u0447\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/gyb5NhmIiKoIvzDmctmK0g/1528542126/files/skazki/skazki-suteeva/petya-i-krasnaya-shapochka.mp3"
  },
  {
    "duration": "1:37",
    "title": "Vinni Puh I Vse Vse Vse",
    "orig_title": "\u0412\u0438\u043d\u043d\u0438-\u041f\u0443\u0445 \u0438 \u0432\u0441\u0435-\u0432\u0441\u0435-\u0432\u0441\u0435",
    "url": "https://stat2.deti-online.com/a/UttAr6VlkuKDCpaISOEbKw/1528538382/files/skazki/sbornik-skazok/vinni-puh-i-vse-vse-vse.mp3"
  },
  {
    "duration": "02:42",
    "title": "Etushok I Bobovoe Zernyshko",
    "orig_title": "\u041f\u0435\u0442\u0443\u0448\u043e\u043a \u0438 \u0431\u043e\u0431\u043e\u0432\u043e\u0435 \u0437\u0435\u0440\u043d\u044b\u0448\u043a\u043e",
    "url": "https://stat1.deti-online.com/a/3EF7LWmiwegBwJhcgxpiuw/1528540181/files/skazki/russkie-narodnye-skazki/petushok-i-bobovoe-zernyshko.mp3"
  },
  {
    "duration": "02:26",
    "title": "Vesnoy",
    "orig_title": "\u0412\u0435\u0441\u043d\u043e\u0439",
    "url": "https://stat1.deti-online.com/a/at9IgYROTHKMRp-yXNPw-w/1528544864/files/skazki/skazki-suteeva/vesnoy.mp3"
  },
  {
    "duration": "07:51",
    "title": "Bremenskie Muzykanty",
    "orig_title": "\u0411\u0440\u0435\u043c\u0435\u043d\u0441\u043a\u0438\u0435 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u044b",
    "url": "https://stat1.deti-online.com/a/sHo4Ape2wEIZhSYEmSSSEQ/1528538683/files/skazki/skazki-bratev-grimm/bremenskie-muzykanty.mp3"
  },
  {
    "duration": "04:48",
    "title": "Etushok Zolotoi Grebeshok",
    "orig_title": "\u041f\u0435\u0442\u0443\u0448\u043e\u043a \u0437\u043e\u043b\u043e\u0442\u043e\u0439 \u0433\u0440\u0435\u0431\u0435\u0448\u043e\u043a",
    "url": "https://stat2.deti-online.com/a/mW0nT4TUsaPwMynGb2Dn7A/1528539240/files/skazki/russkie-narodnye-skazki/petushok-zolotoi-grebeshok.mp3"
  },
  {
    "duration": "43:31",
    "title": "Vtoraja Kniga Dzhunglei Vesna",
    "orig_title": "\u0412\u0435\u0441\u043d\u0430",
    "url": "https://stat2.deti-online.com/a/bCUT29UuS2eslYSj11BCow/1528556013/files/skazki/skazki-kiplinga/vtoraja-kniga-dzhunglei-vesna.mp3"
  },
  {
    "duration": "10:18",
    "title": "Baba Jaga",
    "orig_title": "\u0411\u0430\u0431\u0430-\u044f\u0433\u0430",
    "url": "https://stat2.deti-online.com/a/y5VU8_iTn-ye0Ep-HXrlsQ/1528539031/files/skazki/russkie-narodnye-skazki/baba-jaga.mp3"
  },
  {
    "duration": "02:05",
    "title": "Etushki",
    "orig_title": "\u041f\u0435\u0442\u0443\u0448\u043a\u0438",
    "url": "https://stat1.deti-online.com/a/0CAMXxVTsvTmAKh-rBFVEQ/1528584988/files/skazki/skazki-tolstogo/petushki.mp3"
  },
  {
    "duration": "01:56",
    "title": "Vershki I Koreshki",
    "orig_title": "\u0412\u0435\u0440\u0448\u043a\u0438 \u0438 \u043a\u043e\u0440\u0435\u0448\u043a\u0438",
    "url": "https://stat1.deti-online.com/a/-Ue9UPCiZp87S57hLh-tvQ/1528544364/files/skazki/russkie-narodnye-skazki/vershki-i-koreshki.mp3"
  },
  {
    "duration": "10:47",
    "title": "Batrak",
    "orig_title": "\u0411\u0430\u0442\u0440\u0430\u043a",
    "url": "https://stat2.deti-online.com/a/vdmm5AzbiRiX9qGucasSoQ/1528559342/files/skazki/russkie-narodnye-skazki/batrak.mp3"
  },
  {
    "duration": "00:55",
    "title": "Etuh I Kraski",
    "orig_title": "\u041f\u0435\u0442\u0443\u0445 \u0438 \u043a\u0440\u0430\u0441\u043a\u0438",
    "url": "https://stat1.deti-online.com/a/SKebam3sYUbDjDw3eI10vg/1528542707/files/skazki/skazki-suteeva/petuh-i-kraski.mp3"
  },
  {
    "duration": "02:08",
    "title": "Vernoe Sredstvo",
    "orig_title": "\u0412\u0435\u0440\u043d\u043e\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043e",
    "url": "https://stat2.deti-online.com/a/Frz6v-dHjP6BoARokLewBA/1528557169/files/skazki/arabskie-skazki/vernoe-sredstvo.mp3"
  },
  {
    "duration": "08:28",
    "title": "Aibolit",
    "orig_title": "\u0410\u0439\u0431\u043e\u043b\u0438\u0442",
    "url": "https://stat2.deti-online.com/a/JRnDhscWvLcbLls1O9oM8g/1528538692/files/skazki/skazki-chukovskogo/aibolit.mp3"
  },
  {
    "duration": "04:53",
    "title": "Etuh I Zhernovcy",
    "orig_title": "\u041f\u0435\u0442\u0443\u0445 \u0438 \u0436\u0435\u0440\u043d\u043e\u0432\u0446\u044b",
    "url": "https://stat1.deti-online.com/a/NUTZdqjuIF-wS_Gzl3AYcg/1528551462/files/skazki/russkie-narodnye-skazki/petuh-i-zhernovcy.mp3"
  },
  {
    "duration": "09:15",
    "title": "Vereteno Tkackiy Chelnok I Igolka",
    "orig_title": "\u0412\u0435\u0440\u0435\u0442\u0435\u043d\u043e, \u0442\u043a\u0430\u0446\u043a\u0438\u0439 \u0447\u0435\u043b\u043d\u043e\u043a \u0438 \u0438\u0433\u043e\u043b\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/nMDeDoQRh-QCn4oL_Yym0Q/1528559960/files/skazki/skazki-bratev-grimm/vereteno-tkackiy-chelnok-i-igolka.mp3"
  },
  {
    "duration": "1:51",
    "title": "Esochnyy Chelovek",
    "orig_title": "\u041f\u0435\u0441\u043e\u0447\u043d\u044b\u0439 \u0447\u0435\u043b\u043e\u0432\u0435\u043a",
    "url": "https://stat2.deti-online.com/a/H-puGNSKt3Ch2rad3C-sAg/1528547026/files/skazki/skazki-gofmana/pesochnyy-chelovek.mp3"
  },
  {
    "duration": "03:03",
    "title": "Verblyud",
    "orig_title": "\u0412\u0435\u0440\u0431\u043b\u044e\u0434",
    "url": "https://stat2.deti-online.com/a/ZCPz2REf0glI2olQFl3lxg/1528568389/files/skazki/skazki-tolstogo/verblyud.mp3"
  },
  {
    "duration": "02:55",
    "title": "Baba Jaga I Jagody",
    "orig_title": "\u0411\u0430\u0431\u0430 \u042f\u0433\u0430 \u0438 \u044f\u0433\u043e\u0434\u044b",
    "url": "https://stat1.deti-online.com/a/_KTknueWsF2GNa57Un6Z5w/1528540250/files/skazki/russkie-narodnye-skazki/baba-jaga-i-jagody.mp3"
  },
  {
    "duration": "06:13",
    "title": "Ervaya Ohota",
    "orig_title": "\u041f\u0435\u0440\u0432\u0430\u044f \u043e\u0445\u043e\u0442\u0430",
    "url": "https://stat1.deti-online.com/a/1jvSATYWslojdjz5PzBP9g/1528547171/files/skazki/rasskazy-bianki/pervaya-ohota.mp3"
  },
  {
    "duration": "15:26",
    "title": "Vasya Veselkin",
    "orig_title": "\u0412\u0430\u0441\u044f \u0412\u0435\u0441\u0451\u043b\u043a\u0438\u043d",
    "url": "https://stat2.deti-online.com/a/Ppxdch45E4yHOPIu6uF0mw/1528548387/files/skazki/rasskazy-prishvina/vasya-veselkin.mp3"
  },
  {
    "duration": "29:08",
    "title": "Eppi 2 08",
    "orig_title": "\u0413\u043b\u0430\u0432\u0430 1. \u041a\u0430\u043a \u041f\u0435\u043f\u043f\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0437\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0430\u043c\u0438",
    "url": "https://stat1.deti-online.com/a/m1S42Tiz7bOXgxEcAGyDYw/1528539647/files/skazki/skazki-lindgren/peppi-2-08.mp3"
  },
  {
    "duration": "23:24",
    "title": "Vasilisa Prekrasnaja",
    "orig_title": "\u0412\u0430\u0441\u0438\u043b\u0438\u0441\u0430 \u041f\u0440\u0435\u043a\u0440\u0430\u0441\u043d\u0430\u044f",
    "url": "https://stat2.deti-online.com/a/IfFf503jXrC758J5ahx8Og/1528538497/files/skazki/russkie-narodnye-skazki/vasilisa-prekrasnaja.mp3"
  },
  {
    "duration": "07:04",
    "title": "Barmalei",
    "orig_title": "\u0411\u0430\u0440\u043c\u0430\u043b\u0435\u0439",
    "url": "https://stat2.deti-online.com/a/KJt4-kBp_kkWL9vMu_B3Vw/1528539896/files/skazki/skazki-chukovskogo/barmalei.mp3"
  },
  {
    "duration": "16:13",
    "title": "Eppi 1 11",
    "orig_title": "\u0413\u043b\u0430\u0432\u0430 1. \u041a\u0430\u043a \u041f\u0435\u043f\u043f\u0438 \u043f\u043e\u0441\u0435\u043b\u0438\u043b\u0430\u0441\u044c \u0432 \u0432\u0438\u043b\u043b\u0435 \u041a\u0443\u0440\u0438\u0446\u0430",
    "url": "https://stat2.deti-online.com/a/ODDi8oaf1_Z0NOyIRu6zyA/1528538795/files/skazki/skazki-lindgren/peppi-1-11.mp3"
  },
  {
    "duration": "19:34",
    "title": "Vankiny Imeniny",
    "orig_title": "\u0412\u0430\u043d\u044c\u043a\u0438\u043d\u044b \u0438\u043c\u0435\u043d\u0438\u043d\u044b",
    "url": "https://stat2.deti-online.com/a/WaAS12zqVcArfQEKRUfbuQ/1528549267/files/skazki/skazki-mamina-sibirjaka/vankiny-imeniny.mp3"
  },
  {
    "duration": "18:00",
    "title": "Eppi 3 12",
    "orig_title": "\u0413\u043b\u0430\u0432\u0430 1. \u041a\u0430\u043a \u0443 \u041f\u0435\u043f\u043f\u0438 \u043f\u043e\u043a\u0443\u043f\u0430\u044e\u0442 \u0432\u0438\u043b\u043b\u0443 \u041a\u0443\u0440\u0438\u0446\u0430",
    "url": "https://stat2.deti-online.com/a/uaX9v9LFIeZeNEn3pD1Jwg/1528540140/files/skazki/skazki-lindgren/peppi-3-12.mp3"
  },
  {
    "duration": "2:55",
    "title": "V Strane Nevyuchennyh Urokov",
    "orig_title": "\u0412 \u0441\u0442\u0440\u0430\u043d\u0435 \u043d\u0435\u0432\u044b\u0443\u0447\u0435\u043d\u043d\u044b\u0445 \u0443\u0440\u043e\u043a\u043e\u0432",
    "url": "https://stat2.deti-online.com/a/SVa7itJFb5KqjZyyzHFioA/1528539208/files/skazki/sbornik-skazok/v-strane-nevyuchennyh-urokov.mp3"
  },
  {
    "duration": "10:25",
    "title": "Aisty",
    "orig_title": "\u0410\u0438\u0441\u0442\u044b",
    "url": "https://stat2.deti-online.com/a/H5vdz21gKUE7upd24ErVwg/1528550048/files/skazki/skazki-andersena/aisty.mp3"
  },
  {
    "duration": "10:30",
    "title": "Astushja Dudochka",
    "orig_title": "\u041f\u0430\u0441\u0442\u0443\u0448\u044c\u044f \u0434\u0443\u0434\u043e\u0447\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/yj2Lw5mJe5y2IInfiFM0UA/1528546194/files/skazki/russkie-narodnye-skazki/pastushja-dudochka.mp3"
  },
  {
    "duration": "07:21",
    "title": "Bychok Smoljanoi Bochok",
    "orig_title": "\u0411\u044b\u0447\u043e\u043a-\u0441\u043c\u043e\u043b\u044f\u043d\u043e\u0439 \u0431\u043e\u0447\u043e\u043a",
    "url": "https://stat1.deti-online.com/a/r_CsmG2NKBQnPocGUqsyEQ/1528539996/files/skazki/russkie-narodnye-skazki/bychok-smoljanoi-bochok.mp3"
  },
  {
    "duration": "15:22",
    "title": "Astushka I Trubochist",
    "orig_title": "\u041f\u0430\u0441\u0442\u0443\u0448\u043a\u0430 \u0438 \u0442\u0440\u0443\u0431\u043e\u0447\u0438\u0441\u0442",
    "url": "https://stat1.deti-online.com/a/lyG3xQYqDTk-sPN9ckp4PA/1528557956/files/skazki/skazki-andersena/pastushka-i-trubochist.mp3"
  },
  {
    "duration": "06:22",
    "title": "Bychok Chernyy Bochok Belye Kopytca",
    "orig_title": "\u0411\u044b\u0447\u043e\u043a - \u0447\u0451\u0440\u043d\u044b\u0439 \u0431\u043e\u0447\u043e\u043a, \u0431\u0435\u043b\u044b\u0435 \u043a\u043e\u043f\u044b\u0442\u0446\u0430",
    "url": "https://stat2.deti-online.com/a/P3uN4Ku8IuqFxFAO8Ji81g/1528551500/files/skazki/russkie-narodnye-skazki/bychok-chernyy-bochok-belye-kopytca.mp3"
  },
  {
    "duration": "10:37",
    "title": "Arbuznyy Pereulok",
    "orig_title": "\u0410\u0440\u0431\u0443\u0437\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u0443\u043b\u043e\u043a",
    "url": "https://stat1.deti-online.com/a/UxIzajIhgOOypTxbMRIjKg/1528544812/files/skazki/rasskazy-dragunskogo/arbuznyy-pereulok.mp3"
  },
  {
    "duration": "07:53",
    "title": "Alochka Vyruchalochka",
    "orig_title": "\u041f\u0430\u043b\u043e\u0447\u043a\u0430-\u0432\u044b\u0440\u0443\u0447\u0430\u043b\u043e\u0447\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/At4aPqzu94tXu9WbdysD-A/1528540466/files/skazki/skazki-suteeva/palochka-vyruchalochka.mp3"
  },
  {
    "duration": "01:54",
    "title": "Ocheski",
    "orig_title": "\u041e\u0447\u0435\u0441\u043a\u0438",
    "url": "https://stat1.deti-online.com/a/HAE9T7YcwzSKt6aH0Xz50Q/1528563933/files/skazki/skazki-bratev-grimm/ocheski.mp3"
  },
  {
    "duration": "1:18",
    "title": "Ervaja Kniga Dzhunglei Ohota Pitona Kaa",
    "orig_title": "\u041e\u0445\u043e\u0442\u0430 \u043f\u0438\u0442\u043e\u043d\u0430 \u041a\u0430\u0430",
    "url": "https://stat1.deti-online.com/a/FWcJroVOJCpA9Rpo8FvE8A/1528556494/files/skazki/skazki-kiplinga/pervaja-kniga-dzhunglei-ohota-pitona-kaa.mp3"
  },
  {
    "duration": "04:54",
    "title": "Avtomobil",
    "orig_title": "\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c",
    "url": "https://stat2.deti-online.com/a/km6y4kPKFjPvlRqKOqtPug/1528541894/files/skazki/rasskazy-nosova/avtomobil.mp3"
  },
  {
    "duration": "02:17",
    "title": "Ohota Za Babochkoy",
    "orig_title": "\u041e\u0445\u043e\u0442\u0430 \u0437\u0430 \u0431\u0430\u0431\u043e\u0447\u043a\u043e\u0439",
    "url": "https://stat1.deti-online.com/a/VFIXUHZ75Im8LyZblH7IKg/1528566236/files/skazki/rasskazy-prishvina/ohota-za-babochkoy.mp3"
  },
  {
    "duration": "17:07",
    "title": "Belye Amadiny",
    "orig_title": "\u0411\u0435\u043b\u044b\u0435 \u0430\u043c\u0430\u0434\u0438\u043d\u044b",
    "url": "https://stat1.deti-online.com/a/Kbz-YsrSj08RMmaKMgeIVA/1528548279/files/skazki/rasskazy-dragunskogo/belye-amadiny.mp3"
  },
  {
    "duration": "09:19",
    "title": "Babushka Metelica",
    "orig_title": "\u0411\u0430\u0431\u0443\u0448\u043a\u0430 \u041c\u0435\u0442\u0435\u043b\u0438\u0446\u0430",
    "url": "https://stat2.deti-online.com/a/EGktW8gIMWnhmROPdFfk6Q/1528545306/files/skazki/skazki-bratev-grimm/babushka-metelica.mp3"
  },
  {
    "duration": "12:09",
    "title": "Oslik",
    "orig_title": "\u041e\u0441\u043b\u0438\u043a",
    "url": "https://stat2.deti-online.com/a/4pQZ0-vuohq-l4UchEfT8A/1528557749/files/skazki/skazki-bratev-grimm/oslik.mp3"
  },
  {
    "duration": "22:00",
    "title": "Buzinnaya Matushka",
    "orig_title": "\u0411\u0443\u0437\u0438\u043d\u043d\u0430\u044f \u043c\u0430\u0442\u0443\u0448\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/ChXAzVVPVCrJhYJn0mV2SA/1528559655/files/skazki/skazki-andersena/buzinnaya-matushka.mp3"
  },
  {
    "duration": "05:12",
    "title": "On Zhivoy I Svetitsya",
    "orig_title": "\u041e\u043d \u0436\u0438\u0432\u043e\u0439 \u0438 \u0441\u0432\u0435\u0442\u0438\u0442\u0441\u044f",
    "url": "https://stat1.deti-online.com/a/WugAMHk37reFWxi33zsBHw/1528545387/files/skazki/rasskazy-dragunskogo/on-zhivoy-i-svetitsya.mp3"
  },
  {
    "duration": "00:37",
    "title": "Buterbrod",
    "orig_title": "\u0411\u0443\u0442\u0435\u0440\u0431\u0440\u043e\u0434",
    "url": "https://stat2.deti-online.com/a/kk_yHB_YWdD1AOWyI64jfw/1528551610/files/skazki/skazki-chukovskogo/buterbrod.mp3"
  },
  {
    "duration": "30:14",
    "title": "Ole Lukoie",
    "orig_title": "\u041e\u043b\u0435-\u041b\u0443\u043a\u043e\u0439\u0435",
    "url": "https://stat2.deti-online.com/a/fK5pV0QVxu9bg-TeKt5rfA/1528543454/files/skazki/skazki-andersena/ole-lukoie.mp3"
  },
  {
    "duration": "19:07",
    "title": "Attalea Princeps",
    "orig_title": "Attalea princeps",
    "url": "https://stat2.deti-online.com/a/ni7MU1HCGtsxB3PQlKmZqQ/1528559076/files/skazki/skazki-garshina/attalea-princeps.mp3"
  },
  {
    "duration": "07:23",
    "title": "Okameneloe Carstvo",
    "orig_title": "\u041e\u043a\u0430\u043c\u0435\u043d\u0435\u043b\u043e\u0435 \u0446\u0430\u0440\u0441\u0442\u0432\u043e",
    "url": "https://stat1.deti-online.com/a/goWNuoq3yNbwic7ETcpJgA/1528551601/files/skazki/russkie-narodnye-skazki/okameneloe-carstvo.mp3"
  },
  {
    "duration": "05:12",
    "title": "Boltunya",
    "orig_title": "\u0411\u043e\u043b\u0442\u0443\u043d\u044c\u044f",
    "url": "https://stat2.deti-online.com/a/G23NcYmIwxY-Gea8ZJTQqg/1528559762/files/skazki/russkie-narodnye-skazki/boltunya.mp3"
  },
  {
    "duration": "02:24",
    "title": "Babochka",
    "orig_title": "\u0411\u0430\u0431\u043e\u0447\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/08XnmyyF-Jc1DyiKsVtUZg/1528553316/files/skazki/skazki-suteeva/babochka.mp3"
  },
  {
    "duration": "09:30",
    "title": "Skazka O Pope I O Rabotnike Ego Balde",
    "orig_title": "\u0421\u043a\u0430\u0437\u043a\u0430 \u043e \u043f\u043e\u043f\u0435 \u0438 \u043e \u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0435 \u0435\u0433\u043e \u0411\u0430\u043b\u0434\u0435",
    "url": "https://stat1.deti-online.com/a/XhqJA6WEjCo2HXr33xzDfA/1528540982/files/skazki/skazki-pushkina/skazka-o-pope-i-o-rabotnike-ego-balde.mp3"
  },
  {
    "duration": "28:09",
    "title": "Skazka O Myortvoi Carevne I Semi Bogatyrjah",
    "orig_title": "\u0421\u043a\u0430\u0437\u043a\u0430 \u043e \u043c\u0451\u0440\u0442\u0432\u043e\u0439 \u0446\u0430\u0440\u0435\u0432\u043d\u0435 \u0438 \u0441\u0435\u043c\u0438 \u0431\u043e\u0433\u0430\u0442\u044b\u0440\u044f\u0445",
    "url": "https://stat2.deti-online.com/a/xFj2EKFuWUCRR8nm8G6Z7w/1528538476/files/skazki/skazki-pushkina/skazka-o-myortvoi-carevne-i-semi-bogatyrjah.mp3"
  },
  {
    "duration": "11:40",
    "title": "Skazka O Zolotom Petushke",
    "orig_title": "\u0421\u043a\u0430\u0437\u043a\u0430 \u043e \u0437\u043e\u043b\u043e\u0442\u043e\u043c \u043f\u0435\u0442\u0443\u0448\u043a\u0435",
    "url": "https://stat2.deti-online.com/a/SdA5Om2Ny8-11547epcg9Q/1528540115/files/skazki/skazki-pushkina/skazka-o-zolotom-petushke.mp3"
  },
  {
    "duration": "04:57",
    "title": "Skazka O Glupom Myshonke",
    "orig_title": "\u0421\u043a\u0430\u0437\u043a\u0430 \u043e \u0433\u043b\u0443\u043f\u043e\u043c \u043c\u044b\u0448\u043e\u043d\u043a\u0435",
    "url": "https://stat1.deti-online.com/a/wZVQneouHx13Jh3pLaJ9kA/1528539883/files/skazki/skazki-marshaka/skazka-o-glupom-myshonke.mp3"
  },
  {
    "duration": "26:35",
    "title": "Skazanie O Gordom Aggee",
    "orig_title": "\u0421\u043a\u0430\u0437\u0430\u043d\u0438\u0435 \u043e \u0433\u043e\u0440\u0434\u043e\u043c \u0410\u0433\u0433\u0435\u0435",
    "url": "https://stat1.deti-online.com/a/cX7Q5pXyypJ2iLutQjvb1Q/1528563190/files/skazki/skazki-garshina/skazanie-o-gordom-aggee.mp3"
  },
  {
    "duration": "12:09",
    "title": "Sinjaja Boroda",
    "orig_title": "\u0421\u0438\u043d\u044f\u044f \u0431\u043e\u0440\u043e\u0434\u0430",
    "url": "https://stat2.deti-online.com/a/Tjq_jmHzl7L-XdjuBJlIFw/1528543028/files/skazki/skazki-sharlja-perro/sinjaja-boroda.mp3"
  },
  {
    "duration": "06:45",
    "title": "Siniy Lapot",
    "orig_title": "\u0421\u0438\u043d\u0438\u0439 \u043b\u0430\u043f\u043e\u0442\u044c",
    "url": "https://stat2.deti-online.com/a/VqvMRQa0I-1EoTKz_Za6tA/1528562342/files/skazki/rasskazy-prishvina/siniy-lapot.mp3"
  },
  {
    "duration": "05:52",
    "title": "Siniy Kinzhal",
    "orig_title": "\u0421\u0438\u043d\u0438\u0439 \u043a\u0438\u043d\u0436\u0430\u043b",
    "url": "https://stat2.deti-online.com/a/Z8_Q5bVJnxN8mn1IND88RQ/1528553929/files/skazki/rasskazy-dragunskogo/siniy-kinzhal.mp3"
  },
  {
    "duration": "16:10",
    "title": "Sivka Burka",
    "orig_title": "\u0421\u0438\u0432\u043a\u0430-\u0431\u0443\u0440\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/AuuDJJ2sYtAHa96ThW4l3g/1528539519/files/skazki/russkie-narodnye-skazki/sivka-burka.mp3"
  },
  {
    "duration": "06:52",
    "title": "Sestrica Alyonushka I Bratec Ivanushka",
    "orig_title": "\u0421\u0435\u0441\u0442\u0440\u0438\u0446\u0430 \u0410\u043b\u0451\u043d\u0443\u0448\u043a\u0430 \u0438 \u0431\u0440\u0430\u0442\u0435\u0446 \u0418\u0432\u0430\u043d\u0443\u0448\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/rYvZD2BT-WoykiEqVzCr0g/1528541051/files/skazki/russkie-narodnye-skazki/sestrica-alyonushka-i-bratec-ivanushka.mp3"
  },
  {
    "duration": "08:23",
    "title": "Sestra Moya Kseniya",
    "orig_title": "\u0421\u0435\u0441\u0442\u0440\u0430 \u043c\u043e\u044f \u041a\u0441\u0435\u043d\u0438\u044f",
    "url": "https://stat2.deti-online.com/a/kuYQW90lBJT652lguRDQ4A/1528543440/files/skazki/rasskazy-dragunskogo/sestra-moya-kseniya.mp3"
  },
  {
    "duration": "15:35",
    "title": "Serebrjanoe Blyudechko I Nalivnoe Jablochko",
    "orig_title": "\u0421\u0435\u0440\u0435\u0431\u0440\u044f\u043d\u043e\u0435 \u0431\u043b\u044e\u0434\u0435\u0447\u043a\u043e \u0438 \u043d\u0430\u043b\u0438\u0432\u043d\u043e\u0435 \u044f\u0431\u043b\u043e\u0447\u043a\u043e",
    "url": "https://stat2.deti-online.com/a/mxqCR-LljEK3TzSDs11pSw/1528543933/files/skazki/russkie-narodnye-skazki/serebrjanoe-blyudechko-i-nalivnoe-jablochko.mp3"
  },
  {
    "duration": "13:32",
    "title": "Serebrjanaja Monetka",
    "orig_title": "\u0421\u0435\u0440\u0435\u0431\u0440\u044f\u043d\u0430\u044f \u043c\u043e\u043d\u0435\u0442\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/yORqdO-RSyW9g1jf2JWKKA/1528554222/files/skazki/skazki-andersena/serebrjanaja-monetka.mp3"
  },
  {
    "duration": "21:32",
    "title": "Seraja Sheika",
    "orig_title": "\u0421\u0435\u0440\u0430\u044f \u0428\u0435\u0439\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/3R-i7qxU2-35RyC2kCzAGQ/1528542467/files/skazki/skazki-mamina-sibirjaka/seraja-sheika.mp3"
  },
  {
    "duration": "13:45",
    "title": "Sem Simeonov",
    "orig_title": "\u0421\u0435\u043c\u044c \u0421\u0438\u043c\u0435\u043e\u043d\u043e\u0432",
    "url": "https://stat1.deti-online.com/a/iCKpKDQJoXW233pidWQjGA/1528548382/files/skazki/russkie-narodnye-skazki/sem-simeonov.mp3"
  },
  {
    "duration": "07:13",
    "title": "Sem Voronov",
    "orig_title": "\u0421\u0435\u043c\u044c \u0432\u043e\u0440\u043e\u043d\u043e\u0432",
    "url": "https://stat2.deti-online.com/a/EfXtmVQXvqAdL4qM1LOgvA/1528555017/files/skazki/skazki-bratev-grimm/sem-voronov.mp3"
  },
  {
    "duration": "06:34",
    "title": "Svinja Kopilka",
    "orig_title": "\u0421\u0432\u0438\u043d\u044c\u044f-\u043a\u043e\u043f\u0438\u043b\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/82Ekgqh5Lx1kgPU0L_8JVw/1528550493/files/skazki/skazki-andersena/svinja-kopilka.mp3"
  },
  {
    "duration": "11:30",
    "title": "Svinopas",
    "orig_title": "\u0421\u0432\u0438\u043d\u043e\u043f\u0430\u0441",
    "url": "https://stat2.deti-online.com/a/qfaidNl-8_xWUJrPbtpZYw/1528550891/files/skazki/skazki-andersena/svinopas.mp3"
  },
  {
    "duration": "08:38",
    "title": "Sverhu Vniz Naiskosok",
    "orig_title": "\u0421\u0432\u0435\u0440\u0445\u0443 \u0432\u043d\u0438\u0437, \u043d\u0430\u0438\u0441\u043a\u043e\u0441\u043e\u043a",
    "url": "https://stat2.deti-online.com/a/sNMjVeXTJ8BgVMSyPwnFrQ/1528546234/files/skazki/rasskazy-dragunskogo/sverhu-vniz-naiskosok.mp3"
  },
  {
    "duration": "14:40",
    "title": "Sasha",
    "orig_title": "\u0421\u0430\u0448\u0430",
    "url": "https://stat1.deti-online.com/a/hjEYc4iB_g15BBNEsHXTOQ/1528542302/files/skazki/rasskazy-nosova/sasha.mp3"
  },
  {
    "duration": "06:03",
    "title": "Samoe Dorogoe",
    "orig_title": "\u0421\u0430\u043c\u043e\u0435 \u0434\u043e\u0440\u043e\u0433\u043e\u0435",
    "url": "https://stat1.deti-online.com/a/VpyXhc4VyVCAUgB4mpuCkA/1528564025/files/skazki/russkie-narodnye-skazki/samoe-dorogoe.mp3"
  },
  {
    "duration": "1:12",
    "title": "Vtoraja Kniga Dzhunglei Ryzhie Sobaki",
    "orig_title": "\u0420\u044b\u0436\u0438\u0435 \u0441\u043e\u0431\u0430\u043a\u0438",
    "url": "https://stat1.deti-online.com/a/5Z3Wist-Xcw6TXWqBvJscg/1528563155/files/skazki/skazki-kiplinga/vtoraja-kniga-dzhunglei-ryzhie-sobaki.mp3"
  },
  {
    "duration": "27:14",
    "title": "Rusalochka 2",
    "orig_title": "\u0420\u0443\u0441\u0430\u043b\u043e\u0447\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/zjt3PsMlJR2VHV2T75eulw/1528538725/files/skazki/skazki-andersena/rusalochka-2.mp3"
  },
  {
    "duration": "10:47",
    "title": "Rumpelshtilchen",
    "orig_title": "\u0420\u0443\u043c\u043f\u0435\u043b\u044c\u0448\u0442\u0438\u043b\u044c\u0446\u0445\u0435\u043d",
    "url": "https://stat2.deti-online.com/a/YB3IlFVFJMp-qrYS7-Q-HQ/1528543669/files/skazki/skazki-bratev-grimm/rumpelshtilchen.mp3"
  },
  {
    "duration": "07:53",
    "title": "Kot Rybolov",
    "orig_title": "\u041a\u043e\u0442-\u0440\u044b\u0431\u043e\u043b\u043e\u0432",
    "url": "https://stat2.deti-online.com/a/Ewtsq2iEj0sh0H_2jRFQUA/1528544806/files/skazki/skazki-suteeva/kot-rybolov.mp3"
  },
  {
    "duration": "05:46",
    "title": "Chaynik",
    "orig_title": "\u0427\u0430\u0439\u043d\u0438\u043a",
    "url": "https://stat2.deti-online.com/a/xfgsvtyr6mPT_0A7s2H5_Q/1528556613/files/audioskazki/chaynik.mp3"
  },
  {
    "duration": "01:46",
    "title": "Kot Vaska",
    "orig_title": "\u041a\u043e\u0442 \u0412\u0430\u0441\u044c\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/2LX5lQJGiVWEiUgPY2XfdQ/1528562294/files/skazki/skazki-tolstogo/kot-vaska.mp3"
  },
  {
    "duration": "15:39",
    "title": "Cvety Malenkoi Idy",
    "orig_title": "\u0426\u0432\u0435\u0442\u044b \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u043e\u0439 \u0418\u0434\u044b",
    "url": "https://stat2.deti-online.com/a/3cPjHykPgPgLI7o2tiHL4w/1528554769/files/skazki/skazki-andersena/cvety-malenkoi-idy.mp3"
  },
  {
    "duration": "14:03",
    "title": "Kot V Sapogah",
    "orig_title": "\u041a\u043e\u0442 \u0432 \u0441\u0430\u043f\u043e\u0433\u0430\u0445",
    "url": "https://stat1.deti-online.com/a/jq2fW5dg7oRnO2t_RPCARg/1528539707/files/skazki/skazki-sharlja-perro/kot-v-sapogah.mp3"
  },
  {
    "duration": "19:28",
    "title": "Cvetik Semicvetik",
    "orig_title": "\u0426\u0432\u0435\u0442\u0438\u043a-\u0441\u0435\u043c\u0438\u0446\u0432\u0435\u0442\u0438\u043a",
    "url": "https://stat1.deti-online.com/a/SOsDpKocS9wBMfEPEj6Aag/1528537901/files/skazki/sbornik-skazok/cvetik-semicvetik.mp3"
  },
  {
    "duration": "03:10",
    "title": "Kot",
    "orig_title": "\u041a\u043e\u0442",
    "url": "https://stat2.deti-online.com/a/klqtyIQJyZZLe6kOUY9tSA/1528564751/files/skazki/rasskazy-prishvina/kot.mp3"
  },
  {
    "duration": "07:11",
    "title": "Carica Pchel",
    "orig_title": "\u0426\u0430\u0440\u0438\u0446\u0430 \u043f\u0447\u0435\u043b",
    "url": "https://stat2.deti-online.com/a/tu8-8bwVwtMwzIowJOQkuw/1528548036/files/skazki/skazki-bratev-grimm/carica-pchel.mp3"
  },
  {
    "duration": "10:09",
    "title": "Korol Ljagushonok Ili Zheleznyi Genrih",
    "orig_title": "\u041a\u043e\u0440\u043e\u043b\u044c-\u043b\u044f\u0433\u0443\u0448\u043e\u043d\u043e\u043a, \u0438\u043b\u0438 \u0416\u0435\u043b\u0435\u0437\u043d\u044b\u0439 \u0413\u0435\u043d\u0440\u0438\u0445",
    "url": "https://stat2.deti-online.com/a/lhs3PjL2dcgVOUQqakm6bA/1528545132/files/skazki/skazki-bratev-grimm/korol-ljagushonok-ili-zheleznyi-genrih.mp3"
  },
  {
    "duration": "18:00",
    "title": "Carevna Ljagushka",
    "orig_title": "\u0426\u0430\u0440\u0435\u0432\u043d\u0430-\u043b\u044f\u0433\u0443\u0448\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/41Xpsc8MBpMPcbir3yBHRA/1528538952/files/skazki/russkie-narodnye-skazki/carevna-ljagushka.mp3"
  },
  {
    "duration": "14:43",
    "title": "Korol Drozdoborod",
    "orig_title": "\u041a\u043e\u0440\u043e\u043b\u044c \u0414\u0440\u043e\u0437\u0434\u043e\u0431\u043e\u0440\u043e\u0434",
    "url": "https://stat2.deti-online.com/a/Z7zNj6JBRK02iRTLptF7Nw/1528546978/files/skazki/skazki-bratev-grimm/korol-drozdoborod.mp3"
  },
  {
    "duration": "05:55",
    "title": "Carevna Nesmeyana",
    "orig_title": "\u0426\u0430\u0440\u0435\u0432\u043d\u0430 \u041d\u0435\u0441\u043c\u0435\u044f\u043d\u0430",
    "url": "https://stat2.deti-online.com/a/7YMZcriz1o_6Iu9sAAt1Xg/1528541212/files/skazki/russkie-narodnye-skazki/carevna-nesmeyana.mp3"
  },
  {
    "duration": "09:14",
    "title": "Korolek I Medved",
    "orig_title": "\u041a\u043e\u0440\u043e\u043b\u0435\u043a \u0438 \u043c\u0435\u0434\u0432\u0435\u0434\u044c",
    "url": "https://stat2.deti-online.com/a/x80n2ZIw9QbJggKCXnwAPQ/1528561612/files/skazki/skazki-bratev-grimm/korolek-i-medved.mp3"
  },
  {
    "duration": "09:11",
    "title": "Hrustalnyy Shar",
    "orig_title": "\u0425\u0440\u0443\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0439 \u0448\u0430\u0440",
    "url": "https://stat1.deti-online.com/a/G4f87V_Spj-UkOcpicCcxg/1528553277/files/skazki/skazki-bratev-grimm/hrustalnyy-shar.mp3"
  },
  {
    "duration": "3:10",
    "title": "Korolevstvo Krivyh Zerkal",
    "orig_title": "\u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0441\u0442\u0432\u043e \u043a\u0440\u0438\u0432\u044b\u0445 \u0437\u0435\u0440\u043a\u0430\u043b",
    "url": "https://stat1.deti-online.com/a/oI3jIijAoomzSCdQp4PmjQ/1528538927/files/skazki/sbornik-skazok/korolevstvo-krivyh-zerkal.mp3"
  },
  {
    "duration": "05:56",
    "title": "Hrustalnaja Gora",
    "orig_title": "\u0425\u0440\u0443\u0441\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u0433\u043e\u0440\u0430",
    "url": "https://stat1.deti-online.com/a/kIdv3r52CNimKZQ5SILgXQ/1528545372/files/skazki/russkie-narodnye-skazki/hrustalnaja-gora.mp3"
  },
  {
    "duration": "55:15",
    "title": "Vtoraja Kniga Dzhunglei Korolevskii Ankas",
    "orig_title": "\u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0441\u043a\u0438\u0439 \u0430\u043d\u043a\u0430\u0441",
    "url": "https://stat1.deti-online.com/a/LRZKV54yu8kh4Br891PDXg/1528559391/files/skazki/skazki-kiplinga/vtoraja-kniga-dzhunglei-korolevskii-ankas.mp3"
  },
  {
    "duration": "03:34",
    "title": "Hromka",
    "orig_title": "\u0425\u0440\u043e\u043c\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/dUSBhh151LNlw9JDuWZEEg/1528565263/files/skazki/rasskazy-prishvina/hromka.mp3"
  },
  {
    "duration": "28:41",
    "title": "Korolevskie Deti",
    "orig_title": "\u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0441\u043a\u0438\u0435 \u0434\u0435\u0442\u0438",
    "url": "https://stat1.deti-online.com/a/TAHm7plFjid_ssqotISJkQ/1528549064/files/skazki/skazki-bratev-grimm/korolevskie-deti.mp3"
  },
  {
    "duration": "15:46",
    "title": "Hrabryi Portnjazhka",
    "orig_title": "\u0425\u0440\u0430\u0431\u0440\u044b\u0439 \u043f\u043e\u0440\u0442\u043d\u044f\u0436\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/eHydMsRj0vFnJpTe9GsPeA/1528543791/files/skazki/skazki-bratev-grimm/hrabryi-portnjazhka.mp3"
  },
  {
    "duration": "02:17",
    "title": "Korablik",
    "orig_title": "\u041a\u043e\u0440\u0430\u0431\u043b\u0438\u043a",
    "url": "https://stat2.deti-online.com/a/f9aepzAmarsw6HzRfiZdDw/1528543302/files/skazki/skazki-suteeva/korablik.mp3"
  },
  {
    "duration": "56:00",
    "title": "Holodnoe Serdce",
    "orig_title": "\u0425\u043e\u043b\u043e\u0434\u043d\u043e\u0435 \u0441\u0435\u0440\u0434\u0446\u0435",
    "url": "https://stat1.deti-online.com/a/FaSUwZN3-glOy6E2xj69MA/1528541240/files/skazki/skazki-gaufa/holodnoe-serdce.mp3"
  },
  {
    "duration": "16:20",
    "title": "Konyaga",
    "orig_title": "\u041a\u043e\u043d\u044f\u0433\u0430",
    "url": "https://stat2.deti-online.com/a/iRPIKe9zNtjbmy-I2dXB0g/1528569143/files/skazki/skazki-saltykova-schedrina/konyaga.mp3"
  },
  {
    "duration": "04:09",
    "title": "Hleb I Zoloto",
    "orig_title": "\u0425\u043b\u0435\u0431 \u0438 \u0437\u043e\u043b\u043e\u0442\u043e",
    "url": "https://stat2.deti-online.com/a/i20L0MMAfiNnmXPTtzQScA/1528555778/files/skazki/arabskie-skazki/hleb-i-zoloto.mp3"
  },
  {
    "duration": "38:02",
    "title": "Konek Gorbunok ",
    "orig_title": "\u0427\u0430\u0441\u0442\u044c \u043f\u0435\u0440\u0432\u0430\u044f. \u041d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441\u043a\u0430\u0437\u043a\u0430 \u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f\u2026",
    "url": "https://stat1.deti-online.com/a/NBTSDWaiudw8H6G531tXBA/1528538755/files/skazki/sbornik-skazok/konek-gorbunok-3.mp3"
  },
  {
    "duration": "09:11",
    "title": "Hitryy Sposob",
    "orig_title": "\u0425\u0438\u0442\u0440\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431",
    "url": "https://stat2.deti-online.com/a/RVhYsq2c09n-zyZdvVSDqA/1528551865/files/skazki/rasskazy-dragunskogo/hitryy-sposob.mp3"
  },
  {
    "duration": "04:29",
    "title": "Kolobok 2",
    "orig_title": "\u041a\u043e\u043b\u043e\u0431\u043e\u043a",
    "url": "https://stat1.deti-online.com/a/mDomNJRE5cA3M4h_FkTQNA/1528538144/files/audioskazki/kolobok-2.mp3"
  },
  {
    "duration": "14:16",
    "title": "Hitraja Nauka",
    "orig_title": "\u0425\u0438\u0442\u0440\u0430\u044f \u043d\u0430\u0443\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/WgsBcCq31YixgFrlmFfsaw/1528546053/files/skazki/russkie-narodnye-skazki/hitraja-nauka.mp3"
  },
  {
    "duration": "08:31",
    "title": "Kozlenok Kotoryy Schital Do Desyati",
    "orig_title": "\u041a\u043e\u0437\u043b\u0451\u043d\u043e\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u0447\u0438\u0442\u0430\u043b \u0434\u043e \u0434\u0435\u0441\u044f\u0442\u0438",
    "url": "https://stat1.deti-online.com/a/DqGuZ0OlC4xQmTkD31N7rw/1528542318/files/skazki/sbornik-skazok/kozlenok-kotoryy-schital-do-desyati.mp3"
  },
  {
    "duration": "19:16",
    "title": "Finist Jasnyi Sokol",
    "orig_title": "\u0424\u0438\u043d\u0438\u0441\u0442-\u044f\u0441\u043d\u044b\u0439 \u0441\u043e\u043a\u043e\u043b",
    "url": "https://stat1.deti-online.com/a/THnr5VuEikrY94gJbKdFqg/1528542940/files/skazki/russkie-narodnye-skazki/finist-jasnyi-sokol.mp3"
  },
  {
    "duration": "01:31",
    "title": "Kozel",
    "orig_title": "\u041a\u043e\u0437\u0435\u043b",
    "url": "https://stat1.deti-online.com/a/GPuZHLmmlGASPFpJTR_Wuw/1528572255/files/skazki/skazki-tolstogo/kozel.mp3"
  },
  {
    "duration": "06:42",
    "title": "Fedorino Gore",
    "orig_title": "\u0424\u0435\u0434\u043e\u0440\u0438\u043d\u043e \u0433\u043e\u0440\u0435",
    "url": "https://stat1.deti-online.com/a/Vu2hUkZFcSWNXMvOkkFQsQ/1528539504/files/skazki/skazki-chukovskogo/fedorino-gore.mp3"
  },
  {
    "duration": "05:03",
    "title": "Koza Dereza",
    "orig_title": "\u041a\u043e\u0437\u0430 \u0434\u0435\u0440\u0435\u0437\u0430",
    "url": "https://stat1.deti-online.com/a/3qHnpT5XNTBXcswvIZegoQ/1528543450/files/skazki/russkie-narodnye-skazki/koza-dereza.mp3"
  },
  {
    "duration": "05:58",
    "title": "Fedina Zadacha",
    "orig_title": "\u0424\u0435\u0434\u0438\u043d\u0430 \u0437\u0430\u0434\u0430\u0447\u0430",
    "url": "https://stat2.deti-online.com/a/YlJVczA4_O87TnTmLlrGNw/1528542873/files/skazki/rasskazy-nosova/fedina-zadacha.mp3"
  },
  {
    "duration": "05:41",
    "title": "Klyaksa",
    "orig_title": "\u041a\u043b\u044f\u043a\u0441\u0430",
    "url": "https://stat1.deti-online.com/a/MeExqqf3S2q3vp1glPx-vw/1528542727/files/skazki/rasskazy-nosova/klyaksa.mp3"
  },
  {
    "duration": "08:40",
    "title": "Fantazery",
    "orig_title": "\u0424\u0430\u043d\u0442\u0430\u0437\u0451\u0440\u044b",
    "url": "https://stat2.deti-online.com/a/jWh1IwIaBjOl_eH9-dTHOA/1528539709/files/skazki/rasskazy-nosova/fantazery.mp3"
  },
  {
    "duration": "06:45",
    "title": "Kladovaya Solnca 12",
    "orig_title": "\u0413\u043b\u0430\u0432\u0430 1",
    "url": "https://stat2.deti-online.com/a/k6oM4QLciGhPG5bROhrnZw/1528538854/files/skazki/rasskazy-prishvina/kladovaya-solnca-12.mp3"
  },
  {
    "duration": "04:20",
    "title": "Umnyy Muzhik",
    "orig_title": "\u0423\u043c\u043d\u044b\u0439 \u043c\u0443\u0436\u0438\u043a",
    "url": "https://stat1.deti-online.com/a/kxfsKydHD4YvkljsCJYVKA/1528551590/files/skazki/russkie-narodnye-skazki/umnyy-muzhik.mp3"
  },
  {
    "duration": "02:38",
    "title": "Kasha Iz Topora",
    "orig_title": "\u041a\u0430\u0448\u0430 \u0438\u0437 \u0442\u043e\u043f\u043e\u0440\u0430",
    "url": "https://stat1.deti-online.com/a/j8_BT2JGRjF6ratIy3eqIg/1528539400/files/skazki/russkie-narodnye-skazki/kasha-iz-topora.mp3"
  },
  {
    "duration": "20:54",
    "title": "Umnee Vseh",
    "orig_title": "\u0423\u043c\u043d\u0435\u0435 \u0432\u0441\u0435\u0445",
    "url": "https://stat1.deti-online.com/a/l5BL-0Ih2CNI5zovf7pYXw/1528550580/files/skazki/skazki-mamina-sibirjaka/umnee-vseh.mp3"
  },
  {
    "duration": "01:54",
    "title": "Kartina",
    "orig_title": "\u041a\u0430\u0440\u0442\u0438\u043d\u0430",
    "url": "https://stat1.deti-online.com/a/aNKrCWH0ky_44jUC90umug/1528569691/files/skazki/skazki-tolstogo/kartina.mp3"
  },
  {
    "duration": "08:44",
    "title": "Umnaja Gretel",
    "orig_title": "\u0423\u043c\u043d\u0430\u044f \u0413\u0440\u0435\u0442\u0435\u043b\u044c",
    "url": "https://stat2.deti-online.com/a/rSFu7FnwIFaC8hguKpRcQg/1528543014/files/skazki/skazki-bratev-grimm/umnaja-gretel.mp3"
  },
  {
    "duration": "11:07",
    "title": "Karlson 3 25",
    "orig_title": "\u0413\u043b\u0430\u0432\u0430 1. \u0427\u0430\u0441\u0442\u044c 1",
    "url": "https://stat1.deti-online.com/a/lYF5QrI0mmw6fu92cZhXVA/1528538950/files/skazki/skazki-lindgren/karlson-3-25.mp3"
  },
  {
    "duration": "06:44",
    "title": "Ulitka I Roza",
    "orig_title": "\u0423\u043b\u0438\u0442\u043a\u0430 \u0438 \u0440\u043e\u0437\u0430",
    "url": "https://stat2.deti-online.com/a/r0Q0G5DH-J2JBIRss6NnpA/1528555131/files/skazki/skazki-andersena/ulitka-i-roza.mp3"
  },
  {
    "duration": "11:15",
    "title": "Karlson 2 24",
    "orig_title": "\u0413\u043b\u0430\u0432\u0430 1. \u0427\u0430\u0441\u0442\u044c 1",
    "url": "https://stat2.deti-online.com/a/umvQe16HE3yk6vUbAgtB9g/1528539617/files/skazki/skazki-lindgren/karlson-2-24.mp3"
  },
  {
    "duration": "02:03",
    "title": "U Lukomorja Dub Zelenyi",
    "orig_title": "\u0423 \u041b\u0443\u043a\u043e\u043c\u043e\u0440\u044c\u044f \u0434\u0443\u0431 \u0437\u0435\u043b\u0435\u043d\u044b\u0439",
    "url": "https://stat1.deti-online.com/a/txuNFhXWo8X_INelL4L6Iw/1528540492/files/skazki/skazki-pushkina/u-lukomorja-dub-zelenyi.mp3"
  },
  {
    "duration": "09:57",
    "title": "Karlson 1 22",
    "orig_title": "\u0413\u043b\u0430\u0432\u0430 1. \u0427\u0430\u0441\u0442\u044c 1",
    "url": "https://stat2.deti-online.com/a/_KtMaV08MxRomDje-KGuYQ/1528538295/files/skazki/skazki-lindgren/karlson-1-22.mp3"
  },
  {
    "duration": "12:37",
    "title": "Tuk Tuk Tuk",
    "orig_title": "\u0422\u0443\u043a-\u0442\u0443\u043a-\u0442\u0443\u043a",
    "url": "https://stat1.deti-online.com/a/Rffc5QISz-vWWivwANqYNA/1528540549/files/skazki/rasskazy-nosova/tuk-tuk-tuk.mp3"
  },
  {
    "duration": "29:09",
    "title": "Dyuimovochka",
    "orig_title": "\u0414\u044e\u0439\u043c\u043e\u0432\u043e\u0447\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/zghPSJF3BKOy_3vwteSNHQ/1528537898/files/skazki/skazki-andersena/dyuimovochka.mp3"
  },
  {
    "duration": "6:33",
    "title": "Roni Doch Razboynika",
    "orig_title": "\u0420\u043e\u043d\u0438, \u0434\u043e\u0447\u044c \u0440\u0430\u0437\u0431\u043e\u0439\u043d\u0438\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/CPe57vLArCazqhpMd5QFFg/1528541027/files/skazki/skazki-lindgren/roni-doch-razboynika.mp3"
  },
  {
    "duration": "18:42",
    "title": "Odnoglazka Dvuglazka I Treglazka",
    "orig_title": "\u041e\u0434\u043d\u043e\u0433\u043b\u0430\u0437\u043a\u0430, \u0434\u0432\u0443\u0433\u043b\u0430\u0437\u043a\u0430 \u0438 \u0442\u0440\u0435\u0433\u043b\u0430\u0437\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/E3RaT2Ce1j64N-UNqqzWHg/1528547141/files/skazki/skazki-bratev-grimm/odnoglazka-dvuglazka-i-treglazka.mp3"
  },
  {
    "duration": "10:55",
    "title": "Romashka",
    "orig_title": "\u0420\u043e\u043c\u0430\u0448\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/kDHJf6-ew-4WtrTIAS7zow/1528542433/files/skazki/skazki-andersena/romashka.mp3"
  },
  {
    "duration": "05:46",
    "title": "Odna Kaplya Ubivaet Loshad",
    "orig_title": "\u041e\u0434\u043d\u0430 \u043a\u0430\u043f\u043b\u044f \u0443\u0431\u0438\u0432\u0430\u0435\u0442 \u043b\u043e\u0448\u0430\u0434\u044c",
    "url": "https://stat1.deti-online.com/a/U0dZQpD6enJVLZlcOtZ0Qw/1528548940/files/skazki/rasskazy-dragunskogo/odna-kaplya-ubivaet-loshad.mp3"
  },
  {
    "duration": "13:24",
    "title": "Dudochka I Kuvshinchik",
    "orig_title": "\u0414\u0443\u0434\u043e\u0447\u043a\u0430 \u0438 \u043a\u0443\u0432\u0448\u0438\u043d\u0447\u0438\u043a",
    "url": "https://stat1.deti-online.com/a/CSVoSHeigebyxtltwOnv6A/1528538339/files/skazki/sbornik-skazok/dudochka-i-kuvshinchik.mp3"
  },
  {
    "duration": "08:44",
    "title": "Tri Schastlivchika",
    "orig_title": "\u0422\u0440\u0438 \u0441\u0447\u0430\u0441\u0442\u043b\u0438\u0432\u0447\u0438\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/mk9djfAlMtVmf2fKFhFNng/1528561470/files/skazki/skazki-bratev-grimm/tri-schastlivchika.mp3"
  },
  {
    "duration": "06:11",
    "title": "Rovno 25 Kilo",
    "orig_title": "\u0420\u043e\u0432\u043d\u043e 25 \u043a\u0438\u043b\u043e",
    "url": "https://stat2.deti-online.com/a/8OgHo-v293w7aPJqYpoGaQ/1528546112/files/skazki/rasskazy-dragunskogo/rovno-25-kilo.mp3"
  },
  {
    "duration": "21:55",
    "title": "Ognivo",
    "orig_title": "\u041e\u0433\u043d\u0438\u0432\u043e",
    "url": "https://stat1.deti-online.com/a/kKMHPfpeor6LsrSn1U7JzA/1528540559/files/skazki/skazki-andersena/ognivo.mp3"
  },
  {
    "duration": "05:38",
    "title": "Druzhba Koshki I Myshki",
    "orig_title": "\u0414\u0440\u0443\u0436\u0431\u0430 \u043a\u043e\u0448\u043a\u0438 \u0438 \u043c\u044b\u0448\u043a\u0438",
    "url": "https://stat1.deti-online.com/a/u-6Fg6lN19EwTLI_r4D_cQ/1528558868/files/skazki/skazki-bratev-grimm/druzhba-koshki-i-myshki.mp3"
  },
  {
    "duration": "07:23",
    "title": "Tri Pryahi",
    "orig_title": "\u0422\u0440\u0438 \u043f\u0440\u044f\u0445\u0438",
    "url": "https://stat2.deti-online.com/a/Q35Ux4-qpazovP-lNKi1Ww/1528560120/files/skazki/skazki-bratev-grimm/tri-pryahi.mp3"
  },
  {
    "duration": "38:53",
    "title": "Ervaja Kniga Dzhunglei Rikki Tikki Tavi",
    "orig_title": "\u0420\u0438\u043a\u043a\u0438 \u0422\u0438\u043a\u043a\u0438 \u0422\u0430\u0432\u0438",
    "url": "https://stat2.deti-online.com/a/FcSiNDc5F0Wa8iPfbCMkcQ/1528541257/files/skazki/skazki-kiplinga/pervaja-kniga-dzhunglei-rikki-tikki-tavi.mp3"
  },
  {
    "duration": "25:00",
    "title": "O Tom Kak Zhila Byla Poslednjaja Muha",
    "orig_title": "\u041e \u0442\u043e\u043c, \u043a\u0430\u043a \u0436\u0438\u043b\u0430-\u0431\u044b\u043b\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u041c\u0443\u0445\u0430",
    "url": "https://stat2.deti-online.com/a/q008-r0GzJegBWB0F-1WZA/1528550199/files/skazki/skazki-mamina-sibirjaka/o-tom-kak-zhila-byla-poslednjaja-muha.mp3"
  },
  {
    "duration": "07:25",
    "title": "Drug Detstva",
    "orig_title": "\u0414\u0440\u0443\u0433 \u0434\u0435\u0442\u0441\u0442\u0432\u0430",
    "url": "https://stat2.deti-online.com/a/oq0Te_M9cQcnw7jeoQrYww/1528543017/files/skazki/rasskazy-dragunskogo/drug-detstva.mp3"
  },
  {
    "duration": "18:28",
    "title": "Tri Porosenka",
    "orig_title": "\u0422\u0440\u0438 \u043f\u043e\u0440\u043e\u0441\u0435\u043d\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/yYtzMTChzxBBMuiEzDHkSg/1528537966/files/skazki/sbornik-skazok/tri-porosenka.mp3"
  },
  {
    "duration": "13:57",
    "title": "Rike S Hoholko",
    "orig_title": "\u0420\u0438\u043a\u0435 \u0441 \u0445\u043e\u0445\u043e\u043b\u043a\u043e\u043c",
    "url": "https://stat2.deti-online.com/a/-uDWmlq8mTLgswrnTy4M4Q/1528545578/files/skazki/skazki-sharlja-perro/rike-s-hoholkom.mp3"
  },
  {
    "duration": "10:35",
    "title": "O Molochke Ovsjanoi Kashke I Serom Kotishke Murke",
    "orig_title": "\u041e \u041c\u043e\u043b\u043e\u0447\u043a\u0435, \u043e\u0432\u0441\u044f\u043d\u043e\u0439 \u041a\u0430\u0448\u043a\u0435 \u0438 \u0441\u0435\u0440\u043e\u043c \u043a\u043e\u0442\u0438\u0448\u043a\u0435 \u041c\u0443\u0440\u043a\u0435",
    "url": "https://stat2.deti-online.com/a/NPFwn1xHk4IybX7wrRamBQ/1528548427/files/skazki/skazki-mamina-sibirjaka/o-molochke-ovsjanoi-kashke-i-serom-kotishke-murke.mp3"
  },
  {
    "duration": "08:42",
    "title": "Doch Semiletka",
    "orig_title": "\u0414\u043e\u0447\u044c-\u0441\u0435\u043c\u0438\u043b\u0435\u0442\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/9iTFNHZTSWtac8MWqjXsqw/1528555145/files/skazki/russkie-narodnye-skazki/doch-semiletka.mp3"
  },
  {
    "duration": "10:36",
    "title": "Tri Ohotnika",
    "orig_title": "\u0422\u0440\u0438 \u043e\u0445\u043e\u0442\u043d\u0438\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/xPhU5dKQigFZQEIC8PODZA/1528543235/files/skazki/rasskazy-nosova/tri-ohotnika.mp3"
  },
  {
    "duration": "01:30",
    "title": "Repka",
    "orig_title": "\u0420\u0435\u043f\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/QrpZzvBfQ9QM3A94CowJYA/1528539180/files/skazki/russkie-narodnye-skazki/repka.mp3"
  },
  {
    "duration": "35:02",
    "title": "O Molodilnyh Yablokah I Zhivoy Vode",
    "orig_title": "\u041e \u043c\u043e\u043b\u043e\u0434\u0438\u043b\u044c\u043d\u044b\u0445 \u044f\u0431\u043b\u043e\u043a\u0430\u0445 \u0438 \u0436\u0438\u0432\u043e\u0439 \u0432\u043e\u0434\u0435",
    "url": "https://stat1.deti-online.com/a/AJuEGlAUJFCozxpS6F9IHw/1528543557/files/skazki/russkie-narodnye-skazki/o-molodilnyh-yablokah-i-zhivoy-vode.mp3"
  },
  {
    "duration": "08:44",
    "title": "Doch I Padcherica",
    "orig_title": "\u0414\u043e\u0447\u044c \u0438 \u043f\u0430\u0434\u0447\u0435\u0440\u0438\u0446\u0430",
    "url": "https://stat1.deti-online.com/a/WzkxecSEs0M2MfsU7ybanw/1528545697/files/skazki/russkie-narodnye-skazki/doch-i-padcherica.mp3"
  },
  {
    "duration": "06:21",
    "title": "Tri Medvedya",
    "orig_title": "\u0422\u0440\u0438 \u043c\u0435\u0434\u0432\u0435\u0434\u044f",
    "url": "https://stat1.deti-online.com/a/2zhr6u6TBVXrv2vMWuXCkg/1528538593/files/skazki/russkie-narodnye-skazki/tri-medvedya.mp3"
  },
  {
    "duration": "03:10",
    "title": "Rebyata I Utyata",
    "orig_title": "\u0420\u0435\u0431\u044f\u0442\u0430 \u0438 \u0443\u0442\u044f\u0442\u0430",
    "url": "https://stat2.deti-online.com/a/L9oHmaaAD3r1_mWjChtBQg/1528557685/files/skazki/rasskazy-prishvina/rebyata-i-utyata.mp3"
  },
  {
    "duration": "18:15",
    "title": "O Zhabe I Roze",
    "orig_title": "\u041e \u0436\u0430\u0431\u0435 \u0438 \u0440\u043e\u0437\u0435",
    "url": "https://stat2.deti-online.com/a/cFoY2uZnMfEifFWGq9UY3Q/1528558122/files/skazki/skazki-garshina/o-zhabe-i-roze.mp3"
  },
  {
    "duration": "1:54",
    "title": "Domovenok Kuzya",
    "orig_title": "\u0414\u043e\u043c\u043e\u0432\u0451\u043d\u043e\u043a \u041a\u0443\u0437\u044f",
    "url": "https://stat1.deti-online.com/a/O4eBFs1ioDEGbWDd32JGzw/1528538815/files/skazki/sbornik-skazok/domovenok-kuzya.mp3"
  },
  {
    "duration": "11:02",
    "title": "Tri Zmeinyh Listochka",
    "orig_title": "\u0422\u0440\u0438 \u0437\u043c\u0435\u0438\u043d\u044b\u0445 \u043b\u0438\u0441\u0442\u043e\u0447\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/1QigRL7Y1Std3vy-rVlnnw/1528556678/files/skazki/skazki-bratev-grimm/tri-zmeinyh-listochka.mp3"
  },
  {
    "duration": "03:59",
    "title": "Rachya Svadba",
    "orig_title": "\u0420\u0430\u0447\u044c\u044f \u0441\u0432\u0430\u0434\u044c\u0431\u0430",
    "url": "https://stat2.deti-online.com/a/gooE7523gvm5FbUthNS7jg/1528573015/files/skazki/skazki-tolstogo/rachya-svadba.mp3"
  },
  {
    "duration": "24:22",
    "title": "Alchish Kibalchish",
    "orig_title": "\u041e \u0412\u043e\u0435\u043d\u043d\u043e\u0439 \u0442\u0430\u0439\u043d\u0435, \u043e \u041c\u0430\u043b\u044c\u0447\u0438\u0448\u0435-\u041a\u0438\u0431\u0430\u043b\u044c\u0447\u0438\u0448\u0435 \u0438 \u0435\u0433\u043e \u0442\u0432\u0451\u0440\u0434\u043e\u043c \u0441\u043b\u043e\u0432\u0435",
    "url": "https://stat1.deti-online.com/a/5YkOhvpnQwpe_C5xlROf-w/1528544728/files/skazki/rasskazy-gaydara/malchish-kibalchish.mp3"
  },
  {
    "duration": "19:38",
    "title": "Dikiy Pomeschik",
    "orig_title": "\u0414\u0438\u043a\u0438\u0439 \u043f\u043e\u043c\u0435\u0449\u0438\u043a",
    "url": "https://stat1.deti-online.com/a/FfNNNwAsov9uglXkgywQ3g/1528549779/files/skazki/skazki-saltykova-schedrina/dikiy-pomeschik.mp3"
  },
  {
    "duration": "05:08",
    "title": "Tri Brata",
    "orig_title": "\u0422\u0440\u0438 \u0431\u0440\u0430\u0442\u0430",
    "url": "https://stat2.deti-online.com/a/--jcarkdqkSjurYQWyngvg/1528549318/files/skazki/skazki-bratev-grimm/tri-brata.mp3"
  },
  {
    "duration": "15:20",
    "title": "Rasskazy O Zhivotnyh 11",
    "orig_title": "\u0411\u0435\u0441\u043f\u0440\u0438\u0437\u043e\u0440\u043d\u0430\u044f \u043a\u043e\u0448\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/uS6Gi2WAXQRM-bhWDkbDHg/1528541900/files/skazki/rasskazy-zhitkova/rasskazy-o-zhivotnyh-11.mp3"
  },
  {
    "duration": "11:26",
    "title": "Novoe Plate Korolja",
    "orig_title": "\u041d\u043e\u0432\u043e\u0435 \u043f\u043b\u0430\u0442\u044c\u0435 \u043a\u043e\u0440\u043e\u043b\u044f",
    "url": "https://stat1.deti-online.com/a/yUKDo4xF5sAkSzlKEMbAPA/1528544883/files/skazki/skazki-andersena/novoe-plate-korolja.mp3"
  },
  {
    "duration": "12:35",
    "title": "Dikie Lebedi",
    "orig_title": "\u0414\u0438\u043a\u0438\u0435 \u043b\u0435\u0431\u0435\u0434\u0438",
    "url": "https://stat2.deti-online.com/a/qdzDHj-pgWVQV6FHglGSHA/1528543664/files/skazki/skazki-andersena/dikie-lebedi.mp3"
  },
  {
    "duration": "04:37",
    "title": "Toptygin I Lisa",
    "orig_title": "\u0422\u043e\u043f\u0442\u044b\u0433\u0438\u043d \u0438 \u043b\u0438\u0441\u0430",
    "url": "https://stat1.deti-online.com/a/bNPqrNFxNW2QWu-DTpKPsw/1528546719/files/skazki/skazki-chukovskogo/toptygin-i-lisa.mp3"
  },
  {
    "duration": "13:14",
    "title": "Rasskazhite Mne Pro Singapur",
    "orig_title": "\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043c\u043d\u0435 \u043f\u0440\u043e \u0421\u0438\u043d\u0433\u0430\u043f\u0443\u0440",
    "url": "https://stat2.deti-online.com/a/1d0kSHTbPx9yvt7hFW13sg/1528547257/files/skazki/rasskazy-dragunskogo/rasskazhite-mne-pro-singapur.mp3"
  },
  {
    "duration": "03:22",
    "title": "Nischiy I Schaste",
    "orig_title": "\u041d\u0438\u0449\u0438\u0439 \u0438 \u0441\u0447\u0430\u0441\u0442\u044c\u0435",
    "url": "https://stat1.deti-online.com/a/xSZ1vB8FqjyXjJLJGrn6vw/1528556636/files/skazki/arabskie-skazki/nischiy-i-schaste.mp3"
  },
  {
    "duration": "10:51",
    "title": "To Chego Ne Bylo",
    "orig_title": "\u0422\u043e, \u0447\u0435\u0433\u043e \u043d\u0435 \u0431\u044b\u043b\u043e",
    "url": "https://stat2.deti-online.com/a/0KbTqIQ8PV2YFyAsf93XiQ/1528562938/files/skazki/skazki-garshina/to-chego-ne-bylo.mp3"
  },
  {
    "duration": "14:20",
    "title": "Rapuncel",
    "orig_title": "\u0420\u0430\u043f\u0443\u043d\u0446\u0435\u043b\u044c",
    "url": "https://stat1.deti-online.com/a/L3xmm_XevOfs2wv0UFA-Ew/1528538929/files/skazki/skazki-bratev-grimm/rapuncel.mp3"
  },
  {
    "duration": "09:34",
    "title": "Nichego Izmenit Nelzya",
    "orig_title": "\u041d\u0438\u0447\u0435\u0433\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0435\u043b\u044c\u0437\u044f",
    "url": "https://stat1.deti-online.com/a/wEx-nJsK2SPTFjas7dJBvw/1528549070/files/skazki/rasskazy-dragunskogo/nichego-izmenit-nelzya.mp3"
  },
  {
    "duration": "12:20",
    "title": "Divo Divnoe Chudo Chudnoe",
    "orig_title": "\u0414\u0438\u0432\u043e \u0434\u0438\u0432\u043d\u043e\u0435, \u0447\u0443\u0434\u043e \u0447\u0443\u0434\u043d\u043e\u0435",
    "url": "https://stat1.deti-online.com/a/TBNodfNtNJXxjgG3S2Dj6A/1528542319/files/skazki/russkie-narodnye-skazki/divo-divnoe-chudo-chudnoe.mp3"
  },
  {
    "duration": "10:34",
    "title": "Tiha Ukrainskaya Noch",
    "orig_title": "\u0422\u0438\u0445\u0430 \u0443\u043a\u0440\u0430\u0438\u043d\u0441\u043a\u0430\u044f \u043d\u043e\u0447\u044c",
    "url": "https://stat1.deti-online.com/a/chxe7j0tGC3TFTKHNAzYqg/1528545614/files/skazki/rasskazy-dragunskogo/tiha-ukrainskaya-noch.mp3"
  },
  {
    "duration": "49:15",
    "title": "Raiskii Sad",
    "orig_title": "\u0420\u0430\u0439\u0441\u043a\u0438\u0439 \u0441\u0430\u0434",
    "url": "https://stat2.deti-online.com/a/zy-_-u2FIGhcgzS0nEekyw/1528552318/files/skazki/skazki-andersena/raiskii-sad.mp3"
  },
  {
    "duration": "11:08",
    "title": "Nezavisimyy Gorbushka",
    "orig_title": "\u041d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0439 \u0413\u043e\u0440\u0431\u0443\u0448\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/XTaICrR-PTpM248dpremSA/1528547959/files/skazki/rasskazy-dragunskogo/nezavisimyy-gorbushka.mp3"
  },
  {
    "duration": "08:19",
    "title": "Dzhelsomino V Strane Lzhecov 21",
    "orig_title": "\u0413\u043b\u0430\u0432\u0430 1",
    "url": "https://stat1.deti-online.com/a/L3ilXG3r-S8VBLQRebmZLQ/1528540704/files/skazki/skazki-rodari/dzhelsomino-v-strane-lzhecov-21.mp3"
  },
  {
    "duration": "13:00",
    "title": "Timur I Ego Komanda 12",
    "orig_title": "\u0427\u0430\u0441\u0442\u044c 1",
    "url": "https://stat2.deti-online.com/a/L_gnUC7T00x1cuDiCvBciw/1528540376/files/skazki/rasskazy-gaydara/timur-i-ego-komanda-12.mp3"
  },
  {
    "duration": "03:39",
    "title": "Raznye Kolesa",
    "orig_title": "\u0420\u0430\u0437\u043d\u044b\u0435 \u043a\u043e\u043b\u0451\u0441\u0430",
    "url": "https://stat1.deti-online.com/a/GTOOmLWs4Fcj_w1ZSYkc0w/1528542667/files/skazki/skazki-suteeva/raznye-kolesa.mp3"
  },
  {
    "duration": "1:12",
    "title": "Vtoraja Kniga Dzhunglei Nashestvie Dzhunglei",
    "orig_title": "\u041d\u0430\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u0434\u0436\u0443\u043d\u0433\u043b\u0435\u0439",
    "url": "https://stat1.deti-online.com/a/9SR6fWiI6hqclXnZogw8RQ/1528563228/files/skazki/skazki-kiplinga/vtoraja-kniga-dzhunglei-nashestvie-dzhunglei.mp3"
  },
  {
    "duration": "13:14",
    "title": "Derevyannyy Orel",
    "orig_title": "\u0414\u0435\u0440\u0435\u0432\u044f\u043d\u043d\u044b\u0439 \u043e\u0440\u0435\u043b",
    "url": "https://stat2.deti-online.com/a/gAcKd6kXu25CZu24i1BNIg/1528543816/files/skazki/russkie-narodnye-skazki/derevyannyy-orel.mp3"
  },
  {
    "duration": "51:39",
    "title": "Ervaja Kniga Dzhunglei Tigr  Tigr ",
    "orig_title": "\u0422\u0438\u0433\u0440! \u0422\u0438\u0433\u0440!",
    "url": "https://stat2.deti-online.com/a/Y3apzcFriiTUKKHEAwXnmQ/1528551251/files/skazki/skazki-kiplinga/pervaja-kniga-dzhunglei-tigr!-tigr!.mp3"
  },
  {
    "duration": "06:58",
    "title": "Raz Dva Druzhno",
    "orig_title": "\u0420\u0430\u0437, \u0434\u0432\u0430 \u2014 \u0434\u0440\u0443\u0436\u043d\u043e!",
    "url": "https://stat2.deti-online.com/a/oW469UTXgdR315HP5vArqQ/1528546490/files/skazki/skazki-suteeva/raz-dva-druzhno.mp3"
  },
  {
    "duration": "04:56",
    "title": "Nahodchivost",
    "orig_title": "\u041d\u0430\u0445\u043e\u0434\u0447\u0438\u0432\u043e\u0441\u0442\u044c",
    "url": "https://stat1.deti-online.com/a/u5laHvHnX4Yt2R5RI1KPuw/1528545171/files/skazki/rasskazy-nosova/nahodchivost.mp3"
  },
  {
    "duration": "21:36",
    "title": "Devushka Dikarka",
    "orig_title": "\u0414\u0435\u0432\u0443\u0448\u043a\u0430-\u0434\u0438\u043a\u0430\u0440\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/nSIO0j6uSeHYX7q4Qzt6lQ/1528547965/files/skazki/skazki-bratev-grimm/devushka-dikarka.mp3"
  },
  {
    "duration": "04:38",
    "title": "Teremok2",
    "orig_title": "\u0422\u0435\u0440\u0435\u043c\u043e\u043a",
    "url": "https://stat2.deti-online.com/a/HNlJokebgaKTwXr9qN_Rig/1528538245/files/skazki/russkie-narodnye-skazki/teremok2.mp3"
  },
  {
    "duration": "00:54",
    "title": "Radost",
    "orig_title": "\u0420\u0430\u0434\u043e\u0441\u0442\u044c",
    "url": "https://stat1.deti-online.com/a/SENjPU0OdAA5KyHrcMKOrg/1528563001/files/skazki/skazki-chukovskogo/radost.mp3"
  },
  {
    "duration": "16:18",
    "title": "Nakazannaya Carevna",
    "orig_title": "\u041d\u0430\u043a\u0430\u0437\u0430\u043d\u043d\u0430\u044f \u0446\u0430\u0440\u0435\u0432\u043d\u0430",
    "url": "https://stat2.deti-online.com/a/z9o0jsFP3ejyEhITQsNydA/1528543449/files/skazki/russkie-narodnye-skazki/nakazannaya-carevna.mp3"
  },
  {
    "duration": "10:00",
    "title": "Devochka So Spichkami",
    "orig_title": "\u0414\u0435\u0432\u043e\u0447\u043a\u0430 \u0441\u043e \u0441\u043f\u0438\u0447\u043a\u0430\u043c\u0438",
    "url": "https://stat2.deti-online.com/a/QinzcTTpKrYcfEl6GBNXQQ/1528549111/files/skazki/skazki-andersena/devochka-so-spichkami.mp3"
  },
  {
    "duration": "07:15",
    "title": "Terem Teremok",
    "orig_title": "\u0422\u0435\u0440\u0435\u043c-\u0442\u0435\u0440\u0435\u043c\u043e\u043a",
    "url": "https://stat1.deti-online.com/a/1zYoRTesD5rjy4L_ApgJ1w/1528541809/files/skazki/skazki-suteeva/terem-teremok.mp3"
  },
  {
    "duration": "02:34",
    "title": "Utanica",
    "orig_title": "\u041f\u0443\u0442\u0430\u043d\u0438\u0446\u0430",
    "url": "https://stat1.deti-online.com/a/2BjKm5ajqOADIgLfgd5tjw/1528544267/files/skazki/skazki-chukovskogo/putanica.mp3"
  },
  {
    "duration": "06:17",
    "title": "Nado Imet Chuvstvo Yumora",
    "orig_title": "\u041d\u0430\u0434\u043e \u0438\u043c\u0435\u0442\u044c \u0447\u0443\u0432\u0441\u0442\u0432\u043e \u044e\u043c\u043e\u0440\u0430",
    "url": "https://stat2.deti-online.com/a/JwrBClQ1oScPxRXntByZ3w/1528547336/files/skazki/rasskazy-dragunskogo/nado-imet-chuvstvo-yumora.mp3"
  },
  {
    "duration": "16:52",
    "title": "Devochka Na Share",
    "orig_title": "\u0414\u0435\u0432\u043e\u0447\u043a\u0430 \u043d\u0430 \u0448\u0430\u0440\u0435",
    "url": "https://stat2.deti-online.com/a/cfe0Kvh-iCBC4pp2drfp6Q/1528540513/files/skazki/rasskazy-dragunskogo/devochka-na-share.mp3"
  },
  {
    "duration": "37:53",
    "title": "Ten",
    "orig_title": "\u0422\u0435\u043d\u044c",
    "url": "https://stat2.deti-online.com/a/wAD7krEDQcQ_9zicEcdyZQ/1528557458/files/skazki/skazki-andersena/ten.mp3"
  },
  {
    "duration": "05:04",
    "title": "Ryatki",
    "orig_title": "\u041f\u0440\u044f\u0442\u043a\u0438",
    "url": "https://stat2.deti-online.com/a/YfwxaS2PCUtMgI3fEzxh9A/1528545187/files/skazki/rasskazy-nosova/pryatki.mp3"
  },
  {
    "duration": "20:46",
    "title": "Eri Poppins 8",
    "orig_title": "\u0413\u043b\u0430\u0432\u0430 1. \u0412\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439 \u0432\u0435\u0442\u0435\u0440",
    "url": "https://stat1.deti-online.com/a/wGTUMsC22-h93UeG-LiDKQ/1528540188/files/skazki/sbornik-skazok/meri-poppins-8.mp3"
  },
  {
    "duration": "24:34",
    "title": "12 Mesjacev",
    "orig_title": "\u0414\u0432\u0435\u043d\u0430\u0434\u0446\u0430\u0442\u044c \u043c\u0435\u0441\u044f\u0446\u0435\u0432",
    "url": "https://stat2.deti-online.com/a/7Aw3b_tpELppfvCrVSDowg/1528539286/files/skazki/skazki-marshaka/12-mesjacev.mp3"
  },
  {
    "duration": "03:56",
    "title": "Telefon",
    "orig_title": "\u0422\u0435\u043b\u0435\u0444\u043e\u043d",
    "url": "https://stat2.deti-online.com/a/hqKWQwkZrXQxmi5R5-RUBw/1528540453/files/skazki/skazki-chukovskogo/telefon.mp3"
  },
  {
    "duration": "12:15",
    "title": "Rjanichnyi Domik",
    "orig_title": "\u041f\u0440\u044f\u043d\u0438\u0447\u043d\u044b\u0439 \u0434\u043e\u043c\u0438\u043a",
    "url": "https://stat1.deti-online.com/a/eMVSfJvUdF0vHOJAOd_wkA/1528542989/files/skazki/skazki-sharlja-perro/prjanichnyi-domik.mp3"
  },
  {
    "duration": "58:36",
    "title": "Yshonok Pik",
    "orig_title": "\u041c\u044b\u0448\u043e\u043d\u043e\u043a \u041f\u0438\u043a",
    "url": "https://stat2.deti-online.com/a/wDfn6xIayASHoJ8mnzzw9A/1528540176/files/skazki/rasskazy-bianki/myshonok-pik.mp3"
  },
  {
    "duration": "17:22",
    "title": "Dvenadcat Bratev",
    "orig_title": "\u0414\u0432\u0435\u043d\u0430\u0434\u0446\u0430\u0442\u044c \u0431\u0440\u0430\u0442\u044c\u0435\u0432",
    "url": "https://stat2.deti-online.com/a/-6XYEDJ1S_H193AYyWk3Tw/1528553271/files/skazki/skazki-bratev-grimm/dvenadcat-bratev.mp3"
  },
  {
    "duration": "05:59",
    "title": "Tarakanishe",
    "orig_title": "\u0422\u0430\u0440\u0430\u043a\u0430\u043d\u0438\u0449\u0435",
    "url": "https://stat1.deti-online.com/a/ZvP_HdukjPVv7A4-7z1KfA/1528540182/files/skazki/skazki-chukovskogo/tarakanishe.mp3"
  },
  {
    "duration": "05:47",
    "title": "Rofessor Kislyh Schey",
    "orig_title": "\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u043e\u0440 \u043a\u0438\u0441\u043b\u044b\u0445 \u0449\u0435\u0439",
    "url": "https://stat1.deti-online.com/a/3hOsnBkYkz6CMrEcF50IJw/1528547884/files/skazki/rasskazy-dragunskogo/professor-kislyh-schey.mp3"
  },
  {
    "duration": "03:24",
    "title": "Yshonok I Karandash",
    "orig_title": "\u041c\u044b\u0448\u043e\u043d\u043e\u043a \u0438 \u043a\u0430\u0440\u0430\u043d\u0434\u0430\u0448",
    "url": "https://stat1.deti-online.com/a/b3s62isFSCnBFSs89TbMPw/1528542126/files/skazki/skazki-suteeva/myshonok-i-karandash.mp3"
  },
  {
    "duration": "10:00",
    "title": "Dvadcat Let Pod Krovatyu",
    "orig_title": "\u0414\u0432\u0430\u0434\u0446\u0430\u0442\u044c \u043b\u0435\u0442 \u043f\u043e\u0434 \u043a\u0440\u043e\u0432\u0430\u0442\u044c\u044e",
    "url": "https://stat1.deti-online.com/a/Or6R2N0tA5ANfW61jaOeJg/1528544720/files/skazki/rasskazy-dragunskogo/dvadcat-let-pod-krovatyu.mp3"
  },
  {
    "duration": "06:37",
    "title": "Taynoe Stanovitsya Yavny",
    "orig_title": "\u0422\u0430\u0439\u043d\u043e\u0435 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u044f\u0432\u043d\u044b\u043c",
    "url": "https://stat2.deti-online.com/a/XRJwzXtcmiFagtUE2ipwpA/1528540522/files/skazki/rasskazy-dragunskogo/taynoe-stanovitsya-yavnym.mp3"
  },
  {
    "duration": "06:45",
    "title": "Ro Hrabrogo Zaica Dlinnye Ushi Kosye Glaza Korotkii Hvost",
    "orig_title": "\u041f\u0440\u043e \u0445\u0440\u0430\u0431\u0440\u043e\u0433\u043e \u0417\u0430\u0439\u0446\u0430-\u0434\u043b\u0438\u043d\u043d\u044b\u0435 \u0443\u0448\u0438, \u043a\u043e\u0441\u044b\u0435 \u0433\u043b\u0430\u0437\u0430, \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u0445\u0432\u043e\u0441\u0442",
    "url": "https://stat1.deti-online.com/a/M66t2KvKhLl7LPfF2kr9Uw/1528544616/files/skazki/skazki-mamina-sibirjaka/pro-hrabrogo-zaica-dlinnye-ushi-kosye-glaza-korotkii-hvost.mp3"
  },
  {
    "duration": "01:07",
    "title": "Yshka",
    "orig_title": "\u041c\u044b\u0448\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/m1AnC3OPrxJF6Fc_zg0hIg/1528570862/files/skazki/skazki-tolstogo/myshka.mp3"
  },
  {
    "duration": "05:04",
    "title": "Dva Moroza",
    "orig_title": "\u0414\u0432\u0430 \u043c\u043e\u0440\u043e\u0437\u0430",
    "url": "https://stat1.deti-online.com/a/LkkxBsim9qPNzKDOWe3yBQ/1528550219/files/skazki/russkie-narodnye-skazki/dva-moroza.mp3"
  },
  {
    "duration": "09:37",
    "title": "Schastlivoe Semeistvo",
    "orig_title": "\u0421\u0447\u0430\u0441\u0442\u043b\u0438\u0432\u043e\u0435 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u043e",
    "url": "https://stat2.deti-online.com/a/BqvtuaIKE0trN970W4Sj4g/1528550016/files/skazki/skazki-andersena/schastlivoe-semeistvo.mp3"
  },
  {
    "duration": "46:17",
    "title": "Ro Slavnogo Carja Goroha",
    "orig_title": "\u041f\u0440\u043e \u0441\u043b\u0430\u0432\u043d\u043e\u0433\u043e \u0446\u0430\u0440\u044f \u0413\u043e\u0440\u043e\u0445\u0430",
    "url": "https://stat1.deti-online.com/a/xxf40-mm21-pr7GaI_c9ag/1528560152/files/skazki/skazki-mamina-sibirjaka/pro-slavnogo-carja-goroha.mp3"
  },
  {
    "duration": "07:53",
    "title": "Y Ischem Klyaksu",
    "orig_title": "\u041c\u044b \u0438\u0449\u0435\u043c \u043a\u043b\u044f\u043a\u0441\u0443",
    "url": "https://stat1.deti-online.com/a/yHcOi3wKdum1-d3TtNzp0g/1528547527/files/skazki/skazki-suteeva/my-ischem-klyaksu.mp3"
  },
  {
    "duration": "36:25",
    "title": "Dva Ivana Soldatskih Syna",
    "orig_title": "\u0414\u0432\u0430 \u0418\u0432\u0430\u043d\u0430-\u0441\u043e\u043b\u0434\u0430\u0442\u0441\u043a\u0438\u0445 \u0441\u044b\u043d\u0430",
    "url": "https://stat2.deti-online.com/a/kLPo-hoNeDzl2Int74mk4A/1528547685/files/skazki/russkie-narodnye-skazki/dva-ivana-soldatskih-syna.mp3"
  },
  {
    "duration": "18:20",
    "title": "Sunduk Samolet",
    "orig_title": "\u0421\u0443\u043d\u0434\u0443\u043a-\u0441\u0430\u043c\u043e\u043b\u0451\u0442",
    "url": "https://stat1.deti-online.com/a/Dv2Vp2xsc5V1C4ssp1EQiQ/1528545499/files/skazki/skazki-andersena/sunduk-samolet.mp3"
  },
  {
    "duration": "19:01",
    "title": "Ro Repku",
    "orig_title": "\u041f\u0440\u043e \u0440\u0435\u043f\u043a\u0443",
    "url": "https://stat2.deti-online.com/a/u8ntjae4QNN8jrC2d74byQ/1528541949/files/skazki/rasskazy-nosova/pro-repku.mp3"
  },
  {
    "duration": "04:10",
    "title": "Uha Cokotuha",
    "orig_title": "\u041c\u0443\u0445\u0430-\u0426\u043e\u043a\u043e\u0442\u0443\u0445\u0430",
    "url": "https://stat2.deti-online.com/a/sPRbdZb7o-qVE1lWCA2vyA/1528538948/files/skazki/skazki-chukovskogo/muha-cokotuha.mp3"
  },
  {
    "duration": "12:41",
    "title": "Gusinoe Gorlyshko",
    "orig_title": "\u0413\u0443\u0441\u0438\u043d\u043e\u0435 \u0433\u043e\u0440\u043b\u044b\u0448\u043a\u043e",
    "url": "https://stat1.deti-online.com/a/ol1XRejrrDkv90CkYoQyRA/1528546685/files/skazki/rasskazy-dragunskogo/gusinoe-gorlyshko.mp3"
  },
  {
    "duration": "13:20",
    "title": "Stoptannye Tufelki",
    "orig_title": "\u0421\u0442\u043e\u043f\u0442\u0430\u043d\u043d\u044b\u0435 \u0442\u0443\u0444\u0435\u043b\u044c\u043a\u0438",
    "url": "https://stat2.deti-online.com/a/BAkIViljpNcb7ZB6V3PKlg/1528543333/files/skazki/skazki-bratev-grimm/stoptannye-tufelki.mp3"
  },
  {
    "duration": "11:58",
    "title": "Ro Komara Komarovicha Dlinnyi Nos I Pro Mohnatogo Mishu Korotkii Hvost",
    "orig_title": "\u041f\u0440\u043e \u041a\u043e\u043c\u0430\u0440\u0430 \u041a\u043e\u043c\u0430\u0440\u043e\u0432\u0438\u0447\u0430-\u0434\u043b\u0438\u043d\u043d\u044b\u0439 \u043d\u043e\u0441 \u0438 \u043f\u0440\u043e \u043c\u043e\u0445\u043d\u0430\u0442\u043e\u0433\u043e \u041c\u0438\u0448\u0443-\u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u0445\u0432\u043e\u0441\u0442",
    "url": "https://stat2.deti-online.com/a/j_SKGfigpjNvPV8aZLqRYg/1528552527/files/skazki/skazki-mamina-sibirjaka/pro-komara-komarovicha-dlinnyi-nos-i-pro-mohnatogo-mishu-korotkii-hvost.mp3"
  },
  {
    "duration": "03:03",
    "title": "Uravey",
    "orig_title": "\u041c\u0443\u0440\u0430\u0432\u0435\u0439",
    "url": "https://stat2.deti-online.com/a/VSu7vrXth1VPY0iqp_3bqw/1528566947/files/skazki/skazki-tolstogo/muravey.mp3"
  },
  {
    "duration": "03:37",
    "title": "Gusi Lebedi",
    "orig_title": "\u0413\u0443\u0441\u0438-\u043b\u0435\u0431\u0435\u0434\u0438",
    "url": "https://stat1.deti-online.com/a/t6ro6h2WI8gXYV6m0Lznlw/1528538573/files/skazki/russkie-narodnye-skazki/gusi-lebedi.mp3"
  },
  {
    "duration": "28:03",
    "title": "Stolik Sam Nakroysya Zolotoy Osel I Dubinka Iz Meshka",
    "orig_title": "\u0421\u0442\u043e\u043b\u0438\u043a, \u0441\u0430\u043c \u043d\u0430\u043a\u0440\u043e\u0439\u0441\u044f, \u0437\u043e\u043b\u043e\u0442\u043e\u0439 \u043e\u0441\u0435\u043b \u0438 \u0434\u0443\u0431\u0438\u043d\u043a\u0430 \u0438\u0437 \u043c\u0435\u0448\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/lu0UiwJkCcRL2R07kX5Itg/1528550617/files/skazki/skazki-bratev-grimm/stolik-sam-nakroysya-zolotoy-osel-i-dubinka-iz-meshka.mp3"
  },
  {
    "duration": "09:20",
    "title": "Ro Kozjavochku",
    "orig_title": "\u041f\u0440\u043e \u041a\u043e\u0437\u044f\u0432\u043e\u0447\u043a\u0443",
    "url": "https://stat1.deti-online.com/a/n7yJZo0D9jS5td5U9Tf4Cw/1528549013/files/skazki/skazki-mamina-sibirjaka/pro-kozjavochku.mp3"
  },
  {
    "duration": "02:34",
    "title": "Udrec",
    "orig_title": "\u041c\u0443\u0434\u0440\u0435\u0446",
    "url": "https://stat1.deti-online.com/a/NW-2ThjMzmhdqSFVy_TRdQ/1528573275/files/skazki/skazki-tolstogo/mudrec.mp3"
  },
  {
    "duration": "04:17",
    "title": "Gusak",
    "orig_title": "\u0413\u0443\u0441\u0430\u043a",
    "url": "https://stat2.deti-online.com/a/XcRX9i8gKoYINClJyI4eug/1528568969/files/skazki/skazki-tolstogo/gusak.mp3"
  },
  {
    "duration": "12:45",
    "title": "Stoikii Olovjannyi Soldatik",
    "orig_title": "\u0421\u0442\u043e\u0439\u043a\u0438\u0439 \u043e\u043b\u043e\u0432\u044f\u043d\u043d\u044b\u0439 \u0441\u043e\u043b\u0434\u0430\u0442\u0438\u043a",
    "url": "https://stat2.deti-online.com/a/iBY77EnyG-8qFPDEMphInQ/1528541114/files/skazki/skazki-andersena/stoikii-olovjannyi-soldatik.mp3"
  },
  {
    "duration": "03:26",
    "title": "Oya Rodina",
    "orig_title": "\u041c\u043e\u044f \u0440\u043e\u0434\u0438\u043d\u0430",
    "url": "https://stat2.deti-online.com/a/8eIzg_w5JlS4F54GNFMqxg/1528558492/files/skazki/rasskazy-prishvina/moya-rodina.mp3"
  },
  {
    "duration": "46:33",
    "title": "Karlik Nos 2",
    "orig_title": "\u041a\u0430\u0440\u043b\u0438\u043a \u041d\u043e\u0441",
    "url": "https://stat2.deti-online.com/a/CSpcvqTmd_tigg5gc8wL_g/1528538118/files/skazki/skazki-gaufa/karlik-nos-2.mp3"
  },
  {
    "duration": "08:14",
    "title": "Otogonki Po Otvesnoy Stene",
    "orig_title": "\u041c\u043e\u0442\u043e\u0433\u043e\u043d\u043a\u0438 \u043f\u043e \u043e\u0442\u0432\u0435\u0441\u043d\u043e\u0439 \u0441\u0442\u0435\u043d\u0435",
    "url": "https://stat2.deti-online.com/a/233PEAV66ItrAgpW3moKig/1528548773/files/skazki/rasskazy-dragunskogo/motogonki-po-otvesnoy-stene.mp3"
  },
  {
    "duration": "27:50",
    "title": "Karas Idealist",
    "orig_title": "\u041a\u0430\u0440\u0430\u0441\u044c-\u0438\u0434\u0435\u0430\u043b\u0438\u0441\u0442",
    "url": "https://stat1.deti-online.com/a/oYDCalMdCpzUYraFWMrXNQ/1528566988/files/skazki/skazki-saltykova-schedrina/karas-idealist.mp3"
  },
  {
    "duration": "17:16",
    "title": "Orskoy Car I Vasilisa Premudraya",
    "orig_title": "\u041c\u043e\u0440\u0441\u043a\u043e\u0439 \u0446\u0430\u0440\u044c \u0438 \u0412\u0430\u0441\u0438\u043b\u0438\u0441\u0430 \u041f\u0440\u0435\u043c\u0443\u0434\u0440\u0430\u044f",
    "url": "https://stat1.deti-online.com/a/CGtwDrfqASAeg90OIPCheQ/1528544180/files/skazki/russkie-narodnye-skazki/morskoy-car-i-vasilisa-premudraya.mp3"
  },
  {
    "duration": "12:28",
    "title": "Karasik",
    "orig_title": "\u041a\u0430\u0440\u0430\u0441\u0438\u043a",
    "url": "https://stat1.deti-online.com/a/ykhXfP0x8PqIJREMlPb-Gw/1528540222/files/skazki/rasskazy-nosova/karasik.mp3"
  },
  {
    "duration": "05:08",
    "title": "Orozko",
    "orig_title": "\u041c\u043e\u0440\u043e\u0437\u043a\u043e",
    "url": "https://stat1.deti-online.com/a/EJwbBS5ScAUY_Xwlo0ax0Q/1528539473/files/skazki/russkie-narodnye-skazki/morozko.mp3"
  },
  {
    "duration": "04:09",
    "title": "Kapriznaya Koshka",
    "orig_title": "\u041a\u0430\u043f\u0440\u0438\u0437\u043d\u0430\u044f \u043a\u043e\u0448\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/y7CbGohBiZ5SHID2wfEQ6A/1528542081/files/skazki/skazki-suteeva/kapriznaya-koshka.mp3"
  },
  {
    "duration": "18:55",
    "title": "Oroz Ivanovich",
    "orig_title": "\u041c\u043e\u0440\u043e\u0437 \u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447",
    "url": "https://stat2.deti-online.com/a/Z_8gptb2npYbRA3u5TJ6mA/1528546201/files/skazki/skazki-odoevskogo/moroz-ivanovich.mp3"
  },
  {
    "duration": "04:27",
    "title": "Kaplja Vody",
    "orig_title": "\u041a\u0430\u043f\u043b\u044f \u0432\u043e\u0434\u044b",
    "url": "https://stat1.deti-online.com/a/VhdKHipiOz7VGgLJdvLRVw/1528566802/files/skazki/skazki-andersena/kaplja-vody.mp3"
  },
  {
    "duration": "02:50",
    "title": "Oroz I Zajac",
    "orig_title": "\u041c\u043e\u0440\u043e\u0437 \u0438 \u0437\u0430\u044f\u0446",
    "url": "https://stat2.deti-online.com/a/bk3eoIqN66IjFU47JtxQMw/1528547303/files/skazki/russkie-narodnye-skazki/moroz-i-zajac.mp3"
  },
  {
    "duration": "26:49",
    "title": "Kalif Aist",
    "orig_title": "\u041a\u0430\u043b\u0438\u0444 \u0430\u0438\u0441\u0442",
    "url": "https://stat1.deti-online.com/a/sDtwAeswD7TPzfvCZ0gCgg/1528544115/files/skazki/skazki-gaufa/kalif-aist.mp3"
  },
  {
    "duration": "05:34",
    "title": "Oidodyr",
    "orig_title": "\u041c\u043e\u0439\u0434\u043e\u0434\u044b\u0440",
    "url": "https://stat1.deti-online.com/a/aw3pTuTcOEEyRCNGXB_VHw/1528538578/files/skazki/skazki-chukovskogo/moidodyr.mp3"
  },
  {
    "duration": "03:42",
    "title": "Kak Sobaka Druga Iskala",
    "orig_title": "\u041a\u0430\u043a \u0441\u043e\u0431\u0430\u043a\u0430 \u0434\u0440\u0443\u0433\u0430 \u0438\u0441\u043a\u0430\u043b\u0430",
    "url": "https://stat2.deti-online.com/a/dxymEkftbTGm7lY4uulITw/1528545416/files/skazki/russkie-narodnye-skazki/kak-sobaka-druga-iskala.mp3"
  },
  {
    "duration": "15:06",
    "title": "Ishkina Kasha",
    "orig_title": "\u041c\u0438\u0448\u043a\u0438\u043d\u0430 \u043a\u0430\u0448\u0430",
    "url": "https://stat1.deti-online.com/a/PFfge7TPXk9Qlll4jaview/1528539811/files/skazki/rasskazy-nosova/mishkina-kasha.mp3"
  },
  {
    "duration": "14:26",
    "title": "Kak Muravishka Domoy Speshil",
    "orig_title": "\u041a\u0430\u043a \u043c\u0443\u0440\u0430\u0432\u044c\u0438\u0448\u043a\u0430 \u0434\u043e\u043c\u043e\u0439 \u0441\u043f\u0435\u0448\u0438\u043b",
    "url": "https://stat1.deti-online.com/a/652rsS9c0Qu6u9bfRHYm4g/1528541890/files/skazki/rasskazy-bianki/kak-muravishka-domoy-speshil.mp3"
  },
  {
    "duration": "12:23",
    "title": "Eshok Yablok",
    "orig_title": "\u041c\u0435\u0448\u043e\u043a \u044f\u0431\u043b\u043e\u043a",
    "url": "https://stat2.deti-online.com/a/ZLRYqqHlhQ6efv1yuOXXJg/1528539149/files/skazki/skazki-suteeva/meshok-yablok.mp3"
  },
  {
    "duration": "01:23",
    "title": "Kak Lisa Uchilas Letat",
    "orig_title": "\u041a\u0430\u043a \u043b\u0438\u0441\u0430 \u0443\u0447\u0438\u043b\u0430\u0441\u044c \u043b\u0435\u0442\u0430\u0442\u044c",
    "url": "https://stat2.deti-online.com/a/I2CtuxIwGXeJb_nBK2Cdlw/1528544168/files/skazki/russkie-narodnye-skazki/kak-lisa-uchilas-letat.mp3"
  },
  {
    "duration": "02:59",
    "title": "Erin",
    "orig_title": "\u041c\u0435\u0440\u0438\u043d",
    "url": "https://stat2.deti-online.com/a/K5OyPOISfxf74hd_kPD4jQ/1528570407/files/skazki/skazki-tolstogo/merin.mp3"
  },
  {
    "duration": "02:06",
    "title": "Kak Lisa S Ovcoi Volka Nakazali",
    "orig_title": "\u041a\u0430\u043a \u043b\u0438\u0441\u0430 \u0441 \u043e\u0432\u0446\u043e\u0439 \u0432\u043e\u043b\u043a\u0430 \u043d\u0430\u043a\u0430\u0437\u0430\u043b\u0438",
    "url": "https://stat2.deti-online.com/a/1m7nAzcnC3Z-wMLYS2HqHA/1528548497/files/skazki/russkie-narodnye-skazki/kak-lisa-s-ovcoi-volka-nakazali.mp3"
  },
  {
    "duration": "04:38",
    "title": "Ena",
    "orig_title": "\u041c\u0435\u043d\u0430",
    "url": "https://stat1.deti-online.com/a/TSBIAcgLjVT8WPjsmIS-JA/1528552722/files/skazki/russkie-narodnye-skazki/mena.mp3"
  },
  {
    "duration": "52:11",
    "title": "Vtoraja Kniga Dzhunglei Kak V Dzhungli Prishyol Strah",
    "orig_title": "\u041a\u0430\u043a \u0432 \u0434\u0436\u0443\u043d\u0433\u043b\u0438 \u043f\u0440\u0438\u0448\u0451\u043b \u0441\u0442\u0440\u0430\u0445",
    "url": "https://stat2.deti-online.com/a/Kl4v-ilrF271hTuK8EaSFA/1528558201/files/skazki/skazki-kiplinga/vtoraja-kniga-dzhunglei-kak-v-dzhungli-prishyol-strah.mp3"
  },
  {
    "duration": "31:03",
    "title": "Edved Na Voevodstve",
    "orig_title": "\u041c\u0435\u0434\u0432\u0435\u0434\u044c \u043d\u0430 \u0432\u043e\u0435\u0432\u043e\u0434\u0441\u0442\u0432\u0435",
    "url": "https://stat1.deti-online.com/a/6gDfMHXSzvfZFMcnFzxjNQ/1528566350/files/skazki/skazki-saltykova-schedrina/medved-na-voevodstve.mp3"
  },
  {
    "duration": "07:07",
    "title": "Istinnaja Pravda",
    "orig_title": "\u0418\u0441\u0442\u0438\u043d\u043d\u0430\u044f \u043f\u0440\u0430\u0432\u0434\u0430",
    "url": "https://stat1.deti-online.com/a/BP3Xvxhl2JIGTQX6gQMNvA/1528566807/files/skazki/skazki-andersena/istinnaja-pravda.mp3"
  },
  {
    "duration": "03:01",
    "title": "Asha I Myshki",
    "orig_title": "\u041c\u0430\u0448\u0430 \u0438 \u043c\u044b\u0448\u043a\u0438",
    "url": "https://stat1.deti-online.com/a/PncggHQa8tLNJROng4Mrpw/1528564951/files/skazki/skazki-tolstogo/masha-i-myshki.mp3"
  },
  {
    "duration": "14:57",
    "title": "Ilja Muromec I Solovei Razboinik",
    "orig_title": "\u0418\u043b\u044c\u044f \u041c\u0443\u0440\u043e\u043c\u0435\u0446 \u0438 \u0421\u043e\u043b\u043e\u0432\u0435\u0439 \u0440\u0430\u0437\u0431\u043e\u0439\u043d\u0438\u043a",
    "url": "https://stat1.deti-online.com/a/GgER0jIFDPZAOucXaURFMQ/1528539320/files/skazki/russkie-narodnye-skazki/ilja-muromec-i-solovei-razboinik.mp3"
  },
  {
    "duration": "06:11",
    "title": "Asha I Medved",
    "orig_title": "\u041c\u0430\u0448\u0430 \u0438 \u043c\u0435\u0434\u0432\u0435\u0434\u044c",
    "url": "https://stat1.deti-online.com/a/XwsO5sdgH3nLsd_wO--YdQ/1528538063/files/skazki/russkie-narodnye-skazki/masha-i-medved.mp3"
  },
  {
    "duration": "08:40",
    "title": "Izobretatel",
    "orig_title": "\u0418\u0437\u043e\u0431\u0440\u0435\u0442\u0430\u0442\u0435\u043b\u044c",
    "url": "https://stat2.deti-online.com/a/fjPqZz_NiIZnJDuEXEF3yg/1528551790/files/skazki/rasskazy-prishvina/izobretatel.mp3"
  },
  {
    "duration": "27:01",
    "title": "Arja Morevna",
    "orig_title": "\u041c\u0430\u0440\u044c\u044f \u041c\u043e\u0440\u0435\u0432\u043d\u0430",
    "url": "https://stat2.deti-online.com/a/mpdliwDlGi78qFXE6xqqEg/1528543316/files/skazki/russkie-narodnye-skazki/marja-morevna.mp3"
  },
  {
    "duration": "08:09",
    "title": "Ivanushka Durachok",
    "orig_title": "\u0418\u0432\u0430\u043d\u0443\u0448\u043a\u0430-\u0434\u0443\u0440\u0430\u0447\u043e\u043a",
    "url": "https://stat2.deti-online.com/a/tetqNRwPyO05E5fIwaGjPw/1528547507/files/skazki/russkie-narodnye-skazki/ivanushka-durachok.mp3"
  },
  {
    "duration": "13:24",
    "title": "Alchik S Palchik",
    "orig_title": "\u041c\u0430\u043b\u044c\u0447\u0438\u043a \u0441 \u043f\u0430\u043b\u044c\u0447\u0438\u043a",
    "url": "https://stat1.deti-online.com/a/Ai6GXqXiG7OOxV7OJovwRg/1528541231/files/skazki/skazki-sharlja-perro/malchik-s-palchik.mp3"
  },
  {
    "duration": "17:15",
    "title": "Ivan Carevich I Seryy Volk",
    "orig_title": "\u0418\u0432\u0430\u043d-\u0446\u0430\u0440\u0435\u0432\u0438\u0447 \u0438 \u0441\u0435\u0440\u044b\u0439 \u0432\u043e\u043b\u043a",
    "url": "https://stat2.deti-online.com/a/ubViTDGAGpIhwnl2nJcgyg/1528539518/files/skazki/russkie-narodnye-skazki/ivan-carevich-i-seryy-volk.mp3"
  },
  {
    "duration": "1:12",
    "title": "Alenkiy Princ 2",
    "orig_title": "\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u043f\u0440\u0438\u043d\u0446",
    "url": "https://stat2.deti-online.com/a/-YMucgMAtesnYRdYpoW8og/1528538749/files/skazki/sbornik-skazok/malenkiy-princ-2.mp3"
  },
  {
    "duration": "25:05",
    "title": "Ivan Krestjanskii Syn I Chudo Yudo",
    "orig_title": "\u0418\u0432\u0430\u043d-\u043a\u0440\u0435\u0441\u0442\u044c\u044f\u043d\u0441\u043a\u0438\u0439 \u0441\u044b\u043d \u0438 \u0447\u0443\u0434\u043e-\u044e\u0434\u043e",
    "url": "https://stat2.deti-online.com/a/DY12LOrIU9pzyTFXl35A5w/1528539099/files/skazki/russkie-narodnye-skazki/ivan-krestjanskii-syn-i-chudo-yudo.mp3"
  },
  {
    "duration": "33:44",
    "title": "Alenkii Muk",
    "orig_title": "\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u041c\u0443\u043a",
    "url": "https://stat1.deti-online.com/a/V_ls_LrkcfpqLRvXn96waQ/1528541026/files/skazki/skazki-gaufa/malenkii-muk.mp3"
  },
  {
    "duration": "21:00",
    "title": "Zolushka Ili Hrustalnaja Tufelka",
    "orig_title": "\u0417\u043e\u043b\u0443\u0448\u043a\u0430 \u0438\u043b\u0438 \u0445\u0440\u0443\u0441\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u0442\u0443\u0444\u0435\u043b\u044c\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/UhoRwyibCDOW18VGjnpt_A/1528538479/files/skazki/skazki-sharlja-perro/zolushka-ili-hrustalnaja-tufelka.mp3"
  },
  {
    "duration": "27:52",
    "title": "Alenkiy Klaus I Bolshoy Klaus",
    "orig_title": "\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u041a\u043b\u0430\u0443\u0441 \u0438 \u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u041a\u043b\u0430\u0443\u0441",
    "url": "https://stat2.deti-online.com/a/kECkbCTqRhhtqMEHqf6rdQ/1528556641/files/audioskazki/malenkiy-klaus-i-bolshoy-klaus.mp3"
  },
  {
    "duration": "01:58",
    "title": "Zolotoi Topor",
    "orig_title": "\u0417\u043e\u043b\u043e\u0442\u043e\u0439 \u0442\u043e\u043f\u043e\u0440",
    "url": "https://stat1.deti-online.com/a/Eo3tOf0msG0JEtNMoRF0fQ/1528543995/files/skazki/russkie-narodnye-skazki/zolotoi-topor.mp3"
  },
  {
    "duration": "05:39",
    "title": "Alenkie Chelovechki",
    "orig_title": "\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0435 \u0447\u0435\u043b\u043e\u0432\u0435\u0447\u043a\u0438",
    "url": "https://stat1.deti-online.com/a/Q3dLzy17rH0k8tGJJbjyFg/1528545655/files/skazki/skazki-bratev-grimm/malenkie-chelovechki.mp3"
  },
  {
    "duration": "02:07",
    "title": "Zolotoy Lug",
    "orig_title": "\u0417\u043e\u043b\u043e\u0442\u043e\u0439 \u043b\u0443\u0433",
    "url": "https://stat1.deti-online.com/a/0O-Y0fmNFkKj7YswI3CP9A/1528565158/files/skazki/rasskazy-prishvina/zolotoy-lug.mp3"
  },
  {
    "duration": "12:51",
    "title": "Lyagushka Puteshestvennica",
    "orig_title": "\u041b\u044f\u0433\u0443\u0448\u043a\u0430-\u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0438\u0446\u0430",
    "url": "https://stat1.deti-online.com/a/4RQzhU20JRS0JqzNrfIDdA/1528543139/files/skazki/skazki-garshina/lyagushka-puteshestvennica.mp3"
  },
  {
    "duration": "02:35",
    "title": "Buratino 29",
    "orig_title": "\u0413\u043b\u0430\u0432\u0430 1",
    "url": "https://stat2.deti-online.com/a/kTDSHk-wPPOjzT7Zps6Obg/1528538147/files/skazki/skazki-tolstogo/buratino-29.mp3"
  },
  {
    "duration": "03:23",
    "title": "Lisichkin Hleb",
    "orig_title": "\u041b\u0438\u0441\u0438\u0447\u043a\u0438\u043d \u0445\u043b\u0435\u0431",
    "url": "https://stat1.deti-online.com/a/gKjvLai4WNVKGqw-k4gQsg/1528558024/files/skazki/rasskazy-prishvina/lisichkin-hleb.mp3"
  },
  {
    "duration": "12:08",
    "title": "Zolotoy Gus",
    "orig_title": "\u0417\u043e\u043b\u043e\u0442\u043e\u0439 \u0433\u0443\u0441\u044c",
    "url": "https://stat2.deti-online.com/a/1iadI4ljMRGGnxq6V-EZ0w/1528545115/files/skazki/skazki-bratev-grimm/zolotoy-gus.mp3"
  },
  {
    "duration": "02:09",
    "title": "Lisa I Teterev",
    "orig_title": "\u041b\u0438\u0441\u0430 \u0438 \u0442\u0435\u0442\u0435\u0440\u0435\u0432",
    "url": "https://stat2.deti-online.com/a/esihaJfAnbm3iDv7rUN0NQ/1528555974/files/skazki/russkie-narodnye-skazki/lisa-i-teterev.mp3"
  },
  {
    "duration": "4:06",
    "title": "Zolotoy Gorshok",
    "orig_title": "\u0417\u043e\u043b\u043e\u0442\u043e\u0439 \u0433\u043e\u0440\u0448\u043e\u043a",
    "url": "https://stat1.deti-online.com/a/yYd4379IEohbdnrBAPAVNw/1528544806/files/skazki/skazki-gofmana/zolotoy-gorshok.mp3"
  },
  {
    "duration": "09:08",
    "title": "Lisa I Medved",
    "orig_title": "\u041b\u0438\u0441\u0430 \u0438 \u043c\u0435\u0434\u0432\u0435\u0434\u044c",
    "url": "https://stat2.deti-online.com/a/rIW8f4AlvC1yxEhgUrSNfg/1528545993/files/skazki/russkie-narodnye-skazki/lisa-i-medved.mp3"
  },
  {
    "duration": "08:08",
    "title": "Zimove Zverei",
    "orig_title": "\u0417\u0438\u043c\u043e\u0432\u044c\u0435 \u0437\u0432\u0435\u0440\u0435\u0439",
    "url": "https://stat2.deti-online.com/a/8vve3yz6XJSuKRyrj7HYNQ/1528542981/files/skazki/russkie-narodnye-skazki/zimove-zverei.mp3"
  },
  {
    "duration": "20:30",
    "title": "Ro Voronushku Chyornuyu Golovushku I Zhyoltuyu Ptichku Kanareiku",
    "orig_title": "\u041f\u0440\u043e \u0412\u043e\u0440\u043e\u043d\u0443\u0448\u043a\u0443-\u0447\u0451\u0440\u043d\u0443\u044e \u0433\u043e\u043b\u043e\u0432\u0443\u0448\u043a\u0443 \u0438 \u0436\u0451\u043b\u0442\u0443\u044e \u043f\u0442\u0438\u0447\u043a\u0443 \u041a\u0430\u043d\u0430\u0440\u0435\u0439\u043a\u0443",
    "url": "https://stat2.deti-online.com/a/hNlLwiofm0gDDsRq3b-FWQ/1528550574/files/skazki/skazki-mamina-sibirjaka/pro-voronushku-chyornuyu-golovushku-i-zhyoltuyu-ptichku-kanareiku.mp3"
  },
  {
    "duration": "17:19",
    "title": "Ro Vorobja Vorobeicha Ersha Ershovicha I Vesyologo Trubochista Jashu",
    "orig_title": "\u041f\u0440\u043e \u0412\u043e\u0440\u043e\u0431\u044c\u044f \u0412\u043e\u0440\u043e\u0431\u0435\u0438\u0447\u0430, \u0415\u0440\u0448\u0430 \u0415\u0440\u0448\u043e\u0432\u0438\u0447\u0430 \u0438 \u0432\u0435\u0441\u0451\u043b\u043e\u0433\u043e \u0442\u0440\u0443\u0431\u043e\u0447\u0438\u0441\u0442\u0430 \u042f\u0448\u0443",
    "url": "https://stat1.deti-online.com/a/tTYGyI_2Q9nGCNa3Iyr8hQ/1528553712/files/skazki/skazki-mamina-sibirjaka/pro-vorobja-vorobeicha-ersha-ershovicha-i-vesyologo-trubochista-jashu.mp3"
  },
  {
    "duration": "03:57",
    "title": "Ro Begemota Kotoryy Boyalsya Privivok",
    "orig_title": "\u041f\u0440\u043e \u0411\u0435\u0433\u0435\u043c\u043e\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u043e\u044f\u043b\u0441\u044f \u043f\u0440\u0438\u0432\u0438\u0432\u043e\u043a",
    "url": "https://stat1.deti-online.com/a/deXF0EuJSfe4AKEY-AFWhg/1528540487/files/skazki/skazki-suteeva/pro-begemota-kotoryy-boyalsya-privivok.mp3"
  },
  {
    "duration": "03:10",
    "title": "Ro Babushku Starushku",
    "orig_title": "\u041f\u0440\u043e \u0431\u0430\u0431\u0443\u0448\u043a\u0443 \u0441\u0442\u0430\u0440\u0443\u0448\u043a\u0443",
    "url": "https://stat1.deti-online.com/a/DutAcK5PYs3-HLS2k01_dg/1528551582/files/skazki/russkie-narodnye-skazki/pro-babushku-starushku.mp3"
  },
  {
    "duration": "01:43",
    "title": "Riskazka",
    "orig_title": "\u041f\u0440\u0438\u0441\u043a\u0430\u0437\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/6CoqJOTp6eNGjJD97zLKRQ/1528570771/files/skazki/skazki-mamina-sibirjaka/priskazka.mp3"
  },
  {
    "duration": "03:21",
    "title": "Rincessa Na Goroshine",
    "orig_title": "\u041f\u0440\u0438\u043d\u0446\u0435\u0441\u0441\u0430 \u043d\u0430 \u0433\u043e\u0440\u043e\u0448\u0438\u043d\u0435",
    "url": "https://stat1.deti-online.com/a/Kdpl7aH9ahe5nHs6Tij-wA/1528541050/files/skazki/skazki-andersena/princessa-na-goroshine.mp3"
  },
  {
    "duration": "02:48",
    "title": "Rinc I Nischiy 34",
    "orig_title": "\u0413\u043b\u0430\u0432\u0430 1",
    "url": "https://stat1.deti-online.com/a/YhT_QuW6tTkIGmMXbfRqUg/1528540699/files/skazki/romany-marka-tvena/princ-i-nischiy-34.mp3"
  },
  {
    "duration": "20:09",
    "title": "Riklyucheniya Toma Soyera 34",
    "orig_title": "\u0413\u043b\u0430\u0432\u0430 1",
    "url": "https://stat2.deti-online.com/a/p9Npd-wK2KciE6rUYOAi7g/1528539001/files/skazki/romany-marka-tvena/priklyucheniya-toma-soyera-34.mp3"
  },
  {
    "duration": "11:48",
    "title": "Riklyucheniya Sindbada Morehoda ",
    "orig_title": "\u041f\u0435\u0440\u0432\u043e\u0435 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u043a \u043e\u0441\u0442\u0440\u043e\u0432\u0443, \u043e\u043a\u0430\u0437\u0430\u0432\u0448\u0435\u043c\u0443\u0441\u044f \u043a\u0438\u0442\u043e\u043c",
    "url": "https://stat1.deti-online.com/a/iV9603kJd0wtp2tM5hnIHQ/1528539720/files/skazki/arabskie-skazki/priklyucheniya-sindbada-morehoda-3.mp3"
  },
  {
    "duration": "04:13",
    "title": "Riklyucheniya Pinokkio Istoriya Derevyannoy Kukly 36",
    "orig_title": "1. \u041a\u0430\u043a \u043c\u0430\u0441\u0442\u0435\u0440\u0443 \u0412\u0438\u0448\u043d\u0435 \u043f\u043e\u043f\u0430\u043b\u0441\u044f \u043a\u0443\u0441\u043e\u043a \u0434\u0435\u0440\u0435\u0432\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043b\u0430\u043a\u0430\u043b \u0438 \u0441\u043c\u0435\u044f\u043b\u0441\u044f \u043a\u0430\u043a \u0440\u0435\u0431\u0451\u043d\u043e\u043a",
    "url": "https://stat1.deti-online.com/a/Dy_SSSTec9I-s4lgSLNb7Q/1528541400/files/skazki/sbornik-skazok/priklyucheniya-pinokkio-istoriya-derevyannoy-kukly-36.mp3"
  },
  {
    "duration": "28:49",
    "title": "Riklyuchenija Bibigona",
    "orig_title": "\u041f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0411\u0438\u0431\u0438\u0433\u043e\u043d\u0430",
    "url": "https://stat1.deti-online.com/a/ZLigt7BlBb8O0NPYosCghA/1528545170/files/skazki/skazki-chukovskogo/priklyuchenija-bibigona.mp3"
  },
  {
    "duration": "1:32",
    "title": "Riklyucheniya Barona Myunhauzena",
    "orig_title": "\u041f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0431\u0430\u0440\u043e\u043d\u0430 \u041c\u044e\u043d\u0445\u0430\u0443\u0437\u0435\u043d\u0430",
    "url": "https://stat1.deti-online.com/a/CvpvdDnPwliA3TPWV1koIQ/1528540661/files/skazki/sbornik-skazok/priklyucheniya-barona-myunhauzena.mp3"
  },
  {
    "duration": "20:31",
    "title": "Riemysh",
    "orig_title": "\u041f\u0440\u0438\u0435\u043c\u044b\u0448",
    "url": "https://stat1.deti-online.com/a/IztrUOUt8C5roRqR3J5vWg/1528559999/files/skazki/skazki-mamina-sibirjaka/priemysh.mp3"
  },
  {
    "duration": "15:21",
    "title": "Remudryy Peskar",
    "orig_title": "\u041f\u0440\u0435\u043c\u0443\u0434\u0440\u044b\u0439 \u043f\u0435\u0441\u043a\u0430\u0440\u044c",
    "url": "https://stat2.deti-online.com/a/z-gU2lmuzUep4XPawkKQVA/1528554967/files/skazki/skazki-saltykova-schedrina/premudryy-peskar.mp3"
  },
  {
    "duration": "03:26",
    "title": "Ortochki",
    "orig_title": "\u041f\u043e\u0440\u0442\u043e\u0447\u043a\u0438",
    "url": "https://stat2.deti-online.com/a/rQOZxg-6PNC2ZgvPmUd28g/1528573714/files/skazki/skazki-tolstogo/portochki.mp3"
  },
  {
    "duration": "23:05",
    "title": "Ora Spat",
    "orig_title": "\u041f\u043e\u0440\u0430 \u0441\u043f\u0430\u0442\u044c",
    "url": "https://stat2.deti-online.com/a/k1yCbugYbsaXdRf9JgGHIQ/1528547019/files/skazki/skazki-mamina-sibirjaka/pora-spat.mp3"
  },
  {
    "duration": "11:41",
    "title": "Ozhar Vo Fligele Ili Podvig Vo Ldah",
    "orig_title": "\u041f\u043e\u0436\u0430\u0440 \u0432\u043e \u0444\u043b\u0438\u0433\u0435\u043b\u0435, \u0438\u043b\u0438 \u043f\u043e\u0434\u0432\u0438\u0433 \u0432\u043e \u043b\u044c\u0434\u0430\u0445",
    "url": "https://stat2.deti-online.com/a/ySOZfo9JDM3tpELoArrL9w/1528548318/files/skazki/rasskazy-dragunskogo/pozhar-vo-fligele-ili-podvig-vo-ldah.mp3"
  },
  {
    "duration": "46:07",
    "title": "Odi Tuda Ne Znayu Kuda Prinesi To Ne Znayu Chto",
    "orig_title": "\u041f\u043e\u0434\u0438 \u0442\u0443\u0434\u0430-\u043d\u0435 \u0437\u043d\u0430\u044e \u043a\u0443\u0434\u0430, \u043f\u0440\u0438\u043d\u0435\u0441\u0438 \u0442\u043e-\u043d\u0435 \u0437\u043d\u0430\u044e \u0447\u0442\u043e",
    "url": "https://stat1.deti-online.com/a/6-PT9ama3Dl-jZZifBPA_w/1528539953/files/skazki/russkie-narodnye-skazki/podi-tuda-ne-znayu-kuda-prinesi-to-ne-znayu-chto.mp3"
  },
  {
    "duration": "16:56",
    "title": "Odzemnyy Chelovechek",
    "orig_title": "\u041f\u043e\u0434\u0437\u0435\u043c\u043d\u044b\u0439 \u0447\u0435\u043b\u043e\u0432\u0435\u0447\u0435\u043a",
    "url": "https://stat1.deti-online.com/a/hGV6_FJXegUo4TjFrV-6ZQ/1528551819/files/skazki/skazki-bratev-grimm/podzemnyy-chelovechek.mp3"
  },
  {
    "duration": "08:56",
    "title": "Odarki Fei",
    "orig_title": "\u041f\u043e\u0434\u0430\u0440\u043a\u0438 \u0444\u0435\u0438",
    "url": "https://stat2.deti-online.com/a/tutRU-ymMF7JhwqO62k9zA/1528543144/files/skazki/skazki-sharlja-perro/podarki-fei.mp3"
  },
  {
    "duration": "03:32",
    "title": "Od Gribo",
    "orig_title": "\u041f\u043e\u0434 \u0433\u0440\u0438\u0431\u043e\u043c",
    "url": "https://stat2.deti-online.com/a/AjG7NOcY0pE3bZTZZgmLLw/1528541965/files/skazki/skazki-suteeva/pod-gribom.mp3"
  },
  {
    "duration": "19:34",
    "title": "Ovest O Tom Kak Odin Muzhik Dvuh Generalov Prokormil",
    "orig_title": "\u041f\u043e\u0432\u0435\u0441\u0442\u044c \u043e \u0442\u043e\u043c, \u043a\u0430\u043a \u043e\u0434\u0438\u043d \u043c\u0443\u0436\u0438\u043a \u0434\u0432\u0443\u0445 \u0433\u0435\u043d\u0435\u0440\u0430\u043b\u043e\u0432 \u043f\u0440\u043e\u043a\u043e\u0440\u043c\u0438\u043b",
    "url": "https://stat2.deti-online.com/a/ActHeLLOXpnZDv5n7uKmrg/1528554361/files/skazki/skazki-saltykova-schedrina/povest-o-tom-kak-odin-muzhik-dvuh-generalov-prokormil.mp3"
  },
  {
    "duration": "29:23",
    "title": "Obratimy",
    "orig_title": "\u041f\u043e\u0431\u0440\u0430\u0442\u0438\u043c\u044b",
    "url": "https://stat1.deti-online.com/a/rfBmnZh5P09qrPZ8zpPSiA/1528565610/files/skazki/skazki-andersena/pobratimy.mp3"
  },
  {
    "duration": "05:25",
    "title": "Griby",
    "orig_title": "\u0413\u0440\u0438\u0431\u044b",
    "url": "https://stat1.deti-online.com/a/wYI8hzBLYuvOay8vmFQDvA/1528567280/files/skazki/skazki-tolstogo/griby.mp3"
  },
  {
    "duration": "04:13",
    "title": "Grechiha",
    "orig_title": "\u0413\u0440\u0435\u0447\u0438\u0445\u0430",
    "url": "https://stat1.deti-online.com/a/gM_qqqAnQqCgjdXjLHwCIQ/1528559711/files/skazki/skazki-andersena/grechiha.mp3"
  },
  {
    "duration": "11:50",
    "title": "Goryachiy Kamen",
    "orig_title": "\u0413\u043e\u0440\u044f\u0447\u0438\u0439 \u043a\u0430\u043c\u0435\u043d\u044c",
    "url": "https://stat1.deti-online.com/a/8maF7Yd0UdzajJnTyW2Xig/1528548907/files/skazki/rasskazy-gaydara/goryachiy-kamen.mp3"
  },
  {
    "duration": "02:27",
    "title": "Gorshochek Kashi",
    "orig_title": "\u0413\u043e\u0440\u0448\u043e\u0447\u0435\u043a \u043a\u0430\u0448\u0438",
    "url": "https://stat2.deti-online.com/a/mIGwfi9aO9rqFGKiJED5BQ/1528541734/files/skazki/skazki-bratev-grimm/gorshochek-kashi.mp3"
  },
  {
    "duration": "04:46",
    "title": "Gorshok",
    "orig_title": "\u0413\u043e\u0440\u0448\u043e\u043a",
    "url": "https://stat2.deti-online.com/a/4mzOEYs8n0t3Jzn3y04CmQ/1528569618/files/skazki/skazki-tolstogo/gorshok.mp3"
  },
  {
    "duration": "10:41",
    "title": "Gorshenja",
    "orig_title": "\u0413\u043e\u0440\u0448\u0435\u043d\u044f",
    "url": "https://stat2.deti-online.com/a/OPyTBnHvEi3PsuFRGUkwfg/1528551139/files/skazki/russkie-narodnye-skazki/gorshenja.mp3"
  },
  {
    "duration": "04:58",
    "title": "Yabloko",
    "orig_title": "\u042f\u0431\u043b\u043e\u043a\u043e",
    "url": "https://stat1.deti-online.com/a/hFQ9PjEsV7gVHLka75gNPA/1528540673/files/skazki/skazki-suteeva/yabloko.mp3"
  },
  {
    "duration": "18:11",
    "title": "Gorodok V Tabakerke",
    "orig_title": "\u0413\u043e\u0440\u043e\u0434\u043e\u043a \u0432 \u0442\u0430\u0431\u0430\u043a\u0435\u0440\u043a\u0435",
    "url": "https://stat2.deti-online.com/a/xPy5zNIzRQDJVK-XtGNf2A/1528545244/files/skazki/skazki-odoevskogo/gorodok-v-tabakerke.mp3"
  },
  {
    "duration": "07:15",
    "title": "Eto Chto Za Ptica",
    "orig_title": "\u042d\u0442\u043e \u0447\u0442\u043e \u0437\u0430 \u043f\u0442\u0438\u0446\u0430?",
    "url": "https://stat2.deti-online.com/a/DUesP692rY7uuhdvrNLJaQ/1528544075/files/skazki/skazki-suteeva/eto-chto-za-ptica.mp3"
  },
  {
    "duration": "1:01",
    "title": "Golubaya Chashka",
    "orig_title": "\u0413\u043e\u043b\u0443\u0431\u0430\u044f \u0447\u0430\u0448\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/Bmz_mCAFlu45FIB-7k1s-A/1528548840/files/skazki/rasskazy-gaydara/golubaya-chashka.mp3"
  },
  {
    "duration": "05:08",
    "title": "Etazhi Lesa",
    "orig_title": "\u042d\u0442\u0430\u0436\u0438 \u043b\u0435\u0441\u0430",
    "url": "https://stat2.deti-online.com/a/ThK_6jjFnp81LEAKlPTfQQ/1528562653/files/skazki/rasskazy-prishvina/etazhi-lesa.mp3"
  },
  {
    "duration": "02:00",
    "title": "Govoryaschiy Grach",
    "orig_title": "\u0413\u043e\u0432\u043e\u0440\u044f\u0449\u0438\u0439 \u0433\u0440\u0430\u0447",
    "url": "https://stat2.deti-online.com/a/tay4HvbNtqw51DfFf-zkew/1528566015/files/skazki/rasskazy-prishvina/govoryaschiy-grach.mp3"
  },
  {
    "duration": "13:07",
    "title": "Yelf Rozovogo Kusta",
    "orig_title": "\u042d\u043b\u044c\u0444 \u0440\u043e\u0437\u043e\u0432\u043e\u0433\u043e \u043a\u0443\u0441\u0442\u0430",
    "url": "https://stat1.deti-online.com/a/Jwson-uHbr8PJ3TAAYfreA/1528547457/files/skazki/skazki-andersena/yelf-rozovogo-kusta.mp3"
  },
  {
    "duration": "16:05",
    "title": "Gnom Tihogro",
    "orig_title": "\u0413\u043d\u043e\u043c-\u0422\u0438\u0445\u043e\u0433\u0440\u043e\u043c",
    "url": "https://stat2.deti-online.com/a/EfzjLYvmMe3WtXR3renoDw/1528546738/files/skazki/skazki-bratev-grimm/gnom-tihogrom.mp3"
  },
  {
    "duration": "55:37",
    "title": "Shelkunchik I Myshinyi Korol",
    "orig_title": "\u0429\u0435\u043b\u043a\u0443\u043d\u0447\u0438\u043a \u0438 \u043c\u044b\u0448\u0438\u043d\u044b\u0439 \u043a\u043e\u0440\u043e\u043b\u044c",
    "url": "https://stat2.deti-online.com/a/za9lFj8jDme9rsnR1OKvYA/1528538302/files/skazki/skazki-gofmana/shelkunchik-i-myshinyi-korol.mp3"
  },
  {
    "duration": "00:45",
    "title": "Glotok Moloka",
    "orig_title": "\u0413\u043b\u043e\u0442\u043e\u043a \u043c\u043e\u043b\u043e\u043a\u0430",
    "url": "https://stat2.deti-online.com/a/xQSDJiKfQBcyROY2FBTCjQ/1528585212/files/skazki/rasskazy-prishvina/glotok-moloka.mp3"
  },
  {
    "duration": "10:54",
    "title": "Shurik U Dedushki",
    "orig_title": "\u0428\u0443\u0440\u0438\u043a \u0443 \u0434\u0435\u0434\u0443\u0448\u043a\u0438",
    "url": "https://stat1.deti-online.com/a/stv-LffSH3G48fy8UBFK-g/1528542624/files/skazki/rasskazy-nosova/shurik-u-dedushki.mp3"
  },
  {
    "duration": "08:57",
    "title": "Glavnye Reki Ameriki",
    "orig_title": "\u0413\u043b\u0430\u0432\u043d\u044b\u0435 \u0440\u0435\u043a\u0438 \u0410\u043c\u0435\u0440\u0438\u043a\u0438",
    "url": "https://stat2.deti-online.com/a/XB5R_l4IF0QhjJwqHKh5uQ/1528546854/files/skazki/rasskazy-dragunskogo/glavnye-reki-ameriki.mp3"
  },
  {
    "duration": "20:10",
    "title": "Shest Lebedey",
    "orig_title": "\u0428\u0435\u0441\u0442\u044c \u043b\u0435\u0431\u0435\u0434\u0435\u0439",
    "url": "https://stat1.deti-online.com/a/gudd2atHBh22ejq2Pe890Q/1528543961/files/skazki/skazki-bratev-grimm/shest-lebedey.mp3"
  },
  {
    "duration": "24:10",
    "title": "Genzel I Gretel",
    "orig_title": "\u0413\u0435\u043d\u0437\u0435\u043b\u044c \u0438 \u0413\u0440\u0435\u0442\u0435\u043b\u044c",
    "url": "https://stat1.deti-online.com/a/hJwlaLXUsMWRpyesmn1i2g/1528541550/files/skazki/skazki-bratev-grimm/genzel-i-gretel.mp3"
  },
  {
    "duration": "13:30",
    "title": "Belosnezhka I Alocvetik",
    "orig_title": "\u0411\u0435\u043b\u043e\u0441\u043d\u0435\u0436\u043a\u0430 \u0438 \u0410\u043b\u043e\u0446\u0432\u0435\u0442\u0438\u043a",
    "url": "https://stat2.deti-online.com/a/pdP9zU3B2dBJ-NRn52F_qA/1528547813/files/skazki/skazki-bratev-grimm/belosnezhka-i-alocvetik.mp3"
  },
  {
    "duration": "1:11",
    "title": "Chuk I Gek",
    "orig_title": "\u0427\u0443\u043a \u0438 \u0413\u0435\u043a",
    "url": "https://stat2.deti-online.com/a/-6ScPCsD6zpnXDmp--MX8w/1528542239/files/skazki/rasskazy-gaydara/chuk-i-gek.mp3"
  },
  {
    "duration": "16:46",
    "title": "Gde Eto Vidano Gde Eto Slyhano",
    "orig_title": "\u0413\u0434\u0435 \u044d\u0442\u043e \u0432\u0438\u0434\u0430\u043d\u043e, \u0433\u0434\u0435 \u044d\u0442\u043e \u0441\u043b\u044b\u0445\u0430\u043d\u043e",
    "url": "https://stat1.deti-online.com/a/8GpFtaRaWtSbh1mMfxJAdg/1528541662/files/skazki/rasskazy-dragunskogo/gde-eto-vidano-gde-eto-slyhano.mp3"
  },
  {
    "duration": "01:21",
    "title": "Chudo Derevo",
    "orig_title": "\u0427\u0443\u0434\u043e-\u0434\u0435\u0440\u0435\u0432\u043e",
    "url": "https://stat1.deti-online.com/a/IFqEdK6vawvMYISBDPFaZQ/1528544851/files/skazki/skazki-chukovskogo/chudo-derevo.mp3"
  },
  {
    "duration": "09:24",
    "title": "Gans Churban",
    "orig_title": "\u0413\u0430\u043d\u0441 \u0427\u0443\u0440\u0431\u0430\u043d",
    "url": "https://stat2.deti-online.com/a/CTExoCwUfC8MIZx-xpAYDw/1528563695/files/skazki/skazki-andersena/gans-churban.mp3"
  },
  {
    "duration": "1:59",
    "title": "Chudesnoe Puteshestvie Nilsa S Dikimi Gusyami",
    "orig_title": "\u0427\u0443\u0434\u0435\u0441\u043d\u043e\u0435 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u041d\u0438\u043b\u044c\u0441\u0430 \u0441 \u0434\u0438\u043a\u0438\u043c\u0438 \u0433\u0443\u0441\u044f\u043c\u0438",
    "url": "https://stat2.deti-online.com/a/d_xzSmTIoMShtT-pceHs0w/1528539721/files/skazki/sbornik-skazok/chudesnoe-puteshestvie-nilsa-s-dikimi-gusyami.mp3"
  },
  {
    "duration": "02:48",
    "title": "Gaechki",
    "orig_title": "\u0413\u0430\u0435\u0447\u043a\u0438",
    "url": "https://stat2.deti-online.com/a/50cL3GrnY9MZNfuPblwzNQ/1528570858/files/skazki/rasskazy-prishvina/gaechki.mp3"
  },
  {
    "duration": "13:09",
    "title": "Chudesnaja Rubashka",
    "orig_title": "\u0427\u0443\u0434\u0435\u0441\u043d\u0430\u044f \u0440\u0443\u0431\u0430\u0448\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/XMAiVuVtg2Z3VaXkr7AvWQ/1528540041/files/skazki/russkie-narodnye-skazki/chudesnaja-rubashka.mp3"
  },
  {
    "duration": "25:22",
    "title": "Gadkii Utenok",
    "orig_title": "\u0413\u0430\u0434\u043a\u0438\u0439 \u0443\u0442\u0451\u043d\u043e\u043a",
    "url": "https://stat2.deti-online.com/a/ZgE-Av10wVpY__wXSqwaYQ/1528538476/files/skazki/skazki-andersena/gadkii-utenok.mp3"
  },
  {
    "duration": "04:21",
    "title": "Chto Ya Lyublyu",
    "orig_title": "\u0427\u0442\u043e \u044f \u043b\u044e\u0431\u043b\u044e",
    "url": "https://stat1.deti-online.com/a/vFWLdJoYZeHLm-FjXhnqeA/1528548763/files/skazki/rasskazy-dragunskogo/chto-ya-lyublyu.mp3"
  },
  {
    "duration": "05:19",
    "title": "Vyskochka",
    "orig_title": "\u0412\u044b\u0441\u043a\u043e\u0447\u043a\u0430",
    "url": "https://stat1.deti-online.com/a/7VHlQg4T-CEXdrUd-Zok-g/1528567603/files/skazki/rasskazy-prishvina/vyskochka.mp3"
  },
  {
    "duration": "47:06",
    "title": "Chto Ya Videl 20",
    "orig_title": "\u0416\u0435\u043b\u0435\u0437\u043d\u0430\u044f \u0434\u043e\u0440\u043e\u0433\u0430",
    "url": "https://stat1.deti-online.com/a/MXoDgT_bqwgRw8uxhLzthA/1528542042/files/skazki/rasskazy-zhitkova/chto-ya-videl-20.mp3"
  },
  {
    "duration": "06:10",
    "title": "Vorotnichok",
    "orig_title": "\u0412\u043e\u0440\u043e\u0442\u043d\u0438\u0447\u043e\u043a",
    "url": "https://stat1.deti-online.com/a/VsqodyXJnsI0Qp4JX2KkvA/1528568525/files/skazki/skazki-andersena/vorotnichok.mp3"
  },
  {
    "duration": "00:28",
    "title": "Chto Sdelala Mura",
    "orig_title": "\u0427\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u043b\u0430 \u041c\u0443\u0440\u0430",
    "url": "https://stat2.deti-online.com/a/jmQ6kW5YvP2ejvdSw-7Qyw/1528552169/files/skazki/skazki-chukovskogo/chto-sdelala-mura.mp3"
  },
  {
    "duration": "35:45",
    "title": "Volshebnyy Magazin",
    "orig_title": "\u0412\u043e\u043b\u0448\u0435\u0431\u043d\u044b\u0439 \u043c\u0430\u0433\u0430\u0437\u0438\u043d",
    "url": "https://stat1.deti-online.com/a/BVi-0JlkB8g0_g1W7P-ziA/1528543476/files/skazki/skazki-suteeva/volshebnyy-magazin.mp3"
  },
  {
    "duration": "03:14",
    "title": "Chto Byvalo 10",
    "orig_title": "\u041d\u0430\u0432\u043e\u0434\u043d\u0435\u043d\u0438\u0435",
    "url": "https://stat2.deti-online.com/a/ZnU-dn7nValac5DvpGBbqw/1528547351/files/skazki/rasskazy-zhitkova/chto-byvalo-10.mp3"
  },
  {
    "duration": "24:56",
    "title": "Volshebnoe Jablochko",
    "orig_title": "\u0412\u043e\u043b\u0448\u0435\u0431\u043d\u043e\u0435 \u044f\u0431\u043b\u043e\u0447\u043a\u043e",
    "url": "https://stat2.deti-online.com/a/kvzclEGa0rHbq6u5rTrOIg/1528542504/files/skazki/russkie-narodnye-skazki/volshebnoe-jablochko.mp3"
  },
  {
    "duration": "1:40",
    "title": "Chernaya Kurica",
    "orig_title": "\u0427\u0435\u0440\u043d\u0430\u044f \u043a\u0443\u0440\u0438\u0446\u0430, \u0438\u043b\u0438 \u041f\u043e\u0434\u0437\u0435\u043c\u043d\u044b\u0435 \u0436\u0438\u0442\u0435\u043b\u0438",
    "url": "https://stat2.deti-online.com/a/wnJzLvo0LIjWf1PTbSo0YQ/1528541932/files/skazki/sbornik-skazok/chernaya-kurica.mp3"
  },
  {
    "duration": "42:14",
    "title": "Volshebnoe Kolco",
    "orig_title": "\u0412\u043e\u043b\u0448\u0435\u0431\u043d\u043e\u0435 \u043a\u043e\u043b\u044c\u0446\u043e",
    "url": "https://stat2.deti-online.com/a/xai2Y6dvLm-QiQSK3LBheQ/1528542496/files/skazki/russkie-narodnye-skazki/volshebnoe-kolco.mp3"
  },
  {
    "duration": "00:41",
    "title": "Cherepaha",
    "orig_title": "\u0427\u0435\u0440\u0435\u043f\u0430\u0445\u0430",
    "url": "https://stat2.deti-online.com/a/hvzlGIOV3UzNQoHBTce7IQ/1528557906/files/skazki/skazki-chukovskogo/cherepaha.mp3"
  },
  {
    "duration": "5:18",
    "title": "Volshebnik Izumrudnogo Goroda",
    "orig_title": "\u0412\u043e\u043b\u0448\u0435\u0431\u043d\u0438\u043a \u0418\u0437\u0443\u043c\u0440\u0443\u0434\u043d\u043e\u0433\u043e \u0433\u043e\u0440\u043e\u0434\u0430",
    "url": "https://stat2.deti-online.com/a/dzZmPJOBy_cE04Aci68r8g/1528538275/files/skazki/sbornik-skazok/volshebnik-izumrudnogo-goroda.mp3"
  },
  {
    "duration": "06:16",
    "title": "Chey Nos Luchshe",
    "orig_title": "\u0427\u0435\u0439 \u043d\u043e\u0441 \u043b\u0443\u0447\u0448\u0435",
    "url": "https://stat1.deti-online.com/a/RJJeJvIo9qJuzbCkRSbtKw/1528543505/files/skazki/rasskazy-bianki/chey-nos-luchshe.mp3"
  },
  {
    "duration": "43:41",
    "title": "Volshebnaya Lampa Alladina",
    "orig_title": "\u0412\u043e\u043b\u0448\u0435\u0431\u043d\u0430\u044f \u043b\u0430\u043c\u043f\u0430 \u0410\u043b\u0430\u0434\u0434\u0438\u043d\u0430",
    "url": "https://stat1.deti-online.com/a/SvqpvQx-aTE4UscJ_iqfOg/1528540295/files/skazki/arabskie-skazki/volshebnaya-lampa-alladina.mp3"
  },
  {
    "duration": "09:50",
    "title": "Chego Tolko Ne Pridumayut",
    "orig_title": "\u0427\u0435\u0433\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0435 \u043f\u0440\u0438\u0434\u0443\u043c\u0430\u044e\u0442",
    "url": "https://stat2.deti-online.com/a/gFzyEgUUE9VyyVmoPWxkCg/1528558272/files/audioskazki/chego-tolko-ne-pridumayut.mp3"
  }
];