'use strict';
require('dotenv').config();

const Discord = require('discord.js');
const { cmds } = require('./cmds');
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
    cmds(msg);
    
});



client.login(process.env.TOKEN);