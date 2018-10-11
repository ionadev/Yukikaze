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
   

    .addField(`Docs`, `docs <query>: shows you discord.js docs whatever you are looking for!\nnpm<package>: shows the searched information about a npm package.`)
    .addField(`Other`, `stats: shows Yukikaze\'s status.\nprefix: shows Yukikaze\'s available prefixes.\ninvite: Gives you the link to invite Yukikaze in your guild!`)
    .setFooter(`IshmaamKhan#3454`)

message.channel.send({ embed: embed });



    }
}

module.exports = HelpCommand;
