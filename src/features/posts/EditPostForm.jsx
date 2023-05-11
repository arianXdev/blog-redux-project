import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUpdated } from "./postsSlice";

import { useNavigate, useParams } from "react-router-dom";

import "./EditPostForm.css";

const EditPostForm = () => {
	const { postId } = useParams();

	const post = useSelector((state) => state.posts.find((post) => post.id === postId));

	const [title, setTitle] = useState(post.title);
	const [content, setContent] = useState(post.content);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onTitleChanged = (e) => setTitle(e.target.value);
	const onContentChanged = (e) => setContent(e.target.value);

	const onSavePostClicked = () => {
		if (title && content) {
			dispatch(
				postUpdated({
					id: postId,
					title,
					content,
				})
			);

			navigate(`/posts/${postId}`);
		}
	};

	return (
		<section className="edit">
			<div className="container">
				<h2 className="edit__title">-- Edit Post -- </h2>

				<form className="edit__form">
					<div className="edit__group">
						<label className="edit__label" htmlFor="postTitle">
							Post Title:
						</label>
						<input type="text" className="edit__input" id="postTitle" name="postTitle" value={title} onChange={onTitleChanged} />
					</div>

					<div className="edit__group">
						<label className="edit__label" htmlFor="postContent">
							Content:
						</label>
						<textarea id="postContent" className="edit__content" name="postContent" value={content} onChange={onContentChanged} placeholder="What's in your mind?" />
					</div>

					<button onClick={onSavePostClicked} type="button" className="edit__btn">
						Save Post
					</button>
				</form>
			</div>
		</section>
	);
};

export default EditPostForm;
