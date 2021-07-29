import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeHeroAnimation from "../components/HomeHeroAnimation";
import HomeContent from "../components/HomeContent";
import { useEffect } from "react";

const Home = ({ title }) => {
	useEffect(() => {
		document.title = title;
	}, [title]);

	return (
		<>
			<Header />
			<HomeHeroAnimation />
			<HomeContent />
			<Footer />
		</>
	);
};

export default Home;
