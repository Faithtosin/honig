import EcoBanner from "../EcoBanner";
import ecoInnerpageImg from "../../media/images/eco_innerpage_banner_bg.jpg";
import { ReuseableLink, Content, ContentTitle, MainContent, Paragraph } from "../Common";
import { ToHomeWrapper, ToHomeLink } from "./NoMatchContentElements";

const NoMatchContent = () => {
	const titleStyle = { fontSize: "90px", fontWeight: "bold" };
	const paragraphStyle = { maxWidth: "363px", margin: "0 auto 30px", textAlign: "center", color: "#acacac" };
	const title = (
		<>
			<span style={{ color: "#acacac", ...titleStyle }}>ERROR </span>
			<span style={titleStyle}>404!</span>
		</>
	);
	const contents = (
		<>
			<MainContent style={{ display: "block" }}>
				<ContentTitle title={title} />
				<Paragraph style={paragraphStyle}>
					Sorry The Page You Are Looking For Have Been Removed, Had Its Name Changed, Or Is Temporarily Unavailable.
				</Paragraph>
				<ToHomeWrapper>
					<ToHomeLink to={"/"}>RETURN TO HOME</ToHomeLink>
				</ToHomeWrapper>
			</MainContent>
			<ReuseableLink text={"Click here if you would like to start a conversation now"} link={"/contact-us"} />
		</>
	);
	return (
		<>
			<EcoBanner imageUrl={ecoInnerpageImg} title="404 ERROR PAGE" />
			<Content prop={contents} />
		</>
	);
};

export default NoMatchContent;
