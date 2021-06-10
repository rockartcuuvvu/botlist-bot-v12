const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("croxydb");

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(`Bu komutu kullanabilmek için \`Yönetici\` iznine sahip olmalısın!`);
  if (!args[0])
    return message.channel.send(`**Yanlış kullanım.** \n\`Örnek:\` **b!başvuru-kanal ayarla** \`#kanal\``);
  if (args[0] === "ayarla") {
    let channel = message.mentions.channels.first();
    if (!channel) {
      return message.channel.send(`**Yanlış kullanım.** \n\`Örnek:\` **b!başvuru-kanal ayarla** \`#kanal\``);
    }
    db.set(`basvuru.kanal_${message.guild.id}`, channel.id);
    let a = new Discord.MessageEmbed()
    .setTitle("Başvuru kanalı ayarlandı")
    .setDescription("```Başvuru kanalı ayarlandı. Botlist sisteminin düzgün çalışması için diğer ayarlarıda yapınız.```")
    .addField("Ayarlanan Kanal", `<#${channel.id}>`)
    .setFooter(client.user.username, client.user.avatarURL())
    .setTimestamp()
    .setColor("#f698d4");
    message.channel.send(a)
  } else if (args[0] === "sıfırla") {
    db.delete(`basvuru.kanal_${message.guild.id}`);
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
  name: "başvuru-kanal",
  description: "Başvuru kanalını ayarlar.",
  usage: "başvuru-kanal #kanal"
};
