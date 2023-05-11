import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb } from "../../components";

import PostAuthor from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";

import "./SinglePostPage.css";

const SinglePostPage = () => {
	const { postId } = useParams();

	const post = useSelector((state) => state.posts.find((post) => post.id === postId));

	if (!post) {
		return (
			<section className="container">
				<h2 className="empty-warning">Post not found!</h2>
			</section>
		);
	}

	return (
		<section className="container">
			<Breadcrumb />
			<article className="post">
				<h2 className="post__title">{post.title}</h2>
				<div className="post__details">
					<PostAuthor userId={post.user} /> | <TimeAgo timestamp={post.date} />
				</div>
				<p className="post__content">{post.content}</p>
			</article>

			<Link to={`/editPost/${postId}`} className="edit-btn">
				<ion-icon name="create-outline"></ion-icon>
			</Link>

			<button type="button" className="delete-btn">
				<ion-icon name="trash-outline"></ion-icon>
			</button>
		</section>
	);
};

export default SinglePostPage;
