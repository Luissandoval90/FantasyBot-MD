// Código echó por @Wilsmac
// código parchado por @Wilmer
// https://github.com/Wilsmac
let handler = async (m, { text, conn, usedPrefix, command }) => {        let why = `*𝑬𝑻𝑰𝑸𝑼𝑬𝑻𝑨 𝑨𝑳𝑨 𝑷𝑬𝑹𝑺𝑶𝑵𝑨 𝑸𝑼𝑬 𝑸𝑼𝑰𝑬𝑹𝑬 𝑸𝑼𝑬 𝑩𝑳𝑶𝑸𝑼𝑬𝑬, 𝑬𝑱𝑬𝑴𝑷𝑳𝑶:*\n${usedPrefix + command} @${m.sender.split("@")[0]}` let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false if (!who) conn.reply(m.chat, why, m, { mentions: [m.sender] }) let res = []; console.log(command) switch (command) { case "blok": case "block": case "bloquear"; if (who) await conn.updateBlockStatus(who, "block").then(() => { res.push(who); }) else conn.reply(m.chat, why, m, { mentions: [m.sender] }) break case "unblok": case "unblock": case "desbloquear": if (who) await conn.updateBlockStatus(who, "unblock").then(() => { res.push(who); }) else conn.reply(m.chat, why, m, { mentions: [m.sender] }) break } if (res[0]) conn.reply(m.chat, `*𝑬𝑿𝑰𝑻𝑶, 𝑭𝑼𝑬 𝑫𝑬𝑺𝑩𝑳𝑶𝑸𝑼𝑬𝑨𝑵𝑫𝑶 𝑬𝑿𝑰𝑻𝑶𝑺𝑨𝑴𝑬𝑵𝑻𝑬 ${command} ${res ? `${res.map(v => '@' + v.split("@")[0])}` : ''}*`, m, { mentions: res })         }    handler.help = ["block", "unblock"]    handler.tags = ["owner"]    handler.command = /^(block|unblock|bloquear|desbloquear)$/i  handler.owner = true  export default handler
//𝑯𝒐𝒍𝒂, 𝑸𝒖𝒆 𝒕𝒆𝒏𝒈𝒂𝒔 𝒖𝒏 𝒍𝒊𝒏𝒅𝒐 𝒅𝒊́𝒂
// Ｏ(≧∇≦)Ｏ
