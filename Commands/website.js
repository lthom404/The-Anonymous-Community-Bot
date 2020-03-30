const Discord = require("discord.js")

module.exports ={
    name: 'website',
    desription: 'gives you link to youtube!',
    execute(message, args){
        
        message.channel.send('youtube.com');
    }
}