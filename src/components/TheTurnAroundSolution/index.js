import EcoBanner from "../EcoBanner";
import quoteImage from "../../media/images/quote3.jpg";
import coachingWisdomImg from "../../media/images/Coaching-Wisdom-Copy-1.jpg";
import {
	ReuseableLink,
	Content,
	MainContent,
	Paragraph,
	QuoteImage,
	ListWrap,
	OrderedList,
	ListElement,
	H3,
	VideoWrapper,
} from "../Common";
import IframeAutoStart from "../IframeAutoStart";

const TheTurnAroundSolutionContent = () => {
	const contents = (
		<>
			<MainContent style={{ display: "block" }}>
				<div style={{ overflow: "hidden", maxWidth: "100%" }}>
					<VideoWrapper style={{ marginBottom: "35px" }}>
						<IframeAutoStart videoId={"9ri8wH1jSjg"} />
					</VideoWrapper>
				</div>
				<H3 style={{ textAlign: "center" }}>Working Closely With You And Your Team, We Will:</H3>
				<Paragraph>&nbsp;</Paragraph>
				<ListWrap>
					<OrderedList>
						<QuoteImage src={quoteImage} />
						<ListElement>Open an honest, constructive dialogue with the CEO and their team.</ListElement>
						<ListElement>
							Build a 13-week survival plan and obtain buy-in from the Owners, Lender(s), and other impacted
							stakeholders.
						</ListElement>
						<ListElement>
							Track the plan consistently and discuss course corrections with the team to ensure success.
						</ListElement>
						<ListElement>
							Analyze the relevant data, discuss findings with the team, and determine which issues need the most urgent
							attention.
						</ListElement>
						<ListElement>
							Develop or overhaul the Turnaround plan, creating a practical strategy to address these issues.
						</ListElement>
						<ListElement>Assist the team in implementing the new or overhauled plan.</ListElement>
						<ListElement>
							<div>
								Help design and implement a rigorous <u>internal</u>, real-time reporting system to assure success
							</div>
						</ListElement>
						<ListElement>
							<div>
								Help design and implement a tailored <u>external</u> reporting system that informs all impacted
								stakeholders.
							</div>
						</ListElement>
						<ListElement>Work with you to repair your relationship with your Lender.</ListElement>
					</OrderedList>
				</ListWrap>
			</MainContent>
			<ReuseableLink text={"Click here if you would like to start a conversation now"} link={"/contact-us"} />
		</>
	);
	return (
		<>
			<EcoBanner imageUrl={coachingWisdomImg} title="The Turnaround Solution" />
			<Content prop={contents} />
		</>
	);
};

export default TheTurnAroundSolutionContent;
