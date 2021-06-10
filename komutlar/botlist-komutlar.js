const Discord = require('discord.js')
const db = require("croxydb")


exports.run = async(client, message, args) => {
  
const pink = new Discord.MessageEmbed()
  .setColor('#f698d4')
  .setThumbnail("https://cdn.discordapp.com/attachments/815177653162082337/815581805888798741/bc05d5d7859ba639aee30d2e38455739.png")
  .setTimestamp()
  .setFooter(`MoTion42 List`,client.user.avatarURL())  
  .setAuthor(client.user.username,"https://cdn.discordapp.com/attachments/815177653162082337/815581805888798741/bc05d5d7859ba639aee30d2e38455739.png")
  .addField('**» MoTion42 List Komutları**',`
╔═══════════════════════════════════╗
║**»** \`b!bot-ekle\` **Bot eklersiniz.**
║══════════════════════════════════
║**»** \`b!bot-onayla\` **Bot onaylarsınız.**
║══════════════════════════════════
║**»** \`b!bot-reddet\` **Bot reddedersiniz.**
║══════════════════════════════════
║**»** \`b!başvuru-log ayarla/sıfırla\` **Başvuru log kanalı ║ayarlarsınız.**
║══════════════════════════════════
║**»** \`b!başvuru-kanal ayarla/sıfırla\` **Başvuru kanalı ayarlarsınız.**
║══════════════════════════════════
║**»** \`b!bot-rol ayarla/sıfırla\` **Botlist botlarına otomatik rol ║verir.**
║══════════════════════════════════
║**»** \`b!developer-rol ayarla/sıfırla\` **Developer rolü ayarlarsınız.**
║══════════════════════════════════
║**»** \`b!yetkili-log ayarla/sıfırla\` **Yetkili log kanalı ayarlarsınız.**
║══════════════════════════════════
║**»** \`b!yetkili-rol ayarla/sıfırla\` **Botları onaylatıcak test ║edicek yetkili rol ayarlarsınız.**
╚═══════════════════════════════════╝
`)
 return message.channel.send(pink)

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'botlist-komutlar',
    description: 'BotList.',
    usage: 'botlist-komutlar'
}
