import { useSelector } from "react-redux";
import "./PostsList.css";

/*
If we're going to render a list of posts, we need to get the data from somewhere.
React components can read data from the Redux store using the useSelector hook from the React-Redux library.
*/

const PostsList = () => {
	const posts = useSelector((state) => state.posts);

	const renderedPosts = posts.map((post) => (
		<article className="post" key={post.id}>
			<h3 className="post__title">{post.title}</h3>
			<p className="post__content">{post.content.substring(0, 100)}</p>
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
