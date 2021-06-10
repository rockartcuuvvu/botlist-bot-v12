const Discord = require("discord.js");
const db = require("croxydb");

exports.run = function(client, message, args) {
  message.delete()
  let kullanan = new Discord.MessageEmbed()
    .setTitle("Birisi Botlist Bugunu Kullanmaya Çalıştı")
    .setDescription(`**Bugu Kullanmaya Çalışan Kişi**\n> Adı: **${message.author.tag}**\n> ID'si: **${message.author.id}**`)
    .setColor("#f698d4")
    .setThumbnail(message.author.avatarURL())
    .setFooter("MoTion42 - List", client.user.avatarURL())
    .setTimestamp();

  let MoTion42 = args[0];
  let prefix = args[1];
  let onaylımı = args.slice(2).join(" ")
  let yetkili = db.get(`yetkili.log_${message.guild.id}`);
  let basvuru = db.get(`basvuru.kanal_${message.guild.id}`);
  let log = db.get(`basvuru.log_${message.guild.id}`);

  if (message.content.includes("everyone"))
    return message.channel
      .send("Ben Akıllı Bir Botum Seni Bildirdim!")
      .then(x => x.delete({ timeout: 10000 }))
      .then(client.channels.cache.get(yetkili).send(kullanan));
  if (message.content.includes("here"))
    return message.channel
      .send("Ben Akıllı Bir Botum Seni Bildirdim!")
      .then(x => x.delete({ timeout: 10000 }))
      .then(client.channels.cache.get(yetkili).send(kullanan))
   if (message.content.includes("&"))
    return message.channel
      .send("Ben Akıllı Bir Botum Seni Bildirdim!")
      .then(x => x.delete({ timeout: 10000 }))
      .then(client.channels.cache.get(yetkili).send(kullanan));
  if (message.channel.id !== basvuru)
    return message
      .reply(`Bu komutu sadece <#${basvuru}> kanalında kullanabilirsin.`)
      .then(msg => msg.delete({ timeout: 10000 }));
  if (message.channel.id == basvuru) {
    if (!MoTion42)
      return message.channel
        .send(`:no_entry: Botunun ID'sini yazmalısın.`)
        .then(msg => msg.delete({ timeout: 10000 }));
    if (!prefix)
      return message.channel
        .send(`:no_entry: Botunun prefixini yazmalısın.`)
        .then(msg => msg.delete({ timeout: 10000 }));
    if (!onaylımı)
      return message.channel
        .send(`:no_entry: Botunun Dbl onaylımı onu yazmalısın`)
        .then(msg => msg.delete({ timeout: 10000 }));
    
    db.set(`bot_${MoTion42}`, message.author.id);
    const embed = new Discord.MessageEmbed().setColor("#f698d4")
      .setDescription(`
●▬▬▬▬▬▬▬▬[Sahip Bilgiler]▬▬▬▬▬▬▬▬●

> **Bot Sahibi** - \`${message.author.tag}\`
> **Bot Sahibi ID** - \`${message.author.id}\`

●▬▬▬▬▬▬▬▬▬[Bot Bilgiler]▬▬▬▬▬▬▬▬▬●

> **Bot ID** - \`${MoTion42}\`
> **Bot Prefix** - \`${prefix}\`
> **Bot Onaylımı?** - \`${onaylımı}\`
> **Bot Davet Linki** - ${`https://discordapp.com/oauth2/authorize?client_id=${MoTion42}&scope=bot&permissions=0`}
`);
    client.channels.cache.get(yetkili).send(embed);
    client.channels.cache
      .get(log)
      .send(
        `:white_check_mark: ${message.author} adlı kullanıcının <@${MoTion42}> adlı botu sıraya ekledi. Botu onaylanmayı bekliyor.`
      );
    message.channel
      .send(`:white_check_mark: Bot ekleme isteğiniz alındı.`)
      .then(msg => msg.delete({ timeout: 10000 }));
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "bot-ekle",
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: "bot-ekle <botid> <prefix>"
};
