const Discord = require('discord.js')
const db = require("croxydb")


exports.run = async(client, message, args) => {
  
const motion42 = new Discord.MessageEmbed()

  .setColor('#f698d4')
  .setThumbnail("https://cdn.discordapp.com/attachments/815177653162082337/815581805888798741/bc05d5d7859ba639aee30d2e38455739.png")
  .setTimestamp()
  .setFooter(`MoTion42 List`,client.user.avatarURL())  
  .setAuthor(client.user.username,"https://cdn.discordapp.com/attachments/815177653162082337/815581805888798741/bc05d5d7859ba639aee30d2e38455739.png")
  .setDescription(`
:pushpin:                                            **__Bot List Kurallar__**                                            :pushpin:

\`1)\` Botunuzda En Az 25 Komut Olmalıdır.

\`2)\` Botunuzun En Az 25 Gün Önce Açılması Gerek 

\`3)\` Dm-Duyuru Komutu Olmamalıdır.

\`4)\` Botunuz Ban Botu Olmamalıdır.

\`5)\` Ailemiz Top10 Tarzı Komutlar Olmamalıdır.

\`6)\` Botunuz Saldırı Botu Olmamalıdır.

\`7)\` AntiSpam ve Dm Hg BB komutları ayarlamalı olmalıdır.

\`8)\` \`90\` Saatten Fazla Çevrimdışı Olmamalıdır

\`9)\` Botunuz en az \`40.000\` kullanıcı ve \`40\` sunucu olmalıdır.

\`10)\` Botunuzu Ekledikten Sonra Yetkililere Ne Zaman Kontrol Edeceksiniz , Şu Kadar Zaman Oldu Gibi Yazmak Ban Sebebidir.

\`11)\` \`b!bot-ekle\` komutunu spamlayak yasak. \`(Karaliste alınırsınız)\`

\`12)\` Botunuzda everyone - here ve ya her hangi bi rolü herkese açık şekilde etiketlemek varsa açık şekilde botunuz onaylanmaz.

:gear: **__Bot Nasıl Eklenir?__** :gear:

<#815285905061052426> Kanalına gelib \`b!bot-ekle\` \`bot-id\` \`prefix\` \`dbl-onay-durumu\` şeklinde başvuru yolluyorsunuz.

:dizzy: \`Not:\` Botunuz Onaylı İse Direk Eklenir.
:dizzy: \`Not2:\` Botunuz **DBL** onaylıysa direk onaylanır. 

`)
 
return message.channel.send(motion42)

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'bilgilendirme',
    description: 'bilgilendirme',
    usage: 'bilgilendirme'
}
