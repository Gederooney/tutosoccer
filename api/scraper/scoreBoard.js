const config = require("config");
const process = require("process");
const Scoresboard = require("../models/Scoresboard");
const browserObject = require("../browser/browser");
const cheerio = require("cheerio");
const fetch = require("node-fetch");

exports.fecthScoreboard = async (date) => {
	let url = config.get("scoresBoard") + date;
	let website = await fetch(url)
		.then((res) => res.text())
		.then((body) => body);

	const $ = cheerio.load(website);
	const scripts = await $("script").toArray();
	const scoreboardScript = scripts.find(
		(script) =>
			script.children[0] &&
			script.children[0].data.includes("window.espn.scoreboardData")
	).children[0].data;

	const strippedData = scoreboardScript
		.replace("window.espn.scoreboardData", "")
		.replace("=", "")
		.replace(
			'if(!window.espn_ui.device.isMobile){window.espn.loadType = "ready"};',
			""
		)
		.replace(/;/g, "")
		.split("window.espn.scoreboardSettings")[0]
		.trim();

	if (JSON.parse(strippedData)) return JSON.parse(strippedData).scores;
	return [];
};

exports.updateBoard = async (date) => {
	let f_date = format_date(date);
	try {
		let board = await Scoresboard.findOne({ date: f_date });
		if (!board) await newScoresboard(date);
		else {
			let updated = await scrapeScoresboard(date);
			let leagues = [];
			for (var i = 0; i < updated.length; i++) {
				const games = updated[i].games;
				let matches = [];
				for (var j = 0; j < games.length; j++) {
					const { status, state, date, time, home, away } = games[j];
					matches.push({ status, state, date, time, home, away });
				}
				let title = updated[i].league;
				leagues.push({ title, matches });
			}
			board = await Scoresboard.findOneAndUpdate(
				{ date: f_date },
				{ $set: { leagues: leagues } }
			);
			console.log("scoreboard is updated");
		}
	} catch (error) {
		console.log(error.message);
	}
};

//Create a new board and save it to db
exports.newScoresboard = async (date1) => {
	try {
		let board = await scrapeScoresboard(date1);
		let leagues = [];
		let date = format_date(date1);
		for (var i = 0; i < board.length; i++) {
			const games = board[i].games;
			let matches = [];
			for (var j = 0; j < games.length; j++) {
				const { status, state, date, time, home, away } = games[j];
				matches.push({ status, state, date, time, home, away });
			}
			let title = board[i].league;
			leagues.push({ title, matches });
		}
		board = new Scoresboard({
			date,
			leagues,
		});

		return await board.save();
	} catch (error) {
		console.log(error.message);
	}
};

