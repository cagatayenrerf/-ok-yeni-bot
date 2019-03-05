const discord = require('discord.js')
const db = require('quick.db')
const send = require('quick.hook')
var currencyFormatter = require('currency-formatter')
var ms = require('parse-ms');

module.exports.run= async (sagaris, message, args) => {
  

  
  try {
    let worklog = sagaris.channels.get('696969696969696969') // DEĞİŞTİR - Bu, işlenen tüm işleri & başarısız olarak da kaydedilmişse günlüğe kaydetmek için kullanılır.
    let cooldown = 2.88e+7; //Ms 8 saat
    let amount = Math.floor((Math.random() * 100) + 100); // maliyet
    let workplace = ["Office", "Mall", "Restaurant", "Market", "Security", "ICT"] // Farklı çıkışlar, dahil edilmiş bir hata sistemiyle 0'dan 5'e kadar aşağıda eşleşir.
    let workDaily = await db.fetch(`workDaily_${message.author.id}`) // İş uygun olduğunda zamanı getirmek için kullanılır.
    let result = Math.floor((Math.random() * workplace.length))
    let timeObj = ms(cooldown - (Date.now() - workDaily))
    
    let workEmbed = new discord.RichEmbed()
    .setDescription(`**${message.author.tag}** Çalışmaya başladı ve maaş aldı ${currencyFormatter.format(amount, { code: 'USD' })}`)
    .setColor(`GREEN`)

    let dailytEmbed = new discord.RichEmbed()
    .setDescription(`${message.author.tag} Çalışmaya çalışıyorum ama bekleme süresi doldu! Kalan zaman: **${timeObj.hours}h, ${timeObj.minutes}m, and ${timeObj.seconds}s**`)
    .setColor(`RED`)

    
    try {
    db.fetch(`currency_${message.author.id}`).then(rm => { // DEĞİŞTİR - Hesabınızda geçerli bir miktar olup olmadığını görmek için hesabınızı kontrol eder.
    if(rm == null || 0){
        db.set(`currency_${message.author.id}`, 50)} // DEĞİŞTİR - Bu, herhangi bir veriyi siler ve geçerli bir sayı değilse hesabı günceller

    else if (workDaily !== null && cooldown - (Date.now() - workDaily) > 0) {
        

        let workDailyEmbed = new discord.RichEmbed()
        .setAuthor(`${message.author.tag} || Cooldown'da çalışın!`, message.author.displayAvatarURL)
        .setColor(`BLUE`)
        .setDescription(`**${message.author.tag}**, Az önce 6 saat çalıştın, **${timeObj.hours}h, ${timeObj.minutes}m**`)
        message.channel.send(workDailyEmbed)
      send(worklog, dailytEmbed, {
          name: "Manager",
          icon: "https://pbs.twimg.com/profile_images/518086933218467840/aMuhHjnl_400x400.jpeg"
      })
    } else if (`${result}` == "0"){
        db.set(`workDaily_${message.author.id}`, Date.now());
        db.add(`currency_${message.author.id}`, amount).then(i => { // DEĞİŞTİR - Bu, kazanılan tutarı eklemek için hesabınızı günceller
            var discord = require('discord.js')
            let dailyEmbed = new discord.RichEmbed()
            .setAuthor(`${message.author.tag} Bitmiş Muhasebe`, message.author.displayAvatarURL)
            .setColor(`ORANGE`)
            .addField(`Vardiyanızın ücretini aldın, `,` Müdür sana ödeme yaptı:${currencyFormatter.format(amount, { code: 'USD' })}`)
            message.channel.send(dailyEmbed)
            send(worklog, workEmbed, {
                name: "Manager",
                icon: "https://pbs.twimg.com/profile_images/518086933218467840/aMuhHjnl_400x400.jpeg"
            })
        })}
    else if (`${result}` == "1"){
        db.set(`workDaily_${message.author.id}`, Date.now());
        db.add(`currency_${message.author.id}`, amount).then(i => { // DEĞİŞTİR - Bu, kazanılan tutarı eklemek için hesabınızı günceller
            var discord = require('discord.js')
            let dailyEmbed = new discord.RichEmbed()
            .setAuthor(`${message.author.tag} Çok Satılan Elbise`, message.author.displayAvatarURL)
            .setColor(`#FFFFCC`)
            .addField(`Vardiyanızın ücretini aldın, `,` Müdür sana ödeme yaptı:${currencyFormatter.format(amount, { code: 'USD' })}`)
            message.channel.send(dailyEmbed)
            send(worklog, workEmbed, {
                name: "Manager",
                icon: "https://pbs.twimg.com/profile_images/518086933218467840/aMuhHjnl_400x400.jpeg"
            })
        })}
    else if (`${result}` == "2"){
        db.set(`workDaily_${message.author.id}`, Date.now());
        db.add(`currency_${message.author.id}`, amount).then(i => { // DEĞİŞTİR - Bu, kazanılan tutarı eklemek için hesabınızı günceller
            var discord = require('discord.js')
            let dailyEmbed = new discord.RichEmbed()
            .setAuthor(`${message.author.tag} Bitmiş Pişirme ve Temizlik`, message.author.displayAvatarURL)
            .setColor(`RED`)
            .addField(`Vardiyanızın ücretini aldın, `,` Müdür sana ödeme yaptı:${currencyFormatter.format(amount, { code: 'USD' })}`)
            message.channel.send(dailyEmbed)
            send(worklog, workEmbed, {
                name: "Manager",
                icon: "https://pbs.twimg.com/profile_images/518086933218467840/aMuhHjnl_400x400.jpeg"
            })
        })}
    else if (`${result}` == "3"){
        db.set(`workDaily_${message.author.id}`, Date.now());
        db.add(`currency_${message.author.id}`, amount).then(i => { // DEĞİŞTİR - Bu, kazanılan tutarı eklemek için hesabınızı günceller
            var discord = require('discord.js')
            let dailyEmbed = new discord.RichEmbed()
            .setAuthor(`${message.author.tag} Sold A Few Melons`, message.author.displayAvatarURL)
            .setColor(`RED`)
            .addField(`Vardiyanızın ücretini aldın, `,` Müdür sana ödeme yaptı:${currencyFormatter.format(amount, { code: 'USD' })}`)
            message.channel.send(dailyEmbed)
            send(worklog, workEmbed, {
                name: "Manager",
                icon: "https://pbs.twimg.com/profile_images/518086933218467840/aMuhHjnl_400x400.jpeg"
            })
        })}
    else if (`${result}` == "4"){
        db.set(`workDaily_${message.author.id}`, Date.now());
        db.add(`currency_${message.author.id}`, amount).then(i => { // MODIFY - This updates your account to add the amount earned
            var discord = require('discord.js')
            let dailyEmbed = new discord.RichEmbed()
            .setAuthor(`${message.author.tag} Finshed Protecting People`, message.author.displayAvatarURL)
            .setColor(`BLACK`)
            .addField(`Vardiyanızın ücretini aldın, `,` Müdür sana ödeme yaptı:${currencyFormatter.format(amount, { code: 'USD' })}`)
            message.channel.send(dailyEmbed)
            send(worklog, workEmbed, {
                name: "Manager",
                icon: "https://pbs.twimg.com/profile_images/518086933218467840/aMuhHjnl_400x400.jpeg"
            })
        })}
    else if (`${result}` == "5"){
        db.set(`workDaily_${message.author.id}`, Date.now());
        db.add(`currency_${message.author.id}`, amount).then(i => { // MODIFY - This updates your account to add the amount earned
            var discord = require('discord.js')
            let dailyEmbed = new discord.RichEmbed()
            .setAuthor(`${message.author.tag} Just Crushed Some Coding Bugs`, message.author.displayAvatarURL)
            .setColor(`AQUA`)
            .addField(`Vardiyanızın ücretini aldın, `,` Müdür sana ödeme yaptı:${currencyFormatter.format(amount, { code: 'USD' })}`)
            message.channel.send(dailyEmbed)
          send(worklog, workEmbed, {
              name: "Manager",
              icon: "https://pbs.twimg.com/profile_images/518086933218467840/aMuhHjnl_400x400.jpeg"
          })
        })}
    else {
        message.channel.send(`Hataya Denk geldin. Hatayı Lütfen Bize Bildirin.`)
        console.log(result)
    }
    })} catch(err) {console.log(err)}
    } catch(err) {console.log(`HATA: \n${err}`)}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [], 
  permLevel: 0
};

  exports.help = {
  name: 'eco.work',
  kategori: "eğlence",
  description: '.',
  usage: ''
};
