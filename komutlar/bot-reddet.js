const Discord = require('discord.js');
const db = require("croxydb")

exports.run = function(client, message, args) {

  let rol = db.get(`yetkili.rol_${message.guild.id}`)
  if (!message.member.roles.cache.has(rol)) return message.channel.send(`:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
	let MoTion42 = args[0]
  let sahip = db.get(`bot_${MoTion42}`)
  let sebep = args.slice(1).join(" ")
	let log = db.get(`basvuru.log_${message.guild.id}`)
	
	if (!MoTion42) return message.channel.send(`:no_entry: Botun idsini yazmalısın.`).then(msg => msg.delete({timeout:10000}))
  if (!sebep) return message.channel.send(`:no_entry: Botu neden onaylamadığını yazmalısın.`).then(msg => msg.delete({timeout:10000}))
  message.delete()
  db.delete(`bot_${MoTion42}`)
		client.channels.cache.get(log).send(`:no_entry: <@${sahip}> adlı kişini <@${MoTion42}> adlı botu reddedildi. Sebep : **${sebep}**\nReddeden Yetkili: ${message.author} `);
		message.channel.send(`:white_check_mark: Botu reddettiniz.`).then(msg => msg.delete({ timeout: 10000 }))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bot-reddet', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};