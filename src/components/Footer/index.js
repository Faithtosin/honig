import footerLogoImage from "../../media/images/foot-logo.png";
import { Container } from "../Common";
import {
	FooterAddress,
	FooterCopyright,
	FooterCopyrightInfo,
	FooterCopyrightText,
	FooterLogo,
	FooterRow,
	FooterWrap,
	GoToTop,
} from "./FooterElements";

const address = ["89 needham street, suite 2439", "newton, ma 02461", "617-244-7650", "617-510-8738"];

const Footer = () => {
	return (
		<>
			<FooterWrap>
				<Container>
					<FooterRow>
						<FooterLogo src={footerLogoImage} />
						{address.map((item) => {
							return <FooterAddress key={item}>{item}</FooterAddress>;
						})}
					</FooterRow>
				</Container>

				<FooterCopyright>
					<GoToTop onClick={() => window.scrollTo(0, 0)}>⌃</GoToTop>
					<Container>
						<FooterCopyrightInfo>
							<FooterCopyrightText>© 2020 Honig &amp; Associates, Inc.</FooterCopyrightText>
							<FooterCopyrightText>Website by</FooterCopyrightText>
						</FooterCopyrightInfo>
					</Container>
				</FooterCopyright>
			</FooterWrap>
		</>
	);
};

export default Footer;
