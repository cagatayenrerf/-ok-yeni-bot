const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
      if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`:no_entry_sign:  | Yetkin bulunmamakta!`);
       let rol = message.mentions.roles.first()
       if (!rol) return message.channel.send(':no_entry_sign:  | Ayarlamak istediğin rolü etiketlemelisin!')
      db.set(`discorole_${message.guild.id}`, rol.name)
      message.channel.send(`:white_check_mark: | \`Disko\` rolü başarıyla \`${rol.name}\` olarak **ayarlandı!**`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Jsrol", "Js-rol", "jsrol", "Javascriptrol"], 
  permLevel: 0 
};

exports.help = {
  name: 'discorolayarla', 
  kategori: "admin",
  description: "", 
  usage: '' 
};