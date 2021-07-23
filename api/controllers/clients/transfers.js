const newTransfers = require("../../scraper/transfers");

exports.getTransfers = async (req, res) => {
	try {
		transfers = await newTransfers.fecthTransfer();
		res.json(transfers);
	} catch (error) {
		console.log(error.message);
		res.status(500).send("Servor error");
	}
};
