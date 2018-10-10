const { Command } = require('discord-akairo');
const Discord = require("discord.js");
const ownerID = '456092386343387146'

class EvalCommand extends Command {
    constructor() {
        super('eval', {
            aliases: ['eval'],
            category: 'commands'
        });
    }

    exec(message) {
    
     try {
       
       if (!ownerID.includes(message.author.id)) return message.channel.send(`This command can only be used by the bot owner.`) 
        const args = message.content.split(" ").slice(1);
        let codein = args.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setAuthor('Evaluate')
        .setColor('RANDOM')
        .addField(':inbox_tray: Input', `\`\`\`js\n${codein}\`\`\``)
        .addField(':outbox_tray: Output', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``)
    }
    }
    }

module.exports = EvalCommand;
    