import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
	return (
		<div className="hero-container">
			<video src="/videos/money.mp4" autoPlay loop muted />
			<h1>Reading checks. Made easy</h1>
			<p>Upload a check image to begin</p>
			<div className="hero-btns">
				<Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
					UPLOAD CHECK <i className="fas fa-upload"></i>
				</Button>
				<Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large" onClick={console.log("hey")}>
					VIEW DEMO <i className="far fa-play-circle" />
				</Button>
			</div>
		</div>
	);
}

export default HeroSection;
