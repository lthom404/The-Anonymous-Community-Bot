const Discord = require("discord.js")

module.exports={
    name: 'here',
    descripiton: 'posts message to information',
    execute(message,args){
        const here = new Discord.MessageEmbed()
        .setTitle('The Anonymous Community | Info')
        .addField('@here This server is for when you want a place to come and hang out and talk with friends, we have special channels for if you are wanting to talk to people whilst playing games.  We hope you are enjoying your stay. ' )
        .setColor(0xF1C40F)
        .setFooter('The Anonymous Community | Bot Created By Lachlan T.#3964');
        message.channel.send(here)
    }
}