import { useEffect, useState } from "react";
import { Container } from "../Common/Container";
import { GifText, GifTextItem, GifTextOverlayWrap, HeroAnimation } from "./HomeHeroAnimationElements";

const HomeHeroAnimation = () => {
	const reviews = ['"Review1"', '"Review2"', '"Review3"'];
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
								{reviews[index]}
							</GifTextItem>
						</GifText>
					</Container>
				</GifTextOverlayWrap>
			</HeroAnimation>
		</>
	);
};

export default HomeHeroAnimation;
