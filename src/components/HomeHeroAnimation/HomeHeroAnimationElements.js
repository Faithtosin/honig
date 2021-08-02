import styled from "styled-components";
import heroGif from "../../media/images/home-blue-10-800.gif";

export const HeroAnimation = styled.div`
	background-image: url(${heroGif});
	background-position: center !important;
	background-repeat: no-repeat !important;
	background-size: cover !important;
	opacity: 0;

	animation-name: fadeIn;
	animation-duration: 1s;
	animation-fill-mode: both;

	@keyframes fadeIn {
		100% {
			opacity: 1;
		}
	}
`;

export const GifTextOverlayWrap = styled.div``;

export const GifText = styled.div`
	@media screen and (min-width: 480px) {
		padding: 200px 0;
	}
`;

export const GifTextItem = styled.p`
	font-size: 20px;
	letter-spacing: 0.2px;
	color: #fff;
	line-height: 100px;
	padding: 40px 0;
	text-align: center;
	opacity: 0;

	animation: fadeInOut ${({ timeout }) => timeout}ms linear forwards;
	animation-delay: ${({ delay }) => delay}ms;

	@keyframes fadeInOut {
		50% {
			opacity: 1;
		}
	}

	/* line height different at different screen sizes */
`;
