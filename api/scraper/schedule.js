window["__espnfitt__"] = {
	app: {
		uid: "espnfitt",
		mode: "universal",
		apiEnv: "production",
		envName: "prod",
		cdnPath: "//cdn1.espn.net/fitt/35de2b280580-release-06-29-2021.2/client",
		webpack: {},
		nochunks: false,
		allowMocks: true,
		mockDataPort: 1981,
		inclPgCSS: true,
		assets: {
			scripts: [
				"//cdn1.espn.net/fitt/35de2b280580-release-06-29-2021.2/client/espnfitt.js",
				"//cdn1.espn.net/fitt/35de2b280580-release-06-29-2021.2/client/espn-en.js",
				"//cdn1.espn.net/fitt/35de2b280580-release-06-29-2021.2/client/standings.js",
			],
			stylesheets: [
				"//cdn1.espn.net/fitt/35de2b280580-release-06-29-2021.2/client/css/espnfitt.css",
				"//cdn1.espn.net/fitt/35de2b280580-release-06-29-2021.2/client/css/standings.css",
			],
		},
		device: "desktop",
		edition: { config: {}, translations: {} },
		flags: {
			ads: true,
			nav: true,
			hsb: true,
			anltcs: true,
			otbrn: true,
			qaAPI: false,
			sbAPI: false,
			localAPI: false,
			previewAPI: false,
			gmStrp: true,
			exLnks: true,
			rtCol: true,
			srchOrg: "",
			footer: true,
		},
		tms: {
			enabled: true,
			env: "dev",
			tag: "https://dcf.espn.com/TWDC-DTCI/prod/Bootstrap.js",
			tagNS: "Boostrapper",
			emitEvent: "tms:ready",
			loadScript: false,
			cmpLoaded: false,
			ready: false,
		},
		frameAncestors: [
			"'self'",
			"*.espn.com:*",
			"*.espnqa.com:*",
			"*.espnsb.com",
			"*.espn.co.uk",
			"*.espndeportes.espn.com",
			"*.espn.com.br",
			"*.espn.com.mx",
			"*.espn.com.ve",
			"*.espn.com.ar",
			"*.espn.com.co",
			"*.espnfc.com.au",
			"*.espn.com.au",
			"*.espn.in",
			"*.espn.com.sg",
			"*.espn.cl",
			"*.espn.com.pe",
			"*.espn.com.gt",
			"*.espn.com.do",
			"*.espn.com.ec",
			"*.espn.com.uy",
			"*.espn.com.pa",
			"*.espn.co.cr",
			"http://*.espnqa.com:*",
			"http://*.espn.com:*",
		],
		searchConfig: {
			qa: {
				site_espn: [
					"promoted",
					"team",
					"player",
					"league",
					"series",
					"film",
					"article",
					"live",
					"upcoming",
					"replay",
					"clips",
				],
				"editionorigin_espn-en_watch": [
					"promoted",
					"series",
					"film",
					"live",
					"upcoming",
					"replay",
					"clips",
					"team",
					"player",
					"league",
					"article",
				],
				"edition_espn-es-mx": [
					"promoted",
					"team",
					"player",
					"league",
					"article",
					"clips",
				],
				site_espncricinfo: ["team", "player", "league", "article"],
			},
			prod: {
				site_espn: [
					"promoted",
					"team",
					"player",
					"league",
					"series",
					"film",
					"article",
					"live",
					"upcoming",
					"replay",
					"clips",
				],
				"editionorigin_espn-en_watch": [
					"promoted",
					"series",
					"film",
					"live",
					"upcoming",
					"replay",
					"clips",
					"team",
					"player",
					"league",
					"article",
				],
				site_espncricinfo: ["team", "player", "league", "article"],
			},
		},
		serveStale: [
			"/esports/",
			"/esports/index",
			"/womens-college-basketball/rankings",
		],
		featureGating: {
			playerFollowing: true,
			siteBroadcast: true,
			browerDeprecation: true,
			gateFavorites: true,
			newSearchVersion: true,
			enableFastcast: true,
			hudsonPlayer: true,
			geoFooter: true,
			activeSportsSiteAPI: true,
			usPrivacy: true,
			hudsonPAL: false,
			drm: true,
		},
		abScr: "https://a.espncdn.com/prod/scripts/analytics/ESPN_at_v2.rs.js",
		footer: {
			ad: {
				network: "21783347309",
				base: "espn.com",
				kvps: [{ name: "ed", value: "us" }],
				kvpsEspnPlus: [
					{ name: "ed", value: "us" },
					{ name: "eplus", value: "true" },
				],
				selector: ".ad-slot",
				override: {
					banner: {
						conversation: "banner-scoreboard",
						game: "banner-scoreboard",
						index: "banner-index",
						lineups: "banner-scoreboard",
						match: "banner-scoreboard",
						preview: "banner-scoreboard",
						scoreboard: "banner-scoreboard",
						fightcenter: "banner-scoreboard",
					},
				},
				webviewOverride: {
					banner: {
						standings: "banner-webview",
						"team/stats": "banner-webview",
						roster: "banner-webview",
						"nba/stats": "banner-webview",
						"nfl/stats": "banner-webview",
						"cfb/stats": "banner-webview",
						"mlb/stats": "banner-webview",
						"ncb/rankings": "banner-webview",
						"ncaaw/rankings": "banner-webview",
						"cfb/rankings": "banner-webview",
					},
				},
				sizes: {
					overlay: {
						defaultSize: [0, 0],
						mappings: [{ viewport: [0, 0], slot: [[0, 0]] }],
					},
					banner: {
						defaultSize: [970, 66],
						mappings: [
							{
								viewport: [1280, 0],
								slot: [
									[1280, 100],
									[970, 250],
									[728, 90],
								],
							},
							{
								viewport: [1024, 0],
								slot: [
									[970, 66],
									[970, 250],
									[728, 90],
								],
							},
							{ viewport: [768, 0], slot: [[728, 90]] },
							{ viewport: [320, 0], slot: [[320, 50]] },
							{ viewport: [0, 0], slot: [[240, 38]] },
						],
						pbjs: {
							xl: [
								[970, 250],
								[728, 90],
							],
							l: [
								[970, 250],
								[728, 90],
							],
							m: [[728, 90]],
							s: [[320, 50]],
						},
					},
					"banner-index": {
						defaultSize: [970, 66],
						includedCountries: ["All"],
						excludedProfile: ["xl"],
						excludedSize: ["728,90"],
						mappings: [
							{
								viewport: [1280, 0],
								slot: [
									[1280, 100],
									[970, 250],
								],
							},
							{
								viewport: [1024, 0],
								slot: [
									[970, 66],
									[970, 250],
								],
							},
							{ viewport: [768, 0], slot: [[728, 90]] },
							{ viewport: [320, 0], slot: [[320, 50]] },
							{ viewport: [0, 0], slot: [[240, 38]] },
						],
						pbjs: {
							xl: [[970, 250]],
							l: [[970, 250]],
							m: [[728, 90]],
							s: [[320, 50]],
						},
					},
					"banner-scoreboard": {
						defaultSize: [970, 66],
						includedCountries: ["us"],
						excludedSize: ["970,250"],
						mappings: [
							{
								viewport: [1280, 0],
								slot: [
									[1280, 100],
									[728, 90],
								],
							},
							{
								viewport: [1024, 0],
								slot: [
									[970, 66],
									[728, 90],
								],
							},
							{ viewport: [768, 0], slot: [[728, 90]] },
							{ viewport: [320, 0], slot: [[320, 50]] },
							{ viewport: [0, 0], slot: [[240, 38]] },
						],
						pbjs: {
							xl: [[728, 90]],
							l: [[728, 90]],
							m: [[728, 90]],
							s: [[320, 50]],
						},
					},
					"banner-webview": {
						defaultSize: [728, 90],
						includedCountries: ["All"],
						excludedSize: ["970,250"],
						mappings: [
							{ viewport: [1280, 0], slot: [[728, 90]] },
							{ viewport: [1024, 0], slot: [[728, 90]] },
							{ viewport: [768, 0], slot: [[728, 90]] },
							{ viewport: [320, 0], slot: [[320, 50]] },
							{ viewport: [0, 0], slot: [[240, 38]] },
						],
						pbjs: {
							xl: [[728, 90]],
							l: [[728, 90]],
							m: [[728, 90]],
							s: [[320, 50]],
						},
					},
					incontent: {
						defaultSize: [300, 250],
						mappings: [
							{
								viewport: [1024, 0],
								slot: [
									[300, 250],
									[300, 600],
								],
							},
						],
					},
					"incontent-betting": {
						defaultSize: [300, 251],
						mappings: [
							{ viewport: [1024, 0], slot: [[300, 251]] },
							{ viewport: [320, 0], slot: [[300, 251]] },
						],
					},
					incontent2: {
						defaultSize: [300, 250],
						mappings: [{ viewport: [0, 0], slot: [[300, 250]] }],
					},
					incontentstrip: {
						defaultSize: [298, 50],
						mappings: [
							{ viewport: [1024, 0], slot: [298, 50] },
							{ viewport: [0, 0], slot: [] },
						],
					},
					wallpaper: {
						defaultSize: [1280, 455],
						mappings: [
							{ viewport: [1280, 0], slot: [[1680, 1050]] },
							{ viewport: [1024, 0], slot: [[1280, 455]] },
							{ viewport: [0, 0], slot: [] },
						],
					},
					incontentstrip2: {
						defaultSize: [298, 50],
						mappings: [{ viewport: [320, 0], slot: [[298, 50]] }],
					},
					midpage: {
						defaultSize: [320, 250],
						mappings: [
							{ viewport: [1280, 0], slot: [[700, 400]] },
							{ viewport: [1024, 0], slot: [[440, 330]] },
							{ viewport: [768, 0], slot: [[320, 250]] },
							{ viewport: [0, 0], slot: [[320, 250]] },
						],
					},
					presby: {
						defaultSize: [112, 62],
						mappings: [{ viewport: [0, 0], slot: [[112, 62]] }],
					},
					presentedbylogo: {
						defaultSize: [128, 30],
						mappings: [
							{ viewport: [1024, 0], slot: [[128, 30]] },
							{ viewport: [0, 0], slot: [[90, 20]] },
						],
					},
					instream: {
						defaultSize: [1, 3],
						mappings: [{ viewport: [0, 0], slot: [[1, 3]] }],
					},
					exclusions: {
						defaultSize: [1, 2],
						mappings: [{ viewport: [0, 0], slot: [[1, 2]] }],
					},
					native: {
						defaultSize: "fluid",
						mappings: [{ viewport: [0, 0], slot: ["fluid"] }],
					},
					"native-betting": {
						defaultSize: "fluid",
						mappings: [{ viewport: [0, 0], slot: ["fluid"] }],
					},
				},
				bettingOnlySizes: {
					"incontent-betting": {
						defaultSize: [300, 251],
						mappings: [
							{ viewport: [1024, 0], slot: [[300, 251]] },
							{ viewport: [320, 0], slot: [[300, 251]] },
						],
					},
					"native-betting": {
						defaultSize: "fluid",
						mappings: [{ viewport: [0, 0], slot: ["fluid"] }],
					},
				},
				sizesEspnPlus: {
					banner: {
						defaultSize: [970, 66],
						mappings: [
							{
								viewport: [1280, 0],
								slot: [
									[1280, 100],
									[970, 250],
									[728, 90],
								],
							},
							{
								viewport: [1024, 0],
								slot: [
									[970, 66],
									[970, 250],
									[728, 90],
								],
							},
							{ viewport: [768, 0], slot: [[728, 90]] },
							{ viewport: [320, 0], slot: [[320, 50]] },
							{ viewport: [0, 0], slot: [[240, 38]] },
						],
						pbjs: {
							xl: [
								[970, 250],
								[728, 90],
							],
							l: [
								[970, 250],
								[728, 90],
							],
							m: [[728, 90]],
							s: [[320, 50]],
						},
					},
					"banner-index": {
						defaultSize: [970, 66],
						includedCountries: ["us"],
						excludedProfile: ["xl"],
						excludedSize: ["728,90"],
						mappings: [
							{
								viewport: [1280, 0],
								slot: [
									[1280, 100],
									[970, 250],
								],
							},
							{
								viewport: [1024, 0],
								slot: [
									[970, 66],
									[970, 250],
								],
							},
							{ viewport: [768, 0], slot: [[728, 90]] },
							{ viewport: [320, 0], slot: [[320, 50]] },
							{ viewport: [0, 0], slot: [[240, 38]] },
						],
						pbjs: {
							xl: [[970, 250]],
							l: [[970, 250]],
							m: [[728, 90]],
							s: [[320, 50]],
						},
					},
					"banner-scoreboard": {
						defaultSize: [970, 66],
						includedCountries: ["us"],
						excludedSize: ["970,250"],
						mappings: [
							{
								viewport: [1280, 0],
								slot: [
									[1280, 100],
									[728, 90],
								],
							},
							{
								viewport: [1024, 0],
								slot: [
									[970, 66],
									[728, 90],
								],
							},
							{ viewport: [768, 0], slot: [[728, 90]] },
							{ viewport: [320, 0], slot: [[320, 50]] },
							{ viewport: [0, 0], slot: [[240, 38]] },
						],
						pbjs: {
							xl: [[728, 90]],
							l: [[728, 90]],
							m: [[728, 90]],
							s: [[320, 50]],
						},
					},
					"native-betting": {
						defaultSize: "fluid",
						mappings: [{ viewport: [0, 0], slot: ["fluid"] }],
					},
					incontent: {
						defaultSize: [300, 250],
						mappings: [
							{
								viewport: [1024, 0],
								slot: [
									[300, 250],
									[300, 600],
								],
							},
						],
					},
					"incontent-betting": {
						defaultSize: [300, 251],
						mappings: [
							{ viewport: [1024, 0], slot: [[300, 251]] },
							{ viewport: [320, 0], slot: [[300, 251]] },
						],
					},
				},
				whitelistEspnPlus: [
					"boxing",
					"cbb",
					"cfb",
					"frontpage",
					"golf",
					"mlb",
					"mma",
					"nba",
					"ncaaw",
					"nfl",
					"nhl",
					"soccer",
					"tennis",
					"wnba",
					"horse",
					"esports",
					"formulaone",
				],
				ePlusBettingAdOnly: ["fantasy"],
				breakpoints: {
					xl: [1280],
					l: [1024, 1279],
					m: [768, 1023],
					s: [0, 767],
				},
				supportDynamicPageLoad: true,
				delayInPageAdSlots: true,
				refreshOnBreakpointChange: true,
				dynamicKeyValues: { profile: { key: "prof" } },
				id: 12129264,
				disabled: "false",
				incontentPositions: {
					defaults: { favorites: -1, now: 4, news: 4 },
					index: { top: { favorites: -1 }, nfl: {} },
				},
				load: {
					defaults: { desktop: "init", mobile: "init", tablet: "init" },
					frontpage: { desktop: "init", mobile: "init", tablet: "init" },
					story: { desktop: "init", mobile: "init", tablet: "init" },
					index: { desktop: "init", mobile: "init", tablet: "init" },
					scoreboard: { desktop: "init", mobile: "init", tablet: "init" },
					standings: { desktop: "init", mobile: "init", tablet: "init" },
					schedule: { desktop: "init", mobile: "init", tablet: "init" },
				},
				preBidConfig: {
					timeout: 1000,
					usePreBid: true,
					EUROPE_EXCLUSIONS: [
						"AL",
						"AD",
						"AM",
						"AT",
						"AZ",
						"BY",
						"BE",
						"BA",
						"BG",
						"HR",
						"CY",
						"CZ",
						"DK",
						"EE",
						"FO",
						"FI",
						"FR",
						"GE",
						"DE",
						"GI",
						"GR",
						"GL",
						"HU",
						"IS",
						"IE",
						"IT",
						"XK",
						"LV",
						"LI",
						"LT",
						"LU",
						"MK",
						"MT",
						"MD",
						"MC",
						"ME",
						"NL",
						"NO",
						"PL",
						"PT",
						"RO",
						"RU",
						"SM",
						"RS",
						"SK",
						"SI",
						"ES",
						"SJ",
						"SE",
						"CH",
						"TR",
						"UA",
						"GB",
						"VA",
					],
					REGION_MAP: {
						AF: "IS",
						AL: "EMEA",
						DZ: "EMEA",
						AS: "ANZ",
						AD: "EMEA",
						AO: "EMEA",
						AI: "LATAM",
						AQ: "ANZ",
						AG: "LATAM",
						AR: "LATAM",
						AM: "EMEA",
						AW: "LATAM",
						AU: "ANZ",
						AT: "EMEA",
						AZ: "EMEA",
						BH: "EMEA",
						BD: "IS",
						BB: "LATAM",
						BY: "EMEA",
						BE: "EMEA",
						BZ: "LATAM",
						BJ: "EMEA",
						BM: "LATAM",
						BT: "IS",
						BO: "LATAM",
						BA: "EMEA",
						BW: "EMEA",
						BV: "ANZ",
						BR: "BR",
						IO: "IS",
						VG: "LATAM",
						BN: "APAC",
						BG: "EMEA",
						BF: "EMEA",
						BI: "EMEA",
						KH: "APAC",
						CM: "EMEA",
						CA: "CA",
						CV: "EMEA",
						BQ: "LATAM",
						KY: "LATAM",
						CF: "EMEA",
						TD: "EMEA",
						CL: "LATAM",
						CN: "APAC",
						CX: "ANZ",
						CC: "ANZ",
						CO: "LATAM",
						KM: "EMEA",
						CK: "ANZ",
						CR: "LATAM",
						CI: "EMEA",
						HR: "EMEA",
						CW: "LATAM",
						CY: "EMEA",
						CZ: "EMEA",
						CD: "EMEA",
						DK: "EMEA",
						DJ: "EMEA",
						DM: "LATAM",
						DO: "LATAM",
						EC: "LATAM",
						EG: "EMEA",
						SV: "LATAM",
						GQ: "EMEA",
						ER: "EMEA",
						EE: "EMEA",
						ET: "EMEA",
						FK: "LATAM",
						FO: "EMEA",
						FM: "ANZ",
						FJ: "ANZ",
						FI: "EMEA",
						FR: "EMEA",
						GF: "LATAM",
						PF: "ANZ",
						TF: "EMEA",
						GA: "EMEA",
						GE: "EMEA",
						DE: "EMEA",
						GH: "EMEA",
						GI: "EMEA",
						GR: "EMEA",
						GL: "EMEA",
						GD: "LATAM",
						GP: "LATAM",
						GU: "ANZ",
						GT: "LATAM",
						GG: "EMEA",
						GN: "EMEA",
						GW: "EMEA",
						GY: "LATAM",
						HT: "LATAM",
						HM: "EMEA",
						HN: "LATAM",
						HK: "APAC",
						HU: "EMEA",
						IS: "EMEA",
						IN: "IS",
						ID: "APAC",
						IQ: "EMEA",
						IE: "EMEA",
						IL: "EMEA",
						IT: "EMEA",
						JM: "LATAM",
						JP: "APAC",
						JE: "EMEA",
						JO: "EMEA",
						KZ: "IS",
						KE: "EMEA",
						KI: "ANZ",
						XK: "EMEA",
						KW: "EMEA",
						KG: "IS",
						LA: "APAC",
						LV: "EMEA",
						LB: "EMEA",
						LS: "EMEA",
						LR: "EMEA",
						LY: "EMEA",
						LI: "EMEA",
						LT: "EMEA",
						LU: "EMEA",
						MO: "APAC",
						MK: "EMEA",
						MG: "EMEA",
						MW: "EMEA",
						MY: "APAC",
						MV: "IS",
						ML: "EMEA",
						MT: "EMEA",
						MH: "ANZ",
						MQ: "LATAM",
						MR: "EMEA",
						MU: "EMEA",
						YT: "EMEA",
						MX: "LATAM",
						MD: "EMEA",
						MC: "EMEA",
						MN: "APAC",
						ME: "EMEA",
						MS: "LATAM",
						MA: "EMEA",
						MZ: "EMEA",
						MM: "IS",
						NA: "EMEA",
						NR: "ANZ",
						NP: "IS",
						NL: "LATAM",
						NC: "ANZ",
						NZ: "ANZ",
						NI: "LATAM",
						NE: "EMEA",
						NG: "EMEA",
						NU: "ANZ",
						NF: "ANZ",
						MP: "ANZ",
						NO: "EMEA",
						OM: "EMEA",
						PK: "IS",
						PW: "ANZ",
						PS: "EMEA",
						PA: "LATAM",
						PG: "ANZ",
						PY: "LATAM",
						PE: "LATAM",
						PH: "APAC",
						PN: "ANZ",
						PL: "EMEA",
						PT: "EMEA",
						PR: "LATAM",
						QA: "EMEA",
						RE: "EMEA",
						RO: "EMEA",
						RU: "EMEA",
						RW: "EMEA",
						SH: "EMEA",
						KN: "LATAM",
						LC: "LATAM",
						PM: "EMEA",
						VC: "LATAM",
						WS: "ANZ",
						SM: "EMEA",
						ST: "EMEA",
						SA: "EMEA",
						SN: "EMEA",
						RS: "EMEA",
						SC: "EMEA",
						SL: "EMEA",
						SG: "APAC",
						SX: "LATAM",
						SK: "EMEA",
						SI: "EMEA",
						SB: "ANZ",
						SO: "EMEA",
						ZA: "EMEA",
						GS: "EMEA",
						KR: "APAC",
						ES: "EMEA",
						LK: "IS",
						SR: "LATAM",
						SJ: "EMEA",
						SZ: "EMEA",
						SE: "EMEA",
						CH: "EMEA",
						TW: "APAC",
						TJ: "IS",
						TZ: "EMEA",
						TH: "APAC",
						BS: "LATAM",
						GM: "EMEA",
						TL: "APAC",
						TG: "EMEA",
						TK: "ANZ",
						TO: "ANZ",
						TT: "LATAM",
						TN: "EMEA",
						TR: "EMEA",
						TM: "IS",
						TC: "LATAM",
						TV: "ANZ",
						VI: "LATAM",
						UG: "EMEA",
						UA: "EMEA",
						AE: "EMEA",
						GB: "EMEA",
						US: "US",
						UM: "ANZ",
						UY: "LATAM",
						UZ: "IS",
						VU: "ANZ",
						VA: "EMEA",
						VE: "LATAM",
						VN: "APAC",
						WF: "ANZ",
						EH: "EMEA",
						YE: "EMEA",
						ZM: "EMEA",
						ZW: "EMEA",
					},
					rubicon: {
						accountId: 13042,
						desktop: { zoneId: 435334, siteId: 92444 },
						mobile: { zoneId: 435336, siteId: 92446 },
					},
					aol: {
						networkId: "11526.1",
						incontent: [4938388],
						banner: { desktop: [4938374, 5061577], mobile: [4938403] },
					},
					appnexus: {
						incontent: {
							US: 13838929,
							APAC: 13838959,
							BR: 13838961,
							CA: 13838962,
							EMEA: 13838963,
							IS: 13838964,
							LATAM: 13838965,
							ANZ: 13838960,
						},
						banner: {
							US: 13401993,
							APAC: 13838952,
							BR: 13838954,
							CA: 13838955,
							EMEA: 13838956,
							IS: 13838957,
							LATAM: 13838958,
							ANZ: 13838953,
						},
					},
					trustx: { incontent: 9698, banner: 9701 },
					ix: { siteId: "534143" },
				},
				videoAdConfig: {
					qa: {
						google: true,
						network: 21743558653,
						cms: 2495342,
						showPremVideoAds: true,
						allowAdSkip: true,
						useNewUI: true,
						iphoneplaysinline: true,
						disallowAdSkipByEdition: ["espn.ar"],
					},
					prod: {
						google: true,
						network: 21783347309,
						cms: 2497009,
						showPremVideoAds: true,
						allowAdSkip: true,
						useNewUI: true,
						iphoneplaysinline: true,
						disallowAdSkipByEdition: [],
					},
				},
				taboolaConfig: {
					local: { taboola: { show: true }, outbrain: { show: false } },
					sandbox: { taboola: { show: true }, outbrain: { show: false } },
					qa: { taboola: { show: true }, outbrain: { show: false } },
					prod: { taboola: { show: true }, outbrain: { show: false } },
				},
				videoOOVAdConfig: {
					Note: "no",
					Storage:
						"To disable suspended video ads in out-of-view video players, set the Note field above to: no ",
				},
			},
			prebid: {
				timeout: 1000,
				usePreBid: true,
				EUROPE_EXCLUSIONS: [
					"AL",
					"AD",
					"AM",
					"AT",
					"AZ",
					"BY",
					"BE",
					"BA",
					"BG",
					"HR",
					"CY",
					"CZ",
					"DK",
					"EE",
					"FO",
					"FI",
					"FR",
					"GE",
					"DE",
					"GI",
					"GR",
					"GL",
					"HU",
					"IS",
					"IE",
					"IT",
					"XK",
					"LV",
					"LI",
					"LT",
					"LU",
					"MK",
					"MT",
					"MD",
					"MC",
					"ME",
					"NL",
					"NO",
					"PL",
					"PT",
					"RO",
					"RU",
					"SM",
					"RS",
					"SK",
					"SI",
					"ES",
					"SJ",
					"SE",
					"CH",
					"TR",
					"UA",
					"GB",
					"VA",
				],
				REGION_MAP: {
					AF: "IS",
					AL: "EMEA",
					DZ: "EMEA",
					AS: "ANZ",
					AD: "EMEA",
					AO: "EMEA",
					AI: "LATAM",
					AQ: "ANZ",
					AG: "LATAM",
					AR: "LATAM",
					AM: "EMEA",
					AW: "LATAM",
					AU: "ANZ",
					AT: "EMEA",
					AZ: "EMEA",
					BH: "EMEA",
					BD: "IS",
					BB: "LATAM",
					BY: "EMEA",
					BE: "EMEA",
					BZ: "LATAM",
					BJ: "EMEA",
					BM: "LATAM",
					BT: "IS",
					BO: "LATAM",
					BA: "EMEA",
					BW: "EMEA",
					BV: "ANZ",
					BR: "BR",
					IO: "IS",
					VG: "LATAM",
					BN: "APAC",
					BG: "EMEA",
					BF: "EMEA",
					BI: "EMEA",
					KH: "APAC",
					CM: "EMEA",
					CA: "CA",
					CV: "EMEA",
					BQ: "LATAM",
					KY: "LATAM",
					CF: "EMEA",
					TD: "EMEA",
					CL: "LATAM",
					CN: "APAC",
					CX: "ANZ",
					CC: "ANZ",
					CO: "LATAM",
					KM: "EMEA",
					CK: "ANZ",
					CR: "LATAM",
					CI: "EMEA",
					HR: "EMEA",
					CW: "LATAM",
					CY: "EMEA",
					CZ: "EMEA",
					CD: "EMEA",
					DK: "EMEA",
					DJ: "EMEA",
					DM: "LATAM",
					DO: "LATAM",
					EC: "LATAM",
					EG: "EMEA",
					SV: "LATAM",
					GQ: "EMEA",
					ER: "EMEA",
					EE: "EMEA",
					ET: "EMEA",
					FK: "LATAM",
					FO: "EMEA",
					FM: "ANZ",
					FJ: "ANZ",
					FI: "EMEA",
					FR: "EMEA",
					GF: "LATAM",
					PF: "ANZ",
					TF: "EMEA",
					GA: "EMEA",
					GE: "EMEA",
					DE: "EMEA",
					GH: "EMEA",
					GI: "EMEA",
					GR: "EMEA",
					GL: "EMEA",
					GD: "LATAM",
					GP: "LATAM",
					GU: "ANZ",
					GT: "LATAM",
					GG: "EMEA",
					GN: "EMEA",
					GW: "EMEA",
					GY: "LATAM",
					HT: "LATAM",
					HM: "EMEA",
					HN: "LATAM",
					HK: "APAC",
					HU: "EMEA",
					IS: "EMEA",
					IN: "IS",
					ID: "APAC",
					IQ: "EMEA",
					IE: "EMEA",
					IL: "EMEA",
					IT: "EMEA",
					JM: "LATAM",
					JP: "APAC",
					JE: "EMEA",
					JO: "EMEA",
					KZ: "IS",
					KE: "EMEA",
					KI: "ANZ",
					XK: "EMEA",
					KW: "EMEA",
					KG: "IS",
					LA: "APAC",
					LV: "EMEA",
					LB: "EMEA",
					LS: "EMEA",
					LR: "EMEA",
					LY: "EMEA",
					LI: "EMEA",
					LT: "EMEA",
					LU: "EMEA",
					MO: "APAC",
					MK: "EMEA",
					MG: "EMEA",
					MW: "EMEA",
					MY: "APAC",
					MV: "IS",
					ML: "EMEA",
					MT: "EMEA",
					MH: "ANZ",
					MQ: "LATAM",
					MR: "EMEA",
					MU: "EMEA",
					YT: "EMEA",
					MX: "LATAM",
					MD: "EMEA",
					MC: "EMEA",
					MN: "APAC",
					ME: "EMEA",
					MS: "LATAM",
					MA: "EMEA",
					MZ: "EMEA",
					MM: "IS",
					NA: "EMEA",
					NR: "ANZ",
					NP: "IS",
					NL: "LATAM",
					NC: "ANZ",
					NZ: "ANZ",
					NI: "LATAM",
					NE: "EMEA",
					NG: "EMEA",
					NU: "ANZ",
					NF: "ANZ",
					MP: "ANZ",
					NO: "EMEA",
					OM: "EMEA",
					PK: "IS",
					PW: "ANZ",
					PS: "EMEA",
					PA: "LATAM",
					PG: "ANZ",
					PY: "LATAM",
					PE: "LATAM",
					PH: "APAC",
					PN: "ANZ",
					PL: "EMEA",
					PT: "EMEA",
					PR: "LATAM",
					QA: "EMEA",
					RE: "EMEA",
					RO: "EMEA",
					RU: "EMEA",
					RW: "EMEA",
					SH: "EMEA",
					KN: "LATAM",
					LC: "LATAM",
					PM: "EMEA",
					VC: "LATAM",
					WS: "ANZ",
					SM: "EMEA",
					ST: "EMEA",
					SA: "EMEA",
					SN: "EMEA",
					RS: "EMEA",
					SC: "EMEA",
					SL: "EMEA",
					SG: "APAC",
					SX: "LATAM",
					SK: "EMEA",
					SI: "EMEA",
					SB: "ANZ",
					SO: "EMEA",
					ZA: "EMEA",
					GS: "EMEA",
					KR: "APAC",
					ES: "EMEA",
					LK: "IS",
					SR: "LATAM",
					SJ: "EMEA",
					SZ: "EMEA",
					SE: "EMEA",
					CH: "EMEA",
					TW: "APAC",
					TJ: "IS",
					TZ: "EMEA",
					TH: "APAC",
					BS: "LATAM",
					GM: "EMEA",
					TL: "APAC",
					TG: "EMEA",
					TK: "ANZ",
					TO: "ANZ",
					TT: "LATAM",
					TN: "EMEA",
					TR: "EMEA",
					TM: "IS",
					TC: "LATAM",
					TV: "ANZ",
					VI: "LATAM",
					UG: "EMEA",
					UA: "EMEA",
					AE: "EMEA",
					GB: "EMEA",
					US: "US",
					UM: "ANZ",
					UY: "LATAM",
					UZ: "IS",
					VU: "ANZ",
					VA: "EMEA",
					VE: "LATAM",
					VN: "APAC",
					WF: "ANZ",
					EH: "EMEA",
					YE: "EMEA",
					ZM: "EMEA",
					ZW: "EMEA",
				},
				rubicon: {
					accountId: 13042,
					desktop: { zoneId: 435334, siteId: 92444 },
					mobile: { zoneId: 435336, siteId: 92446 },
				},
				aol: {
					networkId: "11526.1",
					incontent: [4938388],
					banner: { desktop: [4938374, 5061577], mobile: [4938403] },
				},
				appnexus: {
					incontent: {
						US: 13838929,
						APAC: 13838959,
						BR: 13838961,
						CA: 13838962,
						EMEA: 13838963,
						IS: 13838964,
						LATAM: 13838965,
						ANZ: 13838960,
					},
					banner: {
						US: 13401993,
						APAC: 13838952,
						BR: 13838954,
						CA: 13838955,
						EMEA: 13838956,
						IS: 13838957,
						LATAM: 13838958,
						ANZ: 13838953,
					},
				},
				trustx: { incontent: 9698, banner: 9701 },
				ix: { siteId: "534143" },
			},
			taboola: {
				local: { taboola: { show: true }, outbrain: { show: false } },
				sandbox: { taboola: { show: true }, outbrain: { show: false } },
				qa: { taboola: { show: true }, outbrain: { show: false } },
				prod: { taboola: { show: true }, outbrain: { show: false } },
			},
			videoAd: {
				qa: {
					google: true,
					network: 21743558653,
					cms: 2495342,
					showPremVideoAds: true,
					allowAdSkip: true,
					useNewUI: true,
					iphoneplaysinline: true,
					disallowAdSkipByEdition: ["espn.ar"],
				},
				prod: {
					google: true,
					network: 21783347309,
					cms: 2497009,
					showPremVideoAds: true,
					allowAdSkip: true,
					useNewUI: true,
					iphoneplaysinline: true,
					disallowAdSkipByEdition: [],
				},
			},
			videoOOVAd: {
				Note: "no",
				Storage:
					"To disable suspended video ads in out-of-view video players, set the Note field above to: no ",
			},
			frameAncestors: [
				"'self'",
				"*.espn.com:*",
				"*.espnqa.com:*",
				"*.espnsb.com",
				"*.espn.co.uk",
				"*.espndeportes.espn.com",
				"*.espn.com.br",
				"*.espn.com.mx",
				"*.espn.com.ve",
				"*.espn.com.ar",
				"*.espn.com.co",
				"*.espnfc.com.au",
				"*.espn.com.au",
				"*.espn.in",
				"*.espn.com.sg",
				"*.espn.cl",
				"*.espn.com.pe",
				"*.espn.com.gt",
				"*.espn.com.do",
				"*.espn.com.ec",
				"*.espn.com.uy",
				"*.espn.com.pa",
				"*.espn.co.cr",
				"http://*.espnqa.com:*",
				"http://*.espn.com:*",
			],
			search: {
				qa: {
					site_espn: [
						"promoted",
						"team",
						"player",
						"league",
						"series",
						"film",
						"article",
						"live",
						"upcoming",
						"replay",
						"clips",
					],
					"editionorigin_espn-en_watch": [
						"promoted",
						"series",
						"film",
						"live",
						"upcoming",
						"replay",
						"clips",
						"team",
						"player",
						"league",
						"article",
					],
					"edition_espn-es-mx": [
						"promoted",
						"team",
						"player",
						"league",
						"article",
						"clips",
					],
					site_espncricinfo: ["team", "player", "league", "article"],
				},
				prod: {
					site_espn: [
						"promoted",
						"team",
						"player",
						"league",
						"series",
						"film",
						"article",
						"live",
						"upcoming",
						"replay",
						"clips",
					],
					"editionorigin_espn-en_watch": [
						"promoted",
						"series",
						"film",
						"live",
						"upcoming",
						"replay",
						"clips",
						"team",
						"player",
						"league",
						"article",
					],
					site_espncricinfo: ["team", "player", "league", "article"],
				},
			},
			tms: {
				local: {
					vendor: "Ensighten",
					scriptTag: "https://dcf.espn.com/TWDC-DTCI/stage/Bootstrap.js",
					ns: "Boostrapper",
					enabled: true,
				},
				sandbox: {
					vendor: "Ensighten",
					scriptTag: "https://dcf.espn.com/TWDC-DTCI/dev/Bootstrap.js",
					ns: "Boostrapper",
					enabled: true,
				},
				qa: {
					vendor: "Ensighten",
					scriptTag: "https://dcf.espn.com/TWDC-DTCI/stage/Bootstrap.js",
					ns: "Boostrapper",
					enabled: true,
				},
				prod: {
					vendor: "Ensighten",
					scriptTag: "https://dcf.espn.com/TWDC-DTCI/prod/Bootstrap.js",
					ns: "Boostrapper",
					enabled: true,
				},
			},
			serveStale: [
				"/esports/",
				"/esports/index",
				"/womens-college-basketball/rankings",
			],
			featureGating: {
				playerFollowing: { local: true, sandbox: true, qa: true, prod: true },
				siteBroadcast: {
					edition: "espn-en",
					config: {
						startDate: "2019-10-03",
						endDate: "2019-11-03",
						prod: false,
						qa: false,
						sandbox: false,
						local: false,
						en: {
							active: false,
							buttonText: "Learn More",
							href: "https://disneytermsofuse.com/",
							message:
								"Please review our Terms of Use which changed on September 26, 2019",
						},
						pt: {
							active: false,
							buttonText: "Learn More",
							href: "https://disneytermsofuse.com/portuguese/",
							message:
								"Please review our Terms of Use which changed on September 26, 2019",
						},
						es: {
							active: false,
							buttonText: "Lee m&aacute;s",
							href: "https://disneytermsofuse.com/spanish/",
							message:
								"Por favor revisa los t&eacute;rminos de uso, ya que cambiaron el 26 de Septiembre de 2019",
						},
					},
				},
				browerDeprecation: { browser: "ie", active: true },
				gateFavorites: { local: false, sandbox: false, qa: false, prod: true },
				newSearchVersion: { prod: true, qa: true, sandbox: true, local: true },
				enableFastcast: { prod: true, qa: true, sandbox: true, local: false },
				hudsonPlayer: { qa: true, prod: true, local: true },
				geoFooter: { local: true, sandbox: true, qa: true, prod: true },
				activeSportsSiteAPI: {
					local: true,
					sandbox: true,
					qa: true,
					prod: true,
				},
				usPrivacy: { local: true, sandbox: true, qa: true, prod: true },
				hudsonPAL: { local: true, sandbox: true, qa: true, prod: false },
				drm: {
					countries:
						"|ar|bl|bo|br|cl|co|cr|cu|do|ec|gf|gp|gt|hn|ht|mf|mq|mx|ni|pa|pe|pr|py|sv|uy|ve|",
				},
			},
			ab: {
				local: {
					target: {
						enabled: true,
						script:
							"https://a.espncdn.com/prod/scripts/analytics/ESPN_at_v2.rs.js",
						placements: [
							{ site: "espn.co.uk", regexp: "(/)", flag: false },
							{ site: "www.espn.com", regexp: "(/.*)", flag: true },
							{ site: "www.espnqa.com", regexp: "(/.*)", flag: true },
						],
					},
					optimizely: {
						enabled: false,
						oldscript: "https://a.espncdn.com/sports/optimizely.js?local",
						script: "https://cdn.optimizely.com/js/310987714.js",
						placements: [],
					},
					fastcast: {
						enabled: false,
						script:
							"https://a.espncdn.com/combiner/c?js=analytics/espn.fastcastTracking.4.js",
						placements: {
							"/nba/index": "true",
							"/nfl/index": "true",
							"/mlb/index": "true",
							"^/.+$": "false",
						},
					},
				},
				qa: {
					target: {
						enabled: true,
						script:
							"https://a.espncdn.com/prod/scripts/analytics/ESPN_at_v2.rs.js",
						placements: [
							{ site: "espn.co.uk", regexp: "(/)", flag: false },
							{ site: "www.espn.com", regexp: "(/.*)", flag: true },
							{ site: "www.espnqa.com", regexp: "(/.*)", flag: true },
						],
					},
					optimizely: {
						enabled: false,
						oldscript: "https://a.espncdn.com/sports/optimizely.js?qa",
						script: "https://cdn.optimizely.com/js/310987714.js",
						placements: [],
					},
					fastcast: {
						enabled: false,
						script:
							"https://a.espncdn.com/combiner/c?js=analytics/espn.fastcastTracking.4.js",
						placements: {
							"/nba/index": "true",
							"/ncf/index": "true",
							"^/.+$": "false",
						},
					},
				},
				prod: {
					target: {
						enabled: true,
						script:
							"https://a.espncdn.com/prod/scripts/analytics/ESPN_at_v2.rs.js",
						placements: [
							{ site: "espn.co.uk", regexp: "(/)", flag: true },
							{ site: "www.espn.com", regexp: "(/.*)", flag: true },
						],
					},
					optimizely: {
						enabled: false,
						oldscript: "https://a.espncdn.com/sports/optimizely.js",
						script: "https://cdn.optimizely.com/js/310987714.js",
						placements: [],
					},
					fastcast: {
						enabled: false,
						script:
							"https://a.espncdn.com/combiner/c?js=analytics/espn.fastcastTracking.4.js",
						placements: {
							"/nba/index": "true",
							"/ncf/index": "true",
							"^/.+$": "false",
						},
					},
				},
			},
			footer: [
				{
					label: "Terms of Use",
					href: "https://disneytermsofuse.com/english-canada/",
				},
				{
					label: "Privacy Policy",
					href: "https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/",
				},
				{
					label: "Interest-Based Ads",
					href: "http://preferences-mgr.truste.com/?type=espn&affiliateId=148",
				},
				{
					label: "About Nielsen Measurement",
					href: "http://www.nielsen.com/digitalprivacy",
				},
			],
			copyright: "© ESPN Enterprises, Inc. All rights reserved.",
			quebec: {
				footer: [
					{
						label: "Terms of Use",
						href: "https://disneytermsofuse.com/canadian-french/",
					},
					{
						label: "Privacy Policy",
						href: "https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/",
					},
					{
						label: "Interest-Based Ads",
						href: "http://preferences-mgr.truste.com/?type=espn&affiliateId=148",
					},
					{
						label: "About Nielsen Measurement",
						href: "http://www.nielsen.com/digitalprivacy",
					},
				],
				copyright: "© ESPN Enterprises, Inc. All rights reserved.",
			},
		},
		dtcPackages: [
			{
				entitlement: "ESPN_PLUS_UFC_PPV_264",
				name: "UFC 264",
				isIap: true,
				isPPV: true,
				tuneIn: {
					upsellTextKey:
						"<p>More <span>Sports.</span> More <span>Leagues.</span></p><p>More <span>Teams.</span> More <span>Games.</span></p>",
					buttonText: "Start My 7-Day Free Trial",
				},
			},
			{
				entitlement: "ESPN_PLUS",
				name: "ESPN+",
				isIap: true,
				isPPV: false,
				tuneIn: {
					backgroundImgUrl: "/redesign/assets/img/dtc/espn-plus.png",
					overlayImgUrl: "/redesign/assets/img/logos/espnplus/ESPN+White.svg",
					upsellTextKey:
						"<p>More <span>Sports.</span> More <span>Leagues.</span></p><p>More <span>Teams.</span> More <span>Games.</span></p>",
					upsellHref:
						"https://secure.web.plus.espn.com/billing/purchase/ESPN_PURCHASE_CMPGN/ESPN_PURCHASE_VOCHR/MESPN",
					buttonText: "Subscribe Now",
				},
			},
			{
				entitlement: "ESPN_PLUS_MLB",
				name: "MLB.tv",
				isIap: true,
				isPPV: false,
				tuneIn: {
					backgroundImgUrl: "/redesign/assets/img/dtc/mlb-tv.png",
					overlayImgUrl: "/redesign/assets/img/dtc/mlbtv-logo.svg",
					upsellTextKey:
						'<p class="bold">Watch EVERY out-of-market<br>regular season game<br>LIVE or on demand in HD</p>',
					upsellHref:
						"https://secure.web.plus.espn.com/billing/purchase/ESPN_PURCHASE_CMPGN/ESPN_PURCHASE_VOCHR/MESPNMLB20",
					buttonText: "SUBSCRIBE TO MLB.TV",
				},
			},
			{
				entitlement: "ESPN_PLUS_UFC_PPV_263",
				name: "UFC 263",
				isIap: false,
				isPPV: true,
				tuneIn: {
					upsellTextKey:
						"<p>More <span>Sports.</span> More <span>Leagues.</span></p><p>More <span>Teams.</span> More <span>Games.</span></p>",
					buttonText: "Start My 7-Day Free Trial",
				},
			},
			{
				entitlement: "ESPN_PLUS_UFC_PPV_261",
				name: "UFC 261",
				isIap: false,
				isPPV: true,
				tuneIn: {
					upsellTextKey:
						"<p>More <span>Sports.</span> More <span>Leagues.</span></p><p>More <span>Teams.</span> More <span>Games.</span></p>",
					buttonText: "Start My 7-Day Free Trial",
				},
			},
			{
				entitlement: "ESPN_PLUS_UFC_PPV_262",
				name: "UFC 262",
				isIap: false,
				isPPV: true,
				tuneIn: {
					upsellTextKey:
						"<p>More <span>Sports.</span> More <span>Leagues.</span></p><p>More <span>Teams.</span> More <span>Games.</span></p>",
					buttonText: "Start My 7-Day Free Trial",
				},
			},
		],
		debug: { on: false },
		baseURL: "https://www.espn.com",
	},
	ads: {
		network: "21783347309",
		base: "espn.com",
		kvps: [{ name: "ed", value: "us" }],
		kvpsEspnPlus: [
			{ name: "ed", value: "us" },
			{ name: "eplus", value: "true" },
		],
		selector: ".ad-slot",
		override: {
			banner: {
				conversation: "banner-scoreboard",
				game: "banner-scoreboard",
				index: "banner-index",
				lineups: "banner-scoreboard",
				match: "banner-scoreboard",
				preview: "banner-scoreboard",
				scoreboard: "banner-scoreboard",
				fightcenter: "banner-scoreboard",
			},
		},
		webviewOverride: {
			banner: {
				standings: "banner-webview",
				"team/stats": "banner-webview",
				roster: "banner-webview",
				"nba/stats": "banner-webview",
				"nfl/stats": "banner-webview",
				"cfb/stats": "banner-webview",
				"mlb/stats": "banner-webview",
				"ncb/rankings": "banner-webview",
				"ncaaw/rankings": "banner-webview",
				"cfb/rankings": "banner-webview",
			},
		},
		sizes: {
			overlay: {
				defaultSize: [0, 0],
				mappings: [{ viewport: [0, 0], slot: [[0, 0]] }],
			},
			banner: {
				defaultSize: [970, 66],
				mappings: [
					{
						viewport: [1280, 0],
						slot: [
							[1280, 100],
							[970, 250],
							[728, 90],
						],
					},
					{
						viewport: [1024, 0],
						slot: [
							[970, 66],
							[970, 250],
							[728, 90],
						],
					},
					{ viewport: [768, 0], slot: [[728, 90]] },
					{ viewport: [320, 0], slot: [[320, 50]] },
					{ viewport: [0, 0], slot: [[240, 38]] },
				],
				pbjs: {
					xl: [
						[970, 250],
						[728, 90],
					],
					l: [
						[970, 250],
						[728, 90],
					],
					m: [[728, 90]],
					s: [[320, 50]],
				},
			},
			"banner-index": {
				defaultSize: [970, 66],
				includedCountries: ["All"],
				excludedProfile: ["xl"],
				excludedSize: ["728,90"],
				mappings: [
					{
						viewport: [1280, 0],
						slot: [
							[1280, 100],
							[970, 250],
						],
					},
					{
						viewport: [1024, 0],
						slot: [
							[970, 66],
							[970, 250],
						],
					},
					{ viewport: [768, 0], slot: [[728, 90]] },
					{ viewport: [320, 0], slot: [[320, 50]] },
					{ viewport: [0, 0], slot: [[240, 38]] },
				],
				pbjs: {
					xl: [[970, 250]],
					l: [[970, 250]],
					m: [[728, 90]],
					s: [[320, 50]],
				},
			},
			"banner-scoreboard": {
				defaultSize: [970, 66],
				includedCountries: ["us"],
				excludedSize: ["970,250"],
				mappings: [
					{
						viewport: [1280, 0],
						slot: [
							[1280, 100],
							[728, 90],
						],
					},
					{
						viewport: [1024, 0],
						slot: [
							[970, 66],
							[728, 90],
						],
					},
					{ viewport: [768, 0], slot: [[728, 90]] },
					{ viewport: [320, 0], slot: [[320, 50]] },
					{ viewport: [0, 0], slot: [[240, 38]] },
				],
				pbjs: {
					xl: [[728, 90]],
					l: [[728, 90]],
					m: [[728, 90]],
					s: [[320, 50]],
				},
			},
			"banner-webview": {
				defaultSize: [728, 90],
				includedCountries: ["All"],
				excludedSize: ["970,250"],
				mappings: [
					{ viewport: [1280, 0], slot: [[728, 90]] },
					{ viewport: [1024, 0], slot: [[728, 90]] },
					{ viewport: [768, 0], slot: [[728, 90]] },
					{ viewport: [320, 0], slot: [[320, 50]] },
					{ viewport: [0, 0], slot: [[240, 38]] },
				],
				pbjs: {
					xl: [[728, 90]],
					l: [[728, 90]],
					m: [[728, 90]],
					s: [[320, 50]],
				},
			},
			incontent: {
				defaultSize: [300, 250],
				mappings: [
					{
						viewport: [1024, 0],
						slot: [
							[300, 250],
							[300, 600],
						],
					},
				],
			},
			"incontent-betting": {
				defaultSize: [300, 251],
				mappings: [
					{ viewport: [1024, 0], slot: [[300, 251]] },
					{ viewport: [320, 0], slot: [[300, 251]] },
				],
			},
			incontent2: {
				defaultSize: [300, 250],
				mappings: [{ viewport: [0, 0], slot: [[300, 250]] }],
			},
			incontentstrip: {
				defaultSize: [298, 50],
				mappings: [
					{ viewport: [1024, 0], slot: [298, 50] },
					{ viewport: [0, 0], slot: [] },
				],
			},
			wallpaper: {
				defaultSize: [1280, 455],
				mappings: [
					{ viewport: [1280, 0], slot: [[1680, 1050]] },
					{ viewport: [1024, 0], slot: [[1280, 455]] },
					{ viewport: [0, 0], slot: [] },
				],
			},
			incontentstrip2: {
				defaultSize: [298, 50],
				mappings: [{ viewport: [320, 0], slot: [[298, 50]] }],
			},
			midpage: {
				defaultSize: [320, 250],
				mappings: [
					{ viewport: [1280, 0], slot: [[700, 400]] },
					{ viewport: [1024, 0], slot: [[440, 330]] },
					{ viewport: [768, 0], slot: [[320, 250]] },
					{ viewport: [0, 0], slot: [[320, 250]] },
				],
			},
			presby: {
				defaultSize: [112, 62],
				mappings: [{ viewport: [0, 0], slot: [[112, 62]] }],
			},
			presentedbylogo: {
				defaultSize: [128, 30],
				mappings: [
					{ viewport: [1024, 0], slot: [[128, 30]] },
					{ viewport: [0, 0], slot: [[90, 20]] },
				],
			},
			instream: {
				defaultSize: [1, 3],
				mappings: [{ viewport: [0, 0], slot: [[1, 3]] }],
			},
			exclusions: {
				defaultSize: [1, 2],
				mappings: [{ viewport: [0, 0], slot: [[1, 2]] }],
			},
			native: {
				defaultSize: "fluid",
				mappings: [{ viewport: [0, 0], slot: ["fluid"] }],
			},
			"native-betting": {
				defaultSize: "fluid",
				mappings: [{ viewport: [0, 0], slot: ["fluid"] }],
			},
		},
		bettingOnlySizes: {
			"incontent-betting": {
				defaultSize: [300, 251],
				mappings: [
					{ viewport: [1024, 0], slot: [[300, 251]] },
					{ viewport: [320, 0], slot: [[300, 251]] },
				],
			},
			"native-betting": {
				defaultSize: "fluid",
				mappings: [{ viewport: [0, 0], slot: ["fluid"] }],
			},
		},
		sizesEspnPlus: {
			banner: {
				defaultSize: [970, 66],
				mappings: [
					{
						viewport: [1280, 0],
						slot: [
							[1280, 100],
							[970, 250],
							[728, 90],
						],
					},
					{
						viewport: [1024, 0],
						slot: [
							[970, 66],
							[970, 250],
							[728, 90],
						],
					},
					{ viewport: [768, 0], slot: [[728, 90]] },
					{ viewport: [320, 0], slot: [[320, 50]] },
					{ viewport: [0, 0], slot: [[240, 38]] },
				],
				pbjs: {
					xl: [
						[970, 250],
						[728, 90],
					],
					l: [
						[970, 250],
						[728, 90],
					],
					m: [[728, 90]],
					s: [[320, 50]],
				},
			},
			"banner-index": {
				defaultSize: [970, 66],
				includedCountries: ["us"],
				excludedProfile: ["xl"],
				excludedSize: ["728,90"],
				mappings: [
					{
						viewport: [1280, 0],
						slot: [
							[1280, 100],
							[970, 250],
						],
					},
					{
						viewport: [1024, 0],
						slot: [
							[970, 66],
							[970, 250],
						],
					},
					{ viewport: [768, 0], slot: [[728, 90]] },
					{ viewport: [320, 0], slot: [[320, 50]] },
					{ viewport: [0, 0], slot: [[240, 38]] },
				],
				pbjs: {
					xl: [[970, 250]],
					l: [[970, 250]],
					m: [[728, 90]],
					s: [[320, 50]],
				},
			},
			"banner-scoreboard": {
				defaultSize: [970, 66],
				includedCountries: ["us"],
				excludedSize: ["970,250"],
				mappings: [
					{
						viewport: [1280, 0],
						slot: [
							[1280, 100],
							[728, 90],
						],
					},
					{
						viewport: [1024, 0],
						slot: [
							[970, 66],
							[728, 90],
						],
					},
					{ viewport: [768, 0], slot: [[728, 90]] },
					{ viewport: [320, 0], slot: [[320, 50]] },
					{ viewport: [0, 0], slot: [[240, 38]] },
				],
				pbjs: {
					xl: [[728, 90]],
					l: [[728, 90]],
					m: [[728, 90]],
					s: [[320, 50]],
				},
			},
			"native-betting": {
				defaultSize: "fluid",
				mappings: [{ viewport: [0, 0], slot: ["fluid"] }],
			},
			incontent: {
				defaultSize: [300, 250],
				mappings: [
					{
						viewport: [1024, 0],
						slot: [
							[300, 250],
							[300, 600],
						],
					},
				],
			},
			"incontent-betting": {
				defaultSize: [300, 251],
				mappings: [
					{ viewport: [1024, 0], slot: [[300, 251]] },
					{ viewport: [320, 0], slot: [[300, 251]] },
				],
			},
		},
		whitelistEspnPlus: [
			"boxing",
			"cbb",
			"cfb",
			"frontpage",
			"golf",
			"mlb",
			"mma",
			"nba",
			"ncaaw",
			"nfl",
			"nhl",
			"soccer",
			"tennis",
			"wnba",
			"horse",
			"esports",
			"formulaone",
		],
		ePlusBettingAdOnly: ["fantasy"],
		breakpoints: { xl: [1280], l: [1024, 1279], m: [768, 1023], s: [0, 767] },
		supportDynamicPageLoad: true,
		delayInPageAdSlots: true,
		refreshOnBreakpointChange: true,
		dynamicKeyValues: { profile: { key: "prof" } },
		id: 12129264,
		disabled: "false",
		incontentPositions: {
			defaults: { favorites: -1, now: 4, news: 4 },
			index: { top: { favorites: -1 }, nfl: {} },
		},
		load: {
			defaults: { desktop: "init", mobile: "init", tablet: "init" },
			frontpage: { desktop: "init", mobile: "init", tablet: "init" },
			story: { desktop: "init", mobile: "init", tablet: "init" },
			index: { desktop: "init", mobile: "init", tablet: "init" },
			scoreboard: { desktop: "init", mobile: "init", tablet: "init" },
			standings: { desktop: "init", mobile: "init", tablet: "init" },
			schedule: { desktop: "init", mobile: "init", tablet: "init" },
		},
		preBidConfig: {
			timeout: 1000,
			usePreBid: true,
			EUROPE_EXCLUSIONS: [
				"AL",
				"AD",
				"AM",
				"AT",
				"AZ",
				"BY",
				"BE",
				"BA",
				"BG",
				"HR",
				"CY",
				"CZ",
				"DK",
				"EE",
				"FO",
				"FI",
				"FR",
				"GE",
				"DE",
				"GI",
				"GR",
				"GL",
				"HU",
				"IS",
				"IE",
				"IT",
				"XK",
				"LV",
				"LI",
				"LT",
				"LU",
				"MK",
				"MT",
				"MD",
				"MC",
				"ME",
				"NL",
				"NO",
				"PL",
				"PT",
				"RO",
				"RU",
				"SM",
				"RS",
				"SK",
				"SI",
				"ES",
				"SJ",
				"SE",
				"CH",
				"TR",
				"UA",
				"GB",
				"VA",
			],
			REGION_MAP: {
				AF: "IS",
				AL: "EMEA",
				DZ: "EMEA",
				AS: "ANZ",
				AD: "EMEA",
				AO: "EMEA",
				AI: "LATAM",
				AQ: "ANZ",
				AG: "LATAM",
				AR: "LATAM",
				AM: "EMEA",
				AW: "LATAM",
				AU: "ANZ",
				AT: "EMEA",
				AZ: "EMEA",
				BH: "EMEA",
				BD: "IS",
				BB: "LATAM",
				BY: "EMEA",
				BE: "EMEA",
				BZ: "LATAM",
				BJ: "EMEA",
				BM: "LATAM",
				BT: "IS",
				BO: "LATAM",
				BA: "EMEA",
				BW: "EMEA",
				BV: "ANZ",
				BR: "BR",
				IO: "IS",
				VG: "LATAM",
				BN: "APAC",
				BG: "EMEA",
				BF: "EMEA",
				BI: "EMEA",
				KH: "APAC",
				CM: "EMEA",
				CA: "CA",
				CV: "EMEA",
				BQ: "LATAM",
				KY: "LATAM",
				CF: "EMEA",
				TD: "EMEA",
				CL: "LATAM",
				CN: "APAC",
				CX: "ANZ",
				CC: "ANZ",
				CO: "LATAM",
				KM: "EMEA",
				CK: "ANZ",
				CR: "LATAM",
				CI: "EMEA",
				HR: "EMEA",
				CW: "LATAM",
				CY: "EMEA",
				CZ: "EMEA",
				CD: "EMEA",
				DK: "EMEA",
				DJ: "EMEA",
				DM: "LATAM",
				DO: "LATAM",
				EC: "LATAM",
				EG: "EMEA",
				SV: "LATAM",
				GQ: "EMEA",
				ER: "EMEA",
				EE: "EMEA",
				ET: "EMEA",
				FK: "LATAM",
				FO: "EMEA",
				FM: "ANZ",
				FJ: "ANZ",
				FI: "EMEA",
				FR: "EMEA",
				GF: "LATAM",
				PF: "ANZ",
				TF: "EMEA",
				GA: "EMEA",
				GE: "EMEA",
				DE: "EMEA",
				GH: "EMEA",
				GI: "EMEA",
				GR: "EMEA",
				GL: "EMEA",
				GD: "LATAM",
				GP: "LATAM",
				GU: "ANZ",
				GT: "LATAM",
				GG: "EMEA",
				GN: "EMEA",
				GW: "EMEA",
				GY: "LATAM",
				HT: "LATAM",
				HM: "EMEA",
				HN: "LATAM",
				HK: "APAC",
				HU: "EMEA",
				IS: "EMEA",
				IN: "IS",
				ID: "APAC",
				IQ: "EMEA",
				IE: "EMEA",
				IL: "EMEA",
				IT: "EMEA",
				JM: "LATAM",
				JP: "APAC",
				JE: "EMEA",
				JO: "EMEA",
				KZ: "IS",
				KE: "EMEA",
				KI: "ANZ",
				XK: "EMEA",
				KW: "EMEA",
				KG: "IS",
				LA: "APAC",
				LV: "EMEA",
				LB: "EMEA",
				LS: "EMEA",
				LR: "EMEA",
				LY: "EMEA",
				LI: "EMEA",
				LT: "EMEA",
				LU: "EMEA",
				MO: "APAC",
				MK: "EMEA",
				MG: "EMEA",
				MW: "EMEA",
				MY: "APAC",
				MV: "IS",
				ML: "EMEA",
				MT: "EMEA",
				MH: "ANZ",
				MQ: "LATAM",
				MR: "EMEA",
				MU: "EMEA",
				YT: "EMEA",
				MX: "LATAM",
				MD: "EMEA",
				MC: "EMEA",
				MN: "APAC",
				ME: "EMEA",
				MS: "LATAM",
				MA: "EMEA",
				MZ: "EMEA",
				MM: "IS",
				NA: "EMEA",
				NR: "ANZ",
				NP: "IS",
				NL: "LATAM",
				NC: "ANZ",
				NZ: "ANZ",
				NI: "LATAM",
				NE: "EMEA",
				NG: "EMEA",
				NU: "ANZ",
				NF: "ANZ",
				MP: "ANZ",
				NO: "EMEA",
				OM: "EMEA",
				PK: "IS",
				PW: "ANZ",
				PS: "EMEA",
				PA: "LATAM",
				PG: "ANZ",
				PY: "LATAM",
				PE: "LATAM",
				PH: "APAC",
				PN: "ANZ",
				PL: "EMEA",
				PT: "EMEA",
				PR: "LATAM",
				QA: "EMEA",
				RE: "EMEA",
				RO: "EMEA",
				RU: "EMEA",
				RW: "EMEA",
				SH: "EMEA",
				KN: "LATAM",
				LC: "LATAM",
				PM: "EMEA",
				VC: "LATAM",
				WS: "ANZ",
				SM: "EMEA",
				ST: "EMEA",
				SA: "EMEA",
				SN: "EMEA",
				RS: "EMEA",
				SC: "EMEA",
				SL: "EMEA",
				SG: "APAC",
				SX: "LATAM",
				SK: "EMEA",
				SI: "EMEA",
				SB: "ANZ",
				SO: "EMEA",
				ZA: "EMEA",
				GS: "EMEA",
				KR: "APAC",
				ES: "EMEA",
				LK: "IS",
				SR: "LATAM",
				SJ: "EMEA",
				SZ: "EMEA",
				SE: "EMEA",
				CH: "EMEA",
				TW: "APAC",
				TJ: "IS",
				TZ: "EMEA",
				TH: "APAC",
				BS: "LATAM",
				GM: "EMEA",
				TL: "APAC",
				TG: "EMEA",
				TK: "ANZ",
				TO: "ANZ",
				TT: "LATAM",
				TN: "EMEA",
				TR: "EMEA",
				TM: "IS",
				TC: "LATAM",
				TV: "ANZ",
				VI: "LATAM",
				UG: "EMEA",
				UA: "EMEA",
				AE: "EMEA",
				GB: "EMEA",
				US: "US",
				UM: "ANZ",
				UY: "LATAM",
				UZ: "IS",
				VU: "ANZ",
				VA: "EMEA",
				VE: "LATAM",
				VN: "APAC",
				WF: "ANZ",
				EH: "EMEA",
				YE: "EMEA",
				ZM: "EMEA",
				ZW: "EMEA",
			},
			rubicon: {
				accountId: 13042,
				desktop: { zoneId: 435334, siteId: 92444 },
				mobile: { zoneId: 435336, siteId: 92446 },
			},
			aol: {
				networkId: "11526.1",
				incontent: [4938388],
				banner: { desktop: [4938374, 5061577], mobile: [4938403] },
			},
			appnexus: {
				incontent: {
					US: 13838929,
					APAC: 13838959,
					BR: 13838961,
					CA: 13838962,
					EMEA: 13838963,
					IS: 13838964,
					LATAM: 13838965,
					ANZ: 13838960,
				},
				banner: {
					US: 13401993,
					APAC: 13838952,
					BR: 13838954,
					CA: 13838955,
					EMEA: 13838956,
					IS: 13838957,
					LATAM: 13838958,
					ANZ: 13838953,
				},
			},
			trustx: { incontent: 9698, banner: 9701 },
			ix: { siteId: "534143" },
		},
		videoAdConfig: {
			qa: {
				google: true,
				network: 21743558653,
				cms: 2495342,
				showPremVideoAds: true,
				allowAdSkip: true,
				useNewUI: true,
				iphoneplaysinline: true,
				disallowAdSkipByEdition: ["espn.ar"],
			},
			prod: {
				google: true,
				network: 21783347309,
				cms: 2497009,
				showPremVideoAds: true,
				allowAdSkip: true,
				useNewUI: true,
				iphoneplaysinline: true,
				disallowAdSkipByEdition: [],
			},
		},
		taboolaConfig: {
			local: { taboola: { show: true }, outbrain: { show: false } },
			sandbox: { taboola: { show: true }, outbrain: { show: false } },
			qa: { taboola: { show: true }, outbrain: { show: false } },
			prod: { taboola: { show: true }, outbrain: { show: false } },
		},
		videoOOVAdConfig: {
			Note: "no",
			Storage:
				"To disable suspended video ads in out-of-view video players, set the Note field above to: no ",
		},
	},
	analytics: {},
	routing: {
		location: {
			port: "",
			hash: "",
			path: "/soccer/standings",
			host: "",
			protocol: "",
			params: { league: "esp.1" },
			pathname: "/soccer/standings",
			originalPathName: "/soccer/table",
			query: { league: "esp.1" },
		},
		params: {
			league: "ESP.1",
			sport: "soccer",
			pageType: "standings",
			rawPageType: "standings",
			subPageType: null,
		},
	},
	page: {
		key: "",
		title: "",
		type: "standings",
		meta: {
			title: "Spanish Primera División Table | ESPN",
			description:
				"Visit ESPN to view the 2021-22 Spanish Primera División Table",
			keywords: "Spanish Primera División, Soccer, Table, ESPN",
			canonical: "https://www.espn.com/soccer/standings/_/league/esp.1",
			robots: "",
			ogMetadata: {
				image:
					"https://a.espncdn.com/combiner/i?img=/i/leaguelogos/soccer/500/15.png",
				width: 500,
				height: 500,
			},
			jsonld: "",
			hrefLangs: [
				{
					key: "en-us",
					url: "https://www.espn.com/soccer/standings/_/league/esp.1",
				},
				{
					key: "en-us",
					url: "https://www.espn.com/soccer/standings/_/league/esp.1",
				},
				{
					key: "pt-br",
					url: "https://www.espn.com.br/futebol/classificacao/_/liga/esp.1",
				},
				{
					key: "pt-br",
					url: "https://www.espn.com.br/futebol/classificacao/_/liga/esp.1",
				},
				{
					key: "en-in",
					url: "https://www.espn.in/football/table/_/league/esp.1",
				},
				{
					key: "es-es",
					url: "https://espndeportes.espn.com/futbol/posiciones/_/liga/esp.1",
				},
				{
					key: "es-es",
					url: "https://espndeportes.espn.com/futbol/posiciones/_/liga/esp.1",
				},
				{
					key: "en-za",
					url: "https://africa.espn.com/football/table/_/league/esp.1",
				},
				{
					key: "es-ve",
					url: "https://www.espn.com.ve/futbol/posiciones/_/liga/esp.1",
				},
				{
					key: "es-cr",
					url: "https://www.espn.com.ve/futbol/posiciones/_/liga/esp.1",
				},
				{
					key: "es-cl",
					url: "https://www.espn.cl/futbol/posiciones/_/liga/esp.1",
				},
				{
					key: "es-mx",
					url: "https://www.espn.com.mx/futbol/posiciones/_/liga/esp.1",
				},
				{
					key: "es-co",
					url: "https://www.espn.com.co/futbol/posiciones/_/liga/esp.1",
				},
				{
					key: "es-pe",
					url: "https://www.espn.com.pe/futbol/posiciones/_/liga/esp.1",
				},
				{
					key: "es-ar",
					url: "https://www.espn.com.ar/futbol/posiciones/_/liga/esp.1",
				},
				{
					key: "es-us",
					url: "https://espndeportes.espn.com/futbol/posiciones/_/liga/esp.1",
				},
				{
					key: "en-ph",
					url: "https://tv5.espn.com/football/table/_/league/esp.1",
				},
				{
					key: "en-gb",
					url: "https://www.espn.co.uk/football/table/_/league/esp.1",
				},
				{
					key: "en-sg",
					url: "https://www.espn.com.sg/football/table/_/league/esp.1",
				},
				{
					key: "es-gt",
					url: "https://www.espn.com.gt/futbol/posiciones/_/liga/esp.1",
				},
				{
					key: "es-uy",
					url: "https://www.espn.com.uy/futbol/posiciones/_/liga/esp.1",
				},
				{
					key: "es-do",
					url: "https://www.espn.com.do/futbol/posiciones/_/liga/esp.1",
				},
				{
					key: "es-ec",
					url: "https://www.espn.com.ec/futbol/posiciones/_/liga/esp.1",
				},
				{
					key: "es-pa",
					url: "https://www.espn.com.pa/futbol/posiciones/_/liga/esp.1",
				},
				{
					key: "es-cr",
					url: "https://www.espn.co.cr/futbol/posiciones/_/liga/esp.1",
				},
				{
					key: "nl-nl",
					url: "https://www.espn.nl/voetbal/stand/_/competitie/esp.1",
				},
				{
					key: "nl-nl",
					url: "https://www.espn.nl/voetbal/stand/_/competitie/esp.1",
				},
				{
					key: "en-id",
					url: "https://asia.espn.com/football/table/_/league/esp.1",
				},
				{
					key: "es-es",
					url: "https://www.espn.es/futbol/posiciones/_/liga/esp.1",
				},
			],
		},
		content: {
			teams: {
				nfl: [
					{
						name: "AFC East",
						teams: [
							{
								id: "2",
								href: "https://www.espn.com/nfl/team/_/name/buf/buffalo-bills",
								name: "Buffalo Bills",
								shortName: "Bills",
								abbrev: "buf",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/buf.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "15",
								href: "https://www.espn.com/nfl/team/_/name/mia/miami-dolphins",
								name: "Miami Dolphins",
								shortName: "Dolphins",
								abbrev: "mia",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/mia.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "17",
								href: "https://www.espn.com/nfl/team/_/name/ne/new-england-patriots",
								name: "New England Patriots",
								shortName: "Patriots",
								abbrev: "ne",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/ne.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "20",
								href: "https://www.espn.com/nfl/team/_/name/nyj/new-york-jets",
								name: "New York Jets",
								shortName: "Jets",
								abbrev: "nyj",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/nyj.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
						],
					},
					{
						name: "AFC North",
						teams: [
							{
								id: "33",
								href: "https://www.espn.com/nfl/team/_/name/bal/baltimore-ravens",
								name: "Baltimore Ravens",
								shortName: "Ravens",
								abbrev: "bal",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/bal.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "4",
								href: "https://www.espn.com/nfl/team/_/name/cin/cincinnati-bengals",
								name: "Cincinnati Bengals",
								shortName: "Bengals",
								abbrev: "cin",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/cin.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "5",
								href: "https://www.espn.com/nfl/team/_/name/cle/cleveland-browns",
								name: "Cleveland Browns",
								shortName: "Browns",
								abbrev: "cle",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/cle.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "23",
								href: "https://www.espn.com/nfl/team/_/name/pit/pittsburgh-steelers",
								name: "Pittsburgh Steelers",
								shortName: "Steelers",
								abbrev: "pit",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/pit.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
						],
					},
					{
						name: "AFC South",
						teams: [
							{
								id: "34",
								href: "https://www.espn.com/nfl/team/_/name/hou/houston-texans",
								name: "Houston Texans",
								shortName: "Texans",
								abbrev: "hou",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/hou.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "11",
								href: "https://www.espn.com/nfl/team/_/name/ind/indianapolis-colts",
								name: "Indianapolis Colts",
								shortName: "Colts",
								abbrev: "ind",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/ind.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "30",
								href: "https://www.espn.com/nfl/team/_/name/jax/jacksonville-jaguars",
								name: "Jacksonville Jaguars",
								shortName: "Jaguars",
								abbrev: "jax",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/jax.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "10",
								href: "https://www.espn.com/nfl/team/_/name/ten/tennessee-titans",
								name: "Tennessee Titans",
								shortName: "Titans",
								abbrev: "ten",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/ten.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
						],
					},
					{
						name: "AFC West",
						teams: [
							{
								id: "7",
								href: "https://www.espn.com/nfl/team/_/name/den/denver-broncos",
								name: "Denver Broncos",
								shortName: "Broncos",
								abbrev: "den",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/den.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "12",
								href: "https://www.espn.com/nfl/team/_/name/kc/kansas-city-chiefs",
								name: "Kansas City Chiefs",
								shortName: "Chiefs",
								abbrev: "kc",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/kc.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "13",
								href: "https://www.espn.com/nfl/team/_/name/lv/las-vegas-raiders",
								name: "Las Vegas Raiders",
								shortName: "Raiders",
								abbrev: "lv",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/lv.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "24",
								href: "https://www.espn.com/nfl/team/_/name/lac/los-angeles-chargers",
								name: "Los Angeles Chargers",
								shortName: "Chargers",
								abbrev: "lac",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/lac.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
						],
					},
					{
						name: "NFC East",
						teams: [
							{
								id: "6",
								href: "https://www.espn.com/nfl/team/_/name/dal/dallas-cowboys",
								name: "Dallas Cowboys",
								shortName: "Cowboys",
								abbrev: "dal",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/dal.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "19",
								href: "https://www.espn.com/nfl/team/_/name/nyg/new-york-giants",
								name: "New York Giants",
								shortName: "Giants",
								abbrev: "nyg",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/nyg.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "21",
								href: "https://www.espn.com/nfl/team/_/name/phi/philadelphia-eagles",
								name: "Philadelphia Eagles",
								shortName: "Eagles",
								abbrev: "phi",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/phi.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "28",
								href: "https://www.espn.com/nfl/team/_/name/wsh/washington",
								name: "Washington",
								shortName: "Washington",
								abbrev: "wsh",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/wsh.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
						],
					},
					{
						name: "NFC North",
						teams: [
							{
								id: "3",
								href: "https://www.espn.com/nfl/team/_/name/chi/chicago-bears",
								name: "Chicago Bears",
								shortName: "Bears",
								abbrev: "chi",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/chi.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "8",
								href: "https://www.espn.com/nfl/team/_/name/det/detroit-lions",
								name: "Detroit Lions",
								shortName: "Lions",
								abbrev: "det",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/det.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "9",
								href: "https://www.espn.com/nfl/team/_/name/gb/green-bay-packers",
								name: "Green Bay Packers",
								shortName: "Packers",
								abbrev: "gb",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/gb.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "16",
								href: "https://www.espn.com/nfl/team/_/name/min/minnesota-vikings",
								name: "Minnesota Vikings",
								shortName: "Vikings",
								abbrev: "min",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/min.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
						],
					},
					{
						name: "NFC South",
						teams: [
							{
								id: "1",
								href: "https://www.espn.com/nfl/team/_/name/atl/atlanta-falcons",
								name: "Atlanta Falcons",
								shortName: "Falcons",
								abbrev: "atl",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/atl.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "29",
								href: "https://www.espn.com/nfl/team/_/name/car/carolina-panthers",
								name: "Carolina Panthers",
								shortName: "Panthers",
								abbrev: "car",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/car.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "18",
								href: "https://www.espn.com/nfl/team/_/name/no/new-orleans-saints",
								name: "New Orleans Saints",
								shortName: "Saints",
								abbrev: "no",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/no.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "27",
								href: "https://www.espn.com/nfl/team/_/name/tb/tampa-bay-buccaneers",
								name: "Tampa Bay Buccaneers",
								shortName: "Buccaneers",
								abbrev: "tb",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/tb.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
						],
					},
					{
						name: "NFC West",
						teams: [
							{
								id: "22",
								href: "https://www.espn.com/nfl/team/_/name/ari/arizona-cardinals",
								name: "Arizona Cardinals",
								shortName: "Cardinals",
								abbrev: "ari",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/ari.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "14",
								href: "https://www.espn.com/nfl/team/_/name/lar/los-angeles-rams",
								name: "Los Angeles Rams",
								shortName: "Rams",
								abbrev: "lar",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/lar.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "25",
								href: "https://www.espn.com/nfl/team/_/name/sf/san-francisco-49ers",
								name: "San Francisco 49ers",
								shortName: "49ers",
								abbrev: "sf",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/sf.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "26",
								href: "https://www.espn.com/nfl/team/_/name/sea/seattle-seahawks",
								name: "Seattle Seahawks",
								shortName: "Seahawks",
								abbrev: "sea",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/sea.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
						],
					},
				],
				nba: [
					{
						name: "Atlantic",
						teams: [
							{
								id: "2",
								href: "https://www.espn.com/nba/team/_/name/bos/boston-celtics",
								name: "Boston Celtics",
								shortName: "Celtics",
								abbrev: "bos",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/bos.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "17",
								href: "https://www.espn.com/nba/team/_/name/bkn/brooklyn-nets",
								name: "Brooklyn Nets",
								shortName: "Nets",
								abbrev: "bkn",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/bkn.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "18",
								href: "https://www.espn.com/nba/team/_/name/ny/new-york-knicks",
								name: "New York Knicks",
								shortName: "Knicks",
								abbrev: "ny",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/ny.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "20",
								href: "https://www.espn.com/nba/team/_/name/phi/philadelphia-76ers",
								name: "Philadelphia 76ers",
								shortName: "76ers",
								abbrev: "phi",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/phi.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "28",
								href: "https://www.espn.com/nba/team/_/name/tor/toronto-raptors",
								name: "Toronto Raptors",
								shortName: "Raptors",
								abbrev: "tor",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/tor.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
						],
					},
					{
						name: "Central",
						teams: [
							{
								id: "4",
								href: "https://www.espn.com/nba/team/_/name/chi/chicago-bulls",
								name: "Chicago Bulls",
								shortName: "Bulls",
								abbrev: "chi",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/chi.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "5",
								href: "https://www.espn.com/nba/team/_/name/cle/cleveland-cavaliers",
								name: "Cleveland Cavaliers",
								shortName: "Cavaliers",
								abbrev: "cle",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/cle.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "8",
								href: "https://www.espn.com/nba/team/_/name/det/detroit-pistons",
								name: "Detroit Pistons",
								shortName: "Pistons",
								abbrev: "det",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/det.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "11",
								href: "https://www.espn.com/nba/team/_/name/ind/indiana-pacers",
								name: "Indiana Pacers",
								shortName: "Pacers",
								abbrev: "ind",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/ind.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "15",
								href: "https://www.espn.com/nba/team/_/name/mil/milwaukee-bucks",
								name: "Milwaukee Bucks",
								shortName: "Bucks",
								abbrev: "mil",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/mil.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
						],
					},
					{
						name: "Southeast",
						teams: [
							{
								id: "1",
								href: "https://www.espn.com/nba/team/_/name/atl/atlanta-hawks",
								name: "Atlanta Hawks",
								shortName: "Hawks",
								abbrev: "atl",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/atl.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "30",
								href: "https://www.espn.com/nba/team/_/name/cha/charlotte-hornets",
								name: "Charlotte Hornets",
								shortName: "Hornets",
								abbrev: "cha",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/cha.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "14",
								href: "https://www.espn.com/nba/team/_/name/mia/miami-heat",
								name: "Miami Heat",
								shortName: "Heat",
								abbrev: "mia",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/mia.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "19",
								href: "https://www.espn.com/nba/team/_/name/orl/orlando-magic",
								name: "Orlando Magic",
								shortName: "Magic",
								abbrev: "orl",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/orl.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "27",
								href: "https://www.espn.com/nba/team/_/name/wsh/washington-wizards",
								name: "Washington Wizards",
								shortName: "Wizards",
								abbrev: "wsh",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/wsh.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
						],
					},
					{
						name: "Northwest",
						teams: [
							{
								id: "7",
								href: "https://www.espn.com/nba/team/_/name/den/denver-nuggets",
								name: "Denver Nuggets",
								shortName: "Nuggets",
								abbrev: "den",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/den.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "16",
								href: "https://www.espn.com/nba/team/_/name/min/minnesota-timberwolves",
								name: "Minnesota Timberwolves",
								shortName: "Timberwolves",
								abbrev: "min",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/min.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "25",
								href: "https://www.espn.com/nba/team/_/name/okc/oklahoma-city-thunder",
								name: "Oklahoma City Thunder",
								shortName: "Thunder",
								abbrev: "okc",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/okc.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "22",
								href: "https://www.espn.com/nba/team/_/name/por/portland-trail-blazers",
								name: "Portland Trail Blazers",
								shortName: "Trail Blazers",
								abbrev: "por",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/por.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "26",
								href: "https://www.espn.com/nba/team/_/name/utah/utah-jazz",
								name: "Utah Jazz",
								shortName: "Jazz",
								abbrev: "utah",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/utah.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
						],
					},
					{
						name: "Pacific",
						teams: [
							{
								id: "9",
								href: "https://www.espn.com/nba/team/_/name/gs/golden-state-warriors",
								name: "Golden State Warriors",
								shortName: "Warriors",
								abbrev: "gs",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/gs.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "12",
								href: "https://www.espn.com/nba/team/_/name/lac/la-clippers",
								name: "LA Clippers",
								shortName: "Clippers",
								abbrev: "lac",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/lac.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "13",
								href: "https://www.espn.com/nba/team/_/name/lal/los-angeles-lakers",
								name: "Los Angeles Lakers",
								shortName: "Lakers",
								abbrev: "lal",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/lal.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "21",
								href: "https://www.espn.com/nba/team/_/name/phx/phoenix-suns",
								name: "Phoenix Suns",
								shortName: "Suns",
								abbrev: "phx",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/phx.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "23",
								href: "https://www.espn.com/nba/team/_/name/sac/sacramento-kings",
								name: "Sacramento Kings",
								shortName: "Kings",
								abbrev: "sac",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/sac.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
						],
					},
					{
						name: "Southwest",
						teams: [
							{
								id: "6",
								href: "https://www.espn.com/nba/team/_/name/dal/dallas-mavericks",
								name: "Dallas Mavericks",
								shortName: "Mavericks",
								abbrev: "dal",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/dal.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "10",
								href: "https://www.espn.com/nba/team/_/name/hou/houston-rockets",
								name: "Houston Rockets",
								shortName: "Rockets",
								abbrev: "hou",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/hou.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "29",
								href: "https://www.espn.com/nba/team/_/name/mem/memphis-grizzlies",
								name: "Memphis Grizzlies",
								shortName: "Grizzlies",
								abbrev: "mem",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/mem.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "3",
								href: "https://www.espn.com/nba/team/_/name/no/new-orleans-pelicans",
								name: "New Orleans Pelicans",
								shortName: "Pelicans",
								abbrev: "no",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/no.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "24",
								href: "https://www.espn.com/nba/team/_/name/sa/san-antonio-spurs",
								name: "San Antonio Spurs",
								shortName: "Spurs",
								abbrev: "sa",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/sa.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
						],
					},
				],
				mlb: [
					{
						name: "AL East",
						teams: [
							{
								id: "1",
								href: "https://www.espn.com/mlb/team/_/name/bal/baltimore-orioles",
								name: "Baltimore Orioles",
								shortName: "Orioles",
								abbrev: "bal",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/bal.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "2",
								href: "https://www.espn.com/mlb/team/_/name/bos/boston-red-sox",
								name: "Boston Red Sox",
								shortName: "Red Sox",
								abbrev: "bos",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/bos.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "10",
								href: "https://www.espn.com/mlb/team/_/name/nyy/new-york-yankees",
								name: "New York Yankees",
								shortName: "Yankees",
								abbrev: "nyy",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/nyy.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "30",
								href: "https://www.espn.com/mlb/team/_/name/tb/tampa-bay-rays",
								name: "Tampa Bay Rays",
								shortName: "Rays",
								abbrev: "tb",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/tb.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "14",
								href: "https://www.espn.com/mlb/team/_/name/tor/toronto-blue-jays",
								name: "Toronto Blue Jays",
								shortName: "Blue Jays",
								abbrev: "tor",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/tor.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
						],
					},
					{
						name: "AL Central",
						teams: [
							{
								id: "4",
								href: "https://www.espn.com/mlb/team/_/name/chw/chicago-white-sox",
								name: "Chicago White Sox",
								shortName: "White Sox",
								abbrev: "chw",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/chw.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "5",
								href: "https://www.espn.com/mlb/team/_/name/cle/cleveland-indians",
								name: "Cleveland Indians",
								shortName: "Indians",
								abbrev: "cle",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/cle.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "6",
								href: "https://www.espn.com/mlb/team/_/name/det/detroit-tigers",
								name: "Detroit Tigers",
								shortName: "Tigers",
								abbrev: "det",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/det.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "7",
								href: "https://www.espn.com/mlb/team/_/name/kc/kansas-city-royals",
								name: "Kansas City Royals",
								shortName: "Royals",
								abbrev: "kc",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/kc.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "9",
								href: "https://www.espn.com/mlb/team/_/name/min/minnesota-twins",
								name: "Minnesota Twins",
								shortName: "Twins",
								abbrev: "min",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/min.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
						],
					},
					{
						name: "AL West",
						teams: [
							{
								id: "18",
								href: "https://www.espn.com/mlb/team/_/name/hou/houston-astros",
								name: "Houston Astros",
								shortName: "Astros",
								abbrev: "hou",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/hou.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "3",
								href: "https://www.espn.com/mlb/team/_/name/laa/los-angeles-angels",
								name: "Los Angeles Angels",
								shortName: "Angels",
								abbrev: "laa",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/laa.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "11",
								href: "https://www.espn.com/mlb/team/_/name/oak/oakland-athletics",
								name: "Oakland Athletics",
								shortName: "Athletics",
								abbrev: "oak",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/oak.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "12",
								href: "https://www.espn.com/mlb/team/_/name/sea/seattle-mariners",
								name: "Seattle Mariners",
								shortName: "Mariners",
								abbrev: "sea",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/sea.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "13",
								href: "https://www.espn.com/mlb/team/_/name/tex/texas-rangers",
								name: "Texas Rangers",
								shortName: "Rangers",
								abbrev: "tex",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/tex.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
						],
					},
					{
						name: "NL East",
						teams: [
							{
								id: "15",
								href: "https://www.espn.com/mlb/team/_/name/atl/atlanta-braves",
								name: "Atlanta Braves",
								shortName: "Braves",
								abbrev: "atl",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/atl.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "28",
								href: "https://www.espn.com/mlb/team/_/name/mia/miami-marlins",
								name: "Miami Marlins",
								shortName: "Marlins",
								abbrev: "mia",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/mia.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "21",
								href: "https://www.espn.com/mlb/team/_/name/nym/new-york-mets",
								name: "New York Mets",
								shortName: "Mets",
								abbrev: "nym",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/nym.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "22",
								href: "https://www.espn.com/mlb/team/_/name/phi/philadelphia-phillies",
								name: "Philadelphia Phillies",
								shortName: "Phillies",
								abbrev: "phi",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/phi.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "20",
								href: "https://www.espn.com/mlb/team/_/name/wsh/washington-nationals",
								name: "Washington Nationals",
								shortName: "Nationals",
								abbrev: "wsh",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/wsh.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
						],
					},
					{
						name: "NL Central",
						teams: [
							{
								id: "16",
								href: "https://www.espn.com/mlb/team/_/name/chc/chicago-cubs",
								name: "Chicago Cubs",
								shortName: "Cubs",
								abbrev: "chc",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/chc.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "17",
								href: "https://www.espn.com/mlb/team/_/name/cin/cincinnati-reds",
								name: "Cincinnati Reds",
								shortName: "Reds",
								abbrev: "cin",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/cin.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "8",
								href: "https://www.espn.com/mlb/team/_/name/mil/milwaukee-brewers",
								name: "Milwaukee Brewers",
								shortName: "Brewers",
								abbrev: "mil",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/mil.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "23",
								href: "https://www.espn.com/mlb/team/_/name/pit/pittsburgh-pirates",
								name: "Pittsburgh Pirates",
								shortName: "Pirates",
								abbrev: "pit",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/pit.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "24",
								href: "https://www.espn.com/mlb/team/_/name/stl/st-louis-cardinals",
								name: "St. Louis Cardinals",
								shortName: "Cardinals",
								abbrev: "stl",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/stl.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
						],
					},
					{
						name: "NL West",
						teams: [
							{
								id: "29",
								href: "https://www.espn.com/mlb/team/_/name/ari/arizona-diamondbacks",
								name: "Arizona Diamondbacks",
								shortName: "Diamondbacks",
								abbrev: "ari",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/ari.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "27",
								href: "https://www.espn.com/mlb/team/_/name/col/colorado-rockies",
								name: "Colorado Rockies",
								shortName: "Rockies",
								abbrev: "col",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/col.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "19",
								href: "https://www.espn.com/mlb/team/_/name/lad/los-angeles-dodgers",
								name: "Los Angeles Dodgers",
								shortName: "Dodgers",
								abbrev: "lad",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/lad.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "25",
								href: "https://www.espn.com/mlb/team/_/name/sd/san-diego-padres",
								name: "San Diego Padres",
								shortName: "Padres",
								abbrev: "sd",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/sd.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "26",
								href: "https://www.espn.com/mlb/team/_/name/sf/san-francisco-giants",
								name: "San Francisco Giants",
								shortName: "Giants",
								abbrev: "sf",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/sf.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
						],
					},
				],
				nhl: [
					{
						name: "North",
						teams: [
							{
								id: "3",
								href: "http://www.espn.com/nhl/team/_/name/cgy/calgary-flames",
								name: "Calgary Flames",
								shortName: "Flames",
								abbrev: "cgy",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/cgy.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "6",
								href: "http://www.espn.com/nhl/team/_/name/edm/edmonton-oilers",
								name: "Edmonton Oilers",
								shortName: "Oilers",
								abbrev: "edm",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/edm.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "10",
								href: "http://www.espn.com/nhl/team/_/name/mtl/montreal-canadiens",
								name: "Montreal Canadiens",
								shortName: "Canadiens",
								abbrev: "mtl",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/mtl.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "14",
								href: "http://www.espn.com/nhl/team/_/name/ott/ottawa-senators",
								name: "Ottawa Senators",
								shortName: "Senators",
								abbrev: "ott",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/ott.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "21",
								href: "http://www.espn.com/nhl/team/_/name/tor/toronto-maple-leafs",
								name: "Toronto Maple Leafs",
								shortName: "Maple Leafs",
								abbrev: "tor",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/tor.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "22",
								href: "http://www.espn.com/nhl/team/_/name/van/vancouver-canucks",
								name: "Vancouver Canucks",
								shortName: "Canucks",
								abbrev: "van",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/van.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "28",
								href: "http://www.espn.com/nhl/team/_/name/wpg/winnipeg-jets",
								name: "Winnipeg Jets",
								shortName: "Jets",
								abbrev: "wpg",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/wpg.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
						],
					},
					{
						name: "East",
						teams: [
							{
								id: "1",
								href: "http://www.espn.com/nhl/team/_/name/bos/boston-bruins",
								name: "Boston Bruins",
								shortName: "Bruins",
								abbrev: "bos",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/bos.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "2",
								href: "http://www.espn.com/nhl/team/_/name/buf/buffalo-sabres",
								name: "Buffalo Sabres",
								shortName: "Sabres",
								abbrev: "buf",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/buf.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "11",
								href: "http://www.espn.com/nhl/team/_/name/nj/new-jersey-devils",
								name: "New Jersey Devils",
								shortName: "Devils",
								abbrev: "nj",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/nj.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "12",
								href: "http://www.espn.com/nhl/team/_/name/nyi/new-york-islanders",
								name: "New York Islanders",
								shortName: "Islanders",
								abbrev: "nyi",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/nyi.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "13",
								href: "http://www.espn.com/nhl/team/_/name/nyr/new-york-rangers",
								name: "New York Rangers",
								shortName: "Rangers",
								abbrev: "nyr",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/nyr.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "15",
								href: "http://www.espn.com/nhl/team/_/name/phi/philadelphia-flyers",
								name: "Philadelphia Flyers",
								shortName: "Flyers",
								abbrev: "phi",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/phi.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "16",
								href: "http://www.espn.com/nhl/team/_/name/pit/pittsburgh-penguins",
								name: "Pittsburgh Penguins",
								shortName: "Penguins",
								abbrev: "pit",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/pit.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "23",
								href: "http://www.espn.com/nhl/team/_/name/wsh/washington-capitals",
								name: "Washington Capitals",
								shortName: "Capitals",
								abbrev: "wsh",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/wsh.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
						],
					},
					{
						name: "Central",
						teams: [
							{
								id: "7",
								href: "http://www.espn.com/nhl/team/_/name/car/carolina-hurricanes",
								name: "Carolina Hurricanes",
								shortName: "Hurricanes",
								abbrev: "car",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/car.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "4",
								href: "http://www.espn.com/nhl/team/_/name/chi/chicago-blackhawks",
								name: "Chicago Blackhawks",
								shortName: "Blackhawks",
								abbrev: "chi",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/chi.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "29",
								href: "http://www.espn.com/nhl/team/_/name/cbj/columbus-blue-jackets",
								name: "Columbus Blue Jackets",
								shortName: "Blue Jackets",
								abbrev: "cbj",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/cbj.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "9",
								href: "http://www.espn.com/nhl/team/_/name/dal/dallas-stars",
								name: "Dallas Stars",
								shortName: "Stars",
								abbrev: "dal",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/dal.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "5",
								href: "http://www.espn.com/nhl/team/_/name/det/detroit-red-wings",
								name: "Detroit Red Wings",
								shortName: "Red Wings",
								abbrev: "det",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/det.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "26",
								href: "http://www.espn.com/nhl/team/_/name/fla/florida-panthers",
								name: "Florida Panthers",
								shortName: "Panthers",
								abbrev: "fla",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/fla.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "27",
								href: "http://www.espn.com/nhl/team/_/name/nsh/nashville-predators",
								name: "Nashville Predators",
								shortName: "Predators",
								abbrev: "nsh",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/nsh.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "20",
								href: "http://www.espn.com/nhl/team/_/name/tb/tampa-bay-lightning",
								name: "Tampa Bay Lightning",
								shortName: "Lightning",
								abbrev: "tb",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/tb.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
						],
					},
					{
						name: "West",
						teams: [
							{
								id: "25",
								href: "http://www.espn.com/nhl/team/_/name/ana/anaheim-ducks",
								name: "Anaheim Ducks",
								shortName: "Ducks",
								abbrev: "ana",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/ana.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "24",
								href: "http://www.espn.com/nhl/team/_/name/ari/arizona-coyotes",
								name: "Arizona Coyotes",
								shortName: "Coyotes",
								abbrev: "ari",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/ari.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "17",
								href: "http://www.espn.com/nhl/team/_/name/col/colorado-avalanche",
								name: "Colorado Avalanche",
								shortName: "Avalanche",
								abbrev: "col",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/col.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "8",
								href: "http://www.espn.com/nhl/team/_/name/la/los-angeles-kings",
								name: "Los Angeles Kings",
								shortName: "Kings",
								abbrev: "la",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/la.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "30",
								href: "http://www.espn.com/nhl/team/_/name/min/minnesota-wild",
								name: "Minnesota Wild",
								shortName: "Wild",
								abbrev: "min",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/min.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "18",
								href: "http://www.espn.com/nhl/team/_/name/sj/san-jose-sharks",
								name: "San Jose Sharks",
								shortName: "Sharks",
								abbrev: "sj",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/sj.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "19",
								href: "http://www.espn.com/nhl/team/_/name/stl/st-louis-blues",
								name: "St. Louis Blues",
								shortName: "Blues",
								abbrev: "stl",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/stl.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								id: "37",
								href: "http://www.espn.com/nhl/team/_/name/vgs/vegas-golden-knights",
								name: "Vegas Golden Knights",
								shortName: "Golden Knights",
								abbrev: "vgs",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/vgs.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
						],
					},
				],
				soccer: [
					{
						name: "Top Leagues",
						teams: [
							{
								name: "Premier League",
								href: "/soccer/league/_/name/eng.1",
								logo: "https://a.espncdn.com/combiner/i?img=/i/leaguelogos/soccer/500/23.png&w=80&h=80&transparent=true&cquality=40&scale=crop&location=origin",
							},
							{
								name: "Major League Soccer",
								href: "/soccer/league/_/name/usa.1/",
								logo: "https://a.espncdn.com/combiner/i?img=/i/leaguelogos/soccer/500/19.png&w=80&h=80&transparent=true&cquality=40&scale=crop&location=origin",
							},
							{
								name: "Champions League",
								href: "/soccer/league/_/name/uefa.champions",
								logo: "https://a.espncdn.com/combiner/i?img=/i/leaguelogos/soccer/500/2.png&w=80&h=80&transparent=true&cquality=40&scale=crop&location=origin",
							},
							{
								name: "La Liga",
								href: "/soccer/league/_/name/esp.1",
								logo: "https://a.espncdn.com/combiner/i?img=/i/leaguelogos/soccer/500/15.png&w=80&h=80&transparent=true&cquality=40&scale=crop&location=origin",
							},
							{
								name: "Serie A",
								href: "/soccer/league/_/name/ita.1",
								logo: "https://a.espncdn.com/combiner/i?img=/i/leaguelogos/soccer/500/12.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								name: "Bundesliga",
								href: "/soccer/league/_/name/ger.1",
								logo: "https://a.espncdn.com/combiner/i?img=/i/leaguelogos/soccer/500/10.png&transparent=true&w=80&h=80&cquality=40&scale=crop&location=origin",
							},
							{
								name: "Liga MX",
								href: "/soccer/league/_/name/mex.1/",
								logo: "https://a.espncdn.com/combiner/i?img=/i/leaguelogos/soccer/500/22.png&w=80&h=80&transparent=true&cquality=40&scale=crop&location=origin",
							},
						],
					},
					{
						name: "Top Teams",
						teams: [
							{
								name: "USMNT",
								href: "/soccer/team/_/id/660/united-states",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/660.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								name: "USWNT",
								href: "/soccer/team/_/id/2765/united-states",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2765.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								name: "Arsenal ",
								href: "/soccer/team/_/id/359/arsenal",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/359.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								name: "Chelsea",
								href: "/soccer/team/_/id/363/chelsea",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/363.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								name: "Liverpool",
								href: "/soccer/team/_/id/364/liverpool",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/364.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								name: "Manchester City",
								href: "/soccer/team/_/id/382/manchester-city",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								name: "Manchester United ",
								href: "/soccer/team/_/id/360/Manchester-United/",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/360.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								name: "Tottenham Hotspur",
								href: "/soccer/team/_/id/367/tottenham-hotspur",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/367.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								name: "Barcelona",
								href: "/soccer/team/_/id/83/barcelona",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								name: "Real Madrid",
								href: "/soccer/team/_/id/86/",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/86.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								name: "Atletico Madrid",
								href: "/soccer/team/_/id/1068/Atletico-Madrid/",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1068.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								name: "Bayern Munich",
								href: "/soccer/team/_/id/132/",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/132.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								name: "Borussia Dortmund",
								href: "/soccer/team/_/id/124/",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/124.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								name: "Juventus",
								href: "/soccer/team/_/id/111/",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/111.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								name: "PSG",
								href: "/soccer/team/_/id/160/",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/160.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								name: "Guadalajara",
								href: "/soccer/team/_/id/219/guadalajara",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/219.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
							{
								name: "América",
								href: "/soccer/team/_/id/227/america",
								logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/227.png&w=80&h=80&cquality=40&scale=crop&location=origin&transparent=true",
							},
						],
					},
				],
			},
			navigation: {
				sports: [
					{
						l: { t: "NFL", w: { h: "/nfl/" } },
						t: "NFL",
						i: [
							{
								l: {
									t: "Home",
									w: {
										a: { breakpoints: "desktop,desktop-lg,mobile,tablet" },
										h: "/nfl/",
									},
								},
							},
							{ l: { t: "Schedule", w: { h: "/nfl/schedule" } } },
							{
								l: {
									t: "Draft",
									w: { h: "https://www.espn.com/nfl/draft/news" },
								},
							},
							{
								l: {
									t: "Free Agency",
									w: { h: "https://www.espn.com/nfl/nfl-free-agency/" },
								},
								t: "Free Agency",
							},
							{
								l: {
									t: "Teams",
									w: {
										a: { sportAbbrev: "nfl", route: "false" },
										h: "/nfl/teams",
									},
								},
							},
							{ l: { t: "Scores", w: { h: "/nfl/scoreboard" } } },
							{
								l: {
									t: "Standings",
									w: {
										a: { "match-url": "/standings/", route: "false" },
										h: "/nfl/standings",
									},
								},
							},
							{
								l: {
									t: "Stats",
									w: { a: { route: "false" }, h: "/nfl/stats" },
								},
								t: "Stats",
							},
							{
								l: {
									t: "Sign Up: Fantasy Football",
									w: {
										a: { mobile: "false", isFantasy: "true" },
										h: "https://fantasy.espn.com/football/welcome?addata=NFL_dropdown_ffl2021",
									},
								},
							},
							{
								l: {
									t: "Depth Charts",
									w: {
										h: "https://www.espn.com/nfl/story/_/id/29098001/2020-nfl-depth-charts-all-32-teams",
									},
								},
							},
							{
								l: {
									t: "Players",
									w: {
										a: { mobile: "false" },
										h: "http://www.espn.com/nfl/players",
									},
								},
							},
							{
								l: {
									t: "More",
									w: {
										a: { placeholder: "more", breakpoints: "mobile" },
										h: "http://www.espn.com",
									},
								},
							},
							{ l: { t: "Transactions", w: { h: "/nfl/transactions" } } },
							{
								l: {
									t: "Super Bowl",
									w: {
										h: "https://www.espn.com/nfl/story/_/id/30646089/nfl-playoffs-super-bowl-schedule-afc-nfc-bracket-seeds-tv-s-more",
									},
								},
							},
							{
								l: {
									t: "Injuries",
									w: { a: { route: "false" }, h: "/nfl/injuries" },
								},
							},
							{
								l: {
									t: "Expert Picks",
									w: { h: "http://www.espn.com/nfl/picks" },
								},
							},
							{
								l: {
									t: "Tickets",
									w: {
										e: true,
										h: "https://www.vividseats.com/nfl/?wsUser=717&wsVar=NFLNAV",
									},
								},
							},
							{
								l: {
									t: "Coaches",
									w: {
										a: { mobile: "false" },
										h: "http://www.espn.com/nfl/coaches",
									},
								},
							},
							{ l: { t: "Football Power Index", w: { h: "/nfl/fpi" } } },
							{
								l: {
									t: "PickCenter",
									w: {
										p: true,
										a: { mobile: "false" },
										h: "http://www.espn.com/insider/pickcenter/index?sport=nfl",
									},
									m: {
										p: true,
										a: { mobile: "true" },
										h: "http://insider.espn.com/insider/pickcenter/index/_/sport/nfl/version/mobile",
									},
								},
							},
							{
								l: {
									t: "NFL History",
									w: { h: "http://www.espn.com/nfl/history/leaders" },
								},
							},
						],
						a: { root: "nfl", sport_id: "28" },
					},
					{
						l: { t: "NBA", w: { h: "/nba/" } },
						t: "NBA",
						i: [
							{
								l: {
									t: "Home",
									w: {
										a: { breakpoints: "desktop,desktop-lg,mobile,tablet" },
										h: "/nba/",
									},
								},
							},
							{ l: { t: "Scores", w: { h: "/nba/scoreboard" } } },
							{ l: { t: "Schedule", w: { h: "/nba/schedule" } } },
							{
								l: {
									t: "Draft",
									w: { h: "http://www.espn.com/nba/draft/news" },
								},
							},
							{ l: { t: "Stats", w: { h: "/nba/stats" } }, t: "Stats" },
							{
								l: {
									t: "Teams",
									w: {
										a: { sportAbbrev: "nba", route: "false" },
										h: "/nba/teams",
									},
								},
							},
							{
								l: {
									t: "Daily Lines",
									w: {
										a: { mobile: "false" },
										h: "http://www.espn.com/nba/lines",
									},
								},
							},
							{
								l: {
									t: "Standings",
									w: { a: { route: "false" }, h: "/nba/standings" },
								},
							},
							{
								l: {
									t: "Basketball Draft Challenge",
									w: {
										h: "https://fantasy.espn.com/games/basketball-draft-challenge-2021/make-picks?addata=basketballdraftchallenge2021_nba_web_nbasubnav",
									},
								},
							},
							{
								l: {
									t: "Players",
									w: {
										a: { mobile: "false" },
										h: "http://www.espn.com/nba/players",
									},
								},
							},
							{
								l: {
									t: "More",
									w: {
										a: { placeholder: "more", breakpoints: "mobile" },
										h: "http://www.espn.com",
									},
								},
							},
							{
								l: {
									t: "Hall of Fame",
									w: {
										h: "https://www.espn.com/nba/story/_/id/28220366/basketball-hall-fame-everything-need-know-class-2020-2021",
									},
								},
							},
							{
								l: {
									t: "NBA Trade Machine",
									w: { h: "http://www.espn.com/nba/tradeMachine" },
								},
							},
							{
								l: {
									t: "Trade Deadline Roundup",
									w: {
										a: { sportAbbrev: "nba" },
										h: "https://www.espn.com/nba/story/_/id/31041300/2021-nba-trade-deadline-latest-buzz-news-reports",
									},
								},
							},
							{
								l: {
									t: "G League",
									w: {
										a: { icon: "basketball" },
										h: "https://www.espn.com/nba-g-league/",
									},
								},
							},
							{ l: { t: "Injuries", w: { h: "/nba/injuries" } } },
							{
								l: {
									t: "PickCenter",
									w: {
										p: true,
										a: { mobile: "false" },
										h: "http://www.espn.com/insider/pickcenter/index?sport=nba",
									},
									m: {
										p: true,
										a: { mobile: "true" },
										h: "http://insider.espn.com/insider/pickcenter/index/_/sport/nfl/version/mobile",
									},
								},
							},
							{
								l: {
									t: "Remembering Kobe",
									w: {
										a: { sportAbbrev: "nba" },
										h: "https://www.espn.com/nba/story/_/id/28570251/lakers-legend-kobe-bryant-remembrances-reaction",
									},
								},
							},
							{
								l: {
									t: "NBA Finals",
									w: {
										h: "https://www.espn.com/nba/story/_/id/29647539/nba-finals-2020-schedules-news-odds-latest-updates-miami-heat-vs-los-angeles-lakers",
									},
								},
							},
							{
								l: {
									t: "Tickets",
									w: {
										e: true,
										h: "https://www.vividseats.com/nba-basketball/?wsUser=717&wsVar=QUICKLINKS",
									},
								},
							},
							{
								l: {
									t: "World of Woj",
									w: { h: "http://www.espn.com/nba/world-of-woj/" },
								},
							},
							{
								l: {
									t: "Transactions",
									w: { a: { mobile: "false" }, h: "/nba/transactions" },
									m: {
										a: { mobile: "true" },
										h: "http://m.espn.com/nba/transactions",
									},
								},
							},
							{
								l: {
									t: "Salaries",
									w: {
										a: { mobile: "false" },
										h: "http://www.espn.com/nba/salaries",
									},
								},
							},
							{
								l: {
									t: "NBA History",
									w: { h: "http://www.espn.com/nba/history/leaders" },
								},
							},
							{
								l: {
									t: "Coaches",
									w: {
										a: { mobile: "false" },
										h: "http://www.espn.com/nba/coaches",
									},
								},
							},
							{
								l: {
									t: "NBA.COM tickets",
									w: { h: "https://nbatickets.nba.com/" },
								},
							},
							{
								l: {
									t: "Awards",
									w: {
										a: { mobile: "false" },
										h: "http://www.espn.com/nba/history/awards",
									},
								},
							},
						],
						a: { root: "nba", sport_id: "46" },
					},
					{
						l: { t: "MLB", w: { h: "/mlb/" } },
						t: "MLB",
						i: [
							{ l: { t: "Home", w: { h: "/mlb/" } } },
							{ l: { t: "Scores", w: { h: "/mlb/scoreboard" } } },
							{ l: { t: "Schedule", w: { h: "/mlb/schedule" } } },
							{
								l: {
									t: "Standings",
									w: {
										a: { "match-url": "/standings/", route: "false" },
										h: "/mlb/standings",
									},
								},
							},
							{
								l: {
									t: "Stats",
									w: { a: { route: "false" }, h: "/mlb/stats" },
								},
							},
							{
								l: {
									t: "Teams",
									w: {
										a: { sportAbbrev: "mlb", route: "false" },
										h: "/mlb/teams",
									},
								},
							},
							{
								l: {
									t: "Fantasy Baseball",
									w: {
										h: "https://fantasy.espn.com/baseball/welcome?addata=flb_seasonstart_mlbdropdown",
									},
								},
							},
							{
								l: {
									t: "All-Star Game",
									w: {
										h: "https://www.espn.com/mlb/story/_/id/31744195/2021-mlb-all-star-game-lineups-schedule-analysis-home-run-derby-field",
									},
								},
							},
							{
								l: {
									t: "Daily Lines",
									w: {
										a: { mobile: "false" },
										h: "http://www.espn.com/mlb/lines",
									},
								},
							},
							{
								l: {
									t: "Draft",
									w: {
										h: "https://www.espn.com/mlb/story/_/id/31465786/2021-mlb-draft-mock-drafts-rankings-order-analysis",
									},
								},
							},
							{
								l: {
									t: "Depth Charts",
									w: {
										h: "https://www.espn.com/mlb/story/_/id/29473590/2020-mlb-depth-charts-all-30-teams",
									},
								},
							},
							{
								l: {
									t: "More",
									w: {
										a: { placeholder: "more", breakpoints: "mobile" },
										h: "http://www.espn.com",
									},
								},
							},
							{
								l: {
									t: "The State of Baseball",
									w: {
										a: { icon: "baseball" },
										h: "https://www.espn.com/mlb/story/_/id/31461236/the-state-baseball-mlb-biggest-challenges-2021-far-beyond",
									},
								},
							},
							{
								l: {
									t: "MLB Rank Top 100",
									w: {
										h: "https://www.espn.com/mlb/story/_/id/31044716/mlb-rank-2021-ranking-baseball-best-players-25-1",
									},
								},
							},
							{
								l: {
									t: "Top 100 prospects",
									w: {
										h: "https://www.espn.com/mlb/insider/story/_/id/30833166/kiley-mcdaniel-top-100-mlb-prospects-2021",
									},
								},
							},
							{
								l: {
									t: "Hall of Fame",
									w: {
										h: "https://www.espn.com/mlb/story/_/id/30703934/2021-baseball-hall-fame",
									},
								},
							},
							{
								l: {
									t: "Transactions",
									w: { a: { route: "false" }, h: "/mlb/transactions" },
								},
							},
							{
								l: {
									t: "Free Agents",
									w: {
										a: { mobile: "false" },
										h: "https://www.espn.com/mlb/freeagents",
									},
								},
							},
							{
								l: {
									t: "PickCenter",
									w: {
										p: true,
										h: "http://www.espn.com/insider/pickcenter/index?sport=mlb",
									},
								},
							},
							{
								l: {
									t: "Tickets",
									w: {
										e: true,
										h: "https://www.vividseats.com/mlb-baseball/?wsUser=717&wsVar=QUICKLINKS",
									},
								},
							},
							{
								l: {
									t: "Players",
									w: {
										a: { mobile: "false" },
										h: "http://www.espn.com/mlb/players",
									},
								},
							},
							{
								l: {
									t: "Injuries",
									w: {
										a: { mobile: "false" },
										h: "http://www.espn.com/mlb/injuries",
									},
								},
							},
							{
								l: {
									t: "All-Time Stats",
									w: {
										a: { mobile: "false" },
										h: "http://www.espn.com/mlb/history",
									},
								},
							},
						],
						a: { root: "mlb", sport_id: "10" },
					},
					{
						l: { t: "NHL", w: { h: "/nhl/" } },
						t: "NHL",
						i: [
							{
								l: {
									t: "Home",
									w: {
										a: { breakpoints: "desktop,desktop-lg,mobile,tablet" },
										h: "/nhl/",
									},
								},
							},
							{
								l: {
									t: "Scores",
									w: { a: { route: "false" }, h: "/nhl/scoreboard" },
								},
							},
							{
								l: {
									t: "Schedule",
									w: { a: { route: "false" }, h: "/nhl/schedule" },
								},
							},
							{
								l: {
									t: "Standings",
									w: { a: { route: "false" }, h: "/nhl/standings" },
								},
							},
							{
								l: {
									t: "Stats",
									w: { h: "http://www.espn.com/nhl/statistics" },
								},
							},
							{
								l: {
									t: "Teams",
									w: {
										a: { sportAbbrev: "nhl", route: "false" },
										h: "/nhl/teams",
									},
								},
							},
							{
								l: {
									t: "2021 Playoffs",
									w: {
										h: "https://www.espn.com/nhl/story/_/id/31433042/2021-nhl-playoffs-central-bracket-schedule-scores-highlights-analysis",
									},
								},
							},
							{ l: { t: "Injuries", w: { h: "/nhl/injuries" } } },
							{
								l: {
									t: "Daily Lines",
									w: {
										a: { mobile: "false" },
										h: "http://www.espn.com/nhl/lines",
									},
								},
							},
							{
								l: {
									t: "Playoff Hockey Pick'em",
									w: {
										h: "https://fantasy.espn.com/games/nhl-playoff-hockey-pickem-2021/make-picks?partial=true&addata=playoffhockeypickem2021_nhl_web_nhlsubnav",
									},
								},
							},
							{
								l: {
									t: "More",
									w: {
										a: { placeholder: "more", breakpoints: "mobile" },
										h: "http://www.espn.com",
									},
								},
							},
							{
								l: {
									t: "Players",
									w: {
										a: { mobile: "false" },
										h: "http://www.espn.com/nhl/players",
									},
								},
							},
							{
								l: {
									t: "Fantasy Hockey",
									w: { h: "https://www.espn.com/fantasy/hockey/" },
								},
							},
							{ l: { t: "Transactions", w: { h: "/nhl/transactions" } } },
							{
								l: {
									t: "Tickets",
									w: {
										e: true,
										h: "http://www.vividseats.com/nhl-hockey?wsUser=717&wsVar=NHLindexnav",
									},
								},
							},
							{
								l: {
									t: "Attendance",
									w: {
										a: { mobile: "false" },
										h: "http://www.espn.com/nhl/attendance",
									},
								},
							},
							{
								l: {
									t: "RPI",
									w: {
										a: { mobile: "false" },
										h: "http://www.espn.com/nhl/stats/rpi",
									},
								},
							},
							{
								l: {
									t: "Subscribe to NHL.TV",
									w: {
										e: true,
										h: "https://subscribe.nhl.com/us?partnerId=NHLTV-ESPNCOM-MENUMORE-PROSP-NHL-NA-1",
									},
								},
							},
							{
								l: {
									t: "Draft",
									w: {
										h: "/nhl/story/_/id/28666333/2020-nhl-draft-rankings-mock-drafts-prospect-analysis-big-questions-more",
									},
								},
							},
							{
								l: {
									t: "Power Rankings",
									w: {
										h: "https://www.espn.com/nhl/story/_/id/31390797/nhl-power-rankings-1-31-poll-plus-biggest-offseason-need-every-team",
									},
								},
							},
						],
						a: { root: "nhl", sport_id: "90" },
					},
					{
						l: { t: "Soccer", w: { a: { icon: "soccer" }, h: "/soccer/" } },
						t: "Soccer",
						i: [
							{
								l: {
									t: "Home",
									w: {
										a: { mobile: "false", breakpoints: "desktop,desktop-lg" },
										h: "/soccer/",
									},
								},
							},
							{
								l: {
									t: "News",
									w: {
										a: {
											tab: "2",
											pagetype: "index",
											breakpoints: "mobile,tablet",
										},
										h: "/soccer/index?tab=2",
									},
								},
							},
							{ l: { t: "Scores", w: { h: "/soccer/scoreboard" } } },
							{ l: { t: "Schedule", w: { h: "/soccer/schedule" } } },
							{
								l: {
									t: "Euro 2020",
									w: { h: "/soccer/league/_/name/uefa.euro" },
								},
								t: "Euro 2020",
							},
							{
								l: {
									t: "Copa America",
									w: { h: "/soccer/league/_/name/CONMEBOL.AMERICA" },
								},
								t: "Copa America",
							},
							{ l: { t: "Transfers", w: { h: "/soccer/transfers" } } },
							{
								l: {
									t: "USMNT",
									w: { h: "/soccer/team/_/id/660/united-states" },
								},
							},
							{
								l: {
									t: "USWNT",
									w: {
										h: "http://www.espn.com/soccer/team/_/id/2765/united-states",
									},
								},
							},
							{ l: { t: "Teams", w: { h: "/football/teams" } }, t: "Teams" },
							{
								l: { t: "Leagues & Cups", w: { h: "/soccer/competitions" } },
								t: "Leagues & Cups",
							},
							{
								l: { t: "Tables", w: { h: "/soccer/table/_/league/eng.1" } },
								t: "Tables",
							},
							{
								l: {
									t: "European Soccer Pick 'em",
									w: {
										h: "https://fantasy.espn.com/games/euro-soccer-pickem-2021/make-picks?addata=eurosoccerpickem2021_soccer_web_soccersubnav",
									},
								},
							},
							{
								l: {
									t: "More",
									w: {
										a: { placeholder: "more", breakpoints: "mobile" },
										h: "http://www.espn.com",
									},
								},
							},
							{
								l: {
									t: "PickCenter",
									w: {
										p: true,
										h: "http://www.espn.com/insider/pickcenter/index?sport=soccer",
									},
								},
							},
							{
								l: {
									t: "Tickets",
									w: {
										e: true,
										h: "https://www.vividseats.com/sports/soccer/?wsUser=717&wsVar=soccersubnav",
									},
								},
							},
						],
						a: { root: "soccer", sport_id: "600" },
					},
					{
						l: { t: "Tennis", w: { a: { icon: "tennis" }, h: "/tennis/" } },
						t: "Tennis",
						i: [
							{
								l: {
									t: "Home",
									w: {
										a: { breakpoints: "desktop,desktop-lg,mobile,tablet" },
										h: "/tennis/",
									},
								},
							},
							{
								l: {
									t: "Scores",
									w: {
										a: { mobile: "false" },
										h: "http://www.espn.com/tennis/dailyResults",
									},
									m: {
										a: { mobile: "true" },
										h: "http://m.espn.com/general/tennis/dailyresults",
									},
								},
							},
							{
								l: {
									t: "Wimbledon",
									w: {
										h: "https://www.espn.com/tennis/story/_/id/31692479/wimbledon-2021-how-watch-schedule-draw-bracket-tennis-scores-more",
									},
								},
							},
							{
								l: {
									t: "Schedule",
									w: { a: { route: "false" }, h: "/tennis/schedule" },
								},
							},
							{
								l: {
									t: "Rankings",
									w: { a: { route: "false" }, h: "/tennis/rankings" },
								},
							},
							{
								l: {
									t: "Players",
									w: {
										a: { mobile: "false" },
										h: "http://www.espn.com/tennis/players",
									},
								},
							},
							{
								l: {
									t: "Tennis Major Pick'em: London",
									w: {
										a: { icon: "tennis" },
										h: "https://fantasy.espn.com/games/wimbledon-tennis-major-pickem-2021/make-picks?addata=tennismajorpickemlondon2021_tennis_web_tennissubnav",
									},
								},
							},
							{
								l: {
									t: "Grand Slam History",
									w: {
										a: { mobile: "false" },
										h: "http://www.espn.com/tennis/history",
									},
								},
							},
							{
								l: {
									t: "Tickets",
									w: {
										e: true,
										a: { nofollow: "true" },
										h: "http://www.vividseats.com/sports/tennis?wsUser=717&wsVar=Tennisindexnav",
									},
								},
							},
							{
								l: {
									t: "More",
									w: {
										a: { placeholder: "more", breakpoints: "mobile" },
										h: "http://www.espn.com",
									},
								},
							},
						],
						a: { root: "tennis", sport_id: "850" },
					},
					{
						t: "More Sports",
						l: {
							t: "&hellip;",
							w: { a: { mobile: "false" }, h: "http://www.espn.com" },
						},
						i: [
							{
								l: { t: "MMA", w: { a: { icon: "mma" }, h: "/mma/" } },
								t: "MMA",
								i: [
									{
										l: {
											t: "Home",
											w: {
												a: { breakpoints: "desktop,desktop-lg,mobile,tablet" },
												h: "/mma/",
											},
										},
									},
									{
										l: {
											t: "Schedule/Results",
											w: { a: { route: "false" }, h: "/mma/schedule" },
										},
									},
									{
										l: {
											t: "UFC 264 Pick 'em ",
											w: {
												h: "https://fantasy.espn.com/games/ufc-264-pickem/make-picks?addata=ufc264pickem_ufc_web_mmasubnav",
											},
										},
									},
									{
										l: {
											t: "Fightcenter",
											w: { a: { route: "false" }, h: "/mma/fightcenter" },
										},
									},
									{
										l: {
											t: "P4P",
											w: {
												h: "/mma/story/_/id/24067525/espn-mma-pound-pound-rankings",
											},
										},
									},
									{
										l: {
											t: "Divisional Rankings",
											w: { h: "/mma/story/_/id/21807736/mma-fighter-rankings" },
										},
									},
									{
										l: {
											t: "News",
											w: {
												a: {
													tab: "2",
													pagetype: "index",
													breakpoints: "mobile,tablet",
												},
												h: "/mma/index?tab=2",
											},
										},
									},
									{
										l: {
											t: "Champions",
											w: {
												h: "/mma/story/_/id/14947566/current-all-ufc-champions",
											},
										},
									},
									{ l: { t: "PFL", w: { h: "http://www.espn.com/mma/pfl/" } } },
									{
										l: {
											t: "Tickets",
											w: {
												e: true,
												h: "http://www.vividseats.com/sports/boxing-fighting?wsUser=717&wsVar=MMAindexnav",
											},
										},
									},
									{
										l: {
											t: "More",
											w: {
												a: { placeholder: "more", breakpoints: "mobile" },
												h: "http://www.espn.com",
											},
										},
									},
									{
										l: {
											t: "Fighters",
											w: {
												a: { mobile: "false" },
												h: "http://www.espn.com/mma/fighters",
											},
											m: {
												a: { mobile: "true" },
												h: "http://m.espn.com/extra/mma/playersearch",
											},
										},
									},
									{
										l: {
											t: "Ariel Helwani's MMA Show",
											w: {
												h: "http://www.espn.com/espnradio/podcast/archive/_/id/16787314",
											},
										},
									},
									{
										l: {
											t: "Ariel & The Bad Guy",
											w: {
												p: true,
												h: "http://www.espn.com/watch/series/85fcf508-90c7-4c95-afc9-8683d6cb56ea/ariel-the-bad-guy",
											},
										},
									},
								],
								a: { root: "mma", sport_id: "3301" },
							},
							{
								l: { t: "WNBA", w: { h: "/wnba/" } },
								t: "WNBA",
								i: [
									{ l: { t: "Home", w: { h: "/wnba/" } } },
									{ l: { t: "Scores", w: { h: "/wnba/scoreboard" } } },
									{
										l: {
											t: "Schedule",
											w: { a: { mobile: "false" }, h: "/wnba/schedule" },
										},
									},
									{
										l: {
											t: "Standings",
											w: { a: { route: "false" }, h: "/wnba/standings" },
										},
									},
									{
										l: {
											t: "Stats",
											w: {
												a: { mobile: "false" },
												h: "http://www.espn.com/wnba/statistics",
											},
										},
									},
									{ l: { t: "Teams", w: { h: "/wnba/teams" } } },
									{
										l: {
											t: "2021 Draft",
											w: { h: "https://www.espn.com/wnba/draft/news" },
										},
									},
									{
										l: {
											t: "Tickets",
											w: {
												e: true,
												h: "http://www.vividseats.com/sports/basketball/?wsUser=717&wsVar=WomenBKBindexnav",
											},
										},
									},
								],
								a: { root: "wnba", sport_id: "59" },
							},
							{
								l: {
									t: "Horse Racing",
									w: { a: { icon: "equestrian" }, h: "/horse-racing/" },
								},
								t: "Horse Racing",
								i: [
									{ l: { t: "Home", w: { h: "/horse-racing/" } } },
									{
										l: {
											t: "Tickets",
											w: {
												a: { mobile: "false" },
												h: "http://www.vividseats.com/sports/horse-racing?wsUser=717&wsVar=Horseracingindexnav",
											},
										},
									},
								],
								a: { root: "horse", sport_id: "1200" },
							},
							{
								l: { t: "Boxing", w: { a: { icon: "boxing" }, h: "/boxing/" } },
								t: "Boxing",
								i: [
									{
										l: {
											t: "Home",
											w: {
												a: { breakpoints: "desktop,desktop-lg,mobile,tablet" },
												h: "/boxing/",
											},
										},
									},
									{
										l: {
											t: "Schedule",
											w: {
												h: "/boxing/story/_/id/12508267/boxing-fight-schedule",
											},
										},
									},
									{
										l: {
											t: "Champions",
											w: { h: "/boxing/story/_/id/12370125/champions-list" },
										},
										t: "Stats",
									},
									{
										l: {
											t: "More",
											w: {
												a: { placeholder: "more", breakpoints: "tablet" },
												h: "http://www.espn.com",
											},
										},
									},
									{
										l: {
											t: "Divisional Rankings",
											w: {
												h: "/boxing/story/_/id/21675272/boxing-rankings-espn-division-division-boxing-rankings",
											},
										},
									},
									{
										l: {
											t: "P4P",
											w: {
												h: "https://www.espn.com/boxing/story/_/id/31732563/pound-pound-rankings-vasiliy-lomachenko-moved-where-did-land-how-gervonta-davis",
											},
										},
										t: "Stats",
									},
									{
										l: {
											t: "Historic Bouts",
											w: {
												p: true,
												h: "http://www.espn.com/watch/series/5796195d-a1b1-4785-a79e-f865f65a613c/boxing-on-demand",
											},
										},
										t: "ESPN+",
									},
									{
										l: {
											t: "Tickets",
											w: {
												e: true,
												h: "http://www.vividseats.com/sports/boxing-fighting?wsUser=717&wsVar=Boxingindexnav",
											},
										},
									},
									{
										l: {
											t: "Remembering Ali",
											w: {
												h: "http://www.espn.com/espn/feature/story/_/id/15926173/muhammad-ali",
											},
										},
									},
									{
										l: {
											t: "More",
											w: {
												a: { placeholder: "more", breakpoints: "mobile" },
												h: "http://www.espn.com",
											},
										},
									},
								],
								a: { root: "boxing", sport_id: "1000" },
							},
							{
								l: {
									t: "CFL",
									w: {
										e: true,
										a: { icon: "football" },
										h: "http://www.tsn.ca/cfl",
									},
								},
								t: "CFL",
								i: [
									{
										l: {
											t: "CFL Home",
											w: { e: true, h: "http://www.tsn.ca/cfl" },
										},
									},
								],
								a: { root: "cfl", sport_id: "33" },
							},
							{
								l: { t: "Chalk", w: { h: "/chalk/" } },
								t: "Chalk",
								i: [
									{
										l: {
											t: "Home",
											w: {
												a: { breakpoints: "desktop,desktop-lg,mobile,tablet" },
												h: "/chalk/",
											},
										},
									},
									{
										l: {
											t: "More",
											w: {
												a: { placeholder: "more", breakpoints: "mobile" },
												h: "http://www.espn.com",
											},
										},
									},
									{
										l: {
											t: "PickCenter",
											w: { h: "http://www.espn.com/insider/pickcenter/" },
										},
										t: "PickCenter",
										a: { mobile: "true", breakpoints: "desktop,desktop-lg" },
									},
									{
										l: {
											t: "Odds/Futures",
											w: { h: "http://www.espn.com/nfl/lines" },
										},
										t: "Odds/Futures",
										a: { breakpoints: "desktop,desktop-lg" },
									},
									{
										l: {
											t: "Legalization",
											w: {
												h: "http://www.espn.com/chalk/story/_/id/19740480/gambling-sports-betting-bill-tracker-all-50-states",
											},
										},
										t: "Legalization",
										a: { mobile: "true", breakpoints: "desktop,desktop-lg" },
									},
									{
										l: {
											t: "More",
											w: {
												a: {
													placeholder: "more",
													breakpoints: "tablet,desktop,desktop-lg",
												},
												h: "http://www.espn.com",
											},
										},
									},
									{
										l: {
											t: "Experts Picks",
											w: { h: "http://www.espn.com/nfl/picks" },
										},
									},
									{
										l: {
											t: "Glossary",
											w: {
												h: "/espn/chalk/story/_/id/11457015/betting-glossary-common-betting-terms",
											},
										},
									},
								],
								a: { root: "chalk" },
							},
							{
								l: {
									t: "College Sports",
									w: { a: { icon: "pennant" }, h: "/college-sports/" },
								},
								t: "College Sports",
								i: [
									{ l: { t: "Home", w: { h: "/college-sports/" } } },
									{
										l: {
											t: "Scores",
											w: {
												a: { mobile: "false" },
												h: "http://www.espn.com/college-sports/scoreboard",
											},
											m: {
												a: { mobile: "true" },
												h: "http://m.espn.com/extra/ncaa/scoreboard",
											},
										},
									},
									{
										l: {
											t: "NCAA Championships",
											w: {
												a: { mobile: "false" },
												h: "http://www.espn.com/ncaa/feature/video/_/id/5810542/ncaa-championships",
											},
										},
									},
									{
										l: {
											t: "Capital One Cup",
											w: { h: "http://www.espn.com/espn/caponecup/" },
										},
									},
									{
										l: {
											t: "Rankings",
											w: {
												a: { mobile: "false" },
												h: "http://www.espn.com/ncaa/ranking",
											},
										},
									},
									{
										l: {
											t: "More",
											w: {
												a: { placeholder: "more", breakpoints: "tablet" },
												h: "http://www.espn.com",
											},
										},
									},
									{
										l: {
											t: "Transactions",
											w: {
												a: { mobile: "false" },
												h: "http://www.espn.com/ncaa/transactions",
											},
										},
									},
									{
										l: {
											t: "RN Football",
											w: {
												a: { mobile: "false" },
												h: "http://www.espn.com/college-football/recruiting/",
											},
										},
									},
									{
										l: {
											t: "RN Basketball",
											w: {
												a: { mobile: "false" },
												h: "http://www.espn.com/college-sports/basketball/recruiting/index",
											},
										},
									},
									{
										l: {
											t: "Tickets",
											w: {
												e: true,
												h: "http://www.vividseats.com/ncaa?wsUser=717&wsVar=NCAAindexnav",
											},
										},
									},
								],
								a: { root: "ncaa", sport_id: "3170" },
							},
							{
								l: {
									t: "Cricket",
									w: {
										e: true,
										a: { icon: "cricket" },
										h: "https://www.espncricinfo.com/",
									},
								},
								t: "Cricket",
								i: [
									{
										l: {
											t: "Cricket Home",
											w: { e: true, h: "http://www.espncricinfo.com/" },
										},
									},
								],
								a: { root: "cricket", sport_id: "200" },
							},
							{
								l: { t: "F1", w: { a: { icon: "nascar" }, h: "/f1/" } },
								t: "F1",
								i: [
									{ l: { t: "Home", w: { h: "/f1/" } } },
									{
										l: {
											t: "TV Schedule (US)",
											w: {
												h: "/f1/story/_/id/26082657/espn-tv-schedule-2020-f1-season",
											},
										},
									},
									{
										l: {
											t: "Calendar & Results",
											w: { a: { route: "false" }, h: "/f1/schedule" },
										},
									},
									{
										l: {
											t: "More",
											w: {
												a: { placeholder: "more", breakpoints: "mobile" },
												h: "http://www.espn.com",
											},
										},
									},
									{
										l: {
											t: "Standings",
											w: {
												a: { "match-url": "/standings/", route: "false" },
												h: "/f1/standings",
											},
										},
										t: "Standings",
									},
									{
										l: {
											t: "Teams",
											w: { h: "/f1/story/_/id/14642695/all-formula-1-teams" },
										},
										t: "Teams",
									},
									{
										l: {
											t: "Drivers",
											w: {
												h: "/f1/story/_/id/30968661/2021-formula-1-season-drivers",
											},
										},
									},
									{
										l: {
											t: "About F1",
											w: { h: "/f1/story/_/id/13715980/about-formula-1" },
										},
									},
								],
								a: { root: "f1", sport_id: "2030" },
							},
							{
								l: { t: "Golf", w: { a: { icon: "golf" }, h: "/golf/" } },
								t: "Golf",
								i: [
									{
										l: {
											t: "Home",
											w: {
												a: { breakpoints: "desktop,desktop-lg,mobile,tablet" },
												h: "/golf/",
											},
										},
									},
									{
										l: {
											t: "Scores ",
											w: { a: { route: "false" }, h: "/golf/leaderboard" },
										},
									},
									{
										l: {
											t: "Schedule",
											w: { a: { route: "false" }, h: "/golf/schedule" },
										},
									},
									{
										l: {
											t: "Rankings",
											w: { a: { route: "false" }, h: "/golf/rankings" },
										},
									},
									{
										l: {
											t: "Standings",
											w: { a: { route: "false" }, h: "/golf/standings" },
										},
									},
									{
										l: {
											t: "Stats",
											w: {
												a: { mobile: "false" },
												h: "http://www.espn.com/golf/leaders",
											},
											m: {
												a: { mobile: "true" },
												h: "http://m.espn.com/golf/leagueleaders",
											},
										},
									},
									{
										l: {
											t: "Players",
											w: {
												a: { mobile: "false" },
												h: "http://www.espn.com/golf/players",
											},
										},
									},
									{
										l: {
											t: "More",
											w: {
												a: { placeholder: "more", breakpoints: "mobile" },
												h: "http://www.espn.com",
											},
										},
									},
									{
										l: {
											t: "FedEx Cup",
											w: {
												a: { mobile: "false" },
												h: "http://www.espn.com/golf/statistics/_/sort/cupPoints",
											},
										},
									},
									{
										l: {
											t: "Masters.com",
											w: { e: true, h: "http://www.masters.com/" },
										},
									},
								],
								a: { root: "golf", sport_id: "1100" },
							},
							{
								l: {
									t: "NASCAR",
									w: { a: { icon: "nascar" }, h: "/racing/nascar/" },
								},
								t: "NASCAR",
								i: [
									{
										l: {
											t: "Home",
											w: {
												a: { breakpoints: "desktop,desktop-lg,mobile,tablet" },
												h: "/racing/nascar/",
											},
										},
									},
									{ l: { t: "Racing Home", w: { h: "/racing/" } } },
									{
										l: {
											t: "More",
											w: {
												a: { placeholder: "more", breakpoints: "mobile" },
												h: "http://www.espn.com",
											},
										},
									},
									{
										l: {
											t: "Results",
											m: {
												a: { mobile: "true" },
												h: "http://m.espn.com/rpm/nascar/eventresult?seriesId=2",
											},
										},
									},
									{
										l: {
											t: "Schedule",
											m: {
												a: { mobile: "true" },
												h: "http://m.espn.com/rpm/nascar/eventschedule",
											},
										},
									},
									{
										l: {
											t: "Standings",
											m: {
												a: { mobile: "true" },
												h: "http://m.espn.com/rpm/nascar/standings",
											},
										},
									},
									{
										l: {
											t: "Cup Series",
											w: { a: { mobile: "false" }, h: "" },
										},
									},
									{
										l: {
											t: "Standings",
											w: {
												a: { mobile: "false" },
												h: "http://www.espn.com/racing/standings",
											},
										},
									},
									{
										l: {
											t: "Results",
											w: {
												a: { mobile: "false" },
												h: "http://www.espn.com/racing/results",
											},
										},
									},
									{
										l: {
											t: "Schedule",
											w: {
												a: { mobile: "false" },
												h: "http://www.espn.com/racing/schedule",
											},
										},
									},
									{
										l: {
											t: "More",
											w: {
												a: { placeholder: "more", breakpoints: "tablet" },
												h: "http://www.espn.com",
											},
										},
									},
									{
										l: {
											t: "Drivers",
											w: {
												a: { mobile: "false" },
												h: "http://www.espn.com/racing/drivers",
											},
										},
									},
									{
										l: {
											t: "Xfinity Schedule",
											w: {
												a: { mobile: "false" },
												h: "http://www.espn.com/racing/schedule/_/series/nationwide",
											},
										},
									},
									{
										l: {
											t: "Gander Outdoors Truck Schedule",
											w: {
												a: { mobile: "false" },
												h: "http://www.espn.com/racing/schedule/_/series/camping",
											},
										},
									},
									{
										l: {
											t: "Tickets",
											w: {
												e: true,
												a: { mobile: "false" },
												h: "https://www.vividseats.com/nascar-racing?wsUser=717&wsVar=Nascarindexnav",
											},
										},
									},
								],
								a: { root: "nascar", sport_id: "2020" },
							},
							{
								l: { t: "NBA G League", w: { h: "/nba-g-league/" } },
								t: "NBA G League",
								i: [
									{ l: { t: "Home", w: { h: "/nba-g-league/" } } },
									{ l: { t: "Scores", w: { h: "/nba-g-league/scoreboard" } } },
									{ l: { t: "Schedule", w: { h: "/nba-g-league/schedule" } } },
									{
										l: {
											t: "Standings",
											w: {
												a: { route: "false" },
												h: "/nba-g-league/standings",
											},
										},
									},
								],
								a: {
									root: "nba-development",
									sport: "basketball",
									sport_id: "69",
								},
							},
							{
								l: {
									t: "NCAAF",
									w: {
										a: { icon: "football-college" },
										h: "/college-football/",
									},
								},
								t: "NCAAF",
								i: [
									{
										l: {
											t: "Home",
											w: {
												a: { breakpoints: "desktop,desktop-lg,mobile,tablet" },
												h: "/college-football/",
											},
										},
									},
									{
										l: {
											t: "Recruiting",
											w: {
												h: "http://www.espn.com/college-sports/football/recruiting/index",
											},
										},
										t: "Recruiting",
									},
									{
										l: {
											t: "Scores",
											w: { h: "/college-football/scoreboard" },
										},
									},
									{
										l: {
											t: "Schedule",
											w: { h: "/college-football/schedule" },
										},
									},
									{
										l: {
											t: "Standings",
											w: {
												a: { route: "false" },
												h: "/college-football/standings",
											},
										},
									},
									{
										l: {
											t: "Stats",
											w: {
												a: { route: "false" },
												h: "/college-football/stats",
											},
										},
										t: "Stats",
									},
									{
										l: {
											t: "Teams",
											w: {
												a: { route: "false" },
												h: "/college-football/teams",
											},
										},
									},
									{
										l: {
											t: "Rankings",
											w: {
												a: { route: "false" },
												h: "/college-football/rankings",
											},
										},
										t: "Rankings",
									},
									{
										l: {
											t: "Futures Lines",
											w: { h: "https://www.espn.com/college-football/futures" },
											m: {
												a: { mobile: "true" },
												h: "http://m.espn.com/ncf/dailyline",
											},
										},
									},
									{
										l: {
											t: "Bowl Results",
											w: {
												a: { icon: "football-college" },
												h: "https://www.espn.com/college-football/story/_/page/cfpbowls2020/college-football-bowl-game-schedule-2020-21-dates-s-locations-games",
											},
										},
									},
									{
										l: {
											t: "More",
											w: {
												a: { placeholder: "more", breakpoints: "mobile" },
												h: "http://www.espn.com",
											},
										},
									},
									{
										l: {
											t: "PickCenter",
											w: {
												p: true,
												a: { mobile: "false" },
												h: "http://www.espn.com/insider/pickcenter/index?sport=ncf",
											},
											m: {
												p: true,
												a: { mobile: "true" },
												h: "http://insider.espn.com/insider/pickcenter/index/_/sport/ncf/version/mobile",
											},
										},
									},
									{
										l: {
											t: "Awards",
											w: {
												a: { mobile: "false" },
												h: "http://www.espn.com/college-football/awards",
											},
										},
									},
									{
										l: {
											t: "SEC Network",
											w: { a: { mobile: "false" }, h: "http://secnetwork.com" },
										},
									},
									{
										l: {
											t: "ESPN Events",
											w: { e: true, h: "http://espnevents.com/" },
										},
									},
								],
								a: { root: "ncaaf", sport_id: "23" },
							},
							{
								l: {
									t: "NCAAM",
									w: {
										a: { icon: "basketball" },
										h: "/mens-college-basketball/",
									},
								},
								t: "NCAAM",
								i: [
									{
										l: {
											t: "Home",
											w: {
												a: { breakpoints: "desktop,desktop-lg,mobile,tablet" },
												h: "/mens-college-basketball/",
											},
										},
									},
									{
										l: {
											t: "Recruiting",
											w: {
												a: { mobile: "false" },
												h: "http://www.espn.com/college-sports/basketball/recruiting/index",
											},
											m: {
												a: { mobile: "true" },
												h: "http://www.espn.com/college-sports/basketball/recruiting/index",
											},
										},
									},
									{
										l: {
											t: "Scores",
											w: { h: "/mens-college-basketball/scoreboard" },
										},
									},
									{
										l: {
											t: "Schedule",
											w: { h: "/mens-college-basketball/schedule" },
										},
									},
									{
										l: {
											t: "Stats",
											w: {
												a: { mobile: "false" },
												h: "http://www.espn.com/mens-college-basketball/statistics",
											},
											m: {
												a: { mobile: "true" },
												h: "http://m.espn.com/ncb/leagueleaders",
											},
										},
									},
									{
										l: {
											t: "Teams",
											w: {
												a: { route: "false" },
												h: "/mens-college-basketball/teams",
											},
										},
									},
									{
										l: {
											t: "Standings",
											w: {
												a: { route: "false" },
												h: "/mens-college-basketball/standings",
											},
										},
									},
									{
										l: {
											t: "Rankings",
											w: {
												a: { route: "false" },
												h: "/mens-college-basketball/rankings",
											},
										},
										t: "Rankings",
									},
									{
										l: {
											t: "Bracketology",
											w: {
												h: "http://www.espn.com/mens-college-basketball/bracketology",
											},
										},
									},
									{
										l: {
											t: "Way-Too-Early Top 25",
											w: {
												h: "https://www.espn.com/mens-college-basketball/story/_/page/earlytop25040521/gonzaga-ucla-1-2-way-too-early-top-25-college-basketball-rankings-2021-22",
											},
										},
									},
									{
										l: {
											t: "More",
											w: {
												a: { placeholder: "more", breakpoints: "mobile" },
												h: "http://www.espn.com",
											},
										},
									},
									{
										l: {
											t: "Tickets",
											w: {
												e: true,
												a: { mobile: "false" },
												h: "http://www.vividseats.com/ncaab?wsUser=717&wsVar=CollegeBKindexnav",
											},
										},
									},
									{
										l: {
											t: "PickCenter",
											w: {
												p: true,
												a: { mobile: "false" },
												h: "http://insider.espn.com/insider/pickcenter/index?sport=ncb",
											},
											m: {
												p: true,
												a: { mobile: "true" },
												h: "http://m.espn.com/ncb/pickcenter",
											},
										},
									},
									{
										l: {
											t: "Ivy League Digital Network",
											w: {
												e: true,
												h: "http://www.ivyleaguedigitalnetwork.com/",
											},
										},
									},
									{
										l: {
											t: "ESPN Events",
											w: { e: true, h: "http://espnevents.com/" },
										},
									},
								],
								a: { root: "ncaam", sport_id: "41" },
							},
							{
								l: {
									t: "NCAAW",
									w: {
										a: { icon: "basketball" },
										h: "/womens-college-basketball/",
									},
								},
								t: "NCAAW",
								i: [
									{ l: { t: "Home", w: { h: "/womens-college-basketball/" } } },
									{
										l: {
											t: "Recruiting",
											w: {
												a: { mobile: "false" },
												h: "http://www.espn.com/high-school/girls-basketball/recruiting/rankings/_/class/2020",
											},
										},
										t: "Recruiting",
									},
									{
										l: {
											t: "Scores",
											w: { h: "/womens-college-basketball/scoreboard" },
										},
									},
									{
										l: {
											t: "Schedule",
											w: { h: "/womens-college-basketball/schedule" },
										},
									},
									{
										l: {
											t: "Stats",
											w: {
												a: { mobile: "false" },
												h: "http://www.espn.com/womens-college-basketball/statistics",
											},
											m: {
												a: { mobile: "true" },
												h: "http://m.espn.com/ncw/aggregates",
											},
										},
									},
									{
										l: {
											t: "Standings",
											w: {
												a: { route: "false" },
												h: "/womens-college-basketball/standings",
											},
										},
									},
									{
										l: {
											t: "Teams",
											w: {
												a: { route: "false" },
												h: "/womens-college-basketball/teams",
											},
										},
									},
									{
										l: {
											t: "Rankings",
											w: {
												a: { route: "false" },
												h: "/womens-college-basketball/rankings",
											},
										},
									},
									{
										l: {
											t: "Bracketology",
											w: {
												h: "http://www.espn.com/womens-college-basketball/bracketology",
											},
										},
									},
									{
										l: {
											t: "Coaching Changes",
											w: {
												h: "https://www.espn.com/womens-college-basketball/story/_/id/31083456/women-college-basketball-coaching-changes-2021-22",
											},
										},
									},
									{
										l: {
											t: "More",
											w: {
												a: { placeholder: "more", breakpoints: "mobile" },
												h: "http://www.espn.com",
											},
										},
									},
								],
								a: { root: "ncaaw", sport_id: "54" },
							},
							{
								l: {
									t: "Olympic Sports",
									w: { a: { icon: "olympics" }, h: "/olympics/" },
								},
								t: "Olympic Sports",
								i: [
									{ l: { t: "Home", w: { h: "/olympics/" } } },
									{
										l: {
											t: "Schedule",
											w: { h: "/olympics/summer/2020/schedule" },
										},
									},
									{
										l: {
											t: "Summer Sports",
											w: { h: "/olympics/summer/2020/sports" },
										},
										t: "Summer Sports",
									},
									{
										l: {
											t: "Winter Sports",
											w: { h: "/olympics/winter/2018/sports" },
										},
										t: "Winter Sports",
										a: { root: "olympics", sport_id: "3700" },
									},
								],
								a: { root: "olympics", sport_id: "3700" },
							},
							{
								l: { t: "Racing", w: { a: { icon: "nascar" }, h: "/racing/" } },
								t: "Racing",
								i: [
									{ l: { t: "Home", w: { h: "/racing/" } } },
									{
										l: {
											t: "More",
											w: {
												a: { placeholder: "more", breakpoints: "mobile" },
												h: "http://www.espn.com",
											},
										},
									},
									{ l: { t: "NASCAR Home", w: { h: "/racing/nascar/" } } },
									{
										l: {
											t: "Results",
											m: {
												a: { mobile: "true" },
												h: "http://m.espn.com/rpm/eventresult?seriesId=1",
											},
										},
									},
									{
										l: {
											t: "Schedule",
											m: {
												a: { mobile: "true" },
												h: "http://m.espn.com/rpm/eventschedule",
											},
										},
									},
									{
										l: {
											t: "Standings",
											m: {
												a: { mobile: "true" },
												h: "http://m.espn.com/rpm/standings",
											},
										},
									},
									{ l: { t: "IndyCar", w: { a: { mobile: "false" }, h: "" } } },
									{
										l: {
											t: "Results",
											w: {
												a: { mobile: "false" },
												h: "http://www.espn.com/racing/results/_/series/indycar",
											},
										},
									},
									{
										l: {
											t: "Schedule",
											w: {
												a: { mobile: "false" },
												h: "http://www.espn.com/racing/schedule/_/series/indycar",
											},
										},
									},
									{
										l: {
											t: "Standings",
											w: {
												a: { mobile: "false" },
												h: "http://www.espn.com/racing/standings/_/series/irl",
											},
										},
									},
									{
										l: {
											t: "Drivers",
											w: {
												a: { mobile: "false" },
												h: "http://www.espn.com/racing/drivers/_/series/indycar",
											},
										},
									},
									{ l: { t: "F1", w: { a: { mobile: "false" }, h: "" } } },
									{ l: { t: "ESPNF1 Home", w: { h: "/f1/" } } },
									{
										l: {
											t: "Schedule & Results",
											w: { a: { route: "false" }, h: "/f1/schedule" },
										},
									},
									{
										l: {
											t: "Drivers",
											w: {
												h: "/f1/story/_/id/18842142/2018-formula-1-season-drivers",
											},
										},
									},
									{
										l: {
											t: "Teams",
											w: { h: "/f1/story/_/id/14642695/all-formula-1-teams" },
										},
									},
									{
										l: {
											t: "Tickets",
											w: {
												e: true,
												h: "http://www.vividseats.com/sports/racing/?wsUser=717&wsVar=Motorsportsindexnav",
											},
										},
									},
								],
								a: { root: "racing", sport_id: "2000" },
							},
							{
								l: {
									t: "Recruiting BB",
									w: {
										a: { icon: "recruitingbb" },
										h: "http://www.espn.com/college-sports/basketball/recruiting/",
									},
								},
								t: "RecruitingBB",
								i: [
									{
										l: {
											t: "Player Rankings",
											w: {
												h: "http://www.espn.com/college-sports/basketball/recruiting/playerrankings/_/view/espnu100",
											},
										},
									},
									{
										l: {
											t: "Transfer Rankings",
											w: {
												h: "http://www.espn.com/mens-college-basketball/story/_/id/26530279/college-basketball-transfer-rankings-2019-20-2020-21",
											},
										},
									},
									{
										l: {
											t: "Class Rankings",
											w: {
												p: true,
												h: "https://www.espn.com/mens-college-basketball/insider/story/_/id/31256464/2021-men-college-basketball-recruiting-class-rankings-chet-holmgren-boosts-gonzaga-no-2  ",
											},
										},
									},
									{
										l: {
											t: "College Basketball",
											w: { h: "http://www.espn.com/mens-college-basketball/" },
										},
									},
									{
										l: {
											t: "RN Football Home",
											w: {
												h: "http://www.espn.com/college-sports/football/recruiting/index",
											},
											m: {
												a: { mobile: "true" },
												h: "http://m.espn.com/ncf/recruiting/",
											},
										},
									},
								],
								a: { root: "recruitingbb" },
							},
							{
								l: {
									t: "Recruiting FB",
									w: {
										a: { icon: "recruitingfb" },
										h: "http://www.espn.com/college-sports/football/recruiting/",
									},
								},
								t: "Recruiting FB",
								i: [
									{
										l: {
											t: "Player Rankings",
											w: {
												h: "http://www.espn.com/college-sports/football/recruiting/playerrankings/_/view/rn300",
											},
										},
									},
									{
										l: {
											t: "Class Rankings",
											w: {
												p: true,
												h: "https://www.espn.com/college-football/insider/story/_/id/30816748/2021-college-football-recruiting-class-rankings-alabama-leads-top-75-teams-national-signing-day",
											},
										},
									},
									{
										l: {
											t: "Juco Rankings",
											w: {
												h: "http://www.espn.com/college-sports/football/recruiting/playerrankings/_/view/juco",
											},
										},
									},
									{
										l: {
											t: "College Football",
											w: { h: "http://www.espn.com/college-football/" },
										},
									},
									{
										l: {
											t: "RN Basketball",
											w: {
												h: "http://www.espn.com/college-sports/basketball/recruiting/index",
											},
											m: {
												a: { mobile: "true" },
												h: "http://m.espn.com/ncb/hotcorner?id=9003013",
											},
										},
									},
								],
								a: { root: "recruitingfb" },
							},
							{
								l: { t: "Rugby", w: { a: { icon: "rugby" }, h: "/rugby/" } },
								t: "Rugby",
								i: [
									{ l: { t: "Home", w: { h: "/rugby/" } } },
									{
										l: {
											t: "Fantasy Rugby",
											w: { h: "http://fantasyrugby.espn.co.uk" },
										},
									},
									{
										l: {
											t: "Scores",
											w: { a: { route: "false" }, h: "/rugby/scoreboard" },
										},
									},
									{
										l: {
											t: "ESPN Rugby Pick'em 2021",
											w: {
												h: "https://fantasy.espn.com/games/rugby-pickem-2021/make-picks?addata=rugbypickem2021_rugby_uk_web_rugbysubnav",
											},
										},
									},
									{
										l: { t: "Fixtures & Results", w: { h: "/rugby/fixtures" } },
										t: "Fixtures & Results",
									},
									{
										l: {
											t: "Tables",
											w: { h: "/rugby/table/_/league/267979" },
										},
										t: "Tables",
									},
									{
										l: {
											t: "More",
											w: {
												a: { placeholder: "more", breakpoints: "mobile" },
												h: "http://www.espn.com",
											},
										},
									},
									{
										l: {
											t: "Tournaments",
											w: {
												h: "null/rugby/story/_/id/15269943/rugby-leagues-competitions",
											},
										},
										t: "Tournaments",
									},
									{
										l: {
											t: "Countries",
											w: {
												h: "/rugby/story/_/id/15269945/rugby-national-teams",
											},
										},
										t: "Countries",
									},
								],
								a: { root: "rugby", sport_id: "300" },
							},
							{
								l: { t: "WWE", w: { h: "/wwe/" } },
								t: "WWE",
								i: [
									{
										l: {
											t: "Home",
											w: {
												a: { breakpoints: "desktop,desktop-lg,mobile,tablet" },
												h: "/wwe/",
											},
										},
									},
									{
										l: {
											t: "WrestleMania 37",
											w: {
												h: "https://www.espn.com/wwe/story/_/id/31012524/wwe-wrestlemania-37-matches-card-date-location-news-stories-information",
											},
										},
									},
									{
										l: {
											t: "Schedule",
											w: {
												h: "/wwe/story/_/id/17227408/wwe-live-televised-events-schedule-monday-night-raw-smackdown-live-pay-per-views",
											},
										},
									},
									{
										l: {
											t: "Wrestler profiles",
											w: {
												h: "/wwe/story/_/id/17217806/wwe-superstars-landing-page",
											},
										},
									},
									{
										l: {
											t: "Power Rankings",
											w: {
												h: "https://www.espn.com/wwe/story/_/id/29795933/wwe-power-rankings-paul-heyman-side-roman-reigns-charges-top",
											},
										},
									},
									{
										l: {
											t: "Title watch",
											w: {
												h: "/wwe/story/_/id/17241989/wwe-title-watch-ranking-top-contenders-title-wwe",
											},
										},
									},
									{
										l: {
											t: "WWE title history",
											w: {
												h: "/wwe/story/_/id/17222526/active-wwe-titles-their-historical-lineage",
											},
										},
									},
									{
										l: {
											t: "Tickets",
											w: {
												e: true,
												h: "https://www.vividseats.com/wwe?wsUser=717&wsVar=WWEindexnav",
											},
										},
									},
								],
								a: { root: "wwe", sport_id: "1652" },
							},
							{
								l: {
									t: "X Games",
									w: {
										e: true,
										a: { icon: "xgames" },
										h: "http://xgames.com/",
									},
								},
								t: "X Games",
								i: [
									{ l: { t: "Home", w: { e: true, h: "http://xgames.com/" } } },
									{
										l: {
											t: "Aspen",
											w: { e: true, h: "http://xgames.espn.com/xgames/aspen/" },
										},
									},
									{
										l: {
											t: "Sydney",
											w: { h: "http://xgames.espn.com/xgames/sydney/" },
										},
									},
									{
										l: {
											t: "Minneapolis",
											w: {
												e: true,
												h: "http://xgames.espn.com/xgames/minneapolis/",
											},
										},
									},
									{
										l: {
											t: "Photos",
											w: {
												e: true,
												h: "http://xgames.espn.com/xgames/photos/",
											},
										},
									},
									{
										l: {
											t: "Videos",
											w: { e: true, h: "http://xgames.espn.com/xgames/video/" },
										},
									},
									{
										l: {
											t: "Athletes",
											w: {
												e: true,
												h: "http://xgames.espn.com/xgames/athletes/",
											},
										},
									},
									{
										l: {
											t: "World of X",
											w: {
												e: true,
												h: "http://www.xgames.com/home/article/25676306/espn-world-x-games-abc-2019-schedule",
											},
										},
									},
								],
								a: { root: "xgames", sport_id: "8098" },
							},
						],
					},
				],
				pillar: [
					{
						l: {
							t: "ESPN+",
							w: {
								a: { logo: "espnplus", eplustrack: "true" },
								h: "https://www.espn.com/espnplus/?om-navmethod=topnav",
							},
						},
						t: "ESPN+",
						i: [
							{
								l: {
									t: "ESPN+",
									w: {
										a: { logo: "espnplus", eplustrack: "true" },
										h: "https://www.espn.com/espnplus/?om-navmethod=topnav",
									},
								},
								t: "ESPN+",
								i: [
									{
										l: {
											t: "ESPN+",
											w: { a: { class: "header-title" }, h: "" },
										},
									},
									{
										l: {
											t: "Featured",
											w: { h: "https://www.espn.com/espnplus" },
										},
									},
									{
										l: {
											t: "Originals",
											w: {
												a: { abbrev: "originals", route: "false" },
												h: "https://www.espn.com/espnplus/originals/",
											},
										},
									},
									{
										l: {
											t: "Browse",
											w: { h: "https://www.espn.com/espnplus/browse/" },
										},
									},
									{
										l: {
											t: "Schedule & Replays",
											w: {
												h: "https://www.espn.com/espnplus/schedule?channel=ESPN_PLUS",
											},
										},
									},
									{
										l: {
											t: "Articles",
											w: { h: "https://www.espn.com/espnplus/news/" },
										},
									},
									{
										l: {
											t: "Tools",
											w: { h: "https://www.espn.com/insider/tools" },
										},
									},
									{
										l: {
											t: "Support & FAQs",
											w: {
												a: { abbrev: "faqs", route: "false" },
												h: "https://help.espnplus.com",
											},
										},
									},
								],
								a: { menu: "espnplus" },
							},
							{
								l: { w: { h: "http://www.espn.com" } },
								t: "Best of ESPN+",
								i: [
									{
										l: {
											t: "Best of ESPN+",
											w: { a: { class: "header-title" }, h: "" },
										},
									},
									{
										l: {
											t: "UFC Archives",
											w: {
												h: "https://www.espn.com/watch/catalog/98485c34-5490-4f9c-b176-599633cb589f",
											},
										},
									},
									{
										l: {
											t: "30 for 30 ",
											w: {
												h: "https://www.espn.com/watch/catalog/0514c1ad-efd1-4d3a-ad82-41ca579a94a2",
											},
										},
									},
									{
										l: {
											t: "NFL on ESPN+",
											w: {
												h: "https://www.espn.com/watch/catalog/cb15d25b-8401-4254-b3b2-c55605d3101b",
											},
										},
									},
									{
										l: {
											t: "Boxing On Demand",
											w: {
												h: "https://www.espn.com/watch/catalog/5796195d-a1b1-4785-a79e-f865f65a613c",
											},
										},
									},
									{
										l: {
											t: "Wimbledon Classics",
											w: {
												h: "https://www.espn.com/watch/catalog/1f979691-3edd-4336-91f3-2879106eb8c8",
											},
										},
									},
								],
								a: { menu: "header-title" },
							},
							{
								l: { w: { h: "http://www.espn.com" } },
								t: "More ESPN",
								i: [
									{
										l: {
											t: "More",
											w: { a: { class: "header-title" }, h: "" },
										},
									},
									{
										l: {
											t: "Apps",
											w: {
												a: { abbrev: "apps", route: "false" },
												h: "http://www.espn.com/app",
											},
										},
									},
									{
										l: {
											t: "ESPN Help Center",
											w: {
												a: { abbrev: "contact", route: "contact" },
												h: "https://support.espn.com/hc/en-us",
											},
										},
									},
									{
										l: {
											t: "Don't Have ESPN+?",
											w: { h: " https://plus.espn.com/" },
										},
									},
								],
								a: { menu: "espnplus-more-more" },
							},
							{
								l: {
									t: "The Masters Films",
									w: {
										h: "https://www.espn.com/watch/catalog/8a90fbeb-44b5-44c9-81f7-710e3a106282",
									},
								},
							},
						],
						a: { root: "espnplus", twoColumn: "true" },
					},
					{
						l: { t: "Watch", w: { h: "http://www.espn.com/watch/" } },
						t: "Watch",
						i: [
							{
								l: {
									t: "Home",
									w: { a: { abbrev: "watch", route: "false" }, h: "/watch/" },
								},
							},
							{
								l: {
									t: "Originals",
									w: {
										a: { abbrev: "originals", route: "false" },
										h: "/watch/originals",
									},
								},
							},
							{
								l: {
									t: "Browse",
									w: { h: "https://www.espn.com/watch/browse/" },
								},
							},
							{
								l: {
									t: "Schedule & Replays",
									w: {
										a: { abbrev: "sched", route: "false" },
										h: "/watch/schedule/",
									},
								},
							},
							{
								l: {
									t: "Support & FAQs",
									w: {
										a: { abbrev: "faqs", route: "false" },
										h: "https://support.espn.com/hc/en-us",
									},
								},
							},
							{
								l: {
									t: "Apps",
									w: {
										a: { abbrev: "apps", route: "false" },
										h: "http://www.espn.com/app",
									},
								},
							},
							{
								l: {
									t: "Don't Have ESPN?",
									w: {
										h: "https://ad.doubleclick.net/ddm/trackclk/N6344.2489.ESPN.GO.COM/B21579729.228256898;dc_trk_aid=426476589;dc_trk_cid=105662855;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua",
									},
								},
							},
						],
						a: { root: "watch" },
					},
					{
						l: { t: "Listen", w: { h: "http://www.espn.com/espnradio/index" } },
						t: "Listen",
						i: [
							{
								l: {
									t: "ESPN Radio",
									w: {
										a: { mobile: "false" },
										h: "https://www.espn.com/espnradio/index",
									},
									m: {
										a: { mobile: "true" },
										h: "http://m.espn.com/general/espnradio/",
									},
								},
							},
							{
								l: {
									t: "Listen Live",
									w: { h: "https://www.espn.com/radio/play?s=espn" },
								},
							},
							{
								l: {
									t: "ESPN Daily",
									w: {
										a: { mobile: "false" },
										h: "http://www.espn.com/espn/story/_/id/27852002/the-espn-daily-podcast-how-watch-episode-guide-more",
									},
								},
							},
							{
								l: {
									t: "Podcasts",
									w: {
										a: { mobile: "false" },
										h: "http://www.espn.com/espnradio/podcast/index",
									},
									m: {
										a: { mobile: "true" },
										h: "http://m.espn.go.com/general/podcenter",
									},
								},
							},
						],
					},
					{
						l: {
							t: "Fantasy",
							w: { a: { logo: "fantasy", icon: "fantasy" }, h: "/fantasy/" },
						},
						t: "Fantasy",
						i: [
							{
								l: {
									t: "Fantasy Home",
									w: { a: { mobile: "false" }, h: "/fantasy/" },
									m: {
										a: { mobile: "true" },
										h: "http://m.espn.com/general/fantasy/",
									},
								},
							},
							{
								l: {
									t: "Baseball",
									w: {
										a: { abbrev: "flb" },
										h: "http://www.espn.com/fantasy/baseball/",
									},
								},
							},
							{
								l: {
									t: "Sign Up: Fantasy Football",
									w: {
										a: { mobile: "false", isFantasy: "true" },
										h: "https://fantasy.espn.com/football/welcome?addata=ffl_2021_fantasy_dropdown",
									},
								},
							},
							{
								l: {
									t: "Basketball Draft Challenge",
									w: {
										h: "https://fantasy.espn.com/games/basketball-draft-challenge-2021/make-picks?addata=basketballdraftchallenge2021_nba_web_fantasynav",
									},
								},
							},
							{
								l: {
									t: "Derby Pick'em",
									w: {
										h: "https://fantasy.espn.com/games/mlb-derby-pickem-2021/make-picks?addata=derbypickem2021_mlb_web_fantasynav",
									},
								},
							},
							{
								l: {
									t: "Basketball",
									w: {
										a: { abbrev: "fba" },
										h: "http://www.espn.com/fantasy/basketball/",
									},
								},
							},
							{
								l: {
									t: "Hockey",
									w: {
										a: { abbrev: "fhl" },
										h: "http://www.espn.com/fantasy/hockey/",
									},
								},
							},
							{
								l: {
									t: "Football",
									w: {
										a: { abbrev: "ffl" },
										h: "http://www.espn.com/fantasy/football/",
									},
								},
							},
							{
								l: {
									t: "2021 ESPYS Pick'em",
									w: {
										h: "https://fantasy.espn.com/games/espys-pickem-2021/make-picks?addata=espyspickem2021_espys_web_fantasynav",
									},
								},
							},
							{
								l: {
									t: "Games Home",
									w: { h: "https://fantasy.espn.com/free-prize-games" },
								},
							},
							{
								l: {
									t: "Streak",
									w: { h: "http://fantasy.espn.com/streak/en/" },
								},
							},
							{ t: "Fantasy", a: { placeholder: "fantasy-teams" } },
							{
								l: {
									t: "My Teams",
									w: {
										a: { tab: "1", pagetype: "index", breakpoints: "mobile" },
										h: "/fantasy/?tab=1",
									},
								},
							},
						],
						a: { root: "fantasy" },
					},
					{
						l: { t: "More ESPN", w: { h: "http://www.espn.com" } },
						t: "More",
						i: [
							{
								l: { w: { a: { class: "cities" }, h: "http://www.espn.com" } },
								t: "Locals",
								i: [
									{
										l: {
											t: "Locals",
											w: { a: { class: "header-title" }, h: "" },
										},
									},
									{ l: { t: "Boston", w: { h: "/boston/" } } },
									{ l: { t: "Chicago", w: { h: "/chicago/" } } },
									{ l: { t: "Cleveland", w: { h: "/cleveland/" } } },
									{ l: { t: "Dallas", w: { h: "/dallas/" } } },
									{ l: { t: "Los Angeles", w: { h: "/los-angeles/" } } },
									{ l: { t: "New York", w: { h: "/new-york/" } } },
									{ l: { t: "Wisconsin", w: { h: "/milwaukee/" } } },
									{
										l: {
											t: "Misc",
											w: { a: { class: "header-title" }, h: "" },
										},
									},
									{ l: { t: "ESPYS", w: { h: "http://www.espn.com/espys" } } },
									{
										l: {
											t: "Music",
											w: { h: "http://www.espn.com/blog/music" },
										},
									},
									{
										l: {
											t: "Corrections",
											w: { h: "http://www.espn.com/espn/corrections" },
										},
									},
								],
								a: { menu: "cities" },
							},
							{
								l: {
									w: { a: { class: "header-title" }, h: "http://www.espn.com" },
								},
								t: "Editions",
								i: [
									{
										l: {
											t: "Editions",
											w: { a: { class: "header-title" }, h: "" },
										},
									},
									{
										l: {
											t: "Ecuador",
											w: {
												a: {
													"edition-link": "espn-es-ec",
													"edition-view": "espn-es-ec",
													region: "sa",
													flag: "ecu",
												},
												h: "http://www.espn.com/?country-view=ec&lang-view=es",
											},
										},
									},
									{
										l: {
											t: "Uruguay",
											w: {
												a: {
													"edition-link": "espn-es-uy",
													"edition-view": "espn-es-uy",
													region: "sa",
													flag: "uru",
												},
												h: "http://www.espn.com/?country-view=uy&lang-view=es",
											},
										},
									},
									{
										l: {
											t: "Costa Rica",
											w: {
												a: {
													"edition-link": "espn-es-cr",
													"edition-view": "espn-es-cr",
													region: "ca",
													flag: "crc",
												},
												h: "http://www.espn.com/?country-view=cr&lang-view=es",
											},
										},
									},
									{
										l: {
											t: "Guatemala",
											w: {
												a: {
													"edition-link": "espn-es-gt",
													"edition-view": "espn-es-gt",
													region: "ca",
													flag: "gua",
												},
												h: "http://www.espn.com/?country-view=gt&lang-view=es",
											},
										},
									},
									{
										l: {
											t: "Panama",
											w: {
												a: {
													"edition-link": "espn-es-pa",
													"edition-view": "espn-es-pa",
													region: "ca",
													flag: "pan",
												},
												h: "http://www.espn.com/?country-view=pa&lang-view=es",
											},
										},
									},
									{
										l: {
											t: "Dominican Republic",
											w: {
												a: {
													"edition-link": "espn-es-do",
													"edition-view": "espn-es-do",
													region: "ca",
													flag: "dom",
												},
												h: "http://www.espn.com/?country-view=do&lang-view=es",
											},
										},
									},
									{
										l: {
											t: "US",
											w: {
												a: {
													"edition-link": "espn-en-us",
													"edition-view": "espn-en-us",
													region: "na",
													flag: "usa",
												},
												h: "http://www.espn.com/?country-view=us&lang-view=en",
											},
										},
									},
									{
										l: {
											t: "Netherlands",
											w: {
												a: {
													"edition-link": "espn-nl-nl",
													"edition-view": "espn-nl-nl",
													region: "eu",
													flag: "ned",
												},
												h: "https://www.espn.com/?country-view=nl&lang-view=nl",
											},
										},
									},
									{
										l: {
											t: "Asia",
											w: {
												a: {
													"edition-link": "espn-en-ww",
													"edition-view": "espn-en-ww",
													region: "as",
												},
												h: "http://www.espn.com/?country-view=ww&lang-view=en",
											},
										},
									},
									{
										l: {
											t: "Global",
											w: {
												a: {
													"edition-link": "espn-en-ww",
													"edition-view": "espn-en-ww",
													region: "ww",
												},
												h: "http://www.espn.com/?country-view=ww&lang-view=en",
											},
										},
									},
									{
										l: {
											t: "Africa",
											w: {
												a: {
													"edition-link": "espn-en-za",
													"edition-view": "espn-en-za",
													region: "af",
												},
												h: "http://www.espn.com/?country-view=za&lang-view=en",
											},
										},
									},
									{
										l: {
											t: "Argentina",
											w: {
												a: {
													"edition-link": "espn-es-ar",
													"edition-view": "espn-es-ar",
													region: "sa",
													flag: "arg",
												},
												h: "http://www.espn.com/?country-view=ar&lang-view=es",
											},
										},
									},
									{
										l: {
											t: "Venezuela",
											w: {
												a: {
													"edition-link": "espn-es-ve",
													"edition-view": "espn-es-ve",
													region: "sa",
													flag: "ven",
												},
												h: "http://www.espn.com/?country-view=ve&lang-view=es",
											},
										},
									},
									{
										l: {
											t: "Australia",
											w: {
												a: {
													"edition-link": "espn-en-au",
													"edition-view": "espn-en-au",
													region: "oc",
													flag: "aus",
												},
												h: "http://www.espn.com/?country-view=au&lang-view=en",
											},
										},
									},
									{
										l: {
											t: "Brazil",
											w: {
												a: {
													"edition-link": "espn-pt-br",
													"edition-view": "espn-pt-br",
													region: "sa",
													flag: "bra",
												},
												h: "http://www.espn.com/?country-view=br&lang-view=pt",
											},
										},
									},
									{
										l: {
											t: "Chile",
											w: {
												a: {
													"edition-link": "espn-es-cl",
													"edition-view": "espn-es-cl",
													region: "sa",
													flag: "chi",
												},
												h: "http://www.espn.com/?country-view=cl&lang-view=es",
											},
										},
									},
									{
										l: {
											t: "Colombia",
											w: {
												a: {
													"edition-link": "espn-es-co",
													"edition-view": "espn-es-co",
													region: "sa",
													flag: "col",
												},
												h: "http://www.espn.com/?country-view=co&lang-view=es",
											},
										},
									},
									{
										l: {
											t: "ESPN Deportes",
											w: {
												a: {
													"edition-link": "espn-es-us",
													"edition-view": "espn-es-us",
													region: "na",
													flag: "usa",
												},
												h: "http://www.espn.com/?country-view=us&lang-view=es",
											},
										},
									},
									{
										l: {
											t: "India",
											w: {
												a: {
													"edition-link": "espnin-en",
													"edition-view": "espn-en-in",
													region: "as",
													flag: "ind",
												},
												h: "https://www.espn.com/?country-view=in&lang-view=en",
											},
										},
									},
									{
										l: {
											t: "Mexico",
											w: {
												a: {
													"edition-link": "espn-es-mx",
													"edition-view": "espn-es-mx",
													region: "na",
													flag: "mex",
												},
												h: "http://www.espn.com/?country-view=mx&lang-view=es",
											},
										},
									},
									{
										l: {
											t: "Peru",
											w: {
												a: {
													"edition-link": "espn-es-pe",
													"edition-view": "espn-es-pe",
													region: "sa",
													flag: "per",
												},
												h: "http://www.espn.com/?country-view=pe&lang-view=es",
											},
										},
									},
									{
										l: {
											t: "Philippines",
											w: {
												a: {
													"edition-link": "espn-en-ph",
													"edition-view": "espn-en-ph",
													region: "as",
													flag: "phi",
												},
												h: "http://www.espn.com/?country-view=ph&lang-view=en",
											},
										},
									},
									{
										l: {
											t: "Singapore",
											w: {
												a: {
													"edition-link": "espn-en-sg",
													"edition-view": "espn-en-sg",
													region: "as",
													flag: "sgp",
												},
												h: "https://www.espn.com/?country-view=sg&lang-view=en",
											},
										},
									},
									{
										l: {
											t: "UK",
											w: {
												a: {
													"edition-link": "espn-en-gb",
													"edition-view": "espn-en-gb",
													region: "eu",
													flag: "gbr",
												},
												h: "http://www.espn.com/?country-view=uk&lang-view=en",
											},
										},
									},
								],
								a: { menu: "editions" },
							},
							{
								l: {
									t: "Affinity Sites",
									w: { h: "http://www.espn.com" },
									m: { a: { class: "header-title", mobile: "true" }, h: "" },
								},
								t: "Featured Links",
								i: [
									{
										l: {
											t: "Affinity Sites",
											m: {
												a: { class: "header-title", mobile: "true" },
												h: "",
											},
										},
									},
									{
										l: {
											t: "The Undefeated",
											w: {
												e: true,
												a: { logo: "undefeated" },
												h: "http://theundefeated.com/",
											},
										},
									},
									{
										l: {
											t: "espnW",
											w: {
												a: { logo: "espnw" },
												h: "https://www.espn.com/espnw/",
											},
										},
									},
									{
										l: {
											t: "SEC Network",
											w: {
												e: true,
												a: { logo: "sec" },
												h: "http://www.secsports.com/",
											},
										},
									},
									{
										l: {
											t: "Tickets",
											w: {
												e: true,
												a: { logo: "tickets" },
												h: "http://www.vividseats.com?wsUser=717&wsVar=ESPNhpnav",
											},
										},
									},
								],
								a: { menu: "featured" },
							},
						],
					},
				],
				singleSport: false,
			},
			subNavigation: {
				logo: "https://a.espncdn.com/combiner/i?img=/redesign/assets/img/icons/ESPN-icon-soccer.png&w=80&h=80&scale=crop&cquality=40&location=origin",
				href: "/soccer/",
				text: "Soccer",
				items: [
					{
						l: {
							t: "Home",
							w: {
								a: { mobile: "false", breakpoints: "desktop,desktop-lg" },
								h: "/soccer/",
							},
						},
					},
					{
						l: {
							t: "News",
							w: {
								a: {
									tab: "2",
									pagetype: "index",
									breakpoints: "mobile,tablet",
								},
								h: "/soccer/index?tab=2",
							},
						},
					},
					{ l: { t: "Scores", w: { h: "/soccer/scoreboard" } } },
					{ l: { t: "Schedule", w: { h: "/soccer/schedule" } } },
					{
						l: { t: "Euro 2020", w: { h: "/soccer/league/_/name/uefa.euro" } },
						t: "Euro 2020",
						i: [
							{
								l: {
									t: "Latest news, features",
									w: {
										h: "/soccer/uefa-european-championship/story/4399087/euro-2020-latest-newsfeaturesvideo-from-european-championship",
									},
								},
							},
							{
								l: {
									t: "Live on ESPN+ (US)",
									w: {
										h: "https://www.espn.com/watch/catalog/1adb983c-2b7f-357b-a2f7-986ddd95ffb7",
									},
								},
							},
							{
								l: {
									t: "Fixtures and bracket",
									w: {
										h: "/soccer/uefa-european-championship/story/4404465/euro-2020-bracket-and-fixtures-schedule",
									},
								},
							},
							{
								l: {
									t: "Live scores",
									w: { h: "/soccer/scoreboard/_/league/uefa.euro" },
								},
							},
							{
								l: {
									t: "Tables",
									w: {
										h: "/soccer/standings/_/league/UEFA.EURO/uefa-european-championship",
									},
								},
							},
							{
								l: { t: "Teams", w: { h: "/soccer/teams/_/league/uefa.euro" } },
							},
							{
								l: {
									t: "Squad lists",
									w: {
										h: "/soccer/uefa-european-championship/story/4390348/euro-2020-26-man-final-squad-lists-for-all-24-teams",
									},
								},
							},
							{
								l: {
									t: "Statistics",
									w: { h: "/soccer/stats/_/league/uefa.euro" },
								},
							},
							{
								l: {
									t: "European Soccer Pick'em",
									w: {
										h: "https://fantasy.espn.com/games/euro-soccer-pickem-2021/make-picks?addata=eurosoccerpickem2021_soccer_web_soccersubnav",
									},
								},
							},
							{
								l: {
									t: "VAR Watch",
									w: {
										h: "/soccer/uefa-european-championship/story/4404460/var-at-euro-2020-every-decision-reviewed",
									},
								},
							},
						],
					},
					{
						l: {
							t: "Copa America",
							w: { h: "/soccer/league/_/name/CONMEBOL.AMERICA" },
						},
						t: "Copa America",
						i: [
							{
								l: {
									t: "Copa America Home",
									w: { h: "/soccer/league/_/name/CONMEBOL.AMERICA" },
								},
							},
							{
								l: {
									t: "Teams",
									w: { h: "/soccer/teams/_/league/CONMEBOL.AMERICA" },
								},
							},
							{
								l: {
									t: "Fixtures and bracket",
									w: {
										h: "/soccer/copa-america/story/4404941/copa-america-bracket-and-fixtures-schedule",
									},
								},
							},
							{
								l: {
									t: "Live scores",
									w: { h: "/soccer/scoreboard/_/league/conmebol.america" },
								},
							},
							{
								l: {
									t: "Tables",
									w: { h: "/soccer/standings/_/league/CONMEBOL.AMERICA" },
								},
							},
							{
								l: {
									t: "Statistics",
									w: { h: "/soccer/stats/_/league/CONMEBOL.AMERICA" },
								},
							},
						],
					},
					{ l: { t: "Transfers", w: { h: "/soccer/transfers" } } },
					{
						l: { t: "USMNT", w: { h: "/soccer/team/_/id/660/united-states" } },
					},
					{
						l: {
							t: "USWNT",
							w: {
								h: "http://www.espn.com/soccer/team/_/id/2765/united-states",
							},
						},
					},
					{
						l: { t: "Teams", w: { h: "/football/teams" } },
						t: "Teams",
						i: [
							{
								l: {
									t: "Arsenal ",
									w: {
										a: { sport: "soccer", type: "team", teamId: "359" },
										h: "/soccer/team/_/id/359/arsenal",
									},
								},
							},
							{
								l: {
									t: "Chelsea",
									w: {
										a: { sport: "soccer", type: "team", teamId: "363" },
										h: "/soccer/team/_/id/363/chelsea",
									},
								},
							},
							{
								l: {
									t: "Liverpool",
									w: {
										a: { sport: "soccer", type: "team", teamId: "364" },
										h: "/soccer/team/_/id/364/liverpool",
									},
								},
							},
							{
								l: {
									t: "Manchester City",
									w: {
										a: { sport: "soccer", type: "team", teamId: "382" },
										h: "/soccer/team/_/id/382/manchester-city",
									},
								},
							},
							{
								l: {
									t: "Manchester United ",
									w: {
										a: { sport: "soccer", type: "team", teamId: "360" },
										h: "/soccer/team/_/id/360/Manchester-United/",
									},
								},
							},
							{
								l: {
									t: "Tottenham Hotspur",
									w: {
										a: { sport: "soccer", type: "team", teamId: "367" },
										h: "/soccer/team/_/id/367/tottenham-hotspur",
									},
								},
							},
							{
								l: {
									t: "Barcelona",
									w: {
										a: { sport: "soccer", type: "team", teamId: "83" },
										h: "/soccer/team/_/id/83/barcelona",
									},
								},
							},
							{
								l: {
									t: "Real Madrid",
									w: {
										a: { sport: "soccer", type: "team", teamId: "86" },
										h: "/soccer/team/_/id/86/",
									},
								},
							},
							{
								l: {
									t: "Bayern Munich",
									w: {
										a: { sport: "soccer", type: "team", teamId: "132" },
										h: "/soccer/team/_/id/132/",
									},
								},
							},
							{
								l: {
									t: "Borussia Dortmund",
									w: {
										a: { sport: "soccer", type: "team", teamId: "124" },
										h: "/soccer/team/_/id/124/",
									},
								},
							},
							{
								l: {
									t: "Juventus",
									w: {
										a: { sport: "soccer", type: "team", teamId: "111" },
										h: "/soccer/team/_/id/111/",
									},
								},
							},
							{
								l: {
									t: "PSG",
									w: {
										a: { sport: "soccer", type: "team", teamId: "160" },
										h: "/soccer/team/_/id/160/",
									},
								},
							},
							{ l: { t: "See more teams", w: { h: "/soccer/teams" } } },
						],
					},
					{
						t: "More",
						l: {
							t: "More",
							w: {
								a: { placeholder: "more", breakpoints: "mobile" },
								h: "http://www.espn.com",
							},
						},
						i: [
							{
								l: { t: "Leagues & Cups", w: { h: "/soccer/competitions" } },
								t: "Leagues & Cups",
								i: [
									{
										l: {
											t: "Premier League",
											w: { h: "/soccer/league/_/name/eng.1" },
										},
									},
									{
										l: {
											t: "Major League Soccer",
											w: { h: "/soccer/league/_/name/usa.1/" },
										},
									},
									{
										l: {
											t: "Champions League",
											w: { h: "/soccer/league/_/name/uefa.champions" },
										},
									},
									{
										l: {
											t: "Europa League",
											w: { h: "/soccer/league/_/name/uefa.europa" },
										},
									},
									{
										l: {
											t: "Serie A",
											w: { h: "/soccer/league/_/name/ita.1" },
										},
									},
									{
										l: {
											t: "La Liga",
											w: { h: "/soccer/league/_/name/esp.1" },
										},
									},
									{
										l: {
											t: "Bundesliga",
											w: { h: "/soccer/league/_/name/ger.1" },
										},
									},
									{
										l: {
											t: "Euro 2020",
											w: { h: "/soccer/league/_/name/UEFA.EURO" },
										},
									},
									{
										l: {
											t: "Liga MX",
											w: { h: "/soccer/league/_/name/mex.1/" },
										},
									},
									{
										l: {
											t: "NWSL",
											w: { h: "/soccer/league/_/name/USA.NWSL" },
										},
									},
									{
										l: {
											t: "Women's Champions League",
											w: { h: "/soccer/league/_/name/UEFA.WCHAMPIONS" },
										},
									},
									{
										l: {
											t: "See more leagues",
											w: { h: "http://www.espn.com/soccer/competitions" },
										},
									},
								],
							},
							{
								l: { t: "Tables", w: { h: "/soccer/table/_/league/eng.1" } },
								t: "Tables",
								i: [
									{
										l: {
											t: "Premier League",
											w: { h: "/soccer/table/_/league/eng.1" },
										},
									},
									{
										l: {
											t: "Major League Soccer",
											w: {
												a: { route: "false" },
												h: "https://www.espn.com/soccer/standings/_/league/usa.1",
											},
										},
									},
									{
										l: {
											t: "La Liga",
											w: { h: "/soccer/table/_/league/esp.1" },
										},
									},
									{
										l: {
											t: "Champions League",
											w: { h: "/soccer/table/_/league/uefa.champions" },
										},
									},
									{
										l: {
											t: "Europa League",
											w: { h: "/soccer/table/_/league/uefa.europa" },
										},
									},
									{
										l: {
											t: "Ligue 1 ",
											w: { h: "/soccer/table/_/league/fra.1" },
										},
									},
									{
										l: {
											t: "Serie A",
											w: { h: "/soccer/table/_/league/ita.1" },
										},
									},
									{
										l: {
											t: "Bundesliga",
											w: { h: "/soccer/table/_/league/ger.1" },
										},
									},
									{
										l: {
											t: "Liga MX",
											w: { h: "/soccer/table/_/league/mex.1" },
										},
									},
									{
										l: {
											t: "See more tables",
											w: { h: "/soccer/competitions" },
										},
									},
								],
							},
							{
								l: {
									t: "European Soccer Pick 'em",
									w: {
										h: "https://fantasy.espn.com/games/euro-soccer-pickem-2021/make-picks?addata=eurosoccerpickem2021_soccer_web_soccersubnav",
									},
								},
							},
							{
								l: {
									t: "PickCenter",
									w: {
										p: true,
										h: "http://www.espn.com/insider/pickcenter/index?sport=soccer",
									},
								},
							},
							{
								l: {
									t: "Tickets",
									w: {
										e: true,
										h: "https://www.vividseats.com/sports/soccer/?wsUser=717&wsVar=soccersubnav",
									},
								},
							},
						],
					},
				],
				isPremium: false,
			},
			headerscoreboard: {
				isTopEvents: false,
				isTopSoccer: false,
				sportTopics: [
					{
						league: "topEvents",
						sportId: 0,
						displayName: "Top Events",
						slug: "topevents",
					},
					{
						league: "nba",
						sport: "basketball",
						sportId: 46,
						displayName: "NBA",
						href: "https://www.espn.com/nba/scoreboard",
						linkText: "Full Scoreboard &#187;",
						top25Only: true,
						slug: "nba",
					},
					{
						league: "uefa.euro",
						sport: "soccer",
						sportId: 781,
						displayName: "European Championship",
						href: "http://www.espnfc.com/scores?cc=5901",
						linkText: "Full Scoreboard &#187;",
						top25Only: true,
						slug: "uefa.euro",
					},
					{
						league: "conmebol.america",
						sport: "soccer",
						sportId: 780,
						displayName: "Copa America",
						href: "http://www.espn.com/soccer/scoreboard",
						linkText: "Full Scoreboard &#187;",
						top25Only: true,
						slug: "conmebol.america",
					},
					{
						league: "nhl",
						sport: "hockey",
						sportId: 90,
						displayName: "NHL",
						href: "https://www.espn.com/nhl/scoreboard",
						linkText: "Full Scoreboard &#187;",
						top25Only: true,
						slug: "nhl",
					},
					{
						league: "mlb",
						sport: "baseball",
						sportId: 10,
						displayName: "MLB",
						href: "https://www.espn.com/mlb/scoreboard",
						linkText: "Full Scoreboard &#187;",
						top25Only: true,
						slug: "mlb",
					},
					{
						league: "pga",
						sport: "golf",
						sportId: 1106,
						displayName: "Golf ",
						href: "https://www.espn.com/golf/leaderboard",
						linkText: "Full Leaderboard &#187;",
						top25Only: true,
						slug: "pga",
					},
					{
						league: "nascar-premier",
						sport: "racing",
						sportId: 2021,
						displayName: "NASCAR",
						href: "http://www.espn.com/racing/schedule",
						linkText: "Full results &#187;",
						top25Only: true,
						slug: "nascar-premier",
					},
					{
						league: "ufc",
						sport: "mma",
						sportId: 3321,
						displayName: "UFC",
						href: "https://www.espn.com/mma/fightcenter",
						linkText: "Fightcenter &#187;",
						top25Only: true,
						slug: "ufc",
					},
					{
						league: "usa.1",
						sport: "soccer",
						sportId: 770,
						displayName: "MLS",
						href: "https://www.espn.com/soccer/scoreboard",
						linkText: "Full Scoreboard &#187;",
						top25Only: true,
						slug: "usa.1",
					},
					{
						league: "wnba",
						sport: "basketball",
						sportId: 59,
						displayName: "WNBA",
						href: "https://www.espn.com/wnba/scoreboard",
						linkText: "Full Scoreboard &#187;",
						top25Only: true,
						slug: "wnba",
					},
					{
						league: "college-baseball",
						sport: "baseball",
						sportId: 14,
						displayName: "NCAA Baseball",
						href: "http://www.espn.com/extra/baseball/cws/scoreboard",
						linkText: "Full Scoreboard &#187;",
						top25Only: true,
						slug: "college-baseball",
					},
					{
						league: "topSoccer",
						sportId: 0,
						displayName: "Top Soccer",
						href: "/soccer/scoreboard",
						linkText: "Full Scoreboard &#187;",
						slug: "topsoccer",
					},
					{
						league: "atp",
						sport: "tennis",
						sportId: 851,
						displayName: "Tennis (M)",
						href: "http://www.espn.com/tennis/dailyResults",
						linkText: "Full Results &#187;",
						top25Only: true,
						slug: "atp",
					},
					{
						league: "wta",
						sport: "tennis",
						sportId: 900,
						displayName: "Tennis (W)",
						href: "http://www.espn.com/tennis/dailyResults",
						linkText: "Full Results &#187;",
						top25Only: true,
						slug: "wta",
					},
					{
						league: "f1",
						sport: "racing",
						sportId: 2030,
						displayName: "F1",
						href: "https://www.espn.com/f1/schedule",
						linkText: "Full results &#187;",
						top25Only: true,
						slug: "f1",
					},
				],
				collegeConfs: null,
			},
			streampicker: {},
			standings: {
				leagueId: "15",
				news: {
					header: "LaLiga News",
					link: "/soccer/league/_/name/ESP.1",
					text: "All LaLiga News",
					articles: [
						{
							headline:
								"Nothing is certain for Messi's contract 'until the ink is dry'",
							description:
								"Gab and Juls expect Lionel Messi to remain at Barcelona, but warn nothing is guaranteed yet.",
							link: "/video/clip/_/id/31737215",
							image:
								"https://a.espncdn.com/combiner/i?img=/media/motion/ESPNi/2021/0630/int_210630_Nothing_is_certain_for_Messis_contract_until_the_ink_is_dry/int_210630_Nothing_is_certain_for_Messis_contract_until_the_ink_is_dry.jpg&h=120",
							images: [
								{
									src: "https://a.espncdn.com/combiner/i?img=/media/motion/ESPNi/2021/0630/int_210630_Nothing_is_certain_for_Messis_contract_until_the_ink_is_dry/int_210630_Nothing_is_certain_for_Messis_contract_until_the_ink_is_dry.jpg&h=120",
									alt: "Nothing is certain for Messi's contract 'until the ink is dry'",
								},
							],
						},
						{
							headline:
								"What is holding up the Messi-Barcelona contract negotiations?",
							description:
								"Gemma Soler joins ESPN FC to talk the latest surrounding Lionel Messi's contract renewal at Barcelona.",
							link: "/video/clip/_/id/31721506",
							image:
								"https://a.espncdn.com/combiner/i?img=/media/motion/ESPNi/2021/0627/int_210627_fc_lionel_messi_contract_latest/int_210627_fc_lionel_messi_contract_latest.jpg&h=120",
							images: [
								{
									src: "https://a.espncdn.com/combiner/i?img=/media/motion/ESPNi/2021/0627/int_210627_fc_lionel_messi_contract_latest/int_210627_fc_lionel_messi_contract_latest.jpg&h=120",
									alt: "What is holding up the Messi-Barcelona contract negotiations?",
								},
							],
						},
						{
							headline:
								"Pablo Zabaleta offers verdict on Lionel Messi's Barca future",
							description:
								"Pablo Zabaleta sheds some light on whether or not Lionel Messi will stay at Barcelona next season.",
							link: "/video/clip/_/id/31702406",
							image:
								"https://a.espncdn.com/combiner/i?img=/media/motion/ESPNi/2021/0624/int_210624_inet_fc_zabaleta_on_messi/int_210624_inet_fc_zabaleta_on_messi.jpg&h=120",
							images: [
								{
									src: "https://a.espncdn.com/combiner/i?img=/media/motion/ESPNi/2021/0624/int_210624_inet_fc_zabaleta_on_messi/int_210624_inet_fc_zabaleta_on_messi.jpg&h=120",
									alt: "Pablo Zabaleta offers verdict on Lionel Messi's Barca future",
								},
							],
						},
					],
				},
				groups: {
					headers: {
						wins: { t: "wins", d: "Wins", a: "W", i: 0 },
						losses: { t: "losses", d: "Losses", a: "L", i: 1 },
						ties: { t: "ties", d: "Draws", a: "D", i: 2 },
						gamesplayed: { t: "gamesplayed", d: "Games Played", a: "GP", i: 3 },
						pointsfor: { t: "pointsfor", d: "Goals For", a: "F", i: 4 },
						pointsagainst: {
							t: "pointsagainst",
							d: "Goals Against",
							a: "A",
							i: 5,
						},
						points: { t: "points", d: "Points", a: "P", i: 6 },
						rankchange: {
							t: "rankchange",
							d: "Rank Change",
							a: "Rank Change",
							i: 7,
						},
						rank: { t: "rank", d: "Rank", a: "Rank", i: 8 },
						pointdifferential: {
							t: "pointdifferential",
							d: "Goal Difference",
							a: "GD",
							i: 9,
						},
						deductions: {
							t: "deductions",
							d: "Point Deductions",
							a: "Deductions",
							i: 10,
						},
						ppg: { t: "ppg", d: "Points Per Game", a: "PPG", i: 11 },
						total: { t: "total", d: "Overall Record", a: "OVER", i: 12 },
					},
					groups: [
						{
							name: "2021-22 LaLiga",
							abbreviation: "2021-2022",
							standings: [
								{
									team: {
										id: "96",
										abbrev: "ALV",
										displayName: "Alavés",
										shortDisplayName: "Alavés",
										logo: "https://a.espncdn.com/i/teamlogos/soccer/500/96.png",
										uid: "s:600~t:96",
										recordSummary: "",
										standingSummary: "",
										location: "Alavés",
										links: "/soccer/team/_/id/96/alaves",
									},
									stats: [
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"1",
										"0",
										"",
										"0",
										"0-0-0",
									],
									note: {
										color: "#81D6AC",
										description: "Champions League",
										rank: 1,
									},
								},
								{
									team: {
										id: "93",
										abbrev: "ATH",
										displayName: "Athletic Bilbao",
										shortDisplayName: "Athletic Bilbao",
										logo: "https://a.espncdn.com/i/teamlogos/soccer/500/93.png",
										uid: "s:600~t:93",
										recordSummary: "",
										standingSummary: "",
										location: "Athletic Bilbao",
										links: "/soccer/team/_/id/93/athletic-bilbao",
									},
									stats: [
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"2",
										"0",
										"",
										"0",
										"0-0-0",
									],
									note: {
										color: "#81D6AC",
										description: "Champions League",
										rank: 2,
									},
								},
								{
									team: {
										id: "1068",
										abbrev: "ATL",
										displayName: "Atletico Madrid",
										shortDisplayName: "Atletico Madrid",
										logo: "https://a.espncdn.com/i/teamlogos/soccer/500/1068.png",
										uid: "s:600~t:1068",
										recordSummary: "",
										standingSummary: "",
										location: "Atletico Madrid",
										links: "/soccer/team/_/id/1068/atletico-madrid",
									},
									stats: [
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"3",
										"0",
										"",
										"0",
										"0-0-0",
									],
									note: {
										color: "#81D6AC",
										description: "Champions League",
										rank: 3,
									},
								},
								{
									team: {
										id: "83",
										abbrev: "BAR",
										displayName: "Barcelona",
										shortDisplayName: "Barcelona",
										logo: "https://a.espncdn.com/i/teamlogos/soccer/500/83.png",
										uid: "s:600~t:83",
										recordSummary: "",
										standingSummary: "",
										location: "Barcelona",
										links: "/soccer/team/_/id/83/barcelona",
									},
									stats: [
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"4",
										"0",
										"",
										"0",
										"0-0-0",
									],
									note: {
										color: "#81D6AC",
										description: "Champions League",
										rank: 4,
									},
								},
								{
									team: {
										id: "85",
										abbrev: "CEL",
										displayName: "Celta Vigo",
										shortDisplayName: "Celta Vigo",
										logo: "https://a.espncdn.com/i/teamlogos/soccer/500/85.png",
										uid: "s:600~t:85",
										recordSummary: "",
										standingSummary: "",
										location: "Celta Vigo",
										links: "/soccer/team/_/id/85/celta-vigo",
									},
									stats: [
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"5",
										"0",
										"",
										"0",
										"0-0-0",
									],
									note: {
										color: "#B2BFD0",
										description: "Europa League",
										rank: 5,
									},
								},
								{
									team: {
										id: "3842",
										abbrev: "CAD",
										displayName: "Cádiz",
										shortDisplayName: "Cádiz",
										logo: "https://a.espncdn.com/i/teamlogos/soccer/500/3842.png",
										uid: "s:600~t:3842",
										recordSummary: "",
										standingSummary: "",
										location: "Cádiz",
										links: "/soccer/team/_/id/3842/cadiz",
									},
									stats: [
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"6",
										"0",
										"",
										"0",
										"0-0-0",
									],
									note: {
										color: "#B2BFD0",
										description: "Europa League",
										rank: 6,
									},
								},
								{
									team: {
										id: "3751",
										abbrev: "ELC",
										displayName: "Elche",
										shortDisplayName: "Elche",
										logo: "https://a.espncdn.com/i/teamlogos/soccer/500/3751.png",
										uid: "s:600~t:3751",
										recordSummary: "",
										standingSummary: "",
										location: "Elche",
										links: "/soccer/team/_/id/3751/elche",
									},
									stats: [
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"7",
										"0",
										"",
										"0",
										"0-0-0",
									],
									note: {
										color: "#81D6AC",
										description: "Champions League",
										rank: 7,
									},
								},
								{
									team: {
										id: "88",
										abbrev: "ESP",
										displayName: "Espanyol",
										shortDisplayName: "Espanyol",
										logo: "https://a.espncdn.com/i/teamlogos/soccer/500/88.png",
										uid: "s:600~t:88",
										recordSummary: "",
										standingSummary: "",
										location: "Espanyol",
										links: "/soccer/team/_/id/88/espanyol",
									},
									stats: [
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"8",
										"0",
										"",
										"0",
										"0-0-0",
									],
								},
								{
									team: {
										id: "2922",
										abbrev: "GET",
										displayName: "Getafe",
										shortDisplayName: "Getafe",
										logo: "https://a.espncdn.com/i/teamlogos/soccer/500/2922.png",
										uid: "s:600~t:2922",
										recordSummary: "",
										standingSummary: "",
										location: "Getafe",
										links: "/soccer/team/_/id/2922/getafe",
									},
									stats: [
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"9",
										"0",
										"",
										"0",
										"0-0-0",
									],
								},
								{
									team: {
										id: "3747",
										abbrev: "GCF",
										displayName: "Granada",
										shortDisplayName: "Granada",
										logo: "https://a.espncdn.com/i/teamlogos/soccer/500/3747.png",
										uid: "s:600~t:3747",
										recordSummary: "",
										standingSummary: "",
										location: "Granada",
										links: "/soccer/team/_/id/3747/granada",
									},
									stats: [
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"10",
										"0",
										"",
										"0",
										"0-0-0",
									],
								},
								{
									team: {
										id: "1538",
										abbrev: "LEV",
										displayName: "Levante",
										shortDisplayName: "Levante",
										logo: "https://a.espncdn.com/i/teamlogos/soccer/500/1538.png",
										uid: "s:600~t:1538",
										recordSummary: "",
										standingSummary: "",
										location: "Levante",
										links: "/soccer/team/_/id/1538/levante",
									},
									stats: [
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"11",
										"0",
										"",
										"0",
										"0-0-0",
									],
								},
								{
									team: {
										id: "84",
										abbrev: "MAL",
										displayName: "Mallorca",
										shortDisplayName: "Mallorca",
										logo: "https://a.espncdn.com/i/teamlogos/soccer/500/84.png",
										uid: "s:600~t:84",
										recordSummary: "",
										standingSummary: "",
										location: "Mallorca",
										links: "/soccer/team/_/id/84/mallorca",
									},
									stats: [
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"12",
										"0",
										"",
										"0",
										"0-0-0",
									],
								},
								{
									team: {
										id: "97",
										abbrev: "OSA",
										displayName: "Osasuna",
										shortDisplayName: "Osasuna",
										logo: "https://a.espncdn.com/i/teamlogos/soccer/500/97.png",
										uid: "s:600~t:97",
										recordSummary: "",
										standingSummary: "",
										location: "Osasuna",
										links: "/soccer/team/_/id/97/osasuna",
									},
									stats: [
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"13",
										"0",
										"",
										"0",
										"0-0-0",
									],
								},
								{
									team: {
										id: "101",
										abbrev: "RAY",
										displayName: "Rayo Vallecano",
										shortDisplayName: "Rayo Vallecano",
										logo: "https://a.espncdn.com/i/teamlogos/soccer/500/101.png",
										uid: "s:600~t:101",
										recordSummary: "",
										standingSummary: "",
										location: "Rayo Vallecano",
										links: "/soccer/team/_/id/101/rayo-vallecano",
									},
									stats: [
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"14",
										"0",
										"",
										"0",
										"0-0-0",
									],
								},
								{
									team: {
										id: "244",
										abbrev: "BET",
										displayName: "Real Betis",
										shortDisplayName: "Real Betis",
										logo: "https://a.espncdn.com/i/teamlogos/soccer/500/244.png",
										uid: "s:600~t:244",
										recordSummary: "",
										standingSummary: "",
										location: "Real Betis",
										links: "/soccer/team/_/id/244/real-betis",
									},
									stats: [
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"15",
										"0",
										"",
										"0",
										"0-0-0",
									],
								},
								{
									team: {
										id: "86",
										abbrev: "MAD",
										displayName: "Real Madrid",
										shortDisplayName: "Real Madrid",
										logo: "https://a.espncdn.com/i/teamlogos/soccer/500/86.png",
										uid: "s:600~t:86",
										recordSummary: "",
										standingSummary: "",
										location: "Real Madrid",
										links: "/soccer/team/_/id/86/real-madrid",
									},
									stats: [
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"16",
										"0",
										"",
										"0",
										"0-0-0",
									],
								},
								{
									team: {
										id: "89",
										abbrev: "RSO",
										displayName: "Real Sociedad",
										shortDisplayName: "Real Sociedad",
										logo: "https://a.espncdn.com/i/teamlogos/soccer/500/89.png",
										uid: "s:600~t:89",
										recordSummary: "",
										standingSummary: "",
										location: "Real Sociedad",
										links: "/soccer/team/_/id/89/real-sociedad",
									},
									stats: [
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"17",
										"0",
										"",
										"0",
										"0-0-0",
									],
								},
								{
									team: {
										id: "243",
										abbrev: "SEV",
										displayName: "Sevilla FC",
										shortDisplayName: "Sevilla FC",
										logo: "https://a.espncdn.com/i/teamlogos/soccer/500/243.png",
										uid: "s:600~t:243",
										recordSummary: "",
										standingSummary: "",
										location: "Sevilla FC",
										links: "/soccer/team/_/id/243/sevilla-fc",
									},
									stats: [
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"18",
										"0",
										"",
										"0",
										"0-0-0",
									],
									note: {
										color: "#FF7F84",
										description: "Relegation",
										rank: 18,
									},
								},
								{
									team: {
										id: "94",
										abbrev: "VAL",
										displayName: "Valencia",
										shortDisplayName: "Valencia",
										logo: "https://a.espncdn.com/i/teamlogos/soccer/500/94.png",
										uid: "s:600~t:94",
										recordSummary: "",
										standingSummary: "",
										location: "Valencia",
										links: "/soccer/team/_/id/94/valencia",
									},
									stats: [
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"19",
										"0",
										"",
										"0",
										"0-0-0",
									],
									note: {
										color: "#FF7F84",
										description: "Relegation",
										rank: 19,
									},
								},
								{
									team: {
										id: "102",
										abbrev: "VILL",
										displayName: "Villarreal",
										shortDisplayName: "Villarreal",
										logo: "https://a.espncdn.com/i/teamlogos/soccer/500/102.png",
										uid: "s:600~t:102",
										recordSummary: "",
										standingSummary: "",
										location: "Villarreal",
										links: "/soccer/team/_/id/102/villarreal",
									},
									stats: [
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"0",
										"20",
										"0",
										"",
										"0",
										"0-0-0",
									],
									note: {
										color: "#FF7F84",
										description: "Relegation",
										rank: 20,
									},
								},
							],
							notes: [
								"Positions 1, 2, 3, 4, 7: Champions League",
								"Positions 5, 6: Europa League",
								"Positions 18, 19, 20: Relegation",
							],
						},
					],
				},
				requestedDates: { season: 2021, seasontype: 1 },
				seasons: [
					{
						year: 2021,
						label: "2021-22",
						standingsByType: { 1: true, "2021-22 LaLiga": true },
						hasStandings: true,
					},
					{
						year: 2020,
						label: "2020-21",
						standingsByType: { 1: true, "2020-21 LaLiga": true },
						hasStandings: true,
					},
					{
						year: 2019,
						label: "2019-20",
						standingsByType: { 1: true, "2019-20 LaLiga": true },
						hasStandings: true,
					},
					{
						year: 2018,
						label: "2018-19",
						standingsByType: { 1: true, "2018-19 Spanish Primera": true },
						hasStandings: true,
					},
					{
						year: 2017,
						label: "2017-18",
						standingsByType: { 1: true, "2017-18": true },
						hasStandings: true,
					},
					{
						year: 2016,
						label: "2016-17",
						standingsByType: { 1: true, "2016-17": true },
						hasStandings: true,
					},
					{
						year: 2015,
						label: "2015-16",
						standingsByType: { 1: true, "2015-16": true },
						hasStandings: true,
					},
					{
						year: 2014,
						label: "2014-15",
						standingsByType: { 1: true, "2014-15": true },
						hasStandings: true,
					},
					{
						year: 2013,
						label: "2013-14",
						standingsByType: { 1: true, "2013-14": true },
						hasStandings: true,
					},
					{
						year: 2012,
						label: "2012-13",
						standingsByType: { 1: true, "2012-13": true },
						hasStandings: true,
					},
					{
						year: 2011,
						label: "2011-12",
						standingsByType: { 1: true, "2011-12": true },
						hasStandings: true,
					},
					{
						year: 2010,
						label: "2010-11",
						standingsByType: { 1: true, "2010-11": true },
						hasStandings: true,
					},
					{
						year: 2009,
						label: "2009-10",
						standingsByType: { 1: true, "2009-10": true },
						hasStandings: true,
					},
					{
						year: 2008,
						label: "2008-09",
						standingsByType: { 1: true, "2008-09": true },
						hasStandings: true,
					},
					{
						year: 2007,
						label: "2007-08",
						standingsByType: { 1: true, "2007-08": true },
						hasStandings: true,
					},
					{
						year: 2006,
						label: "2006-07",
						standingsByType: { 1: true, "2006-07": true },
						hasStandings: true,
					},
					{
						year: 2005,
						label: "2005-06",
						standingsByType: { 1: true, "2005-06": true },
						hasStandings: true,
					},
					{
						year: 2004,
						label: "2004-05",
						standingsByType: { 1: true, "2004-05": true },
						hasStandings: true,
					},
					{
						year: 2003,
						label: "2003-04",
						standingsByType: { 1: true, "2003-04": true },
						hasStandings: true,
					},
				],
				leagues: [
					{
						id: "concacaf.gold",
						name: "CONCACAF Gold Cup",
						abbreviation: "Gold",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "uefa.euro",
						name: "UEFA European Championship",
						abbreviation: "EURO",
						season: { type: { id: "3", hasStandings: false } },
					},
					{
						id: "conmebol.america",
						name: "Copa America",
						abbreviation: "Copa Am",
						season: { type: { id: "2", hasStandings: false } },
					},
					{
						id: "usa.1",
						name: "Major League Soccer",
						abbreviation: "MLS",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "usa.nwsl",
						name: "United States NWSL",
						abbreviation: "NWSL",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "mex.1",
						name: "Mexican Liga BBVA MX",
						abbreviation: "Prim",
						season: { type: { id: "6", hasStandings: true } },
					},
					{
						id: "uefa.champions",
						name: "UEFA Champions League",
						abbreviation: "UCL",
						season: { type: { id: "5", hasStandings: false } },
					},
					{
						id: "uefa.europa",
						name: "UEFA Europa League",
						abbreviation: "Europa",
						season: { type: { id: "6", hasStandings: false } },
					},
					{
						id: "eng.1",
						name: "English Premier League",
						abbreviation: "Prem",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "ita.1",
						name: "Italian Serie A",
						abbreviation: "Serie A",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "ger.1",
						name: "German Bundesliga",
						abbreviation: "Bund",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "esp.1",
						name: "Spanish Primera División",
						abbreviation: "LaLiga",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "fra.1",
						name: "French Ligue 1",
						abbreviation: "Ligue 1",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "eng.2",
						name: "English League Championship",
						abbreviation: "LC",
						season: { type: { id: "3", hasStandings: false } },
					},
					{
						id: "mex.copa_mx",
						name: "Mexican Copa MX",
						abbreviation: "Copa Mex",
						season: { type: { id: "10", hasStandings: false } },
					},
					{
						id: "ned.1",
						name: "Dutch Eredivisie",
						abbreviation: "Erediv",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "por.1",
						name: "Portuguese Liga",
						abbreviation: "Liga",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "rus.1",
						name: "Russian Premier League",
						abbreviation: "Prem",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "sco.1",
						name: "Scottish Premiership",
						abbreviation: "SPFL",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "chn.1",
						name: "Chinese Super League",
						abbreviation: "Chinese Super League",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "aus.1",
						name: "Australian A-League",
						abbreviation: "A Lge",
						season: { type: { id: "4", hasStandings: false } },
					},
					{
						id: "afc.champions",
						name: "AFC Champions League",
						abbreviation: "AFC CL",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "usa.usl.1",
						name: "USL Championship",
						abbreviation: "USL",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "usa.usl.l1",
						name: "USL League One",
						abbreviation: "USL1",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "mex.2",
						name: "Mexican Liga de Expansión MX",
						abbreviation: "Prim A",
						season: { type: { id: "11", hasStandings: false } },
					},
					{
						id: "fifa.world",
						name: "FIFA World Cup",
						abbreviation: "WC",
						season: { type: { id: "6", hasStandings: false } },
					},
					{
						id: "fifa.worldq.concacaf",
						name: "FIFA World Cup Qualifying - CONCACAF",
						abbreviation: "WCQ",
						season: { type: { id: "2", hasStandings: false } },
					},
					{
						id: "fifa.worldq.uefa",
						name: "FIFA World Cup Qualifying - UEFA",
						abbreviation: "WCQ",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "fifa.worldq.caf",
						name: "FIFA World Cup Qualifying - CAF",
						abbreviation: "WCQ",
						season: { type: { id: "2", hasStandings: true } },
					},
					{
						id: "fifa.worldq.conmebol",
						name: "FIFA World Cup Qualifying - CONMEBOL",
						abbreviation: "WCQ",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "fifa.worldq.afc",
						name: "FIFA World Cup Qualifying - AFC",
						abbreviation: "WCQ",
						season: { type: { id: "3", hasStandings: true } },
					},
					{
						id: "fifa.worldq.ofc",
						name: "FIFA World Cup Qualifying - OFC",
						abbreviation: "WCQ",
						season: { type: { id: "4", hasStandings: false } },
					},
					{
						id: "fifa.wwc",
						name: "FIFA Women's World Cup",
						abbreviation: "WWC",
						season: { type: { id: "6", hasStandings: false } },
					},
					{
						id: "concacaf.nations.league",
						name: "CONCACAF Nations League",
						abbreviation: "CONF NL",
						season: { type: { id: "6", hasStandings: false } },
					},
					{
						id: "concacaf.nations.league_qual",
						name: "CONCACAF Nations League Qualifying",
						abbreviation: "CONF NL",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "uefa.euroq",
						name: "UEFA European Championship Qualifying",
						abbreviation: "ECQ",
						season: { type: { id: "3", hasStandings: false } },
					},
					{
						id: "uefa.nations",
						name: "UEFA Nations League",
						abbreviation: "UEFA Nations",
						season: { type: { id: "2", hasStandings: false } },
					},
					{
						id: "afc.cup",
						name: "AFC Asian Cup",
						abbreviation: "AFC Cup",
						season: { type: { id: "5", hasStandings: false } },
					},
					{
						id: "afc.cupq",
						name: "AFC Asian Cup Qualifiers",
						abbreviation: "AFC Cup Q",
						season: { type: { id: "1", hasStandings: false } },
					},
					{
						id: "caf.nations_qual",
						name: "Africa Cup of Nations qualifying",
						season: { type: { id: "2", hasStandings: true } },
					},
					{
						id: "caf.nations",
						name: "Africa Cup of Nations",
						abbreviation: "ANC",
						season: { type: { id: "6", hasStandings: false } },
					},
					{
						id: "caf.championship",
						name: "Africa Nations Championship",
						abbreviation: "ANChamp",
						season: { type: { id: "5", hasStandings: false } },
					},
					{
						id: "fifa.shebelieves",
						name: "SheBelieves Cup",
						abbreviation: "SBC",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "fifa.confederations",
						name: "FIFA Confederations Cup",
						abbreviation: "Conf",
						season: { type: { id: "4", hasStandings: false } },
					},
					{
						id: "bel.1",
						name: "Belgian First Division A",
						abbreviation: "Belgian First Division A",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "aut.1",
						name: "Austrian Bundesliga",
						abbreviation: "Bund",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "tur.1",
						name: "Turkish Super Lig",
						abbreviation: "Super",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "gre.1",
						name: "Greek Super League",
						abbreviation: "Super",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "sui.1",
						name: "Swiss Super League",
						abbreviation: "Super",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "global.champs_cup",
						name: "International Champions Cup",
						abbreviation: "Champions Cup",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "fifa.w.olympics",
						name: "Women's Olympic Tournament",
						abbreviation: "Oly",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "fifa.olympics",
						name: "Men's Olympic Tournament",
						abbreviation: "Oly",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "fifa.conmebol.olympicsq",
						name: "CONMEBOL Pre-Olympic Tournament",
						abbreviation: "CPT",
						season: { type: { id: "2", hasStandings: true } },
					},
					{
						id: "fifa.concacaf.olympicsq",
						name: "CONCACAF Men's Olympic Qualifying",
						abbreviation: "Oly Q",
						season: { type: { id: "3", hasStandings: false } },
					},
					{
						id: "fifa.w.concacaf.olympicsq",
						name: "CONCACAF Women's Olympic Qualifying Tournament",
						abbreviation: "Oly Q",
						season: { type: { id: "4", hasStandings: false } },
					},
					{
						id: "fifa.world.u17",
						name: "FIFA Under-17 World Cup",
						abbreviation: "WC U17",
						season: { type: { id: "6", hasStandings: false } },
					},
					{
						id: "concacaf.womens.championship",
						name: "CONCACAF Women's Championship",
						season: { type: { id: "4", hasStandings: false } },
					},
					{
						id: "fifa.world.u20",
						name: "FIFA Under-20 World Cup",
						abbreviation: "WC U20",
						season: { type: { id: "6", hasStandings: false } },
					},
					{
						id: "global.toulon",
						name: "Toulon Tournament",
						abbreviation: "TLT",
						season: { type: { id: "5", hasStandings: false } },
					},
					{
						id: "uefa.euro_u21",
						name: "UEFA European Under-21 Championship",
						abbreviation: "UEFA U21",
						season: { type: { id: "4", hasStandings: false } },
					},
					{
						id: "uefa.euro_u21_qual",
						name: "UEFA European Under-21 Championship Qualifying",
						abbreviation: "UEFA European Under-21 Championship Qualifying",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "uefa.euro.u19",
						name: "UEFA European Under-19 Championship",
						abbreviation: "UEFA U19",
						season: { type: { id: "3", hasStandings: false } },
					},
					{
						id: "uefa.weuro",
						name: "UEFA Women's European Championship",
						season: { type: { id: "4", hasStandings: false } },
					},
					{
						id: "eng.w.1",
						name: "FA Women's Super League",
						abbreviation: "WSL",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "eng.trophy",
						name: "English EFL Trophy",
						abbreviation: "EFL",
						season: { type: { id: "6", hasStandings: false } },
					},
					{
						id: "eng.5",
						name: "English National League",
						abbreviation: "Conf",
						season: { type: { id: "4", hasStandings: false } },
					},
					{
						id: "eng.3",
						name: "English League One",
						abbreviation: "L1",
						season: { type: { id: "3", hasStandings: false } },
					},
					{
						id: "eng.4",
						name: "English League Two",
						abbreviation: "L2",
						season: { type: { id: "3", hasStandings: false } },
					},
					{
						id: "sco.cis",
						name: "Scottish League Cup",
						abbreviation: "LC",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "sco.3",
						name: "Scottish League One",
						abbreviation: "SCO 1",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "sco.2",
						name: "Scottish Championship",
						abbreviation: "SCO C",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "sco.4",
						name: "Scottish League Two",
						abbreviation: "SCO 2",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "esp.2",
						name: "Spanish Segunda División",
						abbreviation: "Seg",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "ger.2",
						name: "German 2. Bundesliga",
						abbreviation: "Bund 2",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "ita.2",
						name: "Italian Serie B",
						abbreviation: "Serie B",
						season: { type: { id: "4", hasStandings: false } },
					},
					{
						id: "fra.2",
						name: "French Ligue 2",
						abbreviation: "Ligue 2",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "ned.2",
						name: "Dutch Keuken Kampioen Divisie",
						abbreviation: "Eerste",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "ned.w.1",
						name: "Dutch Vrouwen Eredivisie",
						abbreviation: "Dutch Vrouwen Eredivisie",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "swe.1",
						name: "Swedish Allsvenskanliga",
						abbreviation: "Alls",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "den.1",
						name: "Danish SAS-Ligaen",
						abbreviation: "SAS Lig",
						season: { type: { id: "4", hasStandings: false } },
					},
					{
						id: "ned.3",
						name: "Dutch Tweede Divisie",
						abbreviation: "NED",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "rou.1",
						name: "Romanian Liga 1",
						abbreviation: "ROM FD",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "nor.1",
						name: "Norwegian Eliteserien",
						abbreviation: "Tip",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "mlt.1",
						name: "Maltese Premier League",
						abbreviation: "MLT FD",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "isr.1",
						name: "Israeli Premier League",
						abbreviation: "ISR PL",
						season: { type: { id: "2", hasStandings: true } },
					},
					{
						id: "irl.1",
						name: "Irish Premier Division",
						abbreviation: "Ire",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "wal.1",
						name: "Welsh Premier League",
						abbreviation: "Prem",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "nir.1",
						name: "Northern Irish Premiership",
						abbreviation: "Prem",
						season: { type: { id: "4", hasStandings: false } },
					},
					{
						id: "conmebol.libertadores",
						name: "CONMEBOL Copa Libertadores",
						abbreviation: "Lib",
						season: { type: { id: "5", hasStandings: false } },
					},
					{
						id: "conmebol.sudamericana",
						name: "CONMEBOL Copa Sudamericana",
						abbreviation: "Sud",
						season: { type: { id: "3", hasStandings: false } },
					},
					{
						id: "arg.1",
						name: "Argentine Liga Profesional de Fútbol",
						abbreviation: "Prim A",
						season: { type: { id: "5", hasStandings: true } },
					},
					{
						id: "arg.copa_de_la_superliga",
						name: "Argentine Copa de la Superliga",
						abbreviation: "ASUPERPLIGA",
						season: { type: { id: "3", hasStandings: false } },
					},
					{
						id: "arg.2",
						name: "Argentine Nacional B",
						abbreviation: "Nac B",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "arg.3",
						name: "Argentine Primera B",
						abbreviation: "Prim B",
						season: { type: { id: "2", hasStandings: false } },
					},
					{
						id: "arg.4",
						name: "Argentine Primera C",
						abbreviation: "Prim C",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "arg.5",
						name: "Argentine Primera D",
						abbreviation: "Prim D",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "bra.1",
						name: "Brazilian Serie A",
						abbreviation: "Bras",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "bra.2",
						name: "Brazilian Serie B",
						abbreviation: "Bras B",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "bra.3",
						name: "Brazilian Serie C",
						abbreviation: "Bras C",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "bra.copa_do_nordeste",
						name: "Copa Do Nordeste",
						abbreviation: "CD NOR",
						season: { type: { id: "4", hasStandings: false } },
					},
					{
						id: "bra.camp.carioca",
						name: "Brazilian Campeonato Carioca",
						season: { type: { id: "4", hasStandings: false } },
					},
					{
						id: "bra.camp.paulista",
						name: "Brazilian Campeonato Paulista",
						abbreviation: "Paulista",
						season: { type: { id: "4", hasStandings: false } },
					},
					{
						id: "bra.camp.gaucho",
						name: "Brazilian Campeonato Gaucho",
						season: { type: { id: "3", hasStandings: false } },
					},
					{
						id: "bra.camp.mineiro",
						name: "Brazilian Campeonato Mineiro",
						abbreviation: "BR CM",
						season: { type: { id: "3", hasStandings: false } },
					},
					{
						id: "chi.1",
						name: "Chilean Primera Division",
						abbreviation: "Prim",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "chi.2",
						name: "Segunda División de Chile",
						abbreviation: "Seg",
						season: { type: { id: "3", hasStandings: false } },
					},
					{
						id: "uru.1",
						name: "Uruguayan Primera Division",
						abbreviation: "Prim",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "uru.2",
						name: "Segunda División de Uruguay",
						abbreviation: "Seg",
						season: { type: { id: "4", hasStandings: false } },
					},
					{
						id: "col.1",
						name: "Colombian Primera A",
						abbreviation: "L. Águila",
						season: { type: { id: "5", hasStandings: true } },
					},
					{
						id: "col.2",
						name: "Colombian Primera B",
						abbreviation: "Primera B",
						season: { type: { id: "2", hasStandings: true } },
					},
					{
						id: "per.1",
						name: "Peruvian Primera Profesional",
						abbreviation: "Camp",
						season: { type: { id: "2", hasStandings: true } },
					},
					{
						id: "par.1",
						name: "Paraguayan Primera Division",
						abbreviation: "Prim",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "ecu.1",
						name: "Ecuadoran Primera A",
						abbreviation: "Prim",
						season: { type: { id: "2", hasStandings: true } },
					},
					{
						id: "ecu.2",
						name: "Ecuador Serie B",
						abbreviation: "Serie B",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "ven.1",
						name: "Venezuelan Primera Profesional",
						abbreviation: "Prim",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "usa.nwsl.cup",
						name: "United States NWSL Challenge Cup",
						abbreviation: "NWSL",
						season: { type: { id: "2", hasStandings: false } },
					},
					{
						id: "ven.2",
						name: "Segunda División de Venezuela",
						abbreviation: "Seg",
						season: { type: { id: "3", hasStandings: false } },
					},
					{
						id: "bol.1",
						name: "Bolivian Liga Profesional",
						abbreviation: "Liga",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "concacaf.u23",
						name: "CONCACAF U23 Tournament",
						abbreviation: "Conc U23",
						season: { type: { id: "4", hasStandings: false } },
					},
					{
						id: "aus.w.1",
						name: "Australian W-League",
						abbreviation: "W league",
						season: { type: { id: "3", hasStandings: false } },
					},
					{
						id: "hon.1",
						name: "Honduran Primera Division",
						abbreviation: "Prim",
						season: { type: { id: "12", hasStandings: false } },
					},
					{
						id: "slv.1",
						name: "Salvadoran Primera Division",
						abbreviation: "Prim",
						season: { type: { id: "6", hasStandings: true } },
					},
					{
						id: "aff.championship",
						name: "AFF Cup",
						abbreviation: "AFF Cup",
						season: { type: { id: "3", hasStandings: false } },
					},
					{
						id: "afc.saff.championship",
						name: "SAFF Championship",
						season: { type: { id: "3", hasStandings: false } },
					},
					{
						id: "crc.1",
						name: "Costa Rican Primera Division",
						abbreviation: "Prim",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "jam.1",
						name: "Jamaican Premier League",
						abbreviation: "JPL",
						season: { type: { id: "3", hasStandings: false } },
					},
					{
						id: "jpn.1",
						name: "Japanese J League",
						abbreviation: "J Lge",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "gua.1",
						name: "Guatemalan Liga Nacional",
						abbreviation: "Liga",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "idn.1",
						name: "Indonesian Liga 1",
						abbreviation: "IDN",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "ind.1",
						name: "Indian Super League",
						abbreviation: "ISL",
						season: { type: { id: "3", hasStandings: false } },
					},
					{
						id: "ind.2",
						name: "Indian I-League",
						abbreviation: "IIL",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "mys.1",
						name: "Malaysian Super League",
						abbreviation: "MYS",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "sgp.1",
						name: "Singaporean Premier League",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "tha.1",
						name: "Thai Premier League",
						abbreviation: "Thai Premier League",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "bangabandhu.cup",
						name: "Bangabandhu Cup",
						abbreviation: "BGC",
						season: { type: { id: "3", hasStandings: false } },
					},
					{
						id: "caf.champions",
						name: "CAF Champions League",
						abbreviation: "CAFCO",
						season: { type: { id: "4", hasStandings: false } },
					},
					{
						id: "rsa.1.promotion.relegation",
						name: "South African Premiership Promotion/Relegation Playoffs",
						abbreviation: "Prem",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "caf.confed",
						name: "CAF Confederations Cup",
						abbreviation: "CAFCH",
						season: { type: { id: "3", hasStandings: false } },
					},
					{
						id: "rsa.1",
						name: "South African Premiership",
						abbreviation: "Prem",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "rsa.2",
						name: "South African First Division",
						abbreviation: "Nat",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "nga.1",
						name: "Nigerian Professional League",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "gha.1",
						name: "Ghanaian Premier League",
						abbreviation: "GPL",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "zam.1",
						name: "Zambian Super League",
						abbreviation: "ZSL",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "ken.1",
						name: "Kenyan Premier League",
						abbreviation: "KPL",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "zim.1",
						name: "Zimbabwean Premier Soccer League",
						abbreviation: "ZP",
						season: { type: { id: "1", hasStandings: true } },
					},
					{
						id: "uga.1",
						name: "Ugandan Premier League",
						abbreviation: "USL",
						season: { type: { id: "1", hasStandings: true } },
					},
				],
				md: { nm: "Spanish Primera División", ssn: "2021-22" },
				currentSeason: {
					year: 2021,
					seasonType: "1",
					name: "2021-22 LaLiga",
					abbreviation: "2021-22 LaLiga",
					startDate: 2021,
					endDate: 2022,
				},
				pageHeading: "Spanish Primera División Table 2021-22",
				footerOptions: {
					caption: [
						"Positions 1, 2, 3, 4, 7: Champions League",
						"Positions 5, 6: Europa League",
						"Positions 18, 19, 20: Relegation",
					],
					glossaryTitle: "Glossary",
					nbaTourneyCaption:
						"Teams seeded 7-10 in each conference will compete in a play-in tournament at the end of the regular season.",
				},
				div: false,
				filters: {
					data: {
						groups: 0,
						views: [],
						seasontypes: [
							{ param: "1", key: "2021-22 LaLiga", text: "2021-22 LaLiga" },
						],
						sort: "gamesbehind",
						dir: "desc",
						showSeasonYear: true,
						showLeagues: true,
					},
					active: { group: "", view: "standings" },
					defaultSelected: { view: "standings", seasontype: 1 },
				},
				subheaders: [
					[{ type: "team" }],
					[
						{ type: "gamesplayed", sortable: true, sortDirection: "desc" },
						{ type: "wins", sortable: true, sortDirection: "desc" },
						{ type: "ties", sortable: true, sortDirection: "desc" },
						{ type: "losses", sortable: true, sortDirection: "asc" },
						{ type: "pointsfor", sortable: true, sortDirection: "desc" },
						{ type: "pointsagainst", sortable: true, sortDirection: "asc" },
						{
							type: "pointdifferential",
							sortable: true,
							sortDirection: "desc",
						},
						{ type: "points", sortable: true, sortDirection: "desc" },
						false,
					],
				],
				showPos: 1,
				showNews: true,
				leagueName: "Spanish Primera División",
			},
		},
		subType: null,
		analytics: {
			SWID: "",
			UNID: "",
			accountID: "wdgespcom",
			site: "espn",
			section: "esp.1",
			categories: ["ESP.1", "standings", null],
			contentType: "standings",
			channel: "",
			pageName: "",
			gameInfo: "",
			gameState: "",
			userInfo: {
				insider: "insider-no",
				gender: "unknown",
				premium: "premium-no",
				year: "unknown",
				regType: "unknown",
				status: "anonymous",
			},
			lang: "en",
			country: "us",
			countryRegion: "en-us",
			pageURL: "/",
			vendors: [],
			teamName: "",
			edition: "en-us",
			path: "/soccer/standings",
			sport: "soccer",
			league: "esp.1",
			siteSection: "espn",
		},
		ads: {
			level: "espn.com/soccer/standings",
			kvps: [
				{ name: "pgtyp", value: "standings" },
				{ name: "sp", value: "soccer" },
				{ name: "ed", value: "us" },
				{ name: "lang", value: "en" },
				{ name: "tm", value: "" },
				{ name: "league", value: "esp.1" },
				{ name: "darkmode", value: false },
				{
					name: "ajx_url",
					value: "https://www.espn.com/soccer/standings/_/league/esp.1",
				},
			],
		},
		outbrain: { id: "AR_19", rightRailId: "AR_21" },
		taboola: {
			network: "espn-network",
			webviewNetwork: "espnappsnetwork-espn",
			mode: "thumbnails-3x2-a",
			type: "other",
			targetType: "mix",
			"right-rail": {
				type: "other",
				mode: "thumbnails-1x3",
				targetType: "mix",
			},
			pageTypeOverrides: {
				article: {
					mode: "thumbnails-3x1-a",
					webviewMode: "thumbnails-2x1-ESPN",
					type: "article",
					targetType: "mix",
				},
				preview: {
					mode: "thumbnails-3x1-a",
					webviewMode: "thumbnails-2x1-ESPN",
					type: "article",
					targetType: "mix",
				},
				recap: {
					mode: "thumbnails-3x1-a",
					webviewMode: "thumbnails-2x1-ESPN",
					type: "article",
					targetType: "mix",
				},
				gamepackage: {
					mode: "thumbnails-3x1-b",
					webviewMode: "thumbnails-2x2-ESPN",
					type: "category",
					targetType: "mix",
				},
				longform: {
					mode: "thumbnails-3x1-b",
					type: "other",
					targetType: "mix",
				},
				clubhouse: { mode: "thumbnails-1x3", type: "other", targetType: "mix" },
				stats: { mode: "thumbnails-3x2-a", type: "other", targetType: "mix" },
			},
		},
		adProviders: { gpt: true, taboola: true, video: true },
	},
	request: {
		headers: {},
		httpVersion: "1.1",
		method: "GET",
		url: "/soccer/table?league=esp.1",
		vary: {
			host: "www.espn.com",
			cached: true,
			path: "/soccer/standings",
			region: "unknown",
			"forwarded-proto": "https",
			device: "desktop",
			country: "ca",
			edition: "espn-en-us",
			"edition-view": "espn-en-us",
			userab: "0",
			dtcAuth: "no",
			secure: true,
		},
	},
	viewport: { width: 1260, height: 0, scrollX: 0, scrollY: 0 },
};
