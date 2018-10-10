const { Command } = require('discord-akairo');
const Discord = require("discord.js");

class Rule3Command extends Command {
    constructor() {
        super('rule3', {
            aliases: ['rule3'],
            category: 'commands'
        });
    }

    exec(message) {
        message.channel.send(`This bot is for **discord.js**. We may not be able to assist you with unrelated libraries.`);
    }
}

module.exports = Rule3Command;
