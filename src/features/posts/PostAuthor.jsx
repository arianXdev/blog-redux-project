import { useSelector } from "react-redux";

import "./PostAuthor.css";

const PostAuthor = ({ userId }) => {
	const author = useSelector((state) => state.users.find((user) => user.id === userId));

	return <span className="post__author">by {author ? author.name : "Unknown author"}</span>;
};

export default PostAuthor;
