const fs = require('fs-extra')
const {prefix} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.
Created By : https://github.com/AlvioAdjiJanuar
Created By : https://github.com/AlvioAdjiJanuar
*/

exports.textTnC = () => {
    return `
Author? : YuuXD
Instagram: https://instagram.com/wrld.yukii
Github: https://github.com/YuuXD26`
}

const sosmed = 'https://instagram.com/wrld.yukii'

exports.textmenupenting = (pushname) => {
    return `
Hi Kak ${pushname}👋️, selamatt datang di LinguaBot WhatsApp pintar yang siap membantumu.
Follow Ig Admin Untuk Menunjukan Support Terhadap Bot ini
https://instagram.com/wrld.yukii
Berikut fitur yang dapat di gunakan pada bot ini✨

List menu penting LinguaBot:

Silahkan Yang ingin mendapatkan info LinguaBot lebih cepat ketik 
${prefix}grup
tapi gk usah keluar masuk grup ya :)

🚀 *${prefix}addbacot*
Untuk melihat bacotan member LinguaBot
Usage: ketik */addbacot*

🚀 *${prefix}bacot*
Untuk melihat bacotan member LinguaBot
Usage: ketik */bacot*

🚀 *${prefix}listbacot*
Untuk melihat list bacotan member LinguaBot
Usage: ketik */listbacot*

🚀 *${prefix}biodatabotcewe*
Mendapatkan biodata bot cewe :)
Usage: ketik */biodatabotcewe*

2. *${prefix}donasi*
Untuk mendonasikan kepada yuu
Usage: Ketik */donasi*.

3. *${prefix}botstat*
Untuk mengecek status bot
Usage: Ketik */botstat*

4. *${prefix}ownerbot*
mengecek orang ganteng
Usage: ketik */ownerbot*

5. *${prefix}tts*
Untuk mengubah teks menjadi suara google
Usage: ketik */tts* id teksnya

6. *${prefix}getpic*
Untuk Lingua bot maling gambar orang
usage: Ketik */getpic* tag orangnya atau pake nomornya
contoh: */getpic* @tagorangdigrup
atau */getpic* isi nomornya
contoh: */getpic* 628888888888888

7. *${prefix}ganteng*
Untuk melihat siapa yang paling ganteng di grup
Usage: /ganteng

8. *${prefix}apakah*
Menanyakan sesuatu ke LinguaBot
Usage: /apakah aku ganteng?

Selamat menikmati✨
_made with_❤️ @LinguaBot`

}

exports.textsongmenu = (pushname) => {
   return `
Hi Kak ${pushname}👋️, selamat datang di LinguaBot WhatsApp pintar yang siap membantumu.
Follow Ig Admin Untuk Menunjukan Support Terhadap Bot ini
${sosmed}
Berikut fitur yang dapat di gunakan pada bot ini✨

List lagu LinguaBot:

1. *${prefix}lagu1*
JUDUL LAGU : DJ JUJUR SA SU BILANG
Usage: ketik */lagu1*

2. *${prefix}lagu2*
JUDUL LAGU : DJ BENYANYI BENYANYI
Usage: ketik */lagu2*

3. *${prefix}lagu3*
JUDUL LAGU : DJ SABATA SABARANG TADA
Usage: ketik */lagu3*

4. *${prefix}lagu4*
JUDUL LAGU : CUEK RIZKY FEBIAN
Usage: ketik */lagu4*


Selamat menikmati✨
_made with_❤️ @LinguaBot`

}

