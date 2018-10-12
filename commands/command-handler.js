const Discord = require("discord.js");
const client = new Discord.Client();
const { Command } = require('discord-akairo');

class CDCommand extends Command {
    constructor() {
        super('command-handler', {
            aliases: ['command-handler'],
            category: 'Other'
        });
    }

    exec(message) {
        message.channel.send(`Read about how to split up your commands into different files and use modules to make your commands dynamic, as well as create some useful features for your bot!
https://discordjs.guide/#/command-handling/`);
    }
}

module.exports = CDCommand;