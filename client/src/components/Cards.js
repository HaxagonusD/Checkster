import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
	return (
		<div className="cards">
			<h1>View our Services!</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem src="./images/img-9.jpg" text="Scan Your Check From Anywhere" label="Digital" path="/services" />
						<CardItem src="./images/img-2.jpg" text="Validate your check" label="AI Powered" path="/services" />
					</ul>
					<ul className="cards__items">
						<CardItem src="./images/img-3.jpg" text="Send Checks for business or personal" label="Send" path="/services" />
						<CardItem src="./images/img-4.jpg" text="Transfer to your bank account" label="Transfer" path="/products" />
						<CardItem src="./images/img-8.jpg" text="Quick & Easy Process" label="Speed" path="/sign-up" />
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
