import React from "react";

export default function Results(props) {
	return (
		<div>
			<h1>Results Page</h1>
			<div className="">
				<h4>{props.isValid}</h4>
				<h4>{props.checkImage}</h4>
			</div>
		</div>
	);
}

/*

- is Valid?
	- we'll display check mark
	- if not, say invalid/void
- bank check image

*/
