import "../css/Steps.css";

export default function Steps() {
	return (
		<div className="steps">
			<>
			<h1>You click a few times. <br />We do the harder stuff.</h1>
				<img src="https://www.svgrepo.com/show/198326/analysis.svg" alt="" />
			</>
			<>
				<ul>
					<li><span className="number-order">1 -</span> Click the check button</li>
					<li><span className="number-order">2 -</span> Upload your check image</li>
					<li><span className="number-order">3 -</span> Your check information: delivered!</li>
				</ul>
			</>
		</div>
	);
}
