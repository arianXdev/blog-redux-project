import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./FAB.css";

const FAB = () => {
	const { pathname } = useLocation();
	const [path, setPath] = useState();

	useEffect(() => {
		if (pathname === "/") setPath("add");
		else setPath("/");
	}, [pathname]);

	const getIcon = () => {
		if (pathname === "/") return <ion-icon name="pencil-outline"></ion-icon>;
		else if (pathname === "/add") return <ion-icon name="return-down-back-outline"></ion-icon>;
		else return <ion-icon name="alert-outline"></ion-icon>;
	};

	return (
		<Link to={path} className="FAB">
			{getIcon()}
		</Link>
	);
};

export default FAB;
