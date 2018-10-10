const { Listener } = require('discord-akairo');
const Discord = require("discord.js");
const client = new Discord.Client();


class ActivityListener extends Listener {
    constructor() {
        super('activity', {
            emitter: 'client',
            eventName: 'ready'
        });
    }

    exec() {
      this.client.user.setActivity('@Yukikaze, help', { type: 'WATCHING' })
    }
}

module.exports = ActivityListener;
    
