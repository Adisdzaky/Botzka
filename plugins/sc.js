let handler = async (m, { conn, usedPrefix }) => { 
      conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: 1339889,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: `
╭─「 Mau Esceh??? 」
│ • Mau sc buy ke owner
│ • support panel
│ • support termux
╰────

╭─「 Minat??? 」
│ • Wa owner
│ • https://wa.me/6285877276864
╰────
`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}

handler.help = ['sc']
handler.tags = ['info']
handler.command = /^sc$/i

module.exports = handler