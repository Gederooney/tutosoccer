import React from "react";
import "../../css/datepicker.scss";

const Datepicker = (props) => {
	const { daysArray, handleDateClick } = props;
	return (
		<div className="datepicker">
			<div className="datepicker__header">
				{daysArray[0]
					? daysArray[0].month +
					  " " +
					  daysArray[0].date +
					  ", " +
					  daysArray[0].year +
					  " - " +
					  daysArray[6].month +
					  " " +
					  daysArray[6].date +
					  ", " +
					  daysArray[6].year
					: ""}
			</div>
			<div className="datepicker__body">
				{daysArray.map((d, index) => {
					const { day, date } = d;
					return (
						<div
							className={
								index === 3
									? "datepicker__body_col active"
									: "datepicker__body_col"
							}
							key={index}
							onClick={(e) => handleDateClick(index)}>
							<span className="datepicker__body_col-day">
								{day.toUpperCase()}
							</span>
							<span className="datepicker__body_col-date">
								{parseInt(date) < 10 ? date[1] : date}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Datepicker;
