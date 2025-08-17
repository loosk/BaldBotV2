const { Schema, model } = require("mongoose");

const playerSchema = new Schema({
	userId: { type: String, required: true, unique: true },
	hairs: { type: Number, required: true, default: 0, min: 0 },
    shampoo: { type: String, required: true, default: "cheap" },
    shampooStrenght: { type: Number, required: true, default: 1}
});

const Player = model("Player", playerSchema);

module.exports = Player;
