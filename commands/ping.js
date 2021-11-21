const Discord = require('discord.js');
const client = new Discord.Client();
const sa = new Discord.MessageEmbed()
.setTitle('Ping Tablom')
.addField("Pingim",`**${client.ws.ping} MS**`)
.setTimestamp()
.setColor('RANDOM');

exports.run = (client, message, args) => {

  message.channel.send(sa)


  

};


exports.conf = {
  aliases: ['p', 'pong', 'uptime',],
  permLevel: 0,
  kategori: "Genel"
};

exports.help = {
  name: 'ping',
  description: 'Botun Pingini Gösterir !',
  usage: 'ping'
};
