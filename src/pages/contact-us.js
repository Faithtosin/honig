import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import ContactUsContent from "../components/ContactUsContent";

const ContactUs = ({ title }) => {
	useEffect(() => {
		document.title = title;
	}, [title]);

	return (
		<>
      <Header />
			<ContactUsContent />
      <Footer />
		</>
	);
};

export default ContactUs;