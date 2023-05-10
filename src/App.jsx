import { Route, Routes } from "react-router-dom";

import { Navbar, FAB } from "./components";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import SinglePostPage from "./features/posts/SinglePostPage";

import "./App.css";

const App = () => {
	return (
		<main className="App">
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
			</Routes>
		</main>
	);
};

export default App;
