import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import TestimonialsContent from "../components/TestimonialsContent";

const Testimonials = ({ title }) => {
	useEffect(() => {
		document.title = title;
		window.scrollTo(0, 0);
	}, [title]);

	return (
		<>
      <Header />
			<TestimonialsContent />
      <Footer />
		</>
	);
};

export default Testimonials;