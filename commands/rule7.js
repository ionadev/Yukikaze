const { Command } = require('discord-akairo');
const Discord = require("discord.js");

class Rule7Command extends Command {
    constructor() {
        super('rule7', {
            aliases: ['rule7'],
            category: 'commands'
        });
    }

    exec(message) {
        message.channel.send(`If your username can\'t be easily mentioned, please set your nickname to something mentionable. For example, "ᐃᑦᑎᓂᖅᓯᐅᑐᖅ ᑕᖅᓴᖅ" isn\'t particularly useful.`);
    }
}

module.exports = Rule7Command;
