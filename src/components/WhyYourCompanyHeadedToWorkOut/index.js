import EcoBanner from "../EcoBanner";
import quoteImage from "../../media/images/quote2.jpg";
import coachingWisdomImg from "../../media/images/Coaching-Wisdom-Copy-1.jpg";
import whyYourCompanyImg from "../../media/images/Why-Is-Your-Company-in-or-Headed-to-Work-out.jpg";
import {
	ReuseableLink,
	Content,
	MainContent,
	Paragraph,
	QuoteImage,
	Bdot,
	ListElementDot,
	List,
	Link,
	Image,
	ImageWrapper,
} from "../Common";

const WhyBusinessesFallShortContent = () => {
	const contents = (
		<>
			<MainContent style={{ display: "block" }}>
				<ImageWrapper>
					<Image src={whyYourCompanyImg} />
				</ImageWrapper>
				<Paragraph>
					<QuoteImage src={quoteImage} />
					<strong style={{ color: "#388bff" }}>
						If your Lender has asked you to consult with a turnaround specialist
					</strong>
					, it’s because they perceive your company may be headed for serious trouble, which could impair the Lender’s
					ability to recover their loan. Here are some examples of events that could trigger your Lender’s concern: do
					any of these ring a bell?
				</Paragraph>
				<Bdot>
					<List>
						<ListElementDot>
							<strong style={{ color: "#388bff" }}>A Credibility Gap–</strong>Either the Lender has misunderstood the
							company’s condition, or the borrower does not comprehend or is not addressing the Lender’s concerns.
						</ListElementDot>
						<ListElementDot>
							<strong style={{ color: "#388bff" }}>A Liquidity Gap–</strong>whether or not the company is profitable, an
							event or series of events has occurred which has strained working capital resources.
						</ListElementDot>
						<ListElementDot>
							<strong style={{ color: "#388bff" }}>Permanent Impairment–</strong>Profits have declined, and the company
							appears not to have any viable plan to mitigate; the company is approaching or has entered a liquidity
							crisis.
						</ListElementDot>
						<ListElementDot>
							<strong style={{ color: "#388bff" }}>Loss of Confidence in Management–</strong>Management is consistently
							unable to meet projections or adhere to a plan or has no real plan. The company may not have accurate
							interim reporting, and unfavorable surprises arise too frequently. Communication between the Lender and
							the company may be strained.
						</ListElementDot>
					</List>
				</Bdot>
				<Paragraph>
					For the Lender, these are all “warning signs,” which many companies fail to recognize as the cause of their
					Lender’s concern. And even if they do, they may not be aware of how to address these issues to the Lender’s
					satisfaction. Your Lender’s fears usually stem from reviewing financial reports (accurate or not) and
					borrowing base certificates. Worse, some Lenders may not receive any updated business plans or timely
					financial statements at all.
				</Paragraph>
				<Paragraph>
					Whatever their underlying cause, any of these circumstances give the Lender reason for heightened concern,
					possibly indicating fundamental weaknesses in the company, which of course, would jeopardize the Lender’s
					collateral position. That is when a rapid response with a sound plan of action for repairing the banking
					relationship becomes paramount.
				</Paragraph>
				<Paragraph>
					The data that your Lender may see are only warning signs or symptoms. Seldom does the Lender understand the{" "}
					<u>root causes</u> of these symptoms, which usually involve problems with the company’s operations, planning,
					and other management activities.{" "}
					<Link to="/the-turnaround-solution-the-path-to-a-successful-turnaround">
						Join me on The Path to a Successful Turnaround
					</Link>
				</Paragraph>
			</MainContent>
			<ReuseableLink text={"Click here if you would like to start a conversation now"} link={"/contact-us"} />
		</>
	);
	return (
		<>
			<EcoBanner imageUrl={coachingWisdomImg} title="Why Is Your Company in or Headed to Work-Out?" />
			<Content prop={contents} />
		</>
	);
};

export default WhyBusinessesFallShortContent;
