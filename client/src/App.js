import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Steps from "./components/Steps";
import Upload from "./components/Upload";

function App() {
	return (
		<div className="App">
			<Nav />
			<Header />
			<Banner />
			<Steps />
			<Upload />
		</div>
	);
}

export default App;
