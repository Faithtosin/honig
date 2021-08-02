import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import CoachingWisdomContent from "../components/CoachingWisdomContent";

const CoachingWisdom = ({ title }) => {
	useEffect(() => {
		document.title = title;
		window.scrollTo(0, 0);
	}, [title]);

	return (
		<>
      <Header />
			<CoachingWisdomContent />
      <Footer />
		</>
	);
};

export default CoachingWisdom;