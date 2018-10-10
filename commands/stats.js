const { version } = require('../package.json');
const { Command } = require('discord-akairo');
const Discord = require("discord.js");
const client = new Discord.Client();
const { stripIndents } = require('common-tags');
const moment = require('moment');
require('moment-duration-format');

class StatsCommand extends Command {
	constructor() {
		super('stats', {
			aliases: ['stats'],
			description: {
				content: 'Displays statistics about the bot.'
			},
			category: 'util',
			clientPermissions: ['EMBED_LINKS'],
			ratelimit: 2
		});
	}

	exec(message) {
		const embed = new Discord.RichEmbed()
			.setColor(3447003)
			.setDescription(`**${this.client.user.username} Statistics**`)
			.addField('❯ Uptime', moment.duration(this.client.uptime).format('d[d ]h[h ]m[m ]s[s]'), true)
			.addField('❯ Memory Usage', `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`, true)
			.addField(
				'❯ General Stats',
				stripIndents`
				• Guilds: ${this.client.guilds.size}
				• Channels: ${this.client.channels.size}
			`,
				true
			)
			.addField('❯ Source Code', '[View Here](https://github.com/IamIshmaamKhan/Yukikaze)', true)
	       .addField('❯ Version', `v${version}`, true)
	       
	       .addField(
				'❯ Library',
				'[discord.js](https://discord.js.org)[-akairo](https://github.com/1Computer1/discord-akairo)',
				true
			)
		    
            .setThumbnail(this.client.user.displayAvatarURL)
		    .setFooter(`© 2018 IshmaamKhan#3454`);

		return message.channel.send(embed);
	}
}

module.exports = StatsCommand;
