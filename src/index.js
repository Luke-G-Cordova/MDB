'use strict';
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const {embed} = require('./style');

client.on('ready', () => {
    console.log('I just restarted!');
});
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome-goodbye-log');
    if(!channel) return;
    channel.send(`Welcome to the server, ${member}`);
});

client.on('message', msg => {
    if(msg.content === 'embed'){
        msg.channel.send(embed({title:'My Title', description: 'My Description'}));
    }
});


client.login(process.env.TOKEN);