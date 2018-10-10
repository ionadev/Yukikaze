const { Command } = require('discord-akairo');
const Discord = require("discord.js");

class AkairoCommand extends Command {
    constructor() {
        super('akairo', {
            aliases: ['akairo'],
            category: 'commands'
        });
    }

    exec(message) {
        message.channel.send('**Akairo** is a highly customizable framework for Discord.js\n\nRepository: https://github.com/1Computer1/discord-akairo\nDocumentation: https://1computer1.github.io/discord-akairo/\nTutorials: https://1computer1.gitbooks.io/akairo-tutorials/content/\nInstall Akairo from npm using `npm install discord-akairo`');
    }
}

module.exports = AkairoCommand;
    