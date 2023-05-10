import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";

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
				<p className="post__content">{post.content}</p>
			</article>
		</section>
	);
};

export default SinglePostPage;
