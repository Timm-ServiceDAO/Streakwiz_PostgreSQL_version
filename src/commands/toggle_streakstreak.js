const { SlashCommandBuilder, PermissionFlagsBits, InteractionFlags } = require('discord.js');
const streakManager = require('../storage/streakManager');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('toggle_streakstreak')
        .setDescription('Toggle the streak streak feature')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute(interaction) {
        if (!interaction.member.permissions.has(PermissionFlagsBits.Administrator)) {
            return await interaction.reply({
                content: '❌ You need administrator permissions to use this command.',
                flags: [InteractionFlags.Ephemeral]
            });
        }

        await interaction.deferReply({ flags: [InteractionFlags.Ephemeral] });

        try {
            const currentStatus = await streakManager.isStreakStreakEnabled(interaction.guildId);
            await streakManager.setStreakStreakEnabled(interaction.guildId, !currentStatus);
            
            await interaction.editReply({
                content: `✅ Streak streak feature has been ${!currentStatus ? 'enabled' : 'disabled'}.`,
                flags: [InteractionFlags.Ephemeral]
            });
        } catch (error) {
            console.error('Error toggling streak streak:', error);
            await interaction.editReply({
                content: '❌ An error occurred while toggling the streak streak feature.',
                flags: [InteractionFlags.Ephemeral]
            });
        }
    },
}; 