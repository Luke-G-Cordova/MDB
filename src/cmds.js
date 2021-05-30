'use strict';
const Discord = require('discord.js');
const {embed} = require('./style');
const PFIX = '$';
async function cmds(msg){

    // roll-assign
    console.log(msg.channel.name);
    // high auth cmds
        // kick
    // if(msg.content.startsWith(`${PFIX}kick `)){
    //     const user = msg.mentions.users.first();
    //     if(user){
    //         const member = msg.guild.member(user);
    //         if(member){
    //             member
    //                 .kick('Because I said')
    //                 .then(() => {
    //                     msg.reply(embed({title:'KICK: ', description: `Gettum outa here. See ya ${user.tag}`}));
    //                 })
    //                 .catch(err => {
    //                     msg.reply(embed({title:'KICK: ', description: `Error: Couldnt kick ${user.tag}`}));
    //                 })
    //             ;
    //         }else{
    //             msg.reply(embed({title: 'KICK: ', description: `couldnt find that user`}));
    //         }
    //     }else{
    //         msg.reply(embed({title: 'KICK: ', description: 'couldnt find that user'}));
    //     }
    // }
    //     // ban
    //     // promote people
    // if(msg.content.startsWith(`${PFIX}promote `)){
    //     const user = msg.mentions.users.first();
    // }
    //     // delete messages
    // if(msg.content.startsWith(`${PFIX}clear `)){
    //     const reg = /\b\d+/;
    //     const limit = parseInt(reg.exec(msg.content))+1;
    //     msg.channel.messages.fetch({ limit})
    //         .then(messages => {
    //             messages.every(m => m.delete());
    //             console.log(`deleted ${limit}`);
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         })
    //     ;
    // }
    
}

module.exports = {
    cmds,
}