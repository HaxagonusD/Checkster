/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<div tw="flex flex-row justify-between bg-header text-center p-7">
			<h3>Logo</h3>

			<ul tw="flex flex-row justify-end">
				<Link to="/">
					<li tw="mx-8">Home</li>
				</Link>
				<Link tw="mx-8" to="/about">
					<li>About</li>
				</Link>
			</ul>
		</div>
	);
}
