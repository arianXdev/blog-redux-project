import { useState } from "react";
import "./AddPostForm.css";

const AddPostForm = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const canSave = Boolean(title) && Boolean(content);

	const onTitleChanged = (e) => setTitle(e.target.value);
	const onContentChanged = (e) => setContent(e.target.value);

	return (
		<section className="add">
			<div className="container">
				<h2 className="add__title">-- Add a New Post -- </h2>

				<form className="add__form">
					<div className="add__group">
						<label className="add__label" htmlFor="postTitle">
							Post Title:
						</label>
						<input type="text" className="add__input" id="postTitle" name="postTitle" value={title} onChange={onTitleChanged} />
					</div>

					<div className="add__group">
						<label className="add__label" htmlFor="postContent">
							Content:
						</label>
						<textarea id="postContent" className="add__content" name="postContent" value={content} onChange={onContentChanged} />
					</div>

					<button type="button" className="add__btn" disabled={!canSave}>
						Save Post
					</button>
				</form>
			</div>
		</section>
	);
};

export default AddPostForm;