exports.textmenulama = (pushname, updater) => {
 return `
Hi Kak ${pushname}👋️, selamat datang di LinguaBot WhatsApp pintar yang siap membantumu.
Follow Ig Admin Untuk Menunjukan Support Terhadap Bot ini
https://instagram.com/wrld.yukii
Berikut menu yang dapat di gunakan pada bot ini✨

*Ketik /chat* 
*Untuk Mengobrol dengan LinguaBot*
*Jika ingin membuat sticker atau menu lainnya silahkan di offkan LinguaBot chatnya*

List menu:

1. *${prefix}menupenting*
Menampilkan menu penting di LinguaBot
Usage: ketik */menupenting*

2. *${prefix}menuhiburan*
Menampilkan menu hiburan di LinguaBot
Usage: ketik */menuhiburan*

3. *${prefix}mentol*
Menampilkan menu tools & alat di LinguaBot
Usage: ketik */mentol*

4. *${prefix}menutobat*
Menampilkan menu untuk tobat
Usage: ketik */menuedukasi*

5. *${prefix}wibuarea*
Menampilkan menu wibu
Usage: ketik */wibuarea*

6. *${prefix}menusticker*
Menampilkan menu sticker
Usage: ketik */menusticker*

7. *${prefix}menulogo*
Menampilkan menu logo 
Usage: ketik */menulogo*

8. *${prefix}nulis*
Menampilan menu nulis
Usage: ketik */nulis*

10. *${prefix}ptl*
Menampilkan video penyengar timeline
Usage: ketik */ptl*

11. *${prefix}bugreport*
Untuk melaporkan bug / masalah ke owner
Usage: ketik /bugreport masalahnya

Jangan Telp / VC Bot Karna Itu Akan 
Membuat bot semakin delay
dan Otomatis whatsapp anda akan terblokir oleh bot

Untuk melihat update fitur terbaru✔️
Silahkan ketik *${prefix}𝙪𝙥𝙙𝙖𝙩𝙚*

🚀 Jangan Lupa donasi kepada bot ya :( Buat bayar servernya
Untuk donasi seikhlasnya kok :(
Pembayaran bisa via gopay dana ovo pulsa
Ketik /donasi 
Terima kasih :)


Selamat menikmati✨
_made with_❤️ @LinguaBot`

}

exports.textmenubaru = (pushname) => {
    return `
    ◪ 𝗜𝗡𝗙𝗢
    ❏ Hai Kak : ${pushname}
    ❏ Versi : 2.0.0
    ❏ Liberary : OPEN WA
    ❏ Prefix: 「  /  」
    ❏ Creator: YuuXD

    ◪ 𝗦𝗬𝗦𝗧𝗘𝗠
    │
    ├─ ❏ bcgrup
    ├─ ❏ bcimg
    ├─ ❏ bc
    ├─ ❏ botstat
    ├─ ❏ addupdate
    ├─ ❏ update
    ├─ ❏ getses
    ├─ ❏ bugreport
    ├─ ❏ owner
    ├─ ❏ gantiprofile
    └─ ❏ ping
    
    ◪ 𝗠𝗘𝗗𝗜𝗔
    │
    ├─ ❏ bass
    ├─ ❏ tts <kodenegara> [text]
    ├─ ❏ film [query]
    └─ ❏ ptl
  
    ◪ *TOOLS*
    │
    ├─ ❏ artinama
    ├─ ❏ wasted
    ├─ ❏ gayy
    ├─ ❏ playstore
    ├─ ❏ shopee
    ├─ ❏ fakta
    ├─ ❏ pantun
    ├─ ❏ katabijak
    ├─ ❏ quote
    └─ ❏ totext

    ◪ *EDUKASI*
    │
    ├─ ❏ ai
    ├─ ❏ wiki
    ├─ ❏ quiziz <id>
    └─ ❏ brainly <query>

    ◪ *STICKER*
    │
    ├─ ❏ sticker
    ├─ ❏ stickergif
    ├─ ❏ toimg
    └─ ❏ stickermeme

    ◪ *HAVEFUN*
    │
    ├─ ❏ cekcinta
    ├─ ❏ cekgay
    ├─ ❏ bisakah
    ├─ ❏ kapankah
    ├─ ❏ siapakah
    └─ ❏ apakah
    
    ◪ 𝗜𝗠𝗔𝗚𝗘
    │
    ├─ ❏ images
    ├─ ❏ quotemaker
    └─ ❏ hartatahta

    ◪ *GAME*
    │
    ├─ ❏ tod
    ├─ ❏ points
    └─ ❏ kuismtk

    ◪ 𝗚𝗥𝗢𝗨𝗣
    │
    ├─ ❏ mutegrup on|off
    ├─ ❏ promote
    ├─ ❏ demote
    ├─ ❏ mute
    ├─ ❏ profile
    ├─ ❏ antilink
    ├─ ❏ kick
    ├─ ❏ del
    ├─ ❏ getpic
    ├─ ❏ tagall
    ├─ ❏ santet
    ├─ ❏ rate
    ├─ ❏ kapankah
    ├─ ❏ apakah
    ├─ ❏ howbucins
    ├─ ❏ babi
    ├─ ❏ gay
    ├─ ❏ jadian
    ├─ ❏ cantik
    ├─ ❏ slap
    ├─ ❏ peluk
    ├─ ❏ tod
    ├─ ❏ ganteng
    ├─ ❏ kutuk
    ├─ ❏ antilink
    ├─ ❏ antisticker
    ├─ ❏ leave
    └─ ❏ afk
    
  ◩ Lingua Whatsapp Bot ❤️ ◩`
}

