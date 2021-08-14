import EcoBanner from "../EcoBanner";
import coachingWisdomImg from "../../media/images/Coaching-Wisdom-Copy-1.jpg";
import { ReuseableLink, Content, MainContent, Paragraph, H3, ContentTitle } from "../Common";
import { ContactWrap, ContactInfoWrap, ContactFormWrap } from "./ContactUsContentElements";
import ContactForm from "../ContactForm";

const ContactUsContent = () => {
	const pStyle = { display: "flex" };
	const linkStyle = { padding: "0" };
	const inputElements = [
		{ placeholder: "Name" },
		{ placeholder: "Email" },
		{ placeholder: "Phone" },
		{ placeholder: "Subject" },
		{ placeholder: "Message", textarea: true },
	];
	const contents = (
		<>
			<MainContent style={{ display: "block" }}>
				<ContactWrap>
					<ContactInfoWrap>
						<H3 style={{ marginBottom: "35px" }}>CONTACT INFO</H3>
						<Paragraph>89 Needham Street, Suite 2439</Paragraph>
						<Paragraph>Newton, MA 02461</Paragraph>
						<Paragraph style={pStyle}>
							Email:&nbsp;
							<ReuseableLink style={linkStyle} text={"ross29@msn.com"} link={"mailto:ross29@msn.com"} external={true} />
						</Paragraph>
						<Paragraph style={pStyle}>
							Phone:&nbsp;
							<ReuseableLink style={linkStyle} text={"617-244-7650"} link={"tel:617-244-7650"} external={true} />
						</Paragraph>
						<Paragraph style={pStyle}>
							Cell: &nbsp;
							<ReuseableLink style={linkStyle} text={"617-510-8738"} link={"tel:617-510-8738"} external={true} />
						</Paragraph>
					</ContactInfoWrap>
					<ContactFormWrap>
						<ContentTitle
							style={{ marginBottom: "8px" }}
							title={"Please Complete This Form, and I Will Contact You ASAP."}
						/>
						<ContactForm inputElements={inputElements} />
					</ContactFormWrap>
				</ContactWrap>
			</MainContent>
			<ReuseableLink text={"Click here if you would like to start a conversation now"} link={"/contact-us"} />
		</>
	);
	return (
		<>
			{/* <EcoBanner imageUrl={coachingWisdomImg} title="Contact Me" /> */}
			<Content prop={contents} />
		</>
	);
};

export default ContactUsContent;
