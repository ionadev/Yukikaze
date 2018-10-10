const { Command } = require('discord-akairo');
const Discord = require("discord.js");

class Rule4Command extends Command {
    constructor() {
        super('rule4', {
            aliases: ['rule4'],
            category: 'commands'
        });
    }

    exec(message) {
        message.channel.send(`When asking for help, make sure to provide as much detail as possible. Simply saying, "it's broke yo", or "how 2 make music bot" certainly won't get either of us anywhere.`);
    }
}

module.exports = Rule4Command;
