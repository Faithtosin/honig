import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import ServicesContent from "../components/ServicesContent";

const Services = ({ title }) => {
	useEffect(() => {
		document.title = title;
		window.scrollTo(0, 0);
	}, [title]);

	return (
		<>
      <Header />
			<ServicesContent />
      <Footer />
		</>
	);
};

export default Services;