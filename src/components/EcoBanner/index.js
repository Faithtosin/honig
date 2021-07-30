import { EcoBannerTitle, EcoBannerTitleWrap, EcoBannerWrap } from "./EcoBanner";

const EcoBanner = ({ imageUrl, title }) => {
	return (
		<>
			<EcoBannerWrap imageUrl={imageUrl}>
				<EcoBannerTitleWrap>
					<EcoBannerTitle>{title}</EcoBannerTitle>
				</EcoBannerTitleWrap>
			</EcoBannerWrap>
		</>
	);
};

export default EcoBanner;
