const { Command } = require('discord-akairo');
const Discord = require("discord.js");

class RsCommand extends Command {
    constructor() {
        super('resources', {
            aliases: ['resources'],
            category: 'commands'
        });
    }

    exec(message) {
        message.channel.send(`Useful links for learning JavaScript and Node:

CodeCademy online course: https://www.codecademy.com/learn/javascript
Eloquent Javascript, free book: http://eloquentjavascript.net/
MDN's JavaScript guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction
You Don't Know JS (free book series): https://github.com/getify/You-Dont-Know-JS
Some Node:
https://nodeschool.io/
https://www.codeschool.com/courses/real-time-web-with-node-js
Javascript reference/docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference`);
    }
}

module.exports = RsCommand;