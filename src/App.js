import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about-us";
import Services from "./pages/my-services";
import FAQ from "./pages/faq";
import CoachingWisdom from "./pages/coaching-wisdom";
import Testimonials from "./pages/testimonials";
import ContactUs from "./pages/contact-us";
import NoMatch from "./pages/no-match";
import WhyBusinessesFallShort from "./pages/why-businesses-fall-short-of-their-potential";
import WhyYourCompanyHeadedToWorkOut from "./pages/why-is-your-company-in-or-headed-to-work-out";
import TheTurnAroundSolution from "./pages/the-turnaround-solution-the-path-to-a-successful-turnaround";
import TheAffordableAdvisor from "./pages/the-affordable-advisor-taa-program";

const App = () => {
	return (
		<Switch>
			<Route exact path="/" render={(props) => <Home {...props} title={"Honig"} />} />
			<Route exact path="/about-us" render={(props) => <About {...props} title={"About Me – Honig"} />} />
			<Route exact path="/my-services" render={(props) => <Services {...props} title={"My Services – Honig"} />} />
			<Route exact path="/faq" render={(props) => <FAQ {...props} title={"FAQ – Honig"} />} />
			<Route
				exact
				path="/coaching-wisdom"
				render={(props) => <CoachingWisdom {...props} title={"Coaching Wisdom – Honig"} />}
			/>
			<Route
				exact
				path="/testimonials"
				render={(props) => <Testimonials {...props} title={"Testimonials – Honig"} />}
			/>
			<Route exact path="/contact-us" render={(props) => <ContactUs {...props} title={"Contact Me – Honig"} />} />
			<Route
				exact
				path="/why-businesses-fall-short-of-their-potential"
				render={(props) => (
					<WhyBusinessesFallShort {...props} title={"Why Businesses Fall  Short of their Potential – Honig"} />
				)}
			/>
			<Route
				exact
				path="/why-is-your-company-in-or-headed-to-work-out"
				render={(props) => (
					<WhyYourCompanyHeadedToWorkOut {...props} title={"Why Is Your Company in or Headed to Work-Out? – Honig"} />
				)}
			/>
			<Route
				exact
				path="/the-turnaround-solution-the-path-to-a-successful-turnaround"
				render={(props) => <TheTurnAroundSolution {...props} title={"The Turnaround Solution – Honig"} />}
			/>
			<Route
				exact
				path="/the-affordable-advisor-taa-program"
				render={(props) => <TheAffordableAdvisor {...props} title={"The Affordable Advisor (TAA) Program – Honig"} />}
			/>
			<Route render={(props) => <NoMatch {...props} title={"Page not found – Honig"} />} />
		</Switch>
	);
};

export default App;
