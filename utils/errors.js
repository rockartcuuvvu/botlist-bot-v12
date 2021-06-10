const Discord = require("discord.js");
const fs = require("fs");
let ayarlar = require("../ayarlar.json");

module.exports.noPerms = (message, perm) => {

let motion42 = new Discord.MessageEmbed()

    .setAuthor(message.author.username)
    .setTitle("Insufficient Permission")
    .setColor(ayarlar.red)
    .addField("Permission needed", perm);

return message.channel.send(motion42).then(m => m.delete(5000));

};

module.exports.equalPerms = (message, user, perms) => {

let motion42 = new Discord.MessageEmbed()

    .setAuthor(message.author.username)
    .setColor(ayarlar.red)
    .setTitle("Error")
    .addField(`${user} has perms`, perms);

return message.channel.send(motion42).then(m => m.delete(5000));

};

module.exports.botuser = message => {

let motion42 = new Discord.MessageEmbed()

    .setTitle("Error")
    .setDescription("You cannot ban a bot.")
    .setColor(ayarlar.red);

return message.channel.send(motion42).then(m => m.delete(5000));

};

module.exports.cantfindUser = channel => {

let motion42 = new Discord.MessageEmbed()

    .setTitle("Error")
    .setDescription("Could not find that user.")
    .setColor(ayarlar.red);

return channel.send(motion42).then(m => m.delete(5000));

};

module.exports.noReason = channel => {

let motion42 = new Discord.MessageEmbed()

    .setTitle("Error")
    .setDescription("Please supply a reason.")
    .setColor(ayarlar.red);

return channel.send(motion42).then(m => m.delete(5000));

};
