const scoreBoard = require("./scraper/scoreBoard");
const { connectDB } = require("./config/db");

(async () => {
	try {
		await connectDB();
	} catch (error) {
		console.log(error.message);
	}
})();

// setInterval(async () => {
// 	try {
// 		// await scoreBoard.updateBoard(
// 		// 	new Date().toISOString().substr(0, 10).replace(/-/g, "")
// 		// );

// 		await scoreBoard.fecthScoreboard(
// 			new Date().toISOString().substr(0, 10).replace(/-/g, "")
// 		);
// 	} catch (error) {
// 		console.log(error.message);
// 	}
// }, 1000 * 60);

(async () => {
	try {
		// await scoreBoard.updateBoard(
		// 	new Date().toISOString().substr(0, 10).replace(/-/g, "")
		// );

		await scoreBoard.fecthScoreboard(
			new Date().toISOString().substr(0, 10).replace(/-/g, "")
		);
	} catch (error) {
		console.log(error.message);
	}
})();
