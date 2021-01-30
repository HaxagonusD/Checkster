import "../css/Banner.css";
import Upload from "./Upload";

export default function Banner() {
	return (
		<div className="banner">
			<h1>Reading checks. Made easy</h1>
			<h4>upload a check image to begin</h4>
			<Upload />
		</div>
	);
}