exports.textmenu = (pushname, premi , _registered , coloo , tod) => {
    return `
Hi Kak ${pushname}👋️
🐻‍❄️RoleAnda = ${premi}🐻‍❄️

LinguaBot terdapat 2 menu sekarang

🐳 *${prefix}menubaru* 🐳
🐳 *${prefix}𝚖𝚎𝚗𝚞lama* 🐳

Jam: *${tod}*
Total userLingua : ${coloo.length}

Jika tulisan tidak keliatan kek kotak kotak 
Ketik /help

Untuk melihat Waktu LinguaBot Aktif
Silahkan ketik *${prefix}waktu*

Untuk melihat update fitur terbaru
Silahkan ketik *${prefix}𝙪𝙥𝙙𝙖𝙩𝙚*
`
}

exports.texthelp = (pushname, premiu , _registered , contol) => {
    return `
Hi Kak ${pushname}👋️
🐻‍❄️RoleAnda = ${premiu}🐻‍❄️

LinguaBot terdapat 2 menu sekarang

🐳 *${prefix}menubaru* 🐳
🐳 *${prefix}𝚖𝚎𝚗𝚞lama* 🐳

Total userSend : ${_registered.length}
Total userLingua : ${contol.length}

Untuk melihat update fitur terbaru
Silahkan ketik *${prefix}update*
`
}

exports.textmenuhiburan = (pushname) => {
 return `
Hi Kak ${pushname}👋️, selamat datang di LinguaBot WhatsApp pintar yang siap membantumu.
Follow Ig Admin Untuk Menunjukan Support Terhadap Bot ini
https://instagram.com/wrld.yukii
Berikut fitur yang dapat di gunakan pada bot ini✨

List menu hiburan LinguaBot:

3. *${prefix}artinama*
Untuk mengetahui artinama seseorang
Usage: ketik */artinama* namanya
contoh: */artinama* yuu

5. *${prefix}cuaca*
Untuk melihat cuaca pada suatu daerah
Usage: ketik */cuaca* tempatnya
contoh: /cuaca bogor

6. *${prefix}motivasi*
Untuk mendapatkan motivasi dari yuu
Usage: ketik */motivasi*

7. *${prefix}howgay*
Untuk cek seberapa gay lu
Usage: ketik */howgay*

8. *${prefix}ptl*
Untuk mendapatkan penyegar time line 
Usage: ketik */ptl*

9. *${prefix}koin*
Bermain koin berdua dengan musuh anda , musuh anda juga harus ketik /koin
Aliases: -

10. *${prefix}lk21*
Untuk mendapatkan link download film :) kalo gua pake wifi mah udh bisa auto download, lah gua pake kuota ngentot
Usage: /lk21 judulnya

11. *${prefix}katasenja*
Mendapatkan kata senja
Usage: /katasenja

12. *${prefix}artimimpi*
Untuk mendapatkan artimimpi kamu
Usage: ketik /artimimpi dikejar palkon

13. *${prefix}tod*
Untuk Melakukan Truth Or Dare Dengan Teman
Usage: ketik */tod*

14. *${prefix}suit*
Untuk melakukan suit dengan teman di grup
Usage: ketik */suit*

Selamat menikmati✨
_made with_❤️ @LinguaBot`
}


