const dc = require("discord.js")
const db = require("croxydb")

exports.run = async (client, message, args) => {

if (message.author.id !== 'sahip id' && message.author.id !== "sahip id 2")return message.reply("Sen sahibim değilsin!")


  let başvuru_kanal = await db.get(`basvuru.kanal_${message.guild.id}`)
  let başvuru_log = await db.get(`basvuru.log_${message.guild.id}`)
  let yetkili_log = await db.get(`yetkili.log_${message.guild.id}`)
  let yetkili_rol = await db.get(`yetkili.rol_${message.guild.id}`)
  let developer_rol = await db.get(`developer.rol_${message.guild.id}`)
  let bot_rol = await db.get(`bot.rol_${message.guild.id}`)




  let başvuru_k;
  if(!başvuru_kanal) {
    başvuru_k = ":x:"
  } else {
    başvuru_k = `<#${başvuru_kanal}>`
  }
  
  let başvuru_l;
  if(!başvuru_log) {
    başvuru_l = ":x:"
  } else {
    başvuru_l = `<#${başvuru_log}>`
  }
  
  let yetkili_l;
  if(!yetkili_log) {
    yetkili_l = ":x:"
  } else {
    yetkili_l = `<#${yetkili_log}>`
  }
  
  let yetkili_r;
  if(!yetkili_rol) {
    yetkili_r = ":x:"
  } else {
    yetkili_r = `<@&${yetkili_rol}>`
  }
  
  let bot_r;
  if(!bot_rol) {
    bot_r = ":x:"
  } else {
    bot_r = `<@&${bot_rol}>`
  }
  
  let dev_r;
  if(!developer_rol) {
    dev_r = ":x:"
  } else {
    dev_r = `<@&${developer_rol}>`
  }
  
  

    let botlist = new dc.MessageEmbed()
     .setAuthor(message.guild.name + " sunucusunun botlist ayarları")
     .addField("Başvuru Kanal", başvuru_k, true)
     .addField("Başvuru Log", başvuru_l, true)
     .addField("Yetkili Log", yetkili_l, true)
     .addField("Yetkili Rol", yetkili_r, true)
     .addField("Developer Rol", dev_r, true)
     .addField("Bot Rol", bot_r, true)
     .setColor("#f698d4")
     .setThumbnail(message.guild.iconURL({dynamic: true}))
     .setFooter(client.user.username, client.user.avatarURL())
     .setTimestamp()
    message.channel.send(botlist);

  }
exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: [],
 permLevel: 0
};
exports.help = {
  name: "ayarlar-durum"
};

