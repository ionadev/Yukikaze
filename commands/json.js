const Discord = require("discord.js");
const client = new Discord.Client();
const { Command } = require('discord-akairo');

class JSONCommand extends Command {
    constructor() {
        super('json', {
            aliases: ['json'],
            category: 'Other'
        });
    }

    exec(message) {
        return message.channel.send(`JSON files are prone to corruption when written to and read from a lot. That's why they should not be used as a form of database. 
If you don\'t want to use anything too complicated and like working with discord.js' Collections you can have a look at EnMaps: https://evie.gitbook.io/enmap/

If you need bigger guns to tackle your data storage you can look into using proper database providers, such as SQL databases.
You can learn how to use SQLite (a simple database requiring only one file, similar to JSON) and other SQL database providers: https://discordjs.guide/#/sequelize/`);
    }
}

module.exports = JSONCommand;