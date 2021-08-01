import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import FAQContent from "../components/FAQContent";

const FAQ = ({ title }) => {
	useEffect(() => {
		document.title = title;
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