module.exports = {
    name: 'help',
    description: 'List commands.',
    execute(message, args) {
        message.channel.send('help');
    }
}
