import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import WhyBusinessesFallShortContent from "../components/WhyBusinessesFallShort";

const WhyBusinessesFallShort = ({ title }) => {
	useEffect(() => {
		document.title = title;
    window.scrollTo(0, 0);
	}, [title]);

	return (
		<>
      <Header />
			<WhyBusinessesFallShortContent />
      <Footer />
		</>
	);
};

export default WhyBusinessesFallShort;