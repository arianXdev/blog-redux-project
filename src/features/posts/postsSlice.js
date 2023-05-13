import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = {
	posts: [],
	status: "idle",
	error: null,
};

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		postAdded: {
			reducer: (state, action) => {
				// action.payload = newPost
				state.posts.push(action.payload);
			},

			prepare: (title, content, userId) => {
				return {
					payload: {
						id: nanoid(),
						title,
						content,
						date: new Date().toISOString(),
						user: userId,
						reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
					},
				};
			},
		},

		postUpdated: (state, action) => {
			const { id, title: newTitle, content: newContent } = action.payload;
			const existingPost = state.posts.find((post) => post.id === id);
			if (existingPost) {
				existingPost.title = newTitle;
				existingPost.content = newContent;
			}
		},

		postDeleted: (state, action) => {
			const postId = action.payload;

			state.map((post, postIndex) => {
				if (post.id === postId) {
					state.splice(postIndex, 1);
				}
			});
		},

		reactionAdded: (state, action) => {
			const { postId, reaction } = action.payload;
			const existingPost = state.find((post) => post.id === postId);
			if (existingPost) {
				existingPost.reactions[reaction]++;
			}
		},
	},
});

// When we write the postAdded reducer function, createSlice will automatically generate an action creator func with the same name.
// We can export that action creator and use it in our UI components to dispatch the action when the user clicks "Save Post".
export const { postAdded, postUpdated, postDeleted, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;

// Note: that the 'state' parameter for these selector functions is "the root Redux state object",
//  as it was for the inlined anonymous selectors we wrote directly inside of useSelector.

// selector functions
export const selectAllPosts = (state) => state.posts.posts;
export const selectPostById = (state, postId) => state.posts.posts.find((post) => post.id === postId);
