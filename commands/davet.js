const Discord = require('discord.js');

exports.run = (client, message, args) => {
	var embedsil = new Discord.MessageEmbed()
    .setTitle('Linkler')
    .setColor('RANDOM')
    .setDescription('[Davet Linkim](https://discord.com/api/oauth2/authorize?client_id=795935895562747914&permissions=8&scope=bot) \n [Sunucumuz](https://discord.gg/4Yp7r5Uw3S)')
    .setTimestamp();
    
message.channel.send(embedsil)

};


exports.conf = {
  aliases: [],
  permLevel: 0,
  kategori: "Genel" //Yardım komutunda hangi kategoride gözükeceğini ayarlarsınız
};

exports.help = {
  name: 'davet',
  description: 'botun davet linkini atar',
  usage: 'davet'
};
