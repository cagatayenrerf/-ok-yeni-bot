const Discord = require("discord.js");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUyMjQ2MTUzNzkyODA4NTUwNSIsImJvdCI6dHJ1ZSwiaWF0IjoxNTQ3NjQ2MTYyfQ.86TYECINN-BB5unvCXV7PB42gImNj88P8-TItkfrNl4", client);
exports.run = (client, message) => {
dbl.hasVoted(message.author.id).then(voted => {
 if (!voted) {
   const embed = new Discord.RichEmbed()
   .setTitle('Oy verme:')
   .setDescription(`Bu komutu kullanabilmek için DBL üzerinden oy vermen gerekiyor. (Eğer oy verdiyseniz bi kaç dakika bekleyin .s) \nOy vermek için: https://discordbots.org/bot/${client.user.id}/vote`)
   .setColor('RANDOM')
message.channel.send(embed)

} else {
  const embed2 = new Discord.RichEmbed()
  .setTitle('Başarılı')
  .setDescription('Artık Destekçi rolünü aldın.')
  .setColor('RANDOM')
 message.channel.send(embed2);
        message.member.addRole("510811387597946882")
        

}
})
}
 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oyladım'],
  permLevel: 0
};

exports.help = {
  name: 'upvote',
  kategori: "bot",
  description: 'Botun pingini gösterir.',
  usage: 'afk [duyuruda yazıcak şey]'
};