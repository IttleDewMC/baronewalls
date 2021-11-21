const Discord = require('discord.js');


exports.run = function(client, message, args) {

	let mesaj = args.slice().join(' ')
if (!mesaj) return message.reply('lütfen önerinizi yazın')
message.delete()
client.users.cache.get("737751918457258085").send(new Discord.MessageEmbed()
.addField('Eylem', 'Öneri')
.addField('Kullanıcı', message.author.tag)
.addField('Sunucu', message.guild.name)
.addField('Öneri', mesaj)
).then(a => message.channel.send(new Discord.MessageEmbed()
.setTitle('Öneriniz Alındı')
.setDescription('[Sunucumuz](https://discord.gg/dKPR8b76Cv)')
.setTimestamp()				))
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öner"],
  permLevel: 0,
	kategori: "Genel"
};

exports.help = {
  name: 'öneri',
  description: "bot hakkındaki önerilerinizi bot sahiplerine ulaştırır",
  usage: 'öneri <mesaj>'
};
