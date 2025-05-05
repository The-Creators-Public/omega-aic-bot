module.exports = {
  name: 'interactionCreate',
  async execute(interaction, client) {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) {
      await interaction.reply({ content: 'Unknown command.', ephemeral: true });
      return;
    }

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(`Error in /${interaction.commandName}:`, error);
      if (interaction.deferred || interaction.replied) {
        await interaction.followUp({ content: 'There was an error executing this command.', ephemeral: true });
      } else {
        await interaction.reply({ content: 'There was an error executing this command.', ephemeral: true });
      }
    }
  },
};
