const Discord = require("discord.js")

module.exports={
    name: 'info',
    description: 'tells you version of the bot!',
    execute(messages, args){
        if(args[1] === 'version'){
            message.channel.send('Version '+ version)
        }else{
            message.channel.send('Invalid Args')
        }
    }
}