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
			console.log(state);

			// action.payload = newPost
			state.push(action.payload);
		},
	},
});

// When we write the postAdded reducer function, createSlice will automatically generate an action creator func with the same name.
// We can export that action creator and use it in our UI components to dispatch the action when the user clicks "Save Post".
export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