// exports.textmenutobat = (pushname) => {
//  return `
// Hi Kak ${pushname}👋️, selamat datang di LinguaBot WhatsApp pintar yang siap membantumu.
// Follow Ig Admin Untuk Menunjukan Support Terhadap Bot ini
// ${sosmed}
// Berikut fitur yang dapat di gunakan pada bot ini✨

// List menu tobat di LinguaBot:
// 1. *${prefix}infosurah*
// Untuk mendapatkan infosurah

// 2. *${prefix}surah*
// Untuk Menampilkan ayat Al-Quran tertentu beserta terjemahannya dalam bahasa Indonesia

// 3. *${prefix}tafsir*
// Untuk Menampilkan ayat Al-Quran tertentu beserta terjemahan dan tafsirnya dalam bahasa Indonesia

// 4. *${prefix}ALaudio*
// Untuk Menampilkan tautan dari audio surah tertentu

// 5. *${prefix}js*
// Untuk Mendapatkan Jadwal Shalat Di Daerah Kalian Masing masing

// Selamat menikmati✨
// _made with_❤️ @LinguaBot`
// }

exports.textmentol = (pushname) => {
 return `
Hi Kak ${pushname}👋️, selamat datang di LinguaBot WhatsApp pintar yang siap membantumu.
Follow Ig Admin Untuk Menunjukan Support Terhadap Bot ini
${sosmed}
Berikut fitur yang dapat di gunakan pada bot ini✨

                       「  Menu Tools ❤️ 」

1. *${prefix}images*
Untuk mencari gambar di pinterest
Usage: ketik */images* apayangmaudicari
contoh: /images kucing

2. *${prefix}sreddit*
Untuk mencari gambar di sub reddit
Usage: ketik */images* apayangmaudicari
contoh: /images kucing

5. *${prefix}wiki*
Untuk mencari suatu kata dari wikipedia
Usage: ketik */wiki* apa yang mau dicari
contoh: /wiki lampu

6. *${prefix}fakta*
Untuk Mencari Fakta Sesungguhnya
Usage: ketik */fakta*

7. *${prefix}pantun*
Untuk Menapatkan Pantun buat pacar lu/temen lu
Usage: ketik */pantun*

8. *${prefix}katabijak*
Untuk membuat lu sebagai orang bijak
Usage: ketik */katabijak*

9. *${prefix}quote*
untuk mendapatkan quotes random
Usage: ketik */quote*

10. *${prefix}puisi*
Untuk mendapatkan puisi
Usage: ketik */puisi*

11. *${prefix}jadian*
Untuk mendapatkan siapa yang jadian
Usage: ketik */jadian*

12. *${prefix}shopee*
Untuk mendapatkan informasi barang shopee
Usage: ketik */shopee* namabarang | jumlahbarang
contoh: /shopee kondom|1

13. *${prefix}buatgrup*
Untuk membuat grup dengan LinguaBot
Usage: ketik /buatgrup namanya

14. *${prefix}wasted*
Untuk membuat gambar anda terpenjara
Usage: kirim gambar dengan caption /wasted

15. *${prefix}tomp3*
Untuk merubah video ke lagu
Usage: tag videonya to mp3

16. *${prefix}bass*
Untuk merubah suara menjadi keren
Usage: tag audio ketik /bass

17. *${prefix}quiziz*
Untuk mendapatkan jawaban quiziz
Usage: ketik /quiziz idnya

18. *${prefix}totext*
Untuk merubah gambar ke text
Aliases: -
Usage: Silahkan tag/kirim gambar dengan ketik /totext

Selamat menikmati✨
_made with_❤️ @LinguaBot`
}

