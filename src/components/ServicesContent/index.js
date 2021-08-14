import EcoBanner from "../EcoBanner";
import coachingWisdomImg from "../../media/images/Coaching-Wisdom-Copy-1.jpg";
import quoteImage from "../../media/images/quote1.jpg";
import {
	ReuseableLink,
	Content,
	ContentTitle,
	MainContent,
	Paragraph,
	QuoteImage,
	ListElement,
	ListWrap,
	OrderedList,
	Iframe,
	VideoWrapper,
	H3,
} from "../Common";

const ServicesContent = () => {
	const contents = (
		<>
			<MainContent style={{ display: "block" }}>
				<div style={{ overflow: "hidden", maxWidth: "100%" }}>
					<VideoWrapper>
						<Iframe
							width="900"
							height="506"
							src="https://www.youtube.com/embed/JnuEtCuy8lE?playlist=JnuEtCuy8lE&amp;autoplay=1&amp;loop=1&amp;controls=0&amp;rel=0"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></Iframe>
					</VideoWrapper>
				</div>
				<Paragraph>&nbsp;</Paragraph>
				<ContentTitle style={{ marginBottom: "8px" }} title={"We’re Here to Help"} />
				<H3 style={{ marginBottom: "35px", textAlign: "center" }}>
					How’s Business? Is Your Company Meeting Its Challenges?
				</H3>
				<Paragraph>
					<QuoteImage src={quoteImage} />
					As a consultant and hands-on advisor, drawing on my background as a CPA, CEO, COO, &amp; CFO, with many years
					of experience advising clients, I work closely with CEOs and their teams to analyze the root causes of
					problems and develop and implement practical solutions that work! I also have learned that successful
					problem-solving flows from building and fostering trust and teamwork among the CEO, the company associates,
					and me.
				</Paragraph>
				<Paragraph>
					My clients represent a broad range of industries, including high tech, communications, manufacturing,
					distribution, food service, logistics, commercial &amp; residential real estate construction &amp;
					development, technical staffing, entertainment, and fiber optic construction– just to name a few industries.
				</Paragraph>
				<Paragraph>
					<u>Notably, I’ve also worked with many clients’ lenders.</u> When clients find themselves in a “turnaround” or
					“work-out,” I’ve successfully negotiated on their behalf and repaired their credit facilities. Throughout my
					career, I have negotiated with well over one hundred lenders, foreign and domestic, repairing large, complex
					credit facilities as well as small and simple credit facilities.
				</Paragraph>
				<Paragraph>I offer two services:</Paragraph>
				<Paragraph style={{ color: "#388bff" }}>
					<strong>The Turnaround Solution –</strong> for companies in or approaching severe financial distress that:
				</Paragraph>
				<ListWrap>
					<OrderedList>
						<ListElement>are or may be soon assigned to their lenders Work-out Department</ListElement>
						<ListElement>might be incurring substantial losses</ListElement>
						<ListElement>are experiencing tight or negative cash flow</ListElement>
						<ListElement>their business strategy is not working</ListElement>
					</OrderedList>
				</ListWrap>
				<ReuseableLink
					style={{ padding: "0", marginBottom: "16px" }}
					text={"Learn more about The Turnaround Solution"}
					link={"/the-turnaround-solution-the-path-to-a-successful-turnaround"}
				/>
				<Paragraph style={{ color: "#388bff" }}>
					<strong>The Affordable Advisor (TAA) program –</strong> for companies that:
				</Paragraph>
				<ListWrap>
					<OrderedList>
						<ListElement>
							are experiencing rapid growth and need better strategies for managing and sustaining that growth
						</ListElement>
						<ListElement>are experiencing year over year declines in revenue or profit</ListElement>
						<ListElement>are doing reasonably well but would like to do better!</ListElement>
					</OrderedList>
				</ListWrap>
				<ReuseableLink
					style={{ padding: "0", marginBottom: "16px" }}
					text={"Learn more about TAA"}
					link={"/the-affordable-advisor-taa-program"}
				/>
				<Paragraph style={{ marginBottom: "35px" }}>
					Still, wondering about the value of a coach? Listen to Harvard Medical School Trained Surgeon &amp; Biden
					Covid Task Force Member, Atul Gawande:
				</Paragraph>
				<VideoWrapper style={{width:"100%", left:"unset"}}>
					<Iframe
						width="900"
						height="506"
						src="https://www.youtube.com/embed/oHDq1PcYkT4?rel=0&amp;modestbranding=1"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
						allowfullscreen
					></Iframe>
				</VideoWrapper>
			</MainContent>
			<ReuseableLink text={"Click here if you would like to start a conversation now"} link={"/contact-us"} />
		</>
	);
	return (
		<>
			{/* <EcoBanner imageUrl={coachingWisdomImg} title="My Services" /> */}
			<Content prop={contents} />
		</>
	);
};

export default ServicesContent;
