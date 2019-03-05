const Discord = require("discord.js");
var Jimp = require('jimp');
exports.run = async (client, message, args) => {
    var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;
  
  	if (args[0] === '1') {
        var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=bughunter&url=https://api.eggsybot.xyz/pub/resources/frames/bughunter.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance1/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance1/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
  	if (args[0] === '2') {
        var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=bughunter2&url=https://api.eggsybot.xyz/pub/resources/frames/bughunter2.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance2/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance2/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
  	if (args[0] === '3') {
        var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=event&url=https://api.eggsybot.xyz/pub/resources/frames/event.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance3/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance3/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
    	if (args[0] === '4') {
          var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=event2&url=https://api.eggsybot.xyz/pub/resources/frames/event2.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance4/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance4/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
    	if (args[0] === '5') {
          var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=event3&url=https://api.eggsybot.xyz/pub/resources/frames/event3.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance5/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance5/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
    	if (args[0] === '6') {
          var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=nitro&url=https://api.eggsybot.xyz/pub/resources/frames/nitro.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance6/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance6/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
    	if (args[0] === '7') {
          var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=nitro2&url=https://api.eggsybot.xyz/pub/resources/frames/nitro2.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance7/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance7/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
    	if (args[0] === '8') {
          var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=partner&url=https://api.eggsybot.xyz/pub/resources/frames/partner.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance8/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance8/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
    	if (args[0] === '9') {
          var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=partner2&url=https://api.eggsybot.xyz/pub/resources/frames/partner2.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance9/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance9/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
} 
    
        	if (args[0] === '10') {
          var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=staff&url=https://api.eggsybot.xyz/pub/resources/frames/staff.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance9/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance9/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
} 
  
         	if (args[0] === '11') {
          var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=staff2&url=https://api.eggsybot.xyz/pub/resources/frames/staff2.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance9/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance9/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
} 
  
        	if (args[0] === '12') {
          var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=trinity&url=https://api.eggsybot.xyz/pub/resources/frames/trinity.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance9/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance9/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
} 
  
    if (!args[0]) return message.channel.send('**Bu Komutta Toplam 12 Tane Çerçeve Var** `(Lütfen 1den 12e Kadar Bir Sayı Seç)`');
    if (args[0] < 1) return message.channel.send('**Bu Komutta Toplam 12 Tane Çerçeve Var** `(Lütfen 1den 12e Kadar Bir Sayı Seç)`');
    if (args[0] > 12) return message.channel.send('**Bu Komutta Toplam 12 Tane Çerçeve Var** `(Lütfen 1den 12e Kadar Bir Sayı Seç)`');
    if (isNaN(args[0])) return message.channel.send('**Bu Komutta Toplam 12 Tane Çerçeve Var** `(Lütfen 1den 12e Kadar Bir Sayı Seç)`');
  
  
  
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    
  };
  
  exports.help = {
    name: 'discord',
    kategori: "çerçeve",
    description: 'Avatariniza Balance Efekti Ekler.',
    usage: 'balance <rakam>'
  };
