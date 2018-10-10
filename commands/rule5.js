const { Command } = require('discord-akairo');
const Discord = require("discord.js");

class Rule5Command extends Command {
    constructor() {
        super('rule5', {
            aliases: ['rule5'],
            category: 'commands'
        });
    }

    exec(message) {
        message.channel.send(`Don't expect us to hold your hand entirely - we can help you understand concepts and locate the correct resources, but not write your code for you. "Help vampire" is a common term to describe those who try to get others to do everything for them. http://www.skidmore.edu/~pdwyer/e/eoc/help_vampire.htm`);
    }
}

module.exports = Rule5Command;
