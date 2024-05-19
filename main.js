const { Player } = require('discord-player');
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config(); // Load environment variables

global.client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent
    ],
    disableMentions: 'everyone',
});

client.config = require('./config');

const player = new Player(client, client.config.opt.discordPlayer);
player.extractors.loadDefault();

require('./loader');

console.log('Bot Token:', client.config.app.token); // Log the token for debugging

client.login(client.config.app.token)
    .then(() => {
        console.log('Bot logged in successfully!');
    })
    .catch(err => {
        console.error('Failed to login:', err);
    });
