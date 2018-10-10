const { Listener } = require('discord-akairo');
const Discord = require("discord.js");


class ReadyListener extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            eventName: 'ready'
        });
    }

    exec() {
        console.log('I\'m ready!');
    }
}

module.exports = ReadyListener;