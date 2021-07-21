const Scoreboard = require("../models/Scoresboard");
const newBoard = require("../scraper/scoreBoard");

exports.getBoard = async (req, res) => {
	try {
		board = await newBoard.fecthScoreboard(req.params.date);
		res.json(board);
	} catch (error) {
		console.log(error.message);
		res.status(500).send("Servor error");
	}
};
