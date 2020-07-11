module.exports = {
    name: 'delete',
    description: 'Delete list or task.',
    execute(message, args) {
        message.channel.send('delete');
    }
}
