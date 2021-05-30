const {MessageEmbed} = require('discord.js');
const [purple] = ['#5600d6'];

/*
PARAMATERS: 
    obj = {title, description}
RETURNS: 
    Null if title or description are missing
    or returns an embeded message if parameter
    obj contains both keys.
TODO: 
    Return an embeded message without a title or 
    description if they are not provided rather 
    than null.
*/
function embed(obj){
    if(!obj.t) return null;
    if(!obj.d) return null;
    return new MessageEmbed()
        .setTitle(obj.t)
        .setColor(purple)
        .setDescription(obj.d)
    ;
}

module.exports = {
    embed
};