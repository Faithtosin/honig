import { ReuseableLink, Container, Paragraph, Link, Bdot, List, ListElementDot } from "../Common";
import { ContentWrap, H2, StrongTitle, TextWrap, H4, ContentElement, Strong } from "./HomeContentElements";

const HomeContent = () => {
	return (
		<>
			<ContentWrap>
				<Container>
					<TextWrap>
						<H2>
							Ross G. Honig,<StrongTitle>cpa</StrongTitle>
						</H2>
						<H4>experienced. insightful. innovative. with a track record to match!</H4>
						<ContentElement>
							<Paragraph>
								What I love about these accolades is that my clients saw how the results of my work and leadership
								helped them survive and prosper.
							</Paragraph>
							<Paragraph>
								Furthermore, they all shared a fascinating pattern. As prospective clients, they had all resisted the
								idea of obtaining help from a professional with a unique set of skills. And sometimes in the heat of
								battle – or later, while relaxing with a beer or a bourbon – they explained why they had been so
								resistant to accept the help:
							</Paragraph>
							<Bdot>
								<List>
									<ListElementDot>
										Cash was tight, and they were losing money…hiring a consultant seemed utterly out of the question.
									</ListElementDot>
									<ListElementDot>
										They could not imagine what a complete outsider would have to contribute since they knew their
										business best.
									</ListElementDot>
									<ListElementDot>Things were just too chaotic to give this even a thought.</ListElementDot>
								</List>
							</Bdot>
							<Paragraph>
								<Strong>
									My guess is you may have similar feelings. So, I invite you to spend a few minutes exploring my:
								</Strong>
							</Paragraph>
							<Bdot>
								<List>
									<ListElementDot>
										<Link to="/why-businesses-fall-short-of-their-potential">Thoughts on “Why Businesses Fall Short of their Potential“</Link>
									</ListElementDot>
									<ListElementDot>
										<Link to="/my-services">Services</Link>
									</ListElementDot>
									<ListElementDot>
										<Link to="/faq">FAQs</Link>
									</ListElementDot>
								</List>
							</Bdot>
							<Paragraph>
								Then let’s have a short, confidential conversation, at no obligation, so I can learn what your
								challenges are and suggest the ways I could help.
							</Paragraph>
							<ReuseableLink text={"Click here if you would like to start a conversation now"} link={"/contact-us"} />
						</ContentElement>
					</TextWrap>
				</Container>
			</ContentWrap>
		</>
	);
};

export default HomeContent;
