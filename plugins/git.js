let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let haruno = `â ã ðððã
    sá´ÊÊÊ ÊÊá´ á´¡á´ Êá´á´ á´É´'á´ Êá´Êá´á´sá´á´ á´ÊÉªs Êá´á´ ð
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://raw.githubusercontent.com/Arjun-ser-ofc/Arjunser/main/Millie/20220204_171905.jpg")).buffer(), haruno, 'watermark', 'á´á´É´á´', '.menu', 'á´á´¡É´á´Ê', '.owner', m)
}
handler.tags = ['main']
handler.help = ['git']
handler.command = /^(git)$/i
module.exports = handler
