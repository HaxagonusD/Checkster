import { Link } from "react-router-dom";
import "../css/Nav.css";

export default function Nav() {
	return (
		<div className="nav">
		<h1><img src="https://www.svgrepo.com/show/54423/check.svg" alt="check image" />Read-them-Checks</h1>	
			<ul>
				<Link to="/">
					<li>Home</li>
				</Link>
				<Link to="/about">
					<li>About</li>
				</Link>
			</ul>
		</div>
	);
}
