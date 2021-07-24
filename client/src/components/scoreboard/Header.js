import React from "react";
import Datepicker from "./Datepicker";

const Header = (props) => {
	return (
		<div>
			<Datepicker
				setDate={props.setDate}
				daysArray={props.daysArray}
				handleDateClick={props.handleDateClick}
			/>
		</div>
	);
};

export default Header;
