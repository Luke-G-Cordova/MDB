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
    if(!obj.title) return null;
    if(!obj.description) return null;
    return new MessageEmbed()
        .setTitle(obj.title)
        .setColor(purple)
        .setDescription(obj.description)
    ;
}

module.exports = {
    embed
};