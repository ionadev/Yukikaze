const { Command } = require('discord-akairo');
const Discord = require("discord.js");

class PrefixCommand extends Command {
    constructor() {
        super('prefix', {
            aliases: ['prefix'],
            category: 'commands'
        });
    }

    exec(message) {
        message.channel.send(`My custom prefix are: ?/d?\n Eg: ?help or d?help`);
    }
}

module.exports = PrefixCommand;