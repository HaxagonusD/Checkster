import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Steps from "./Steps";
import "../css/Home.css";

export default function Home() {
	return (
		<div className="home">
			<Header />
			<div className="banner-container">
				<Banner />
			</div>
			<Steps />
		</div>
	);
}
