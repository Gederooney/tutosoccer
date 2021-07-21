const config = require("config");
const Schedule = require("../models/Schedule");
const browserObject = require("../browser/browser");

exports.getSchedule = async (req, res) => {
	const { year, month, day } = req.body;
	let date = "" + year + month + day;
	let schedule = Schedule.findOne({ date });
	if (!schedule) return newSchedule(req, res);
	res.json(schedule);
};

// get new schedule
const newSchedule = async (req, res) => {
	const { year, month, day } = req.body;
	let date = "" + year + month + day;
	comp = scrapeSchedule(date);
	schedule = new Schedule({
		date,
		comp,
	});
	await schedule.save();
	res.json(schedule);
};

// Scrape calendar
exports.scrapeSchedule = async (date) => {
	let browser;
	
	try {
		browser = await browserObject.startBrowser();
		
		let page = await browser.newPage();
		
		await page.setViewport({
			width: 1280,
			height: 2920,
			isMobile: false,
		});
		const url = config.get("schedule") + date;
		await page.goto(url, {waitUntil: 'networkidle0'});
		let competitions = await page.evaluate(() => {
			let schedule = Array.from(document.querySelector("div#events").children);
			console.log(0);
		});
		return competitions;
	} catch (error) {}
};
