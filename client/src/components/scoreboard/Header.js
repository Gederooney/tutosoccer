import React from "react";
import Datepicker from "./Datepicker";

const Header = (props) => {
	return (
		<div>
			<Datepicker daysArray={props.daysArray} handleDateClick={props.handleDateClick} />
		</div>
	);
};

export default Header;
