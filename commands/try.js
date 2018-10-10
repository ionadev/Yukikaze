const { Command } = require('discord-akairo');
const Discord = require("discord.js");

class TryCommand extends Command {
    constructor() {
        super('try', {
            aliases: ['try'],
            category: 'commands'
        });
    }

    exec(message) {
        message.channel.send(`Try out the code before asking if it works`);
    }
}

module.exports = TryCommand;