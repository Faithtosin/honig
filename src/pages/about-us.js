import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import AboutUsContent from "../components/AboutUsContent";

const About = ({ title }) => {
	useEffect(() => {
		document.title = title;
		window.scrollTo(0, 0);
	}, [title]);

	return (
		<>
      <Header />
			<AboutUsContent />
      <Footer />
		</>
	);
};

export default About;