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
	else if (message.content.includes('praise')) {
		message.channel.send('# PRAISE BE UPON THEM');
	}
	else if (message.content === '# PRAISE BE UPON THEM') {
		message.channel.send('# AND MAY THEY BE PRAISED');
	}
	else if (message.content === 'name') {
		message.channel.send(message.guild.name);
	}
	else if (message.content === 'give me peach') {
		message.channel.send('Welcome Praise Be');
		message.member.roles.add('1139698676307079268');
	}
	else if (message.content === 'take my peach') {
		message.channel.send('Good Bye');
		message.member.roles.remove('1139698676307079268');
	}
});

// client.on('messageCreate', (message) => {
// 	if (message.content === 'praise') {
// 		message.channel.send('# PRAISE BE UPON THEM');
// 	}
// });

// client.on('messageCreate', (message) => {
// 	if (message.content === '# PRAISE BE UPON THEM') {
// 		message.channel.send('# AND MAY THEY BE PRAISED');
// 	}
// });

// Log in to Discord with your client's token
client.login(token);