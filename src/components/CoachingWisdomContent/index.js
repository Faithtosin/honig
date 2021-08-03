import EcoBanner from "../EcoBanner";
import coachingWisdomImg from "../../media/images/Coaching-Wisdom-Copy-1.jpg";
import icebergOfIgnorancePDF from "../../media/pdf/The-Iceberg-of-Ignorance-BobbyAlbert.pdf";
import quoteImage from "../../media/images/quote4-298x300.jpg";
import { ReuseableLink, Content, ContentTitle, MainContent, Paragraph, QuoteImage, ImageWrapper, Image } from "../Common";

const CoachingWisdomContent = () => {
	const style = { marginBottom: "8px" };
	const linkStyle = { padding: "0", textAlign: "unset" };
	const contents = (
		<>
			<ImageWrapper>
				<Image src={coachingWisdomImg} />
			</ImageWrapper>
			<ContentTitle title={"Below are some of the writers and leaders who have inspired me,"} style={style} />
			<ContentTitle title={"so"} style={style} />
			<ContentTitle title={"I enjoy sharing their thoughts with my clients."} />
			<MainContent style={{ display: "block" }}>
				<Paragraph>
					<QuoteImage src={quoteImage} />
					<ReuseableLink
						external={true}
						style={linkStyle}
						text={"Dr. Atul Gawande – Want to get good at something? Get a coach"}
						link={"https://www.ted.com/talks/atul_gawande_want_to_get_great_at_something_get_a_coach"}
					/>
				</Paragraph>
				<Paragraph>
					<q>
						<em>
							Surgeon and public health professor by day, writer by night, Atul Gawande explores how doctors can
							dramatically improve their practice using approaches as simple as a checklist – or coaching.
						</em>
					</q>
				</Paragraph>
				<Paragraph>
					<ReuseableLink
						external={true}
						style={linkStyle}
						text={"Bill Belichick on Leadership, Winning, and Football"}
						link={"https://youtu.be/N2qhLmdpWBI"}
					/>
				</Paragraph>
				<Paragraph>
					<em>
						Coach Belichick, exercises extensive authority over the Patriots’ football operations, effectively making
						him the team’s general manager. He is widely considered to be one of the greatest coaches in NFL history by
						current and former players, his peers, and the press.
					</em>
				</Paragraph>
				<Paragraph>
					<ReuseableLink
						external={true}
						style={linkStyle}
						text={"Marcus Lemonis – 10 Rules for Success"}
						link={"https://youtu.be/Ty0L1rkjl5w"}
					/>
				</Paragraph>
				<Paragraph>
					<q>
						<em>
							Marcus is a businessman, television personality, philanthropist, and politician. He is currently the
							chairman and CEO of Camping World, Good Sam Enterprises, Gander Outdoors, and The House Boardshop….
						</em>
					</q>
				</Paragraph>
				<Paragraph>
					<ReuseableLink
						external={true}
						style={linkStyle}
						text={"Ram Charan – Leadership in The Era of Economic Uncertainty"}
						link={"https://youtu.be/fr7cPVFRtQo"}
					/>
				</Paragraph>
				<Paragraph>
					<em>
						<q>
							He has the rare ability to distill meaningful from meaningless and transfer it to others in a quiet,
							effective way.
						</q>{" "}
						– Jack Welch, former Chairman of GE
					</em>
				</Paragraph>
				<Paragraph>
					<ReuseableLink
						external={true}
						style={linkStyle}
						text={"Why Two-Thirds of the Fastest-Growing Companies Fail"}
						link={
							"https://nam10.safelinks.protection.outlook.com/?url=http%3A%2F%2Ffinance.yahoo.com%2Fnews%2Fwhy-two-thirds-fastest-growing-150004468.html&data=02%7C01%7C%7C0bee00232bf249dc067308d7ebb4d2a9%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C637237034161839299&sdata=nE8JOkymO6NPJmqLS51OPqBXyduMIQCEus%2Fjf7WBQGE%3D&reserved=0"
						}
					/>
				</Paragraph>
				<Paragraph>
					<em>
						Derek Lidow explains this phenomenon in his article from Fortune Magazine, March 7, 2016. Derek teaches
						entrepreneurship, innovation, and creativity at Princeton University.
					</em>
				</Paragraph>
				<Paragraph>
					<ReuseableLink
						external={true}
						style={linkStyle}
						text={"The Iceberg of Ignorance"}
						link={icebergOfIgnorancePDF}
					/>
				</Paragraph>
				<Paragraph>
					<em>
						Sidney Yoshida…
						<q>
							Only 4% of an organization’s front line problems are known by top management, 9% are known by middle
							management, 74% by supervisors, and 100% by employees…
						</q>
					</em>
				</Paragraph>
				<Paragraph>
					<ReuseableLink
						external={true}
						style={linkStyle}
						text={"Mura, Muda  Muri"}
						link={
							"https://www.bing.com/videos/search?q=mura%2c+mudi+%26+muri&docid=607991245059132866&mid=A292B3C75CA8626D4EDFA292B3C75CA8626D4EDF&view=detail&FORM=VIRE"
						}
					/>
				</Paragraph>
				<Paragraph>
					<em>
						Used in Lean thinking, a list of non-value added behaviors (Waste) that, when eliminated, will improve
						customer satisfaction while increasing throughput, …resulting in increased profits and cash flow.
					</em>
				</Paragraph>
				<Paragraph>
					<ReuseableLink
						external={true}
						style={linkStyle}
						text={"Managing Complex Change"}
						link={"https://johnathonjones.files.wordpress.com/2015/09/change.jpg?w=1200"}
					/>
				</Paragraph>
				<Paragraph>
					<em>
						<q>
							“..there are five elements required for effective change: vision, skills, incentives, resources, and an
							action plan. If those leading change fail to put any one of these elements in place, then the change
							efforts will fail.
						</q>
					</em>
				</Paragraph>
			</MainContent>
			<ReuseableLink text={"Click here if you would like to start a conversation now"} link={"/contact-us"} />
		</>
	);
	return (
		<>
			<EcoBanner imageUrl={coachingWisdomImg} title="Coaching Wisdom" />
			<Content prop={contents} />
		</>
	);
};

export default CoachingWisdomContent;
