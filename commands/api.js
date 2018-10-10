const Discord = require("discord.js");
const client = new Discord.Client();
const { Command } = require('discord-akairo');

class APICommand extends Command {
    constructor() {
        super('api', {
            aliases: ['api'],
            category: 'Other'
        });
    }

    exec(message) {
       message.channel.send(`Read about how to interact with data from all different kinds of sites through the use of APIs, using HTTP requests:
https://discordjs.guide/#/additional-info/rest-api`);
    }
}

module.exports = APICommand;