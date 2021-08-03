import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import WhyYourCompanyHeadedToWorkOutContent from "../components/WhyYourCompanyHeadedToWorkOut";

const WhyYourCompanyHeadedToWorkOut = ({ title }) => {
	useEffect(() => {
		document.title = title;
    window.scrollTo(0, 0);
	}, [title]);

	return (
		<>
      <Header />
			<WhyYourCompanyHeadedToWorkOutContent />
      <Footer />
		</>
	);
};

export default WhyYourCompanyHeadedToWorkOut;