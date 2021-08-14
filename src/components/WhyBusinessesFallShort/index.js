import EcoBanner from "../EcoBanner";
import coachingWisdomImg from "../../media/images/Coaching-Wisdom-Copy-1.jpg";
import quoteImage from "../../media/images/quotee.png";
import yesimg from "../../media/images/yes.png";
import {
	ReuseableLink,
	Content,
	MainContent,
	Paragraph,
	QuoteImage,
	ListWrap,
	OrderedList,
	ListElement,
	Link,
	VideoWrapper,
	Iframe,
} from "../Common";

const WhyBusinessesFallShortContent = () => {
	const contents = (
		<>
			<MainContent style={{ display: "block" }}>
				<div style={{ overflow: "hidden", maxWidth: "100%" }}>
					<VideoWrapper style={{ marginBottom: "35px" }}>
						<Iframe
							width="900"
							height="506"
							src="https://www.youtube.com/embed/82T1gZBbGjY?rel=0&amp;modestbranding=1&amp;controls=0"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
							allowfullscreen
						></Iframe>
					</VideoWrapper>
				</div>
				<Paragraph>
					<QuoteImage src={quoteImage} />
					No two companies are alike, but whatever industry they may be in and whatever their stage of growth or
					decline, there’s usually little mystery to their struggles and challenges. In my experience, it comes down to
					meeting the critical needs for:
				</Paragraph>
				<ListWrap>
					<OrderedList>
						<ListElement>
							A solid “Team-Based” written business plan that is tracked monthly to actual, that sets forth clear goals
							and detailed strategies for achieving these goals.
						</ListElement>
						<ListElement>A system of clear accountability among staff for achieving these goals.</ListElement>
						<ListElement>
							Meaningful, real-time metrics to quickly spotlight variations in planned performance and the need for
							corrective action.
						</ListElement>
						<ListElement>
							Efficient internal communication protocols that make it easy for managers to share information and engage
							in problem-solving.
						</ListElement>
						<ListElement>
							Efficient external communication protocols that keep stakeholders informed, credit flowing, and the
							company’s credibility ensured.
						</ListElement>
						<ListElement>
							An experienced advisor who can help the CEO formulate, plan, and implement profitable strategies while
							mitigating risk.
						</ListElement>
						<ListElement>
							Perhaps most importantly, a CEO who understands the critical success factors listed above and who is
							willing to share his/her thinking, listen to an honest, constructive assessment of the company, and work
							collaboratively to chart a better course.
						</ListElement>
					</OrderedList>
				</ListWrap>
				<Paragraph>
					To better appreciate what coaching can do for you, be sure to check out the{" "}
					<Link to="/coaching-wisdom">Coaching Wisdom</Link> page, featuring the insights of “real deal” successful
					executives like Bill Belichick, Dr. Atul Gawande, Ram Charan, Marcus Lemonis and Fortune Magazine (“Why
					Two-Thirds of Rapidly Growing Companies Fail”)
				</Paragraph>
				<Paragraph
					style={{
						padding: "0",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						marginBottom: "35px",
					}}
				>
					<QuoteImage style={{ float: "unset", height: "50px" }} src={yesimg}></QuoteImage>
					<Link to="/coaching-wisdom">
						<strong style={{ fontSize: "21px" }}>Yes, Take Me to Coaching Wisdom</strong>
					</Link>
				</Paragraph>
			</MainContent>
			<ReuseableLink text={"Click here if you would like to start a conversation now"} link={"/contact-us"} />
		</>
	);
	return (
		<>
			{/* <EcoBanner imageUrl={coachingWisdomImg} title="Why Businesses Fall Short of their Potential" /> */}
			<Content prop={contents} />
		</>
	);
};

export default WhyBusinessesFallShortContent;
