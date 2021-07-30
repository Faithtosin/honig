import styled from "styled-components";

export const AboutTitle = styled.div`
	margin-bottom: 35px;
`;

export const H2 = styled.h2`
	display: block;
	color: #388bff !important;
	font-weight: 300 !important;
	text-align: center;
	font-size: 38px;
	text-transform: inherit;
	letter-spacing: 0.2px;
	line-height: 37px;
	font-style: normal;
`;

export const ImageWrapper = styled.div`
  min-width: 33.333333333%;
  margin-bottom: 35px;

  @media screen and (max-width: 768px) {
		min-width: 100%;
	}
`;

export const PortraitImage = styled.img`
	max-width: 100%;
  height: auto;
  padding: 0 15px;
`;

export const MainContent = styled.div`
	display: flex;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const TextWrapper = styled.div`
  padding: 0 15px;
  margin-bottom: 35px;
`;

export const Paragraph = styled.p`
  margin-bottom: 16px;
  letter-spacing: 0ch.2px;
  font-weight: 400;
  line-height: 20px;
  font-size: 16px;
`;