exports.textwibuarea = (pushname) => {
 return `
Hi Kak ${pushname}👋️, selamat datang di LinguaBot WhatsApp pintar yang siap membantumu.
Follow Ig Admin Untuk Menunjukan Support Terhadap Bot ini
https://instagram.com/wrld.yukii
Berikut fitur yang dapat di gunakan pada bot ini✨

Prefix : /
 
                        「  Wibu Area ❤️ 」

this fitur under maintenance

Selamat menikmati✨
_made with_❤️ @LinguaBot
`
}

exports.menusticker = (pushname) => {
    return `
Hi Kak ${pushname}👋️, selamat datang di LinguaBot WhatsApp pintar yang siap membantumu.
Follow Ig Admin Untuk Menunjukan Support Terhadap Bot ini
https://instagram.com/wrld.yukii
    
Prefix : /
    
                        「  Menu Sticker ❤️ 」

1. *${prefix}sticker*
Untuk Merubah Gambar Menjadi Sticker
Usage: Kirim gambar dengan caption *${prefix}sticker* atau reply gambar dengan caption *${prefix}sticker*.
Kalo mau tanpa background , kirim gambar dengan caption /stickernobg
                    
2. *${prefix}stickergif*
Untuk merubah gif menjadi Sticker bergerak
Usage: Kirim video dengan caption */stickergif*
                    
3. *${prefix}stickergiphy*
Untuk merubah gif dari giphy menjadi sticker bergerak
Usage: Ketik */stickergiphy* linknya
contoh: */stickergiphy* giphy.com/fawfat524

3. *${prefix}stimg*
Untuk
merubah sticker ke gambar
Usage: cari sticker yang mau diubah dan reply sticker dengan caption */stimg*
                    
4. *${prefix}ttp*
Untuk Lingua bot mengirim sticker text
usage: Ketik */ttp* teksnya
contoh: */ttp* |yuu
                    
5. *${prefix}ttp2*
Untuk Lingua bot mengirim sticker text
usage: Ketik */ttp2* teksnya
contoh: */ttp2* |yuu 

6. *${prefix}stikerteks*
Untuk mendapatkan stiker teks 
Aliases: -
Usage: /stikerteks teksnya

7. *${prefix}emojisticker*
Untuk merubah emoji ke sticker
Usage /emojisticker emotnya

9. *${prefix}stickermeme*
Untuk membuat sticker meme
Usage: kirim gambar dengan caption /stickermeme teks atas | teksbawah

10. *${prefix}liststicker*
Untuk melihat semua sticker yang disimpan
Usage: /liststicker

Selamat menikmati✨
_made with_❤️ @LinguaBot

`
}