// Scrape board
const scrapeScoresboard = async (date) => {
	let browser;

	try {
		browser = await browserObject.startBrowser();

		let page = await browser.newPage();
		await page.setDefaultNavigationTimeout(1000 * 59);
		await page.setViewport({
			width: 1280,
			height: 2920,
			isMobile: false,
		});
		const url = config.get("scoresBoard") + date;
		await page.goto(url);
		await page.waitForSelector("div#events");
		let scoreBoard = await page.evaluate(() => {
			let content = Array.from(
				document.querySelector(
					"body > #global-viewport > #pane-main > #main-container > .main-content > section.col-b > div#scoreboard-page > div#events"
				).children
			);
			var i = 0;
			var league = [];
			while (i < content.length) {
				if (content[i].getAttribute("class") === "date-heading js-show") {
					var j = i + 1;
					var games = [];
					while (
						j < content.length &&
						content[j].getAttribute("class") !== "date-heading js-show"
					) {
						//variables
						let home_name,
							home_record,
							home_name_abbrev,
							home_logo,
							home_score,
							home_details;
						let away_name,
							away_record,
							away_name_abbrev,
							away_logo,
							away_score,
							away_details;
						let date, time, state, details;

						//game status
						let status = content[j]
							.querySelector(
								".scoreboard-top > .scoreboard-wrapper > .main-container > header"
							)
							.getAttribute("class")
							.replace("game-strip bt-sport  ", "")
							.replace("game-strip bt-sport team-a-winner ", "")
							.replace("game-strip bt-sport team-b-winner ", "")
							.replace(" soccer", "");

						//game selector
						let match = content[j].querySelector(
							".scoreboard-top > .scoreboard-wrapper > .main-container > header > .competitors"
						);
						details =
							status === ("live" || "post")
								? content[j].querySelector(
										".scoreboard-top > .scoreboard-wrapper > .main-container > .game-details > .wrap > .competitors"
								  )
								: "";
						if (!details) dteials = "";

						// common infos
						date =
							status === "pre"
								? match.querySelector(".game-status > .game-date").textContent
								: "";
						time =
							status === "pre"
								? match.querySelector(".game-status > .game-date.game-time")
										.textContent
								: "";
						state =
							status === ("live" || "post")
								? match.querySelector(".game-status > .game-time").textContent
								: "";

						//home =======
						home_name = match.querySelector(
							".team-a > .team__content > .team-container > .team-info > .team-info-wrapper > a > .short-name"
						).textContent;
						home_name_abbrev = match
							.querySelector(
								".team-a > .team__content > .team-container > .team-info > .team-info-wrapper > a > .abbrev"
							)
							.textContent.trim();
						status === "pre"
							? (home_record = match
									.querySelector(
										".team-a > .team__content > .team-container > .team-info > .record"
									)
									.textContent.replace("Form: ", ""))
							: "";
						home_logo = match
							.querySelector(
								".team-a > .team__content > .team-container > .team-info-logo > .logo > picture > source"
							)
							.getAttribute("srcset");
						home_score =
							status === ("live" || "post")
								? match.querySelector(
										".team-a > .team__content > .score-container > .score"
								  ).textContent
								: "";
						home_details =
							status === ("live" || "post") &&
							details.querySelector(".team-a > .team-info > .ul") !== null
								? Array.from(
										details.querySelector(".team-a > .team-info > ul").children
								  ).map((li) =>
										li.textContent.trim().replace(/\t/g, "").replace(/\n/g, "")
								  )
								: "";

						// away =========
						away_name = match.querySelector(
							".team-b > .team__content > .team-container > .team-info > .team-info-wrapper > a > .short-name"
						).textContent;
						away_name_abbrev = match
							.querySelector(
								".team-b > .team__content > .team-container > .team-info > .team-info-wrapper > a > .abbrev"
							)
							.textContent.trim();
						status === "pre"
							? (away_record = match
									.querySelector(
										".team-b > .team__content > .team-container > .team-info > .record"
									)
									.textContent.replace("Form: ", ""))
							: "";
						away_logo = match
							.querySelector(
								".team-b > .team__content > .team-container > .team-info-logo > .logo > picture > source"
							)
							.getAttribute("srcset");
						away_score =
							status === ("live" || "post")
								? match.querySelector(
										".team-b > .team__content > .score-container > .score"
								  ).textContent
								: "";
						away_details =
							status === ("live" || "post") &&
							details.querySelector(".team-b > .team-info > .ul") !== null
								? Array.from(
										details.querySelector(".team-b > .team-info > ul").children
								  ).map((li) =>
										li.textContent.trim().replace(/\t/g, "").replace(/\n/g, "")
								  )
								: "";
						// pushing the game object
						games.push({
							status: status,
							state: state,
							date: date,
							time: time,
							home: {
								name: home_name,
								name_abbrev: home_name_abbrev,
								record: home_record,
								logo: home_logo,
								score: home_score,
								home_details,
							},
							away: {
								name: away_name,
								name_abbrev: away_name_abbrev,
								record: away_record,
								logo: away_logo,
								score: away_score,
								away_details,
							},
						});
						j++;
					}
					let title = content[i].textContent;
					league.push({ league: title, games: games });
				}
				i = j;
			}
			return league;
		});
		await browser.close();
		console.log("Browser is now closed");
		return scoreBoard;
	} catch (error) {
		console.log(error.message);
		return "il y a eu une erreur";
	}
};

// format date

const format_date = (date) => {
	let months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	return (
		months[parseInt(date.slice(4, 6)) - 1] +
		" " +
		date.slice(6, 8) +
		", " +
		date.slice(0, 4)
	);
};
