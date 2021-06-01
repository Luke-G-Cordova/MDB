'use strict';
require('dotenv').config();

const Discord = require('discord.js');
const { cmds } = require('./cmds');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I just restarted!');
});
client.on('guildMemberAdd', member => {
    console.log('here');
    const channel = member.guild.channels.cache.find(ch => ch.name === '🤟new_devs🤟');
    if(!channel) return;
    channel.send(`Welcome to the server, ${member}`);
});


client.on('message', msg => cmds(msg));



client.login(process.env.TOKEN);