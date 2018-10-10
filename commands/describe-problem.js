const Discord = require("discord.js");
const client = new Discord.Client();
const { Command } = require('discord-akairo');

class DPCommand extends Command {
    constructor() {
        super('describe-problem', {
            aliases: ['describe-problem'],
            category: 'Other'
        });
    }

    exec(message) {
        return message.channel.send(`Don\'t ask us what\'s wrong with your code. TELL US. What behavior are you getting, vs what you're expecting? Are you getting an error? Is nothing happening? Did your PC catch fire? Zombies attacked? Describe the problem.`);
    }
}

module.exports = DPCommand;