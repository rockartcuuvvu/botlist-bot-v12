const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("croxydb");

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(`Bu komutu kullanabilmek için \`Yönetici\` iznine sahip olmalısın!`);
  if (!args[0])
    return message.channel.send(`**Yanlış kullanım.** \n\`Örnek:\` **b!yetkili-rol ayarla** \`@rol\``);
  if (args[0] === "ayarla") {
    let role = message.mentions.roles.first();
    if (!role) {
      return message.channel.send(`**Yanlış kullanım.** \n\`Örnek:\` **b!yetkili-rol ayarla** \`@rol\``);
    }
    db.set(`yetkili.rol_${message.guild.id}`, role.id);
    let a = new Discord.MessageEmbed()
    .setTitle("Yetkili rol ayarlandı")
    .setDescription("```Yetkili rol başarıyla ayarlandı. Botlist sisteminin düzgün çalışması için diğer ayarlarıda yapınız.```")
    .addField("Ayarlanan Rol", `<@&${role.id}>`)
    .setFooter(client.user.username, client.user.avatarURL())
    .setTimestamp()
    .setColor("#f698d4");
    message.channel.send(a)
  } else if (args[0] === "sıfırla") {
    db.delete(`yetkili.rol_${message.guild.id}`);
    message.channel.send("Başarıyla sıfırlandı.");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yetkilirol", "yetkili-rol"],
  permLevel: 0
};

exports.help = {
  name: "yetkili-rol",
  description: "Başvuru kanalını ayarlar.",
  usage: "başvuru-kanal #kanal"
};
