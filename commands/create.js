const List = require('../models/list');
const { MessageMentions } = require('discord.js');
const { Types } = require('mongoose');

module.exports = {
    name: 'create',
    description: 'Create new list.',
    execute(message, args) {
        const userID = message.mentions.members.first() ?
            message.mentions.members.first().user.username :
            message.author.username;

        /* Get name of list */
        // TODO allow multi-word list names
        let name = '';
        for (const arg of args) {
            /* Ignore if arg is a mention */
            if (!MessageMentions.USERS_PATTERN.test(arg)) {
                name = arg;
                break;
            }
        }
        
        if (!name) {
            message.channel.send('Please enter a list name.');
            return;
        }

        /* Create report */
        const report = new List({
            _id: Types.ObjectId(),
            name: name,
            userID: userID
        });

        report.save()
            .then(result => {
                console.log(result)
                message.channel.send(`List "${name}" created for ${userID}!`);
            })
            .catch(err => {
                console.log(error)
                message.channel.send('DB Error: Failed to create list :(');
            });

    }
}
