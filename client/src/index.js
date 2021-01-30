import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "twin.macro";
import "./index.css";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<GlobalStyles />
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
