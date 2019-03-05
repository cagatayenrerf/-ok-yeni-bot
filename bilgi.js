exports.run = (client, message, params) => {
var embed = {
			color: 3447003,
			description: `**Bilgi**`,
			fields: [
				{
					name: '❯ Yapımcı',
					value: client.users.get('512629403675525139').tag,
					inline: false
				},
				{
					name: '❯ Sürüm',
					value: `4.0.0`,
					inline: false
				},
				{
					name: '❯ Davet',
					value: `https://discordapp.com/oauth2/authorize?client_id=522461537928085505&scope=bot&permissions=2146958847`,
					inline: false
				},
				{
					name: '❯ Destek sunucusu',
					value: `https://discord.gg/3s4XBPf`,
					inline: false
				},
			],
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "© Sagaris Hizmet"
			},
			thumbnail: { url: client.user.avatarURL }
    };
		return message.channel.send({embed})};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  kategori: "bot",
  description: 'Tüm komutları gösterir.',
  usage: 'bilgi [komut]'
};