exports.menulogo = (pushname) => {
    return `
Hi Kak ${pushname}👋️, selamat datang di LinguaBot WhatsApp pintar yang siap membantumu.
Follow Ig Admin Untuk Menunjukan Support Terhadap Bot ini
https://instagram.com/wrld.yukii

Prefix : /

                    「  Menu Logo ❤️ 」

1. *${prefix}ninja*
Untuk membuat gambaar ninja dengan text
Usage: ketik /ninja |teks1|teks2
Contoh: /ninja |Lingua|bot

2. *${prefix}firemaker*
Untuk membuat gambar logo api dengan text anda 
Usage: Ketik /ffmaker teksnya
        
3. *${prefix}wolf*
Untun membuat gambar wolf dengan text 
Usage: ketik /wolf |teks1|teks
Contoh: /wolf |Lingua|bot
        
4. *${prefix}wolf2*
Untun membuat gambar wolf dengan text 
Usage: ketik /wolf2 |teks1|teks2
Contoh: /wolf2 |Lingua|bot

5. *${prefix}gmlogo*
Untuk Membuat logo gaming ges ya
Usage: ketik /gmlogo namalo

6. *${prefix}ffmaker*
Untuk membuat gambar dengan teks anda
list hero ? ketik /listhero
Usage: ketik /ffmaker hero | nama kalean
Contoh: /ffmaker alok | Lingua

7. *${prefix}bannerff*
Untuk membuat gambar banner dengan teks anda
Usage: ketik /bannerff title | nama kalean
Contoh: /bannerff yuu | Lingua

8. *${prefix}mlmaker*
Untuk membuat gambar dengan teks anda
Usage: ketik /mlmaker miya | namalo

9. *${prefix}galaxytext*
Untuk membuat text galaxy
Usage: ketik /galaxytext teksnya
Contoh: /galaxytext LinguaBot

10. *${prefix}glowtext*
Untuk membuat glowtext
Usage: ketik /glowtext teksnya
Contoh: /glowtext LinguaBot

11. *${prefix}trumptweet*
Untuk mendapatkan gambaran tweet trump dengan text kalian
Aliases: -
Usage: /trumptweet teksnya

12. *${prefix}phcomment*
Untuk mendapatkan gambaran pornhub dengan comment kalian
Aliases: - 
Usage: Kirim gambar dengan caption /phcomment username | teksnya

13. *${prefix}thunder*
gambar thunder yang bisa di isi text oleh kalian
Aliases: -
Usage: Silahkan ketik /thunder namalo

14. *${prefix}blackpink*
gambar logo blackpink yang bisa di isi text oleh kalian
Aliases: -
Usage: Silahkan ketik /blackpink namalo

15. *${prefix}slightning*
sticker lightning yang bisa di isi text oleh kalian
Aliases: -
Usage: Silahkan kirim gambar dengan /slightning

16. *${prefix}sfire*
sticker fire yang bisa di isi text oleh kalian
Aliases: -
Usage: Silahkan kirim gambar dengan /sfire

17 *${prefix}hilang*
Membuat gambar missing person.
Aliases: -
Usage: Kirim gambar dengan caption *${prefix}hilang* teks_atas | teks_tengah | teks_bawah atau reply gambar dengan caption *${prefix}missing* teks_atas | teks_tengah | teks_bawah.

18. *${prefix}valentine*
Membuat gambar valentine.
Aliases: -
Usage: Kirim gambar pasangan dengan caption *${prefix}valentine* nama | pasangan atau reply gambar pasangan dengan caption *${prefix}valentine* nama | pasangan.

19. *${prefix}slidingtext*
Untuk membuat gambar ada textnya
Aliases: -
Usage: Silahkan ketik /slidingtext textnya

20. *${prefix}quotemaker*
Untuk membuat quotes
Usage: ketik */quotemaker* |isi quote|author|theme
contoh: ${prefix}quotemaker |aku sayang kamu|-aruga|random untuk theme nya pakai random ya kak

21. *${prefix}heroml*
Gambar hero ml , ketik /heroml namaheronya
Aliases: -

22. *${prefix}pornhub*
gambar logo pornhub yang bisa di isi text oleh kalian
Aliases: -
Usage: Silahkan ketik /pornhub namalo|sampingnya

23. *${prefix}glitext*
gambar yang bisa di isi text glitch oleh kalian
Aliases: -
Usage: Silahkan ketik /glitext namalo | pasanganlo atau siapalo
Des: harus dilongkap ya namalo | pasanganlo

24. *${prefix}hartatahta*
Membuat hartatahta.
Aliases: -
Usage : Silahkan ketik /hartatahta namalo

25. *${prefix}dropwater*
Membuat dropwater
Aliases: -
Usage: Silahkan ketik /dropwater teksnya

26. *${prefix}style*
Membuat style
Aliases: -
Usage: Silahkan ketik /style teksnya

27. *${prefix}breakwall*
Membuat breakwall
Aliases: -
Usage: Silahkan ketik /breakwall teksnya

Selamat menikmati✨
_made with_❤️ @LinguaBot

    `
}

