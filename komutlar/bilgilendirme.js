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
:pushpin: **__Bot List Rules__** :pushpin:

\`1)\` Your bot must have at least 25 commands.

\`2)\` Your bot must be opened at least 25 days ago

\`3)\` Should Not Be a Dm-Announcement Command.

\`4)\` Your bot should not be a Ban bot.

\`5)\` Our Family Shouldn't Be Top10 Style Commands.

\`6)\` Your bot must not be an Attack Bot.

\`7)\` AntiSpam and Dm Hg BB commands should be set.

\`8)\` Must Not Be Offline For More Than 90\` Hours

\`9)\` Your bot must have at least \`40.000\` users and \`40\` servers.

\`10)\` When You Will Check The Authorities After Adding Your Bot, Writing It Like It Has Been Banned.

\`11)\` Spamming the command \`b!bot-add\` is prohibited. \`(You will be blacklisted)\`

\`12)\` If your bot has to publicly tag everyone - here or any role, your bot will not be approved explicitly.

:gear: **__How to Add Bot?__** :gear:

You come to <#815285905061052426> and submit an application as \`b!bot-add\` \`bot-id\` \`prefix\` \`dbl-approval-state\`

:dizzy: \`Note:\` If your bot is approved, it will be added directly.
:dizzy: \`Note2:\` If your bot is **DBL** approved, it will be approved directly.

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
    name: 'notify',
    description: 'information',
    usage: 'notify'
}
