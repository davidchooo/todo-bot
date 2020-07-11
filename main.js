const { token } = require('./config.json');
const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Bot is online!');
});


// Login to application
client.login(token);
