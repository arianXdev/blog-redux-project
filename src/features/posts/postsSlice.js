import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{ id: "1", title: "First Post!", content: "Hello!" },
	{ id: "2", title: "Second Post", content: "More text" },
];

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		postAdded: (state, action) => {
			// action.payload = newPost
			state.push(action.payload);
		},

		postUpdated: (state, action) => {
			const { id, title: newTitle, content: newContent } = action.payload;
			const existingPost = state.find((post) => post.id === id);
			if (existingPost) {
				existingPost.title = newTitle;
				existingPost.content = newContent;
			}
		},
	},
});

// When we write the postAdded reducer function, createSlice will automatically generate an action creator func with the same name.
// We can export that action creator and use it in our UI components to dispatch the action when the user clicks "Save Post".
export const { postAdded, postUpdated } = postsSlice.actions;

export default postsSlice.reducer;
