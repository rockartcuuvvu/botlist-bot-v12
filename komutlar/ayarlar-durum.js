const dc = require("discord.js")
const db = require("croxydb")

exports.run = async (client, message, args) => {

if (message.author.id !== 'owner id' && message.author.id !== "owner id 2")return message.reply("You are not the owner!")


  let reference_channel = await db.get(`application.channel_${message.guild.id}`)
  let reference_log = await db.get(`application.log_${message.guild.id}`)
  let authorized_log = await db.get(`authorized.log_${message.guild.id}`)
  let authorized_role = await db.get(`authorized.role_${message.guild.id}`)
  let developer_role = await db.get(`developer.rol_${message.guild.id}`)
  let bot_role = await db.get(`bot.role_${message.guild.id}`)




  let reference_k;
  if(!reference_channel) {
    reference_k = ":x:"
  } else {
    reference_k = `<#${reference_channel}>`
  }
  
  let reference_l;
  if(!reference_log) {
    reference_l = ":x:"
  } else {
    reference_l = `<#${reference_log}>`
  }
  
  let authorized_l;
  if(!authorized_log) {
    authorized_l = ":x:"
  } else {
    authorized_l = `<#${authorized_log}>`
  }
  
  let authorized_r;
  if(!authorized_role) {
    authorized_r = ":x:"
  } else {
    authorized_r = `<@&${authorized_role}>`
  }
  
  let bot_r;
  if(!bot_role) {
    bot_r = ":x:"
  } else {
    bot_r = `<@&${bot_role}>`
  }
  
  let dev_r;
  if(!developer_role) {
    dev_r = ":x:"
  } else {
    dev_r = `<@&${developer_role}>`
  }
  
  

    let botlist = new dc.MessageEmbed()
     .setAuthor(message.guild.name + " botlist settings of the server")
     .addField("Reference Channel", reference_k, true)
     .addField("Reference Log", reference_l, true)
     .addField("Authorized Log", authorized_l, true)
     .addField("Authorized Role", authorized_r, true)
     .addField("Developer Role", dev_r, true)
     .addField("Bot Role", bot_r, true)
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
  name: "settings-state"
};
