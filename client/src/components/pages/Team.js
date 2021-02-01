import React from "react";
import "../../App.css";
import "../Team.css";

import leesel from '../images/leesel.png'
import shaf from '../images/shaf.png'
import ayman from '../images/ayman.png'
import julian from '../images/julian.png'
import jahaziel from '../images/jah.png'


export default function Team() {
	return (
		<div className="team">
			<h1>Team</h1>
			<div className="avatar">
				<div className="role">
					<img src={leesel} alt="profile"/>
					<h3>Front End Engineer</h3>
				</div>
				<div className="role">
					<img src={jahaziel} alt="profile"/>
					<h3>UI UX Engineer</h3>
				</div>
				<div className="role">
					<img src={shaf} alt="profile"/>
					<h3>Front End Engineer</h3>
				</div>
				<div className="role">
					<img src={julian} alt="profile"/>
					<h3>Full Stack Engineer</h3>
				</div>
				<div className="role">
					<img src={ayman} alt="profile"/>
					<h3>Full Stack Engineer</h3>
				</div>
			</div>
			<h1>Purpose</h1>
			<div className="purpose">
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur nisi eveniet quo sit repellat optio labore sint blanditiis. Nemo labore maiores commodi omnis ullam eligendi dolorum dolore, asperiores praesentium rem?</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere autem dicta iure sapiente architecto mollitia voluptates earum, excepturi sint aspernatur velit? Amet distinctio corrupti minima velit et quaerat rem maiores?</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id porro in omnis placeat sequi provident dolor a optio ipsam eius tempore asperiores eaque debitis, deleniti adipisci! Temporibus illo suscipit at.</p>
			</div>
		</div>
	);
}
