let handler = function (m) {
  // this.sendContact(m.chat, '6285877276864', 'Nurutomo', m)
  conn.sendContact(m.chat, '6285877276864', 'PediaBotz', m)
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
