const Discord = require("discord.js");
const client = new Discord.Client();
const { Command } = require('discord-akairo');

class GuidesCommand extends Command {
    constructor() {
        super('guides', {
            aliases: ['guides'],
            category: 'Other'
        });
    }

    exec(message) {
        message.channel.send(`Some useful links to get you started with discord.js:

The official guide: https://discordjs.guide/
An idiot's guide: https://anidiots.guide/
Crawl: https://www.youtube.com/channel/UCEBwAP6zmJ5-buW-Cc2FB6Q/videos
An idiot's guide (videos): https://www.youtube.com/channel/UCLun-hgcYUgNvCCj4sIa-jA/videos`);
    }
}

module.exports = GuidesCommand;