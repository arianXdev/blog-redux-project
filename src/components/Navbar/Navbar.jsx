import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1 className="navbar__title">
				<Link to="/">The Redux Blog Project</Link>
			</h1>
			<hr />
		</nav>
	);
};

export default Navbar;
