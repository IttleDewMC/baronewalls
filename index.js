const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
require("discord-buttons")(client);
const config = require("./config.json");
const { prefix, official_bymayfe, mailUsername, mailPasscode } = require("./config.json");
const AsciiTable = require('ascii-table');
const fs = require("fs");
require('./util/eventHandler.js')(client);
const qdb = require("quick.db");
let tarih = new Date().toLocaleString("tr-TR", { timeZone: "Asia/Istanbul"});

/////TABLES
var commandtable = new AsciiTable('IttleDewMC Command Table');
////


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();



commandtable.setHeading("Command", 'Status', "Aliases")
fs.readdirSync('./commands').forEach(dir => {
const commandFiles = fs.readdirSync(`./commands`).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const komutcuklar = require(`./commands/${file}`);




  if (komutcuklar.help.name) {
  client.commands.set(komutcuklar.help.name, komutcuklar);
  commandtable.addRow(komutcuklar.help.name, "✔️", komutcuklar.conf.aliases)
} else {
  commandtable.addRow(komutcuklar.help.name, "❌")
  continue;
    }


    
    komutcuklar.conf.aliases.forEach(alias => {
      client.aliases.set(alias, komutcuklar.help.name);
    });
  }
})
console.log(commandtable.toString())







client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === official_bymayfe) permlvl = 4;
  return permlvl;
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam!');
  }
});

client.on('guildMemberAdd',async member => {
 const guild = member.guild
     
      const kanalcık =  db.fetch(`botPanel_${member.guild.id}`)
    if (kanalcık) {
      const kanal = guild.channels.find('id', kanalcık)
      if (!kanal) return db.delete(`botPanel_${guild.id}`)
      kanal.setName(`Sunucudaki üye sayısı : ${guild.memberCount}`)
    }
})

client.on('guildMemberRemove',async member => {
 const guild = member.guild
    
 
      const kanalcık =  db.fetch(`botPanel_${member.guild.id}`)
    if (kanalcık) {
      const kanal = guild.channels.find('id', kanalcık)
      if (!kanal) return db.delete(`botPanel_${guild.id}`)
      kanal.setName(`Sunucudaki üye sayısı : ${guild.memberCount}`)
    }
})



client.login(config.token);


