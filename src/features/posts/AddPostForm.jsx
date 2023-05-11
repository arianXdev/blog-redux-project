import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postsSlice";

import "./AddPostForm.css";

const AddPostForm = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const canSave = Boolean(title) && Boolean(content);

	const onTitleChanged = (e) => setTitle(e.target.value);
	const onContentChanged = (e) => setContent(e.target.value);

	const onSavePostClicked = () => {
		if (title && content) {
			dispatch(postAdded(title, content));

			navigate("/");
			setTitle("");
			setContent("");
		}
	};

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
						<textarea id="postContent" className="add__content" name="postContent" value={content} onChange={onContentChanged} placeholder="What's in your mind?" />
					</div>

					<button onClick={onSavePostClicked} type="button" className="add__btn" disabled={!canSave}>
						Save Post
					</button>
				</form>
			</div>
		</section>
	);
};

export default AddPostForm;
