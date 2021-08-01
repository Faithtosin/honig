import EcoBanner from "../EcoBanner";
import coachingWisdomImg from "../../media/images/Coaching-Wisdom-Copy-1.jpg";
import { ReuseableLink, Content, ContentTitle, Paragraph, MainContent } from "../Common";
import Accordion from "../Accordion";

const FAQContent = () => {
	const accordionData = [
		{
			title: (
				<h4>
					<strong>Question: </strong>I’ve heard the term but am not really familiar with “Turnaround” Consultants. What
					should I look for, and how should I choose one? And although I am paying the Turnaround Consultant, is he or
					she really working for the Lender or for me?
				</h4>
			),
			content: (
				<>
					<Paragraph>
						<strong>Answer:</strong> Selecting the right turnaround consultant for your particular situation is not a
						trivial matter. Like lawyers and accountants, many turnaround consultants specialize in the types of clients
						or situations they handle. But probably the most important difference is that some turnaround consultants
						focus solely or primarily on helping the Lender get out from under a loan where the Lender fears a potential
						default by the borrower.
					</Paragraph>
					<Paragraph>
						That is not my approach. My practice focuses on helping my clients stabilize and strengthen their business,
						thereby putting them in a better position with their Lender at the same time. My prime objective is to
						address the root causes of why you may be losing money, why you are running short of cash, how you can chart
						a more profitable course.
					</Paragraph>
					<Paragraph>
						In any case, it’s essential that you have a serious conversation first with any turnaround consultant you’re
						considering, as I invite you to do with me before making any decision. And you would be well-advised to
						speak with some of that consultant’s current or past clients to get a sense of their experience. I am happy
						to provide references.
					</Paragraph>
				</>
			),
		},
		{
			title: (
				<h4>
					<strong>Question: </strong>Instead Of dealing with all the pressures from my current lender, why shouldn’t I
					simply look to refinance with another lender?
				</h4>
			),
			content: (
				<>
					<Paragraph>
						<strong>Answer: </strong>First of all, the window for easy refinancing, given your financial condition, has
						closed significantly and so it’s highly unlikely that you’d be able to refinance on the same (let alone
						better) terms than you have with your current Lender, especially when you consider all the legal and other
						fees associated with any new financing arrangement.
					</Paragraph>
					<Paragraph>
						More importantly, any effort to refinance will take time away from dealing with the business issues that
						gave rise to your Lender’s concerns in the first place. It’s those issues that require urgent attention and
						which, unless thoughtfully addressed, will make matters worse.
					</Paragraph>
				</>
			),
		},
		{
			title: (
				<h4>
					<strong>Question: </strong>Why should I hire a turnaround consultant when I am or will soon be short of cash?
				</h4>
			),
			content: (
				<>
					<Paragraph>
						<strong>Answer: </strong>Your company is in a liquidity squeeze and may also be in a profit squeeze. Unless
						addressed with urgency and specialized expertise, either of these conditions could threaten your company’s
						very survival. The strategies to deal with either of these issues call for more than standard textbook
						strategies for growing or managing a company. Like a heart surgeon or other medical specialist treating a
						sick patient, a good turnaround consultant brings specialized knowledge and experience to put an ailing
						company on the path to recovery. If you want to save your company, it will, especially in the long run, be
						worth your investment.
					</Paragraph>
				</>
			),
		},
		{
			title: (
				<h4>
					<strong>Question: </strong>What differentiates the Turnaround Solution Program from The Affordable Advisor
					Program?
				</h4>
			),
			content: (
				<>
					<Paragraph>
						<strong>Answer: </strong>The main difference is the greater urgency, intensity, and shorter timeframe
						available to execute a successful Turnaround Solution. Both programs share similar analytics, strategies,
						and implementation systems.
					</Paragraph>
				</>
			),
		},
		{
			title: (
				<h4>
					<strong>Question: </strong>What do your services cost, and what's the typical length of engagement
				</h4>
			),
			content: (
				<>
					<Paragraph>
						<strong>Answer: </strong>
					</Paragraph>
					<Paragraph>
						For the{" "}
						<em style={{ color: "#388bff" }}>
							<strong>Affordable Advisor</strong>
						</em>
						, there is a fixed fee for the Enterprise Examination — usually runs at a rate of $1000/million in revenue
						with a $5k minimum, followed by periodic consultations whose frequency we would decide on together.
						Affordable Engagements typically run for years with decreasing frequency.
					</Paragraph>
					<Paragraph>
						For the{" "}
						<em style={{ color: "#388bff" }}>
							<strong>Turnaround Solution</strong>
						</em>
						, I charge by the hour. The cost will vary, of course, with the length of the engagement. The driving issues
						here are the breadth of problems that require resolution and the cooperation and commitment of the team to
						build and achieve the plan. Turnaround Solution engagements typically run from 4 months to 18 months.
					</Paragraph>
				</>
			),
		},
	];
	const contents = (
		<>
			<ContentTitle title={"Some Frequently Asked Questions"} />
			<MainContent style={{ flexDirection: "column" }}>
				{accordionData.map(({ title, content }) => (
					<Accordion title={title} content={content} />
				))}
			</MainContent>
			<ReuseableLink text={"Click here if you would like to start a conversation now"} link={"/contact-us"} />
		</>
	);

	return (
		<>
			<EcoBanner imageUrl={coachingWisdomImg} title="FAQ" />
			<Content prop={contents} />
		</>
	);
};

export default FAQContent;
