import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import TheTurnAroundSolutionContent from "../components/TheTurnAroundSolution";

const TheTurnAroundSolution = ({ title }) => {
	useEffect(() => {
		document.title = title;
    window.scrollTo(0, 0);
	}, [title]);

	return (
		<>
      <Header />
			<TheTurnAroundSolutionContent />
      <Footer />
		</>
	);
};

export default TheTurnAroundSolution;