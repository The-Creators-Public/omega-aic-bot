const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('List all available commands'),
  async execute(interaction) {
    const commands = interaction.client.commands;
    const helpText = commands.map(cmd => {
      const desc = cmd.data.description || 'No description';
      return `**/${cmd.data.name}** — ${desc}`;
    }).join('\n');

    await interaction.reply({ content: helpText, ephemeral: true });
  },
};
