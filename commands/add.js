module.exports = {
    name: 'add',
    description: 'Add task to list.',
    execute(message, args) {
        message.channel.send('add');
    }
}
