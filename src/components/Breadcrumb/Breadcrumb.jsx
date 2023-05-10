import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = () => {
	const { pathname } = useLocation();

	return (
		<div className="breadcrumb">
			<p className="breadcrumb__path">
				<Link to="/" className="breadcrumb__home">
					<ion-icon name="home-outline"></ion-icon> home
				</Link>
				{pathname}
			</p>
		</div>
	);
};

export default Breadcrumb;
