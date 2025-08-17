const { SlashCommandBuilder } = require("discord.js");
const Player = require("../models/Player");

module.exports = {
  cooldown: 3,
  data: new SlashCommandBuilder()
    .setName("grow")
    .setDescription("Grow your hair based on your shampoo strength!"),
  async execute(interaction) {
    const userId = interaction.user.id;

    let player = await Player.findOne({ userId });
    if (!player) {
      player = new Player({ userId });
      await player.save();
    }

    player.hairs += player.shampooStrenght;
    await player.save();

    await interaction.reply(
      `You used your shampoo (${player.shampoo}) and grew **${growth} hairs**! Total hairs: **${player.hairs}**`
    );
  }
};
