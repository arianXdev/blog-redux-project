import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Breadcrumb } from "../../components";

import { postDeleted, selectPostById } from "./postsSlice";

import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";
import { TimeAgo } from "./TimeAgo";

import { toast } from "react-hot-toast";

import "./SinglePostPage.css";

const SinglePostPage = () => {
	const { postId } = useParams();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const post = useSelector((state) => selectPostById(state, postId));

	const onPostDeleted = () => {
		toast(
			(t) => (
				<>
					<p>
						Are you sure that you want to <b style={{ color: "var(--red-color)" }}> delete </b> this post?
					</p>
					<div className="button-group">
						<button
							className="toast-btn toast-btn--confirm"
							onClick={() => {
								dispatch(postDeleted(post.id));
								navigate("/");
								toast.dismiss(t.id);
							}}
						>
							Yes! Sure.
						</button>
						<button className="toast-btn toast-btn--dismiss" onClick={() => toast.dismiss(t.id)}>
							Dismiss
						</button>
					</div>
				</>
			),
			{
				icon: "⚠️",
				style: {
					display: "flex",
					justifyContent: "flex-start",
					alignItems: "center",
					minWidth: "max-content",
					borderRadius: "10px",
					background: "#222",
					color: "#fff",
					lineHeight: "1.7",
					fontFamily: "var(--oxanium-font)",
					fontWeight: "700",
					fontSize: ".95em",
				},
			}
		);

		// dispatch(postDeleted(post.id));
		// navigate("/");
	};

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

			<button onClick={onPostDeleted} type="button" className="delete-btn">
				<ion-icon name="trash-outline"></ion-icon>
			</button>

			<section className="post__reactions">
				<ReactionButtons post={post} />
			</section>
		</section>
	);
};

export default SinglePostPage;
