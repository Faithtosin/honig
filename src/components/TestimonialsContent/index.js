import EcoBanner from "../EcoBanner";
import ecoInnerpageImg from "../../media/images/eco_innerpage_banner_bg.jpg";
import { ReuseableLink, Content, MainContent, Paragraph, H3 } from "../Common";

const TestimonialsContent = () => {
	const contents = (
		<>
			<MainContent style={{ display: "block" }}>
				<H3>
					<strong>CEO (Designs, Manufactures And Distributes LED Green Lighting Solutions)</strong>
				</H3>
				<Paragraph>Hi, Ross,</Paragraph>
				<Paragraph>
					Thank you so much for taking me as a student I have thoroughly enjoyed our work together…not only I
					appreciated you as a turnaround consultant, but more importantly, I really admire you as a great mentor.
				</Paragraph>
				<Paragraph>
					I can’t believe it has been a full year since you started the Examination engagement back on December 12 last
					year. There is no question that working together, we have made remarkable results in turning-around our
					overall operation. The financial structure and management process that you have instilled in our companies and
					me is priceless
				</Paragraph>
				<Paragraph>&nbsp;</Paragraph>
				<H3>
					<strong>CEO (Solar Power Systems Integrator)</strong>
				</H3>
				<Paragraph>
					Hi Ross, this is a fantastic outcome. I really appreciate your wise counsel and friendship.
				</Paragraph>
				<Paragraph>&nbsp;</Paragraph>
				<H3>
					<strong>CEO (Steel Service Center Metal Importer Broker)</strong>
				</H3>
				<Paragraph>
					Ross Honig’s style is creative, imaginative, brilliant, and successful. I have worked with Ross twice during
					the last eight years, and both times the result was very positive for our company and me personally. Ross
					works with companies who are in precarious situations, and he knows how to negotiate very diplomatically. With
					his knowledge of financial restructuring and his experience with creditors, lawyers, and bankers, Ross creates
					a ‘win-win’ environment.
				</Paragraph>
				<Paragraph>&nbsp;</Paragraph>
				<H3>
					<strong>CEO (Temporary IT Staffing &amp; Training Company)</strong>
				</H3>
				<Paragraph>
					Ross came in and effectively guided and led our executive group through extremely turbulent times enabling us
					to survive and turn the company around. He enabled us to drill to see where the problems were and how to
					correct them. He provided expertise in negotiating with our lenders and other key parties, such as our
					investors, attorneys, and landlord. I highly recommend his services, especially to those who are waking up in
					the middle of the night, trying to figure out how to turn around their company
				</Paragraph>
				<Paragraph>&nbsp;</Paragraph>
				<H3>
					<strong>CFO (Diversified Technology Services Rollup)</strong>
				</H3>
				<Paragraph>
					Ross is the true professional – he utilizes his vast experience to combine process improvement,
					accountability, creativity, and teamwork to implement strategies that both his clients and the financial
					community embrace. When he completes a project, he has left behind a much stronger and confident company. He
					has enormous respect from his clients. I still utilize a number of techniques I watched Ross use so
					successfully.
				</Paragraph>
				<Paragraph>&nbsp;</Paragraph>
				<H3>
					<strong>CEO (Telecom Software Companies)</strong>
				</H3>
				<Paragraph>
					Ross stands alone as the most unique resource available to turn around the fortunes of any Company: low tech,
					high tech, small, large, hardware, software, product, service, etc. Beyond the incredible self-discipline and
					personal stamina, he brings the very rare, if not unique, set of skills that brings deep financial acumen,
					process knowledge, and operating tools to a turn around the situation. Equally as important are the
					team-building skills that uncover solutions from within the organization and the newly discovered leaders who
					are necessary to ensure that any turnaround is sustainable.
				</Paragraph>
				<Paragraph>&nbsp;</Paragraph>
				<H3>
					<strong>CEO (Award Winning Monthly Magazine)</strong>
				</H3>
				<Paragraph>
					Ross led me into the battle of my life, giving me the extra courage and direction I needed to win.
				</Paragraph>
				<Paragraph>&nbsp;</Paragraph>
				<H3>
					<strong>CEO (Manufacturer Of Graphic Imaging Equipment)</strong>
				</H3>
				<Paragraph>The process far exceeded my expectations. We’re moving very fast now.</Paragraph>
				<Paragraph>&nbsp;</Paragraph>
				<H3>
					<strong>REAL ESTATE (Commercial Residential Real Estate Owner Developer)</strong>
				</H3>
				<Paragraph>
					I consider him a genius in financial restructuring. His recommendations were not only reasonable, but the
					ultimate results exceeded my expectations. I would consider working with Ross on any business problem… I
					wouldn’t hesitate to use him again.
				</Paragraph>
				<Paragraph>&nbsp;</Paragraph>
				<H3>
					<strong>CEO (Furniture Retailer)</strong>
				</H3>
				<Paragraph>
					He was extremely helpful in negotiating with the bank. Personally, I have great respect for Ross. I would
					consider him for anything. He’s very ‘to-the-point,’ a very creative thinker – that’s an unusual combination.
				</Paragraph>
				<Paragraph>&nbsp;</Paragraph>
				<H3>
					<strong>CHAIRMAN (Fiber Optic Construction Company)</strong>
				</H3>
				<Paragraph>
					His style is what makes him so effective. We were on the verge of bankruptcy; it was awful and embarrassing.
					But Ross helped us restructure, and now we’re cooking right along. It was radical surgery, but in the end, he
					helped us completely overhaul the company.
				</Paragraph>
				<Paragraph>&nbsp;</Paragraph>
				<H3>
					<strong>CEO (Processes Custom Printed Plastic Products)</strong>
				</H3>
				<Paragraph>
					We felt comfortable Ross would shepherd us through a tough process. He pointed out weaknesses, short and long
					term, and kept us focused on corporate objectives. Ross helped us re-engineer the company – he got results.
				</Paragraph>
				<Paragraph>&nbsp;</Paragraph>
				<H3>
					<strong>COO (Socially Conscious Distributor Of Locally Sourced Foods)</strong>
				</H3>
				<Paragraph>
					Ross is an immensely talented leader who guided our company through a very challenging, unique work-out
					situation, adding experience and resources that were invaluable. As a relatively early stage start-up, Ross
					not only helped us navigate all the ins and outs of the process with our Lender and stakeholders, he also
					guided us through a strategic planning process that gave us the greatest opportunity for success. His approach
					was thorough, well-reasoned, and creative, pushing us to consider all potential solutions. It would have been
					a very different process without him
				</Paragraph>
			</MainContent>
			<ReuseableLink text={"Click here if you would like to start a conversation now"} link={"/contact-us"} />
		</>
	);
	return (
		<>
			<EcoBanner imageUrl={ecoInnerpageImg} title="Testimonials" />
			<Content prop={contents} />
		</>
	);
};

export default TestimonialsContent;
