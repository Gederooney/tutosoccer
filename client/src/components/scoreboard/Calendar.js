import React, { useState, useEffect } from "react";
import "../../css/calendar.scss";

const Calendar = () => {
	const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
	const [currentYear, setCurrentYear] = useState(new Date().getUTCFullYear());
	const generateYearRange = (start, end) => {
		var years = [];
		for (var year = start; year <= end; year++) {
			years.push(year);
		}
		return years;
	};
	const [years, setYears] = useState(
		generateYearRange(
			new Date().getFullYear() - 50,
			new Date().getFullYear() + 50
		)
	);
	useEffect(() => {
		return () => {};
	}, []);

	const dayDefault = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const monthDefault = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const next = () => {
		setCurrentYear(currentMonth === 11 ? currentYear + 1 : currentYear);
		setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1);
	};
	const previous = () => {
		setCurrentYear(currentMonth === 0 ? currentYear - 1 : currentYear);
		setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
	};
	
	return (
		<>
			<div className="wrapper">
				<div class="container-calendar">
					<h3 id="monthAndYear">
						{monthDefault[currentMonth] + " " + currentYear}
					</h3>
					<div class="button-container-calendar">
						<button id="previous" onClick={previous}>
							&#8249;
						</button>
						<button id="next" onClick={next}>
							&#8250;
						</button>
					</div>
					<table class="table-calendar" id="calendar" data-lang="en">
						<thead id="thead-month">
							<tr>
								{dayDefault.map((day) => {
									return <th key={day}>{day}</th>;
								})}
							</tr>
						</thead>
						<tbody id="calendar-body"></tbody>
					</table>
					<div class="footer-container-calendar">
						<label for="month">Jump To: </label>
						<select id="month" onChange={""}>
							<option value={0}>Jan</option>
							<option value={1}>Feb</option>
							<option value={2}>Mar</option>
							<option value={3}>Apr</option>
							<option value={4}>May</option>
							<option value={5}>Jun</option>
							<option value={6}>Jul</option>
							<option value={7}>Aug</option>
							<option value={8}>Sep</option>
							<option value={9}>Oct</option>
							<option value={10}>Nov</option>
							<option value={11}>Dec</option>
						</select>
						<select id="year" onChange={""}>
							{years.map((year) => {
								return (
									<option
										key={year}
										value={year}
										selected={
											year === new Date().getFullYear() ? "selected" : ""
										}>
										{year}
									</option>
								);
							})}
						</select>
					</div>
				</div>
			</div>
		</>
	);
};

export default Calendar;
