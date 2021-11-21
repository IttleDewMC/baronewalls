const Discord = require('discord.js');
const moment = require('moment');
const db = require("quick.db")
const chalk = require('chalk');
const { prefix } = require('../config.json')

module.exports = client => {


         // Oynuyor Kısmı
  
      var actvs = [
        `BaroneWalls`,
        `https://www.baronewalls.xyz/ `, 
        `${prefix}yardım`
    ];
    
    client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'LISTENING' });
    setInterval(() => {
        client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'LISTENING'});
    }, 15000);
      
  
      console.log ('_________________________________________');
      console.log (`Kullanıcı İsmi     : ${client.user.username}`);
      console.log (`Sunucular          : ${client.guilds.cache.size}`);
      console.log (`Kullanıcılar       : ${client.users.cache.size}`);
      console.log (`Prefix             : ${prefix}`);
      console.log (`Durum              : Bot Çevrimiçi!`);
      console.log ('_________________________________________');






}
