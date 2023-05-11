import { parseISO, formatDistanceToNow } from "date-fns";

import "./TimeAgo.css";

export const TimeAgo = ({ timestamp }) => {
	let timeAgo = "";
	if (timestamp) {
		const date = parseISO(timestamp);
		const timePeriod = formatDistanceToNow(date);
		timeAgo = `${timePeriod} ago`;
	}

	return (
		<span title={timestamp} className="time-ago">
			<i>{timeAgo}</i>
		</span>
	);
};
