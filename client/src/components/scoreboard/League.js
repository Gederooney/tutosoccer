import React from "react";
import Fixture from "./Fixture";
import { sortEvents } from "../../utils/sortEvents";

const League = (props) => {
	const leagues = props.board.leagues;
	const events = props.board.events;
	sortEvents(events);
	return (
		<div className="league">
			<p>
				<a
					className="league_name"
					href="/"
					dangerouslySetInnerHTML={{ __html: leagues[0].name }}></a>
			</p>

			{events.map((event, index) => {
				return (
					<>
						<Fixture
							event={event}
							key={event.competitions[0].competitors[0].team.displayName}
						/>
					</>
				);
			})}
		</div>
	);
};

export default League;
