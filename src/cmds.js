'use strict';
const Discord = require('discord.js');
const {embed} = require('./style');
let {CN, ROLES} = require('./channel-names');
const PFIX = '$';
async function cmds(message){

    let msg = message.content.toUpperCase();
    let sender = message.author;
    let [cmd, cont] = msg.split(' ');
    let msgCName = message.channel.name;

    // $assign [role]
    // permission: anyone
    if(msgCName === CN.roles){
        let body = {};
        if(msg.startsWith(PFIX+'ASSIGN')){
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
                    body.t = `ADVANCED`;
                    body.d = `${sender} is now a ADVANCED`;
                    message.channel.send(embed(body));
                    message.delete();
                    break;
                default: 
                    if(sender.id !== process.env.CLIENT_ID){
                        message.delete();
                    }
            }
        }else{
            if(sender.id !== process.env.CLIENT_ID){
                message.delete();
            }
        }
    }
    // permission: only higher up mods
    if(msg.startsWith(PFIX + 'CLEAR')){
        async function clear(){
            message.delete();
            const fetch = await message.channel.messages.fetch({limit: cont});
            message.channel.bulkDelete(fetch)
                .catch(err => message.channel.send(embed({ t: 'Something went wrong', d: `No clue what happened but it all broke lol`})));
        }
        if(message.member.roles.cache.find(mem => mem.id===ROLES.MOD_ROLE)){
            clear();
        }else{
            message.delete();
            message.channel.send(embed({ t: 'Your role is too low', d: `${message.author}get a mod role to use this command`}));
        }
    }

    // roles for contributers
    
}

module.exports = {
    cmds
}