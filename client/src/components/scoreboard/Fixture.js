import React from "react";
import SoccerBall from "../../assets/images/SoccerBall";

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
		<article className="conatiner-fluid d-flex flex-column mb-3">
			<div className="row">
				<div className="col row">
					<div className="col-lg-7 d-flex flex-column justify-content-start align-items-end">
						<span
							className="team_name"
							dangerouslySetInnerHTML={{
								__html: home.team.displayName,
							}}></span>
						<small className="form">
							{home.form ? "Form: " + home.form : ""}
						</small>
					</div>
					<img
						src={
							home.team.logo
								? home.team.logo
								: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/default-team-logo-500.png"
						}
						alt={home.team.displayName + "logo"}
						className="img-fluid logo col-lg-3"
					/>

					<span className="score col-lg-2 d-flex justify-content-center align-items-center">
						{(!status.type.completed && status.type.state !== "in") ||
						(status.type.completed && status.type.state !== "post")
							? ""
							: home.score}
					</span>
				</div>
				<div className="col-lg-2 d-flex flex-column align-items-center align-content-center text-center">
					{status.type.state === "pre" ? (
						venue ? (
							<>
								{/* <small
								dangerouslySetInnerHTML={{
									__html: status.type.detail,
								}}></small> */}
								<small
									dangerouslySetInnerHTML={{ __html: venue.fullName }}></small>
								{/* <small>
								{"(" + venue.address.city + ") "}
								{venue.address.country ? venue.address.country : ""}
							</small> */}
							</>
						) : (
							""
						)
					) : (
						<>
							<small
								className={status.type.state === "in" ? "text-danger" : ""}>
								{status.type.state === "in"
									? "Live"
									: status.type.state === "post"
									? "Finished"
									: status.type.state === "pre"
									? "Scheduled"
									: status.type.state}
							</small>
							<small
								dangerouslySetInnerHTML={{
									__html: status.type.detail,
								}}></small>
						</>
					)}

					{/*  */}
				</div>
				<div className="col row">
					<span className="score col-lg-2 d-flex justify-content-center align-items-center">
						{(!status.type.completed && status.type.state !== "in") ||
						(status.type.completed && status.type.state !== "post")
							? ""
							: away.score}
					</span>
					<img
						src={
							away.team.logo
								? away.team.logo
								: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/default-team-logo-500.png"
						}
						alt={away.team.displayName + "logo"}
						className="img-fluid logo col-lg-3"
					/>
					<div className="col-lg-7 d-flex flex-column justify-content-start align-items-start">
						<span
							className="team_name"
							dangerouslySetInnerHTML={{
								__html: away.team.displayName,
							}}></span>
						<small className="form">
							{away.form ? "Form: " + away.form : ""}
						</small>
					</div>
				</div>
			</div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-5 row">
						<div className="details text-muted d-flex flex-column align-items-end p-2">
							{homeDetails.length
								? homeDetails.map((detail) => {
										return (
											<span
												className="details_container d-flex flex-row my-1 justify-content-end"
												key={detail.type + detail.clock}>
												<span>{detail.player_name}</span>
												<div
													className={
														detail.type === "Yellow Card"
															? "gCard yellow mx-2"
															: detail.type === "Red Card"
															? "gCard red mx-2"
															: "gCard mx-2"
													}>
													{detail.type === "Yellow Card" ||
													detail.type === "Red Card" ? (
														""
													) : detail.type === "Goal" || "Goal - Header" ? (
														<SoccerBall />
													) : detail.type === "Own Goal" ? (
														"OG"
													) : detail.type === "Penalty - Scored" ? (
														<>
															P <SoccerBall />
														</>
													) : (
														detail.type
													)}
												</div>

												<span
													className=""
													dangerouslySetInnerHTML={{
														__html: detail.clock,
													}}></span>
											</span>
										);
								  })
								: ""}
						</div>
					</div>
					<div className="col-lg-2"></div>
					<div className="col-lg-5 row">
						<div className="details text-muted d-flex flex-column align-items-start p-2">
							{awayDetails.length
								? awayDetails.map((detail, index) => {
										return (
											<span
												className="details_container d-flex flex-row my-1"
												key={index}>
												<span
													className=""
													dangerouslySetInnerHTML={{
														__html: detail.clock,
													}}></span>
												<div
													className={
														detail.type === "Yellow Card"
															? "gCard yellow mx-2"
															: detail.type === "Red Card"
															? "gCard red mx-2"
															: "gCard mx-2"
													}>
													{detail.type === "Yellow Card" ||
													detail.type === "Red Card" ? (
														""
													) : detail.type === "Goal" || "Goal - Header" ? (
														<SoccerBall />
													) : detail.type === "Own Goal" ? (
														"OG"
													) : detail.type === "Penalty - Scored" ? (
														<>
															P <SoccerBall />
														</>
													) : (
														detail.type
													)}
												</div>

												<span>{detail.player_name}</span>
											</span>
										);
								  })
								: ""}
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default Fixture;
