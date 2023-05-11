import { Route, Routes } from "react-router-dom";

import { Navbar, FAB } from "./components";

import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import EditPostForm from "./features/posts/EditPostForm";
import SinglePostPage from "./features/posts/SinglePostPage";

import { Toaster } from "react-hot-toast";

import "./App.css";

const App = () => {
	return (
		<main className="App">
			<Toaster />
			<Navbar />
			<FAB />

			<Routes>
				<Route
					path="/"
					element={
						<>
							<div className="container">
								<PostsList />
							</div>
						</>
					}
				></Route>

				<Route path="add" element={<AddPostForm />} />
				<Route path="/posts/:postId" element={<SinglePostPage />} />
				<Route path="/editPost/:postId" element={<EditPostForm />} />
			</Routes>
		</main>
	);
};

export default App;
