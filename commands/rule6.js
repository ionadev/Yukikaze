const { Command } = require('discord-akairo');
const Discord = require("discord.js");

class Rule6Command extends Command {
    constructor() {
        super('rule6', {
            aliases: ['rule6'],
            category: 'commands'
        });
    }

    exec(message) {
        message.channel.send(`Please do not mention or DM individual staff members just for help - you may not get a reply quickly, if at all. It's much better to post your question in the public channels, as it will get more exposure there (more eyeballs will see it 👀), and will probably be answered sooner.`);
    }
}

module.exports = Rule6Command;
