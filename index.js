// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once('ready', (c) => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on('messageCreate', (message) => {
	if (message.content === 'ping') {
		message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
	}
});

client.on('messageCreate', (message) => {
	if (message.content === 'praise') {
		message.channel.send('# PRAISE BE UPON THEM');
	}
});

// Log in to Discord with your client's token
client.login(token);