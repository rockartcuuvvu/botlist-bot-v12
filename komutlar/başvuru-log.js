const Discord = require("discord.js");
const settings = require("../settings.json");
const db = require("croxydb");

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(`You must have \`Admin\` permission to use this command!`);
  if (!args[0])
    return message.channel.send(`**Incorrect usage.** \n\`Example:\` **b!set reference-log** \`#channel\``);
  if (args[0] === "set") {
    let channel = message.mentions.channels.first();
    if (!channel) {
      return message.channel.send(`**Incorrect usage.** \n\`Example:\` **b!set reference-log** \`#channel\``);
    }
    db.set(`submission.log_${message.guild.id}`, channel.id);
    let a = new Discord.MessageEmbed()
    .setTitle("Reference log set")
    .setDescription("```Application log has been set successfully. Please make other settings for botlist system to work properly.```")
    .addField("Configured Channel", `<#${channel.id}>`)
    .setFooter(client.user.username, client.user.avatarURL())
    .setTimestamp()
    .setColor("#f698d4");
    message.channel.send(a)
  } else if (args[0] === "reset") {
    db.delete(`application.log_${message.guild.id}`);
    message.channel.send("Reset successfully.");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "reference-log",
  description: "Sets referral channel.",
  usage: "reference-channel #channel"
};
