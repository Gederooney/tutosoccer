const mongoose = require("mongoose");

const ScoresboardSchema = new mongoose.Schema({
	date: { type: String, unique: true },
	leagues: [
		{
			title: { type: String },
			matches: [
				{
					date: { type: String },
					time: { type: String },
					state: { type: String },
					status: { type: String },
					home: {
						name: { type: String },
						logo: { type: String },
						name_abbrev: { type: String },
						score: { type: String },
						details: [{ detail: { type: String } }],
					},
					away: {
						name: { type: String },
						logo: { type: String },
						name_abbrev: { type: String },
						score: { type: String },
						details: [{ detail: { type: String } }],
					},
				},
			],
		},
	],
});
module.exports = Scoresboard = mongoose.model("scoreboard", ScoresboardSchema);
