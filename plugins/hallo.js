let handler = async (m, { conn, participants }) => {
 m.reply('Hai, Saya PediaBOT Ada Yang Bisa Saya Bantu? Seperti Mengirim Chat Confess,Membuat Sticker Atau menu hep fun?🗿')
 }
 handler.help = ['Hallo','Halo']
 handler.tags = ['main']
 
 handler.customPrefix = /Hallo|Halo$/i
 handler.command = new RegExp
 module.exports = handler