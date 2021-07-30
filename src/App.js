import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about-us";
import Services from "./pages/my-services";

const App = () => {
	return (
		<Switch>
			<Route exact path="/" render={(props) => <Home {...props} title={"Honig"} />} />
			<Route exact path="/about-us" render={(props) => <About {...props} title={"About Me - Honig"} />} />
			<Route exact path="/my-services" render={(props) => <Services {...props} title={"My Services - Honig"} />} />
		</Switch>
	);
};

export default App;
