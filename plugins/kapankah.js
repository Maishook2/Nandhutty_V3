let handler = async (m, { conn }) => {
  m.reply(`
*Question:* ${m.text}
*Answer:* ${Math.floor(Math.random() * 10)} ${conn.pickRandom(['second', 'minute', 'hour', 'day', 'week', 'month', 'year', 'decade', 'century'])} again ...
`.trim())
}
handler.help = ['', 'kah'].map(v => 'kapan' + v + ' <teks>?')
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^kapan(kah)?$/i

module.exports = handler 
