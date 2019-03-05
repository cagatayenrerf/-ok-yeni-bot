const Discord = require('discord.js')

exports.run = (client, message, args, tools) => {
if(!args[0]) {
  const errEmbed = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setAuthor('HATA')
  .setTitle(':exclamation: Kullanımı: **s!8ball (soru)**');
  message.channel.send({embed: errEmbed})
  return;
}
var sayings = [    "Bu kesin",
               
                    "Kesinlikle öyle",
               
                    "Şüphesiz",
               
                    "Evet kesinlikle",
               
                    "Güvenebilirsin",
               
                    "Gördüğüm kadarıyla evet",
               
                    "Büyük ihtimalle",
               
                    "İyi görünüm",
               
                    "Evet",
               
                    "İşaretler evet'e işaret ediyor",
               
                    "Bulanık cevap tekrar deneyin",
               
                    "Sonra tekrar sor",
               
                    "Sana şimdi söylememek daha iyi",
               
                    "Şimdi tahmin edemem",
               
                    "Konsantre ol ve tekrar sor",
               
                    "Buna güvenme",
               
                    "Cevabım hayır",
               
                    "Kaynaklarım hayır diyor",
               
                    "Çok şüpheli"];

      var result = Math.floor((Math.random() * sayings.length) + 0);
      const ballEmb = new Discord.RichEmbed()
      .setColor(0x00FFFF)
      .setAuthor('8ball', 'https://findicons.com/files/icons/1700/2d/512/8_ball.png')
      .addField(args, sayings[result]);
      message.channel.send({embed: ballEmb})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '8ball',
  kategori: "eğlence",
  description: 'Alkış gifi gönderir.',
  usage: '8ball'
};