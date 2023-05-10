import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import PostsList from "./features/posts/PostsList";
import "./App.css";

const App = () => {
	return (
		<main className="App">
			<Navbar />

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
				/>
			</Routes>
		</main>
	);
};

export default App;
