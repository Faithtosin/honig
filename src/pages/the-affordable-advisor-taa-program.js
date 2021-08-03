import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import TheAffordableAdvisorContent from "../components/TheAffordableAdvisor";

const TheAffordableAdvisor = ({ title }) => {
	useEffect(() => {
		document.title = title;
    window.scrollTo(0, 0);
	}, [title]);

	return (
		<>
      <Header />
			<TheAffordableAdvisorContent />
      <Footer />
		</>
	);
};

export default TheAffordableAdvisor;