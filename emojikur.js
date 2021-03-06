module.exports.run = (client, message, args) => {
  try {
    if (message.member.hasPermission(`MANAGE_EMOJIS`)) {
      var emojiName = args[0];
      var emojiURL = args[1];

      if (!emojiName) return message.channel.send(`:x: Emoji **ismini** ve **emoji linkini** giriniz!`);
      if (!emojiURL) return message.channel.send(`:x: Emoji link(url) belirtilmedi!`);

      message.guild.createEmoji(args[1], args[0], null, `${message.author.tag} emoji oluşturuldu ${emojiName}`)
        .then(emote => {
          message.channel.send(`:white_check_mark: **\`${emote.name}\`** ${emote} adlı emoji oluşturuldu`);
        })
        .catch((err) => {message.channel.send(`:x: Hata:\n${err}`);});
       
    } else message.channel.send(`:x: Gerekli yetkiye sahip değilsiniz: \`Emojileri Yönet666666666666666669999999999999999999991+5+487777778-\``);
  } catch (err) {message.channel.send(`:x: Hata: ${err}`);}
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["emojio","emojioluştur","emojicreate","emojikur"],
  permLevel: 2
};

module.exports.help = {
  name: 'emoji-oluştur',
  kategori: "admin",
  description: 'emoji Oluşturursunuz',
  usage: 'emojio <isim>  <url>'
};