const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

exports.connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		});
		console.log("connected to mongo DB");
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
}