const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Omega.aic will respond with system latency.'),
  async execute(interaction) {
    await interaction.reply('Pong. Latency nominal.');
  },
};
