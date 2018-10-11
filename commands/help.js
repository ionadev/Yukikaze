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
   

    .addField(`Docs`, `?docs <query>: shows you discord.js docs whatever you are looking for!\n?npm<package>: shows the searched information about a npm package.`)
    .addField(`Other`, `?stats: shows Yukikaze\'s status.\n?prefix: shows Yukikaze\'s available prefixes.`)
    .setFooter(`IshmaamKhan#3454`)

message.channel.send({ embed: embed });



    }
}

module.exports = HelpCommand;
