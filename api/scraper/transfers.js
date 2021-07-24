const config = require("config");
const process = require("process");
const cheerio = require("cheerio");
const fetch = require("node-fetch");

exports.fecthTransfer = async () => {
	let url = config.get("transfers");
	let website = await fetch(url)
		.then((res) => res.text())
		.then((body) => body);
	const $ = cheerio.load(website);
	const scripts = await $("script").toArray();
	const transfersScript = scripts.find(
		(script) =>
			script.children[0] &&
			script.children[0].data.includes("window['__espnfitt__']=")
	).children[0].data;
	const strippedData = transfersScript
		.replace("window['__espnfitt__']=", "")
		.replace(/;/g, "");
	return {
		transfers: JSON.parse(strippedData).page.content.transfers.transfers,
		news: JSON.parse(strippedData).page.content.transfers.news,
	};
};
