const Discord = require('discord.js');
var cevir = require('node-google-translate-skidz');
const db = require('quick.db');

exports.run = (client, message, args) => {
  
  const oncekidil = args[0];
  const dil = args[1];
  const yazi = args.slice(2).join(' ');
  
  if (!oncekidil) return message.reply(":hayirr: | Hangi dili çevireceğini yazmalısın! örnek v?çevir tr en naber")
  if (!dil) return message.reply(":hayirr: | Çevrilecek dili yazınız! örnek v?çevir tr en naber")
  if (yazi.length < 1) return message.reply(":hayirr: | Çevirmek istediğin yazıyı yaz!!")
  
  cevir({
                text: yazi,
                source: oncekidil,
                target: dil
            }, function(result) {
                var dl = result.translation
                const embed = new Discord.RichEmbed()
                .setColor('ff0000')
                .setTitle(`${oncekidil} adlı dilden ${dil} adlı dile çevirildi!`)
                .addField("Çevrilmek istenen yazı:", yazi)
                .addField("Çevirilen yazı:", dl)
                .setFooter(`Çeviren kullamıcı: ${message.author.tag}`, message.author.avatarURL)
                 message.channel.send({embed})
                    .catch(error => message.channel.send(`:hayirr: | Bir Hata Oluştu! \n**Hata:** \n${error}`))
            });
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["çeviri", "translate"],
  permLevel: 0,
  kategori: "genel"
};

exports.help = {
  name: 'çevir',
  category: 'genel',
  description: 'İstediğiniz yazıyı istediğiniz dile çevirir.',
  usage: 'çevir <yazının-dili> <çevrilecek-dil> <çevrilmek istenen yazı>'
};