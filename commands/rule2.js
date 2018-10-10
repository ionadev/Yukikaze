const { Command } = require('discord-akairo');
const Discord = require("discord.js");

class Rule2Command extends Command {
    constructor() {
        super('rule2', {
            aliases: ['rule2'],
            category: 'commands'
        });
    }

    exec(message) {
        message.channel.send(`If you don\'t have a **solid** understanding of JavaScript, please use Google before asking a general question here. There is a countless number of exceptional online resources at your disposal - all you have to do is look for them. We can usually point you in the right direction, but don\'t expect us to teach you the fundamentals from scratch.`);
    }
}

module.exports = Rule2Command;
