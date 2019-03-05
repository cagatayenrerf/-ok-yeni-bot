const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args, level) => {

let Timer = args[0];

if(!args[0]){
  return message.channel.send("Lütfen sayıyı girdikten sonra boşluk bırakmadan s , m , h yaz!");
}

if(args[0] <= 0){
  return message.channel.send("Lütfen sayıyı girdikten sonra boşluk bırakmadan s , m veya h yaz!");
}

message.channel.send(":white_check_mark: Zamanlayıcı ayarlandı: " + `${ms(ms(Timer), {long: true})}`)

setTimeout(function(){
  message.channel.send(`kronometre: süre doldu: ${ms(ms(Timer), {long: true})}` + message.author.toString())

}, ms(Timer));
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: "kronometre",
  kategori: "admin",
  description: "Sets a timer",
  usage: "timer"
};
