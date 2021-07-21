import React from "react";

const Fixture = (props) => {
	const competitions = props.event.competitions[0];
	const home = competitions.competitors[0];
	const away = competitions.competitors[1];
	const venue = competitions.venue;
	const status = props.event.status;
	let homeDetails = [];
	let awayDetails = [];
	if (competitions.details.length) {
		competitions.details.map((detail) => {
			if (detail.team.id === home.id)
				return homeDetails.push({
					player_name: detail.athletesInvolved
						? detail.athletesInvolved[0].shortName
						: "",
					clock: detail.clock.displayValue,
					type: detail.type.text,
				});
			else
				return awayDetails.push({
					player_name: detail.athletesInvolved
						? detail.athletesInvolved[0].shortName
						: "",
					clock: detail.clock.displayValue,
					type: detail.type.text,
				});
		});
	}
	return (
		<article className="scoreboard">
			<div className="scoreboard__game">
				<div className="game__team">
					<div className="infos">
						<div
							className="infos__name"
							dangerouslySetInnerHTML={{
								__html: home.team.displayName,
							}}></div>
						<div className="infos__record">
							{home.form ? "Form: " + home.form : ""}
						</div>
					</div>
					<div className="logo">
						<img
							src={
								home.team.logo
									? home.team.logo
									: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/default-team-logo-500.png"
							}
							alt={home.team.displayName + "logo"}
						/>
					</div>
					<div className="score home">
						{(!status.type.completed && status.type.state !== "in") ||
						(status.type.completed && status.type.state !== "post")
							? ""
							: home.score}
					</div>
				</div>
				<div className="game__infos">
					{/* <span
						className={
							status.type.state === "in"
								? "game__infos-state live"
								: "game__infos-state"
						}>
						{status.type.state === "in"
							? "Live"
							: status.type.state === "post"
							? "Finished"
							: status.type.state === "pre" ? "Scheduled" : status.type.state}
					</span> */}
					<span
						className={
							status.type.state === "in"
								? "game__infos-clock live"
								: "game__infos-clock"
						}
						dangerouslySetInnerHTML={{ __html: status.type.detail }}></span>
					{venue ? (
						<>
							<span
								className="game__infos-stadium"
								dangerouslySetInnerHTML={{ __html: venue.fullName }}></span>
							<span className="game__infos-country">
								{"(" + venue.address.city + ") "}
								{venue.address.country ? venue.address.country : ""}
							</span>
						</>
					) : (
						""
					)}
				</div>
				<div className="game__team">
					<div className="score away">
						{(!status.type.completed && status.type.state !== "in") ||
						(status.type.completed && status.type.state !== "post")
							? ""
							: away.score}
					</div>
					<div className="logo">
						<img
							src={
								away.team.logo
									? away.team.logo
									: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/default-team-logo-500.png"
							}
							alt={away.team.displayName + "logo"}
						/>
					</div>
					<div className="infos">
						<div
							className="infos__name"
							dangerouslySetInnerHTML={{
								__html: away.team.displayName,
							}}></div>
						<div className="infos__record">
							{away.form ? "Form: " + away.form : ""}
						</div>
					</div>
				</div>
			</div>
			<div className="scoreboard__details">
				<div className="details__col">
					{homeDetails.length
						? homeDetails.map((detail, index) => {
								return (
									<span className="details__col-action" key={index}>
										<span className="action__col">{detail.player_name}</span>
										<span className="action__col">{detail.type}</span>
										<span
											className="action__col"
											dangerouslySetInnerHTML={{ __html: detail.clock }}></span>
									</span>
								);
						  })
						: ""}
				</div>
				<div className="details__col">
					{awayDetails.length
						? awayDetails.map((detail, index) => {
								return (
									<span className="details__col-action" key={index}>
										<span className="action__col">{detail.player_name}</span>
										<span className="action__col">{detail.type}</span>
										<span
											className="action__col"
											dangerouslySetInnerHTML={{ __html: detail.clock }}></span>
									</span>
								);
						  })
						: ""}
				</div>
			</div>
		</article>
	);
};

export default Fixture;
