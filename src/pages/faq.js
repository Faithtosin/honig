import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import FAQContent from "../components/FAQContent";

const FAQ = ({ title }) => {
	useEffect(() => {
		document.title = title;
		window.scrollTo(0, 0);
	}, [title]);

	return (
		<>
      <Header />
			<FAQContent />
      <Footer />
		</>
	);
};

export default FAQ;