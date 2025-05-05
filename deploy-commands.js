const { REST, Routes } = require('discord.js');
const { readdirSync } = require('fs');
const { TOKEN, CLIENT_ID } = require('dotenv').config().parsed;

const commands = [];
const commandFiles = readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
  try {
    console.log('Deploying commands...');
    await rest.put(
      Routes.applicationCommands(CLIENT_ID),
      { body: commands },
    );
    console.log('Commands registered.');
  } catch (error) {
    console.error(error);
  }
})();
