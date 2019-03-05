const Discord = require('discord.js')
exports.run = (client, msg, args, guild) => {
 if(msg.channel.nsfw || msg.channel.type === 'dm'){
   let embed = new Discord.RichEmbed()
   .setColor(0x00AE86)
   .setImage(("https://cdn.boobbot.us/4k/4k"+ Math.floor(Math.random() * 1460)+".jpg"))
   msg.channel.send(embed)
}
 else{
       msg.channel.send(':no_entry: Bu komudu kullanabilmek için bulunduğunuz kanalın `NSFW` özelliğinin açık olması gerek.')
 }
};
 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],

   permLevel: 0
 };

 exports.help = {
   name: '4k',
   kategori: "nsfw",
   description: 'NSFW bir resim gösterir.',
   usage: '4k'
 };