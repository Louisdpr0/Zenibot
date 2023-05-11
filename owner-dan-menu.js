const fs = require('fs')

global.namabot = "Powered by LouisdPr0"
global.namaowner = "V"
global.footer_text = "© " + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['6289653898291']
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `Qris All Payment 
Ovo
Dana
Gopay

Mau ganti payment? ketik .setpay
`
module.exports.helpMenu = (pushname) =>{
  return `Halo ${pushname}

*「 FITUR BOT 」*

\`\`\`• !owner
• !addsewa
• !delsewa
• !ceksewa
• !listsewa
• !pay
• !setpay
• !list
• !addlist
• !updatelist
• !dellist
• !jeda
• !tambah
• !kurang
• !kali
• !bagi
• !setproses
• !changeproses
• !delsetproses
• !setdone
• !changedone
• !delsetdone
• !proses
• !done
• !welcome
• !goodbye
• !setwelcome
• !changewelcome
• !delsetwelcome
• !setleft
• !changeleft
• !delsetleft
• !antiwame
• !antiwame2
• !antilink
• !antilink2
• !open
• !close
• !hidetag
\`\`\`

*「 SEWABOT 」*

*Harga Sewa*
30 Days = 10.000 *(1 GRUP)*

_*Minat Chat Owner/Ketik #owner*_`
}
