const Discord = require('discord.js');
const db = require("croxydb")

exports.run = function(client, message, args) {

  let rol = db.get(`yetkili.rol_${message.guild.id}`)
  let devrol = db.get(`developer.rol_${message.guild.id}`)
  if (!message.member.roles.cache.has(rol)) return message.channel.send(`:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
	let MoTion42 = args[0]
  let sahip = db.get(`bot_${MoTion42}`)
	let log = db.get(`basvuru.log_${message.guild.id}`)
	
	if (!MoTion42) return message.channel.send(`:no_entry: Botun idsini yazmalısın.`).then(msg => msg.delete({timeout:10000}))
  message.delete()
  let kisi = message.guild.members.cache.get(sahip)
  console.log(kisi)
  kisi.roles.add(devrol)
  db.delete(`bot_${MoTion42}`)
		client.channels.cache.get(log).send(`:white_check_mark: <@${sahip}> adlı kişinin <@${MoTion42}> adlı botu onaylandı.\nOnaylayan Yetkili: ${message.author}`);
		message.channel.send(`:white_check_mark: Botu onayladınız.`).then(msg => msg.delete({timeout:10000}))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bot-onayla', 
  description: "Sunucuya eklenen botu onaylar.",
  usage: 'botonayla <bot ismi>'
};