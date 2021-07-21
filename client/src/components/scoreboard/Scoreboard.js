import React, { useEffect, useState, createContext } from "react";
import League from "./League";
import axios from "../../utils/axios";
import Header from "./Header";
import Loader from "../loader/Loader";
import { createTable } from "../../utils/datePicker/arraymaker";
import "../../css/scoreboard.scss";

export const BoardContext = createContext([]);

const ScoresBoard = () => {
	const [loading, setLoading] = useState(false);
	const [boards, setBoards] = useState([]);
	const [date, setDate] = useState(
		new Date().toString().slice(4, 7) +
			" " +
			new Date().toString().slice(8, 10) +
			", " +
			new Date().toString().slice(11, 15)
	);
	const [daysArray, setDaysArray] = useState([]);
	useEffect(() => {
		const requestBoard = async (date, callback) => {
			setLoading(true);
			axios
				.get(
					"/api/scoreboard/" +
						new Date(date).toISOString().substr(0, 10).replace(/-/g, "")
				)
				.then((res) => {
					callback(res.data);
					return setLoading(false);
				})
				.catch((error) => console.log(error.message));
		};
		setDaysArray(createTable(new Date(date).toISOString()));
		requestBoard(date, setBoards);
		let id;
		if (
			date ===
			new Date().toString().slice(4, 7) +
				" " +
				new Date().toString().slice(8, 10) +
				", " +
				new Date().toString().slice(11, 15)
		) {
			id = setInterval(async () => {
				requestBoard(date, setBoards);
			}, 1000 * 30);
		} else return;
		return () => {
			if (id) clearInterval(id);
		};
	}, [date]);

	const handleDateClick = (index) => {
		setDate(
			new Date(
				daysArray[index].month +
					" " +
					daysArray[index].date +
					", " +
					daysArray[index].year
			).toISOString()
		);
	};
	//
	return (
		<div>
			<BoardContext.Provider value={boards}>
				<Header daysArray={daysArray} handleDateClick={handleDateClick} />
				{loading ? (
					<div className="loading">
						<Loader />
					</div>
				) : (
					""
				)}
				<div id="events">
					{boards.map((board, index) => {
						return <League board={board} key={"" + index} />;
					})}
				</div>
			</BoardContext.Provider>
		</div>
	);
};

export default ScoresBoard;
