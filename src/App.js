import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about-us";
import Services from "./pages/my-services";
import FAQ from "./pages/faq"
import CoachingWisdom from "./pages/coaching-wisdom";
import Testimonials from "./pages/testimonials"
import ContactUs from "./pages/contact-us";

const App = () => {
	return (
		<Switch>
			<Route exact path="/" render={(props) => <Home {...props} title={"Honig"} />} />
			<Route exact path="/about-us" render={(props) => <About {...props} title={"About Me - Honig"} />} />
			<Route exact path="/my-services" render={(props) => <Services {...props} title={"My Services - Honig"} />} />
			<Route exact path="/faq" render={(props) => <FAQ {...props} title={"FAQ - Honig"} />} />
			<Route exact path="/coaching-wisdom" render={(props) => <CoachingWisdom {...props} title={"Coaching Wisdom - Honig"} />} />
			<Route exact path="/testimonials" render={(props) => <Testimonials {...props} title={"Testimonials - Honig"} />} />
			<Route exact path="/contact-us" render={(props) => <ContactUs {...props} title={"Contact Me - Honig"} />} />
		</Switch>
	);
};

export default App;
