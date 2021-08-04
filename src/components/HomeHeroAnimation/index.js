import { useEffect, useState } from "react";
import { Container } from "../Common";
import { GifText, GifTextItem, GifTextOverlayWrap, HeroAnimation } from "./HomeHeroAnimationElements";

const HomeHeroAnimation = () => {
	const reviews = [
		"“Ross led me into the battle of my life, giving me the extra courage and direction, I needed to win.”...",
		"“His recommendations were not only reasonable, but the ultimate results exceeded my expectations. I would ...",
		"“He was extremely helpful in negotiating with the bank. Personally, I have great respect for Ross. I would...",
		"“His style is what makes him so effective. We were on the verge of bankruptcy; it was awful and embarrassi...",
		"“Ross is an immensely talented leader who guided our company through a very challenging, unique workout si...",
		"“There is no question that working together, we have made remarkable results in turning-around our overall...",
		"“Ross, this is a fantastic outcome. I really appreciate your wise counsel and friendship.”...",
		"“He enabled us to drill to see where the problems were and how to correct them. He provided expertise in n...",
		"“…he utilizes his vast experience to combine process improvement, accountability, creativity, and teamwork...",
		"“…he brings the very rare, if not unique, set of skills that brings deep financial acumen, process knowled...",
	];
	const [index, setIndex] = useState(0);

	const timeout = 8000;
	const animation_delay = 1000;

	useEffect(() => {
		setTimeout(() => {
			index === reviews.length - 1 ? setIndex(0) : setIndex((prev) => prev + 1);
		}, timeout + animation_delay);
	});

	return (
		<>
			<HeroAnimation>
				<GifTextOverlayWrap>
					<Container>
						<GifText>
							<GifTextItem key={index} timeout={timeout} delay={animation_delay}>
								<em>{reviews[index]}</em>
							</GifTextItem>
						</GifText>
					</Container>
				</GifTextOverlayWrap>
			</HeroAnimation>
		</>
	);
};

export default HomeHeroAnimation;
