import React from "react";
import "../../css/datepicker.scss";
import { ArrowLeft, ArrowRight } from "../../assets/images/Arrows";
import Calendar from "./Calendar";

const Datepicker = (props) => {
	const { setDate, daysArray, handleDateClick } = props;

	const handleDateChange = (e) => {
		setDate(
			new Date(
				e.target.value.slice(5, 7) +
					" " +
					e.target.value.slice(8, 10) +
					", " +
					e.target.value.slice(0, 4)
			).toISOString()
		);
		// setDate(e.target.value);
	};

	return (
		<div className="datepicker">
			<div className="header">
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
			<div className="row body d-flex flex-row align-items-center">
				<div
					onClick={(e) => handleDateClick(2)}
					className="arrow col-1 col-1 border-1 rounded-circle d-flex flex-column justify-content-center align-items-center">
					<ArrowLeft />
				</div>
				{daysArray.map((d, index) => {
					const { day, date } = d;
					return (
						<div
							className={
								index === 3
									? "week col-1 d-flex flex-column text-danger justify-content-center align-items-center"
									: "week col-1 d-flex flex-column justify-content-center align-items-center"
							}
							key={index}
							onClick={(e) => handleDateClick(index)}>
							<small className="day">{day.toUpperCase()}</small>
							<small className="date">
								{parseInt(date) < 10 ? date[1] : date}
							</small>
						</div>
					);
				})}
				<div
					onClick={(e) => handleDateClick(4)}
					className="arrow col-1 border-1 rounded-circle d-flex flex-column justify-content-center align-items-center">
					<ArrowRight />
				</div>
				<div className="col-3">
					<label>Select A Date: </label>
					<input
						type="date"
						name="dateofbirth"
						id="dateofbirth"
						onChange={(e) => handleDateChange(e)}
					/>
				</div>
				<Calendar />
			</div>
		</div>
	);
};

export default Datepicker;
