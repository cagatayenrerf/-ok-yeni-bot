const Discord = require("discord.js");
const request = require('snekfetch');
const fs = require("fs")

exports.run = (client, message, args) => {
    var max = 12449;
    var min = 10000;
    var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;
    var MathLoL = Math.round(MathRan);
    if (!message.channel.nsfw) {
        message.channel.send(":no_entry: Bu komudu kullanabilmek için bulunduğunuz kanalın `NSFW` özelliğinin açık olması gerek.")
    } else {
        request.get("http://media.oboobs.ru/boobs_preview/" + MathLoL + ".jpg").then(r => {
            fs.writeFile(`boobs.jpg`, r.body)
            message.channel.sendFile(r.body)
            fs.unlink(`./boobs.jpg`)
        })
    }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['meme', 'göğüs'],
  permLevel: 0
};

exports.help = {
  name: 'boobs',
  kategori: "nsfw",
  description: 'Boobs NSFW',
  usage: '/boobs'
};