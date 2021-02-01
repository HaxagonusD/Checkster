import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Our Features</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              text="Scan Your Check From Anywhere"
              label="Digital"
              path="/services"
            />
            <CardItem
              src="https://www.gentlemansgazette.com/wp-content/uploads/2018/05/signet-ring-lagenstein-blau-on-ring-finger-left-hand.jpg"
              text="Validate your check"
              label="AI Powered"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://prnewswiremedia.files.wordpress.com/2020/05/business-man-1031755_1920.jpg"
              text="Send Checks for business or personal"
              label="Send"
              path="/services"
            />
            <CardItem
              src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              text="Transfer to your bank account"
              label="Transfer"
              path="/products"
            />
            <CardItem
              src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1355&q=80"
              text="Quick & Easy Process"
              label="Speed"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
