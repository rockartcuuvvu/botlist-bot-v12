const Discord = require('discord.js')
const db = require("croxydb")


exports.run = async(client, message, args) => {
  
const MoTion42 = new Discord.MessageEmbed()
  .setColor('#f698d4')
  .setThumbnail("https://cdn.discordapp.com/attachments/815177653162082337/815581805888798741/bc05d5d7859ba639aee30d2e38455739.png")
  .setTimestamp()
  .setFooter(`MoTion42 List`,client.user.avatarURL())  
  .setAuthor(client.user.username,"https://cdn.discordapp.com/attachments/815177653162082337/815581805888798741/bc05d5d7859ba639aee30d2e38455739.png")
  .setDescription(`Bilgilendirme kısmını okumayı unutmayın! \`(b!bilgilendirme)\``)
  .addField(`\`b!bilgilendirme\``,`**Bot list hakkında bilgi**`, true) 
  .addField(`\`b!botlist-komutlar\``,`**Bot list komutları**`, true)
  .addField(`\`b!ayarlar-durum\``,`**Komutların Durumu**`, true)

return message.channel.send(MoTion42)

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'yardım',
    description: 'Yardım List.',
    usage: 'yardım'
}
