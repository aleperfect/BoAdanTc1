let handler = async (m, { conn, usedPrefix, command, paypal }) => {
conn.sendMessage(m.chat, {text:'*[ ⚠️ ] no etiquetes a unos de mis creadores si tienes alguna consulta o duda hablale a su privado solo por tema de ADAN*'},  { quoted: m })
}
handler.help = ['pagina']
handler.tags = ['info']
handler.command = /^@56940831045$/i
export default handler
