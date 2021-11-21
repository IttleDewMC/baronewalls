const discord = require("discord.js");
const config = require("../config.json");

exports.run = async (Client, msg, args) => {
	if(msg.author.id !== 737751918457258085) return msg.reply("Bu komut **IttleDewMC**'ye özeldir!");
      if(!msg.mentions.users.first()) return msg.channel.send("Kullanıcı Etiketle");
       
        msg.guild.channels.create(msg.author.username+"-"+msg.mentions.users.first().username,{
            permissionOverwrites: [
            {
              id: msg.guild.roles.everyone, 
              deny: ['VIEW_CHANNEL',"SEND_MESSAGES"] 
            },
            {
                id: msg.mentions.users.first().id, 
                allow: ['VIEW_CHANNEL',"SEND_MESSAGES"]
              },
              {
                id: msg.author.id, 
                allow: ['VIEW_CHANNEL',"SEND_MESSAGES"]
              }
         ]}).then(channel => {
            channel.setParent(""); // Kategori ID
            msg.channel.send("Oda HAZIR!")
        })
    }
exports.conf = {// codare ♥ pxsty
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
	katergori: "Genel"
};
exports.help = {// codare ♥ pxsty
    name: 'odakur',
	description: "oda kur (Sadece IttleDewMC Kullanabilir)"
};
