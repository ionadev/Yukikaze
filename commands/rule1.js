const { Command } = require('discord-akairo');
const Discord = require("discord.js");

class Rule1Command extends Command {
    constructor() {
        super('rule1', {
            aliases: ['rule1'],
            category: 'commands'
        });
    }

    exec(message) {
        message.channel.send(`No spamming, advertising, or NSFW content. Don't be a jerk or generally obnoxious - nobody likes trolls.`);
    }
}

module.exports = Rule1Command;
