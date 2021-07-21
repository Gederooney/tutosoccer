import React from "react";
import Fixture from "./Fixture";

const League = (props) => {
	const leagues = props.board.leagues;
	const events = props.board.events;

	return (
		<div className="league">
			<p>
				<a
					className="date-heading"
					href="/scoresboard"
					dangerouslySetInnerHTML={{ __html: leagues[0].name }}></a>
			</p>

			{events.map((event, index) => {
				return (
					<>
						<Fixture event={event} key={index + ""} />
						<div className="scoreboard-aside"></div>
					</>
				);
			})}
		</div>
	);
};

export default League;
