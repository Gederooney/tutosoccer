const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema(
	{
		date: {
			type: String,
			require: true,
			unique : true,
		},
		competitions : []
	}
)
module.exports = Schedule = mongoose.model('schedule', ScheduleSchema);