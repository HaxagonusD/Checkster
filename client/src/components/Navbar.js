import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener("resize", showButton);

	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
						CHECKSTER <i className="fas fa-money-check-alt"></i>
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"} />
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<Link to="/" className="nav-links" onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/services" className="nav-links" onClick={closeMobileMenu}>
								Services
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/team" className="nav-links" onClick={closeMobileMenu}>
								Team
							</Link>
						</li>
						<li>
							<Link to="/results" className="nav-links-mobile" onClick={closeMobileMenu}>
								Results
							</Link>
						</li>
					</ul>
					{button && <Button buttonStyle="btn--outline">Upload</Button>}
				</div>
			</nav>
		</>
	);
}

export default Navbar;
