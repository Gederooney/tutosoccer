exports.sortEvents = (events) => {
	let i = 0;
	let temp;

	while (i < events.length) {
		let j = i + 1;
		while (j < events.length) {
			if (
				events[j].status.type.state === "in" &&
				events[i].status.type.state !== "in"
			) {
				temp = events[i];
				events[i] = events[j];
				events[j] = temp;
				// continue;
			}
			j++;
		}
		i++;
	}
};
