const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  let para = await db.fetch(`userBalance_${user.id}`);
  let nesne = args.slice(0).join(' ');
  let eksilcek = -100
  let ödül = Math.round(Math.random() * 100);
 
 
    if (para < 100) {
      message.channel.send(':no_entry: Kazı kazan oynabilmek için yeterli paran bulunmuyor. Oynaya Bilmen İçin 100TL olması lazım.')
  } else if (para > 100) {
    
  db.add(`userBalance_${message.member.id}`, eksilcek)
     db.add(`userBalance_${message.member.id}`, ödül)
    message.channel.send(`:evettt: Kazı kazan oynadın ve **${ödül}**TL çıktı!`)
}
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kazıkazan',
  kategori: "eğlence",
  description: 'altınal',
  usage: '/altınal'
};