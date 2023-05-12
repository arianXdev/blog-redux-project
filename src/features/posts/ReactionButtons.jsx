import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

import numeral from "numeral";

import "./ReactionButtons.css";

const ReactionButtons = ({ post }) => {
	const dispatch = useDispatch();

	const formatNumber = (number) => {
		const formattedNumber = numeral(number).format("0a");
		return formattedNumber;
	};

	const reactionEmoji = {
		thumbsUp: "👍",
		hooray: "🎉",
		heart: "❤️",
		rocket: "🚀",
		eyes: "👀",
	};

	const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
		return (
			<button key={name} type="button" className="reactions__btn" onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}>
				{emoji} {formatNumber(post.reactions[name] === 0 ? 0 : post.reactions[name])}
			</button>
		);
	});

	return <section className="reactions">{reactionButtons}</section>;
};

export default ReactionButtons;
