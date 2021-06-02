'use strict';
require('dotenv').config();

const Discord = require('discord.js');
const { cmds } = require('./cmds');
const { CN } = require('./channel-names');
const { embed } = require('./style');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I just restarted!');
});
client.on('guildMemberAdd', guildMember => {
    guildMember.guild.channels.cache.get(CN.new_devs).send(embed({
        t: `Welcome!!`, d: `Welcome to the server <@${guildMember.user.id}>!!
        \n Please navigate to the role-assign channel to get a role.
        \nJust type $assign beginner to get your first role!`
    }));
});


client.on('message', message => {
    cmds(message);
});



client.login(process.env.TOKEN);