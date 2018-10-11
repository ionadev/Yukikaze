const Discord = require("discord.js");
const client = new Discord.Client();
const { Command } = require('discord-akairo');

class InviteCommand extends Command {
    constructor() {
        super('invite', {
            aliases: ['invite'],
            category: 'stuff'
        });
    }

    exec(message) {
        return message.channel.send(`Invite Yukikaze to your guild: https://discordapp.com/oauth2/authorize/?permissions=2146958591&scope=bot&client_id=489779831517741076`);
    }
}

module.exports = InviteCommand;