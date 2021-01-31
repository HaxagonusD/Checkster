import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Results from "./components/Results";

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/results" component={Results} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
