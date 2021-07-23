import React, { useState, useEffect } from "react";
import "../../css/datepicker.scss";
import { ArrowLeft, ArrowRight } from "../../assets/images/Arrows";

const Datepicker = (props) => {
	const { daysArray, handleDateClick } = props;
	const [date, setDate] = useState();
	const handleDateChange = (e) => {
		setDate(e.target.value);
	};
	useEffect(() => {
		// alert(date);
	}, [date]);
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
			<div className="row">
				<div className="col-1 col-1 border-1 rounded-circle d-flex flex-column justify-content-center align-items-center">
					<ArrowLeft />
				</div>
				{daysArray.map((d, index) => {
					const { day, date } = d;
					return (
						<div
							className={
								index === 3
									? "col-1 d-flex flex-column text-danger justify-content-center align-items-center"
									: "col-1 d-flex flex-column justify-content-center align-items-center"
							}
							key={index}
							onClick={(e) => handleDateClick(index)}>
							<small className="datepicker__body_col-day">
								{day.toUpperCase()}
							</small>
							<small className="datepicker__body_col-date">
								{parseInt(date) < 10 ? date[1] : date}
							</small>
						</div>
					);
				})}
				<div className="col-1 border-1 rounded-circle d-flex flex-column justify-content-center align-items-center">
					<ArrowRight />
				</div>
				<div className="col-3">
					<label>Select Date: </label>
					<input
						type="date"
						name="dateofbirth"
						id="dateofbirth"
						onChange={(e) => handleDateChange(e)}
					/>
				</div>
			</div>
		</div>
	);
};

export default Datepicker;
