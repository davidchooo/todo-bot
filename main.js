const { token } = require('./config.json');
const { Client, Collection } = require('discord.js');

const client = new Client();

const prefix = '!';

/* Create Discord collection of commands from files in ./commands */
const fs = require('fs');
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot is online!');
});

client.mongoose = require('./utils/mongoose');

client.on('message', message => {
    /* Ignore if message does not start with prefix or message is sent by bot*/
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    /* Slice command */
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    /* Run command! */
    if (command === 'add' || command === 'a') {
        client.commands.get('add').execute(message, args);
    } else if (command === 'create' || command === 'c') {
        client.commands.get('create').execute(message, args);
    } else if (command === 'delete' || command === 'd') {
        client.commands.get('delete').execute(message, args);
    } else if (command === 'finish' || command === 'f') {
        client.commands.get('finish').execute(message, args);
    } else if (command === 'help' || command === 'h') {
        client.commands.get('help').execute(message, args);
    } else if (command === 'show' || command === 's') {
        client.commands.get('show').execute(message, args);
    }

});

// Login to application
client.mongoose.init();
client.login(token);
