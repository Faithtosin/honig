import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import ServicesContent from "../components/ServicesContent";

const Services = ({ title }) => {
	useEffect(() => {
		document.title = title;
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