import Header from "../components/Header";
import Footer from "../components/Footer";
import NoMatchContent from "../components/NoMatchContent";
import { useEffect } from "react";

const NoMatch = ({ title }) => {
	useEffect(() => {
		document.title = title;
		window.scrollTo(0, 0);
	}, [title]);

	return (
		<>
			<Header />
      <NoMatchContent />
			<Footer />
		</>
	);
};

export default NoMatch;