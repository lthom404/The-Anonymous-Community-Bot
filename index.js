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
            if(args[1] === 'version'){
                message.channel.send('Version '+ version)
            }else{
                message.channel.send('Invalid Args')
            }
        break;
        case 'clear':
            if(!args[1]) return message.reply('Error! Please define second arg')
        message.channel.bulkDelete(args[1]);
            break;
        case 'whois':
            const embed = new Discord.MessageEmbed()
            .setTitle('User Information')
            .addField('Player Name', message.author.username)
            .addField('Version ', version)
            .addField('Current Server', message.guild.name)
            .addField('Avatar',message.author.avatarURL(),true)
            .setColor(0xF1C40F)
            .setFooter('The Anonymous Community | Bot Created By Lachlan T.#3964');
            message.channel.send(embed)
            break;
        case 'help':
            Discord.MessageEmbed()
            .setTitle('Command Help')
            .addField('Ping Command','-ping', true)
            .addField('User Information','-whois',true)
            .addField('Clear Command','-clear <no. of messages>',true)
            .addField('Info Command', '-Info Version', true)
            .addField('Help Command', '-help')
            .addField('Admin Commands', 'These are Admin commands')
            .addField('Ban Command', '-ban <@mention user>',true)
            .addField('Kick Command', '-kick <@metion user>' ,true)
            .setColor(0x165DE2)
            .setFooter('The Anonymous Community | Bot Created By Lachlan T.#3964');
            message.channel.send(embed)
            break;
        case 'here':
            bot.commands.get('here').execute(message,args)
            break;
        
    }

});
bot.login(token);
