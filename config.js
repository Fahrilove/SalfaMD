global.owner = [
    ['628891757884'],
    ['628891757884'],
    ['628891757884', 'FahriOFFC', true]
  ]
global.mods = ['628891757884']
global.prems = ['628891757884', '628891757884']

global.APIs = {
  alya: 'https://api.alyachan.pro'
}
global.APIKeys = {
  'https://api.alyachan.pro': 'Iecj8o' // Silahkan register dulu
}

global.set = {
  link: 'https://chat.whatsapp.com/', // Link 
  thumbnail: 'https://telegra.ph/file/7b7e30dc6d48d17642acc.jpg', // Ukuran max thumbnail 150kb
  wm: `© SALFA - MD' v${require('./package.json').version}`, // Watermark
  footer: 'ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ SALFAMD', // Footer 
  packname: 'FahriOFFC X', //packname sticker
  author: 'SALFAMD' //author sticker
}

global.multiplier = 100 // Semakin besar, semakin sulit naik level
global.max_upload = 70 // Max ukuran upload bot
global.intervalmsg = 1800 // Supaya tidak spam

global.Func = new (require('./lib/functions')) // Function biar gampang
global.scrap = require('./lib/scrape') // Scraper

global.status = {
  // Pesan status
  wait: 'Tunggu sebentar..',
  invalid: 'URL tidak valid.',
  wrong: 'Format salah.',
  error: 'Terjadi kesalahan.',
  premium: 'Fitur ini hanya untuk pengguna premium.',
  admin: 'Perintah ini khusus untuk Admin.',
  botAdmin: 'Jadikan bot admin untuk menggunakan perintah ini.',
  owner: 'Perintah ini hanya untuk Owner.',
  mod: 'Perintah ini hanya untuk Moderator.',
  group: 'Perintah ini khusus Grup.',
  private: 'Perintah ini khusus chat pribadi.',
  register: 'Silahkan daftar terlebih dahulu untuk menggunakan perintah ini.',
  game: 'Fitur game belum diaktifkan.',
  rpg: 'Fitur RPG belum diaktifkan.'
}

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈',
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚',
    }
    let results = Object.keys(emot).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  },
}

const fs = require('fs')
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})