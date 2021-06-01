'use strict';
const Discord = require('discord.js');
const {embed} = require('./style');
let {CN, ROLES} = require('./channel-names');
const PFIX = '$';
async function cmds(message){
    let msg = message.content.toUpperCase();
    let sender = message.author;
    let [cmd, cont] = msg.split(' ');
    // $assign [role]
    if(message.channel.name === CN.roles){
        let body = {};
        switch(cont){
            case 'BEGINNER':
                message.member.roles.add(ROLES.BEGINNER_ROLE);
                body.t = `BEGINNER`;
                body.d = `${sender} is now a BEGINNER`;
                message.channel.send(embed(body));
                message.delete();
                break;
            case 'INTERMEDIATE': 
                message.member.roles.add(ROLES.INTERMEDIATE_ROLE);
                body.t = `INTERMEDIATE`;
                body.d = `${sender} is now a INTERMEDIATE`;
                message.channel.send(embed(body));
                message.delete();
                break;
            case 'ADVANCED': 
                message.member.roles.add(ROLES.ADVANCED_ROLE);
                body.t = `BEGINNER`;
                body.d = `${sender} is now a BEGINNER`;
                message.channel.send(embed(body));
                message.delete();
                break;
            default: 
                if(sender.id !== process.env.CLIENT_ID){
                    message.delete();
                }
        }
    }
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
    if(msg.startsWith(PFIX + 'CLEAR')){
        async function clear(){
            message.delete();
            const fetch = await message.channel.messages.fetch({limit: cont});
            message.channel.bulkDelete(fetch)
                .catch(err => message.channel.send(`Error: ${err}`));
        }
        clear();
    }
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