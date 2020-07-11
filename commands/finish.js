module.exports = {
    name: 'finish',
    description: 'Finish a task.',
    execute(message, args) {
        message.channel.send('finish');
    }
}
