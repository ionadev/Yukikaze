const { Command } = require('discord-akairo');
const Discord = require("discord.js");

class HostingCommand extends Command {
    constructor() {
        super('hosting', {
            aliases: ['hosting'],
            category: 'Other'
        });
    }

    exec(message) {
        message.channel.send(`***Note:*** *This is a list of hosting, not a backing/support for them. You will need to make your own decision.*

**Free:**
- **__Openshift:__** https://www.openshift.com/
    4 core - 1gb memory free for 30-days, you can renew it.
- **__Heroku:__** https://heroku.com/
    No CLI or SSH, no file access, might make your app sleep if you reach monthly uptime limit.

**Paid:**
- **__OVH__:** https://www.ovh.com/us/vps/
    Full VPS starting at $3.49USD/month, choice of OS, high reliability.
- **__Digital Ocean:__** https://m.do.co/
    Starting at $5/month (USD), you can have your own server with 25GB SSD Disk, and 1GB Memory.
- **__Linode__:** https://www.linode.com/
    Starting at $5/month (USD), you can have a server with 20GB SSD Disk, and 1GB memory
- **__Vultr:__** https://www.vultr.com/
    Starting at $2.5/month (USD), you can have a server with 20GB SSD Disk, and 512MB Memory
- **__Amazon(AWS) Lightsail__:** https://amazonlightsail.com/
    Starting at $5/month (USD) (first month free), you can have your own server with 20GB SSD Disk, and 512MB Memory.
-**__Time4VPS__:** https://www.time4vps.eu/
    Starting at €3.99/month, get 40GB Storage, 1024MB Memory
- **__VIRMACH__:** http://virmach.com/
    Full Windows and Linux Desktop VPS starting at $7USD/month and $10USD/month respectively.`);
    }
}

module.exports = HostingCommand;
