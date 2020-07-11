module.exports = {
    name: 'show',
    description: 'Show a list or print all list names.',
    execute(message, args) {
        message.channel.send('show');
    }
}
