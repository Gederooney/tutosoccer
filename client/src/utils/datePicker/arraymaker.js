exports.createTable = (date) => {
	var days = [];
	days.push(new Date(date).getTime());
	var i = 0;
	while (i < 3) days.push(days[0] + ++i * 24 * 60 * 60 * 1000);
	i = 0;
	while (i < 3) days.unshift(days[i] - ++i * 24 * 60 * 60 * 1000);
	days = days.map((d) => {
		let rtn = { date: "", day: "", month: "" , year : ""};
		rtn.day = new Date(d).toString().slice(0, 3);
		rtn.date = new Date(d).toString().slice(8, 10);
		rtn.month = new Date(d).toString().slice(4, 7);
		rtn.year = new Date(d).toString().slice(11, 15);
		return rtn;
	});
	return days;
};
