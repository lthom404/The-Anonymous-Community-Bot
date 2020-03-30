const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = '-';
const version = '1.0.1';
const token = 'NjkzNzA5ODAxNDAxNjE0MzY3.XoC4dg.X9_9cGj6A2ud4-KzZs0Zlcs-SH0'

const fs = require ('fs');
bot.commands = new Discord.Collection

const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./Commands/${file}`);

    bot.commands.set(command.name, command);
}


bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('The Anonymous Community', {type: 'WATCHING'});
    bot.user.setStatus("Idle", 1 | 1 ,)
});

bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.send('pong')
        break;
        case 'website':
            bot.commands.get('website').execute(message,args)
        break;
         case 'info':
            bot.commands.get('info').execute(message, args)
        break;
        case 'clear':
            if(!args[1]) return message.reply('Error! Please define second arg')
        message.channel.bulkDelete(args[1]);
            break;
        case 'whois':
           bot.commands.get('whois').execute(message,args)
            break;
        case 'help':
            bot.commands.get('help').execute(message,args)
            break;
        case 'here':
            bot.commands.get('here').execute(message,args)
            break;
        
    }

});
bot.login(token);
