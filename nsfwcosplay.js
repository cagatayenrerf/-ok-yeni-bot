const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")
const Discord = require("discord.js")

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":no_entry: Bu komudu kullanabilmek için bulunduğunuz kanalın `NSFW` özelliğinin açık olması gerek.")

    var subreddits = [
        'nsfwcosplay',
        'cosplayonoff',
        'cosporn',
        'cosplayboobs'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
            .then(url => {
                const embed = new Discord.RichEmbed()
                    .setColor(0xffa500)
                    .setImage(url)
                message.channel.send({ embed });
        })
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'cosplay',
  kategori: "nsfw",
  description: 'Cospilav NSFW',
  usage: '/cosplay'
};