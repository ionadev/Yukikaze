const { Command } = require('discord-akairo');
const Discord = require("discord.js");

class AskCommand extends Command {
    constructor() {
        super('ask', {
            aliases: ['ask'],
            category: 'commands'
        });
    }

    exec(message) {
        message.channel.send(`Don\'t ask if you can ask a question, just ask it! If someone knows the answer, they\'ll do their best to help.`);
    }
}

module.exports = AskCommand;