exports.textmenunulis = (pushname) => {
    return `
Hi Kak ${pushname}👋️, selamat datang di LinguaBot WhatsApp pintar yang siap membantumu.
Follow Ig Admin Untuk Menunjukan Support Terhadap Bot ini
https://instagram.com/wrld.yukii

*▸ Menu Bot Nulis*
a. */nuliskiri* = nulis di buku tulis lembar kiri
b. */nuliskanan* = nulis di buku tulis lembar kanan
c. */foliokiri* = nulis di kertas folio lembar kiri
d. */foliokanan* = nulis di kertas folio lembar kanan
e. */nulishd* = nulis di buku tulis hd

Selamat menikmati✨
_made with_❤️ @LinguaBot

`
}

exports.textmenupremium = (pushname) => {
    return `
Hi Kak ${pushname}👋️, selamat datang di LinguaBot WhatsApp pintar yang siap membantumu.
Follow Ig Admin Untuk Menunjukan Support Terhadap Bot ini
${sosmed}

Menu premium : 

1. *${prefix}brainly*
mendapatkan jawaban dari brainly
Aliases: -
Usage: Silahkan ketik /brainly soalnya 
contoh: /brainly penemu lampu .2

2. *${prefix}cersex*
Mendapatkan cersex
Usage: /cersex

Selamat menikmati✨
_made with_❤️ @LinguaBot

`
}
exports.textownermenu = (pushname) => {
 return `
Hi Kak ${pushname}👋️, selamat datang di LinguaBot WhatsApp pintar yang siap membantumu.
Follow Ig Admin Untuk Menunjukan Support Terhadap Bot ini
${sosmed}
Berikut fitur yang dapat di gunakan pada bot ini✨

Tentang Bot:

1. *${prefix}tnc*
Untuk mendapatkan info bot


2. *${prefix}join*
membuat bot join ke grupmu

Owner Bot:

1. *${prefix}ban* - banned
fitur owner

2. *${prefix}bc* - promosi
fitur owner

3. *${prefix}leaveall* - keluar semua grup
fitur owner

4. *${prefix}clearall* - hapus semua chat
fitur owner

Selamat menikmati✨
_made with_❤️ @LinguaBot
`
}

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada ❣ *LinguaBot* ❣!

🐼 *${prefix}add*
🐼 *${prefix}kick* @tag
🐼 *${prefix}promote* @tag
🐼 *${prefix}mutegrup* 
🐼 *${prefix}setprofile* 
🐼 *${prefix}demote* @tag
🐼 *${prefix}tagall*
🐼 *${prefix}del*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada ❣ *LinguaBot* ❣!
🐼 *${prefix}kickall*
*Owner Group adalah pembuat grup.*
`
}


exports.textRules = (pushname) => {
    return `
-----[ THE RULES ]-----
1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*
2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*
3. Jangan mengeksploitasi bot.
Sanksi: *PERMANENT BLOCK*
Jika sudah dipahamin rules-nya, silakan ketik */menu* untuk memulai!
Source code oleh:
YuuXD (Lingua)
    `
}

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

Kirim dana seikhlasnya isi pulsa ke nomor 089xxxxxxxxx

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih. -Lingua`
}

exports.textNsfw = () => {
    return `
-----[ NSFW ]-----
this fitur under maintenance
    `
}
// 1. */lewds* (PREMIUM ONLY)
// Mengirim gambar anime lewd.
// Aliases: *lewd*
// Usage: */lewds*
// 2. */multilewds*
// Mengirim up to 5 anime lewd pics. (PREMIUM ONLY)
// Aliases: *multilewds multilewd mlewd mlewds*
// Usage: 	*/multilewds*
// 3. */nh*  (PREMIUM ONLY)
// Mengirim info doujinshi dari nHentai.
// Aliases: -
// Usage: *!nh* <kode>
// 4. */nhdl*  (PREMIUM ONLY)
// Mendownload doujin dari nHentai sebagai file PDF. (PREMIUM ONLY)
// Aliases: -
// Usage: */nhdl* <kode>
// 6. */multifetish*  (PREMIUM ONLY)
// Mengirim up to 5 fetish pics. (PREMIUM ONLY)
// Aliases: *mfetish*
// Usage: */multifetish* <armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao></kode>