const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args, color, prefix) => {
   var request = require('request');


request('https://api-discord.glitch.me/nasa', function (error, response, body) {
  if (error) return console.log('Hata:', error);
  else if (!error) { 
      var api = JSON.parse(body);
       
    message.channel.send(`${api.nasa}`)
      message.channel.send(new Discord.Attachment(`${api.resim}`))
  
  }
})
    }
    



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'nasa',
  kategori: "eğlence",
  description: '',
  usage: ''
};