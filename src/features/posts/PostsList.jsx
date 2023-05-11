import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";
import { TimeAgo } from "./TimeAgo";

import "./PostsList.css";

/*
If we're going to render a list of posts, we need to get the data from somewhere.
React components can read data from the Redux store using the useSelector hook from the React-Redux library.
*/

const PostsList = () => {
	const posts = useSelector((state) => state.posts);

	// posts.slice() to make a shallow copy of the posts (not mutating the original state!)
	const sortedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

	const renderedPosts = sortedPosts.map((post) => (
		<article className="post-item" key={post.id}>
			<h3 className="post-item__title">
				<Link to={`/posts/${post.id}`}>{post.title}</Link>
			</h3>
			<div className="post-item__details">
				<PostAuthor userId={post.user} /> | <TimeAgo timestamp={post.date} />
			</div>
			<p className="post-item__content">{post.content.substring(0, 100)}</p>
			<Link to={`/posts/${post.id}`} className="post-item__view-btn">
				<ion-icon name="expand-outline"></ion-icon>
			</Link>
			<ReactionButtons post={post} />
		</article>
	));

	return (
		<>
			{posts.length > 0 ? (
				<section className="posts">
					<h2 className="title">Posts</h2>
					{renderedPosts}
				</section>
			) : (
				<p className="empty-warning">There's no posts in here! You may want to consider adding a few ones.</p>
			)}
		</>
	);
};

export default PostsList;
