import EcoBanner from "../EcoBanner";
import quoteImage from "../../media/images/quote-TAA.jpg";
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
	ContentTitle,
	Bdot,
	ListElementDot,
	List,
	VideoWrapper,
} from "../Common";
import IframeAutoStart from "../IframeAutoStart";

const TheAffordableAdvisorContent = () => {
	const contents = (
		<>
			<MainContent style={{ display: "block" }}>
				<div style={{ overflow: "hidden", maxWidth: "100%" }}>
					<VideoWrapper style={{ marginBottom: "35px" }}>
						<IframeAutoStart videoId={"UAUgacN-5QA"} />
					</VideoWrapper>
				</div>
				<ContentTitle style={{ marginBottom: "8px" }} title={"TAA Program Is A Three Step Process:"} />
				<ListWrap style={{ margin: "0" }}>
					<OrderedList>
						<Paragraph>
							<QuoteImage src={quoteImage} />
						</Paragraph>
						<ListElement>The Enterprise Examination</ListElement>
						<ListElement>A Presentation and Discussion with the CEO and their team</ListElement>
						<ListElement>An Implementation Plan and Periodic Consultation</ListElement>
					</OrderedList>
				</ListWrap>
				<Paragraph style={{ paddingTop: "16px", color: "#388bff" }}>
					<strong>1. The Enterprise Examination</strong>
				</Paragraph>
				<Paragraph style={{ paddingLeft: "16px" }}>
					Our consultation will begin with The Enterprise Examination—a comprehensive look at or a “deep dive” into all
					aspects of your company’s operation. The time required for the Enterprise Examination will, of course, vary,
					but we are usually able to complete it in a month or two, depending on the complexity of the company and the
					quality of information available. Once that research and analysis is completed, we’re ready to take the next
					step with you:
				</Paragraph>
				<Paragraph style={{ color: "#388bff" }}>
					<strong>2. A Presentation and Discussion with the CEO and Others.</strong>
				</Paragraph>
				<Paragraph style={{ paddingLeft: "16px" }}>
					Here we will explain our findings and recommendations: the short and long-term opportunities for improvement
					and the next steps we think will make sense for your company. Our goal will be to help you set and measure
					progress toward realistic, achievable objectives, with several critical questions in mind, <u>for example:</u>
					<Paragraph></Paragraph>
					<Bdot style={{ marginBottom: "16px" }}>
						<List>
							<ListElementDot>
								Do we thoroughly or sufficiently understand our customers and their needs?
							</ListElementDot>
							<ListElementDot>
								Are we providing a value-added service, product, or process that differentiates us from our competition,
								and are we making that difference clear to our customers?
							</ListElementDot>
							<ListElementDot>
								Have we identified any unprofitable customers and/or activities with an eye toward eliminating those to
								improve our profits and cash flow?
							</ListElementDot>
						</List>
					</Bdot>
				</Paragraph>
				<Paragraph>
					At the CEO’s discretion, this discussion may, of course, include other team members, stakeholders, and/or
					influencers.
				</Paragraph>
				<Paragraph style={{ color: "#388bff" }}>
					<strong>3. An Implementation Plan and Periodic Consultation</strong>
				</Paragraph>
				<Paragraph style={{ paddingLeft: "16px" }}>
					Whatever strategies and objectives are agreed, the key to successful implementation is excellent
					communication– among the Advisor, the CEO, and the Team. To ensure successful implementation, will necessitate
					the sharing of information and insights as we:
					<Paragraph></Paragraph>
					<Bdot style={{ marginBottom: "16px" }}>
						<List>
							<ListElementDot>Review the relevant data and conditions</ListElementDot>
							<ListElementDot>Obtain consensus in identifying and defining a problem</ListElementDot>
							<ListElementDot>Collaborate on possible solutions to our problems</ListElementDot>
							<ListElementDot>Reach agreement on the best way to tackle the issues identified.</ListElementDot>
							<ListElementDot>
								Agree on timely sound, practical methods for tracking our progress and reporting.
							</ListElementDot>
						</List>
					</Bdot>
				</Paragraph>
				<div style={{ paddingLeft: "35px" }}>
					<Paragraph style={{ color: "#388bff", fontSize: "90%" }}>
						<strong>A. Periodic Consultations.</strong>
					</Paragraph>
					<Paragraph style={{ paddingLeft: "16px" }}>
						To control costs, build reliable schedules, and keep all team members informed, we schedule remote
						conferences weekly and one on-site meeting per month:
					</Paragraph>
					<Paragraph style={{ color: "#388bff", fontSize: "90%" }}>
						<strong>B. Remote conferences</strong>
					</Paragraph>
					<Paragraph style={{ paddingLeft: "16px" }}>
						For example; We might reserve one hour per week each Monday at 10 AM to:
						<Paragraph></Paragraph>
						<Bdot style={{ marginBottom: "16px" }}>
							<List>
								<ListElementDot>Review and analyze relevant reports and data</ListElementDot>
								<ListElementDot>
									Identify, discuss and reach consensus on resolving any new or continuing issue
								</ListElementDot>
								<ListElementDot>
									Connect with the CEO on any confidential matters he or she may want to discuss
								</ListElementDot>
								<ListElementDot>
									Agree on next steps for implementation, making clear the assignment of individual responsibility for
									carrying out these steps
								</ListElementDot>
								<ListElementDot>Set an agenda for the following week’s conference call.</ListElementDot>
							</List>
						</Bdot>
					</Paragraph>
					<Paragraph style={{ color: "#388bff", fontSize: "90%" }}>
						<strong>C. Monthly on-site meetings:</strong>
					</Paragraph>
					<Paragraph style={{ paddingLeft: "16px" }}>
						For example; We might reserve four hours per month on the first Monday at 10 AM to:
						<Paragraph></Paragraph>
						<Bdot style={{ marginBottom: "16px" }}>
							<List>
								<ListElementDot>Review the company’s monthly trended performance.</ListElementDot>
								<ListElementDot>Measure progress towards the engagement objectives.</ListElementDot>
								<ListElementDot>Provide coaching to teams and team members.</ListElementDot>
								<ListElementDot>Troubleshoot any obstacle to achieving the engagement objectives.</ListElementDot>
								<ListElementDot>Debrief with the CEO and other team members on any other concerns.</ListElementDot>
							</List>
						</Bdot>
					</Paragraph>
				</div>
				<Paragraph>
					<strong style={{ color: "#777777" }}>
						Let’s talk about how The Affordable Advisor Program can help your company achieve your goals.
					</strong>
				</Paragraph>
			</MainContent>
			<ReuseableLink text={"Click here if you would like to start a conversation now"} link={"/contact-us"} />
		</>
	);
	return (
		<>
			<EcoBanner imageUrl={coachingWisdomImg} title="The Affordable Advisor (TAA) Program" />
			<Content prop={contents} />
		</>
	);
};

export default TheAffordableAdvisorContent;
