const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("croxydb");

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(`Bu komutu kullanabilmek için \`Yönetici\` iznine sahip olmalısın!`);
  if (!args[0])
    return message.channel.send(`**Yanlış kullanım.** \n\`Örnek:\` **b!bot-rol ayarla** \`@rol\``);
  if (args[0] === "ayarla") {
    let role = message.mentions.roles.first();
    if (!role) {
      return message.channel.send(`**Yanlış kullanım.** \n\`Örnek:\` **b!bot-rol ayarla** \`@rol\``);
    }
    db.set(`bot.rol_${message.guild.id}`, role.id);
    let a = new Discord.MessageEmbed()
    .setTitle("Bot rolü ayarlandı")
    .setDescription("```Bot rolü başarıyla ayarlandı. Botlist sisteminin düzgün çalışması için diğer ayarlarıda yapınız.```")
    .addField("Ayarlanan Rol", `<@&${role.id}>`)
    .setFooter(client.user.username, client.user.avatarURL())
    .setTimestamp()
    .setColor("#f698d4");
    message.channel.send(a)
  } else if (args[0] === "sıfırla") {
    db.delete(`bot.rol_${message.guild.id}`);
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
  name: "bot-rol",
  description: "Başvuru kanalını ayarlar.",
  usage: "başvuru-kanal #kanal"
};
