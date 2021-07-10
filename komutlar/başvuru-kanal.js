const Discord = require("discord.js");
const settings = require("../settings.json");
const db = require("croxydb");

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(`You must have \`Admin\` permission to use this command!`);
  if (!args[0])
    return message.channel.send(`**Incorrect usage.** \n\`Example:\` **b!reference-set channel** \`#channel\``);
  if (args[0] === "set") {
    let channel = message.mentions.channels.first();
    if (!channel) {
      return message.channel.send(`**Incorrect usage.** \n\`Example:\` **b!reference-set channel** \`#channel\``);
    }
    db.set(`submission.channel_${message.guild.id}`, channel.id);
    let a = new Discord.MessageEmbed()
    .setTitle("Reference channel set")
    .setDescription("```Reference channel is set. Please make other settings for botlist system to work properly.```")
    .addField("Configured Channel", `<#${channel.id}>`)
    .setFooter(client.user.username, client.user.avatarURL())
    .setTimestamp()
    .setColor("#f698d4");
    message.channel.send(a)
  } else if (args[0] === "reset") {
    db.delete(`application.channel_${message.guild.id}`);
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
  name: "reference-channel",
  description: "Sets referral channel.",
  usage: "reference-channel #channel"
};
