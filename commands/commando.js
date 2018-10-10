const Discord = require("discord.js");
const client = new Discord.Client();
const { Command } = require('discord-akairo');

class CommandoCommand extends Command {
    constructor() {
        super('commando', {
            aliases: ['commando'],
            category: 'Other'
        });
    }

    exec(message) {
        return message.channel.send(`The official command framework for discord.js.

**GitHub:** https://github.com/discordjs/Commando/
**Documentation:** https://discord.js.org/#/docs/commando
**Guide:** https://discordjs.guide/#/commando/

Installation:
Node **8.6.0** or newer is required.
npm install discord.js-commando (stable, for discord.js v11.x)
npm install discordjs/Commando (in-development, for discord.js v12/master)
npm install discordjs/Commando#djs-v11 (in-development, for discord.js v11.x)`);
    }
}

module.exports = CommandoCommand;