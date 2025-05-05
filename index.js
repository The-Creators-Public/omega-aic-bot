require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Client, Collection, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// Create a Collection to store your commands
client.commands = new Collection();

// Dynamically load all command files from subfolders of ./commands
const commandsPath = path.join(__dirname, 'commands');
for (const category of fs.readdirSync(commandsPath)) {
  const categoryPath = path.join(commandsPath, category);
  if (!fs.lstatSync(categoryPath).isDirectory()) continue;

  const commandFiles = fs.readdirSync(categoryPath).filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const filePath = path.join(categoryPath, file);
    const command = require(filePath);
    // command.data is the SlashCommandBuilder, command.execute is the handler
    client.commands.set(command.data.name, command);
  }
}

// Dynamically load all event handlers from ./events
const eventsPath = path.join(__dirname, 'events');
for (const file of fs.readdirSync(eventsPath)) {
  if (!file.endsWith('.js')) continue;
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args, client));
  } else {
    client.on(event.name, (...args) => event.execute(...args, client));
  }
}

// Log in to Discord with your bot token
client.login(process.env.DISCORD_TOKEN)
  .then(() => console.log('Bot logged in!'))
  .catch(err => console.error('Login failed:', err));
