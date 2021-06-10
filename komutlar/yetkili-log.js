const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("croxydb");

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(`Bu komutu kullanabilmek için \`Yönetici\` iznine sahip olmalısın!`);
  if (!args[0])
    return message.channel.send(`**Yanlış kullanım.** \n\`Örnek:\` **b!yetkili-log ayarla** \`#kanal\``);
  if (args[0] === "ayarla") {
    let channel = message.mentions.channels.first();
    if (!channel) {
      return message.channel.send(`**Yanlış kullanım.** \n\`Örnek:\` **b!yetkili-log ayarla** \`#kanal\``);
    }
    db.set(`yetkili.log_${message.guild.id}`, channel.id);
    let a = new Discord.MessageEmbed()
    .setTitle("Yetkili log ayarlandı")
    .setDescription("```Yetkili log başarıyla ayarlandı. Botlist sisteminin düzgün çalışması için diğer ayarlarıda yapınız.```")
    .addField("Ayarlanan Kanal", `<#${channel.id}>`)
    .setFooter(client.user.username, client.user.avatarURL())
    .setTimestamp()
    .setColor("#f698d4");
    message.channel.send(a)
  } else if (args[0] === "sıfırla") {
    db.delete(`yetkili.log_${message.guild.id}`);
    message.channel.send("Başarıyla sıfırlandı.");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yetkili-log",
  description: "Başvuru kanalını ayarlar.",
  usage: "başvuru-kanal #kanal"
};
