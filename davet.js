const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "Davet Menüsü",
              icon_url: "https://cdn.discordapp.com/attachments/540927708025061387/540981949796450314/SPOILER_32232323.png"
            },
                "thumbnail": {
                 "url": "https://cdn.discordapp.com/attachments/540927708025061387/540981949796450314/SPOILER_32232323.png"
            },
            title: "",
            description: "[Davet Linkim](https://discordapp.com/oauth2/authorize?client_id=522461537928085505&scope=bot&permissions=2146958847) \n[Destek Sunucusu](https://discord.gg/KXqPgtP)\n[Discord Bot List](https://discordbots.org/bot/522461537928085505)\n[Kodlama Öğrenmek mi İstiyorsun? Kodlama Dersleri Burada](https://glitch.com/@kodlama-zamani)",
            fields: [
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "",
              text: "Sagaris"
            }
          }
        });
        message.react(":pencil:")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['d', 'link', 'linkler'],
  category: "admin",
  permLevel: 0
};

exports.help = {
  name: 'davet',
  kategori: "bot",
  description: 'Botun Davet Linkini Gösterir',
  usage: 'davet'
};