const Discord = require("discord.js");

const { AkairoClient } = require('discord-akairo');

const client = new AkairoClient({
    ownerID: '456092386343387146',
    prefix: ['?', 'd?'],
    commandDirectory: './commands/',
    listenerDirectory: './listeners/',
    allowMention: true
}, {
    disableEveryone: true
});


client.login(process.env.token);
