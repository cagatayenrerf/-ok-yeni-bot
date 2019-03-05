const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if(message.author.id !== '512629403675525139') return message.reply('Yetkin Yok Kardeşim! ');
      const sayMessage = args.join(` `);
      client.user.setGame(sayMessage);
      message.channel.send(`Oyun ismi **${sayMessage}** olarak değiştirildi :ok_hand:`)
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'oyundeğiş',
  kategori: "owner",
  description: 'Botun pingini gösterir.',
  usage: 'oyundeğiş'
};