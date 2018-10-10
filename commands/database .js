const Discord = require("discord.js");
const client = new Discord.Client();
const { Command } = require('discord-akairo');

class DbCommand extends Command {
    constructor() {
        super('database', {
            aliases: ['database'],
            category: 'Other'
        });
    }

    exec(message) {
        message.channel.send(`https://discordjs.guide/#/sequelize/`);
    }
}

module.exports = DbCommand;