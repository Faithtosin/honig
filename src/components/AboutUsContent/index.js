import EcoBanner from "../EcoBanner";
import coachingWisdomImg from "../../media/images/Coaching-Wisdom-Copy-1.jpg";
import portraitImage from "../../media/images/Terrace-with-trees-684x1024.jpg";
import { ContactBottomLink, Content } from "../Common";
import {
	AboutTitle,
	H2,
	ImageWrapper,
	MainContent,
	Paragraph,
	PortraitImage,
	TextWrapper,
} from "./AboutUsContentElement";

const AboutUsContent = () => {
	const contents = (
		<>
			<AboutTitle>
				<H2>Helping Companies Beat Their Business Challenges</H2>
			</AboutTitle>
			<MainContent>
				<ImageWrapper>
					<PortraitImage src={portraitImage} />
				</ImageWrapper>
				<TextWrapper>
					<Paragraph>
						President of Honig &amp; Associates, Inc., Ross has provided services to clients not only as their trusted
						Turnaround Consultant but also, as their interim CEO, COO, and/or CFO. Prior to starting his practice, Ross
						held similar positions in the private sector. He has served over 250 clients diverse in size, age, and
						industry sector.
					</Paragraph>
					<Paragraph>
						Ross’s clients frequently are very concerned about the fragility of their banking relationships. On their
						behalf, he has negotiated new, more favorable terms with well over 100 lending institutions, domestic &amp;
						foreign. These credit facilities have ranged from small and straightforward of less than one million dollars
						to large and complex syndicated facilities of over one billion dollars.
					</Paragraph>
					<Paragraph>
						Ross’s work as a CPA at a well-known national CPA firm allowed him to observe the strategies and tactics
						employed by C-Level executives in a broad range of industries. He learned why certain strategies worked,
						while others did not work. And with those insights, he developed ways of using numbers as tools to improve
						business operations.
					</Paragraph>
					<Paragraph>
						But, it’s not only about the numbers. Ross also understands the importance of leadership, planning, and
						teamwork. With each client team, he shares both his analytical skills and his broad understanding of
						operations, finance, and process to tailor and implement practical, creative solutions that the team builds,
						owns and is excited to execute.
					</Paragraph>
				</TextWrapper>
			</MainContent>
      <ContactBottomLink />
		</>
	);

	return (
		<>
			<EcoBanner imageUrl={coachingWisdomImg} title="About Me" />
			<Content prop={contents} />
		</>
	);
};

export default AboutUsContent;
