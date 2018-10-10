const { Command } = require('discord-akairo');
const Discord = require("discord.js");
const client = new Discord.Client();

class HelpCommand extends Command {
    constructor() {
        super('help', {
            aliases: ['help'],
            category: 'commands'
        });
    }

    exec(message) {


 const embed = new Discord.RichEmbed()


    .setTitle(`Yukikaze Help`)


    .setColor(3447003)


   .setThumbnail(this.client.user.displayAvatarURL)
   

    .addField(`Docs`, `?docs <topic>: shows you discord.js docs whatever you are looking for!\n?npm<package>: shows the searched information about a npm package.`)
    .setFooter(`IshmaamKhan#3454`)

message.channel.send({ embed: embed });



    }
}

module.exports = HelpCommand;
