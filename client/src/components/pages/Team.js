import React from "react";
import "../../App.css";
import "../Team.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import leesel from "../images/leesel.png";
import shaf from "../images/shaf.png";
import ayman from "../images/ayman.png";
import julian from "../images/julian.png";
import jahaziel from "../images/jah.png";

export default function Team() {
	const github = <FontAwesomeIcon icon={faGithub} />;
	const linkedIn = <FontAwesomeIcon icon={faLinkedin} />;
	return (
		<div className="team">
			<h1>Team</h1>
			<div className="avatar">
				<div className="role">
					<img src={leesel} alt="profile" />
					<h3>Front End Engineer</h3>
					<a href="https://github.com/leesel">{github}</a>
					<a href="https://www.linkedin.com/in/leesel/">{linkedIn}</a>
				</div>
				<div className="role">
					<img src={jahaziel} alt="profile" />
					<h3>UI UX Engineer</h3>
					<a href="https://github.com/blaquebeardcoder">{github}</a>
					<a href="https://www.linkedin.com/in/jahazielbenisrael/">{linkedIn}</a>
				</div>
				<div className="role">
					<img src={shaf} alt="profile" />
					<h3>Front End Engineer</h3>
					<a href="https://github.com/shafeeshafee">{github}</a>
					<a href="https://www.linkedin.com/in/shafeelinks/">{linkedIn}</a>
				</div>
				<div className="role">
					<img src={julian} alt="profile" />
					<h3>Full Stack Engineer</h3>
					<a href="https://github.com/HaxagonusD">{github}</a>
					<a href="https://www.linkedin.com/in/julian-q-379184ba/">{linkedIn}</a>
				</div>
				<div className="role">
					<img src={ayman} alt="profile" />
					<h3>Full Stack Engineer</h3>
					<a href="https://github.com/aymanjebril2">{github}</a>
					<a href="https://www.linkedin.com/in/ayman-omer-b2429b1ab/">{linkedIn}</a>
				</div>
			</div>
			<h1>Purpose</h1>
			<div className="purpose">
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur nisi eveniet quo sit repellat optio labore sint blanditiis. Nemo
					labore maiores commodi omnis ullam eligendi dolorum dolore, asperiores praesentium rem?
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere autem dicta iure sapiente architecto mollitia voluptates earum,
					excepturi sint aspernatur velit? Amet distinctio corrupti minima velit et quaerat rem maiores?
				</p>
			</div>
		</div>
	);
}
