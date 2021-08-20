import styled from "styled-components";

export const EcoBannerWrap = styled.div`
	/* background: url(${({ imageUrl }) => imageUrl}) rgba(25, 25, 25, 0.8); */
	background-size: cover;
  min-height: 100%;
  background-blend-mode: multiply;
  background-repeat: no-repeat;
	padding: 80px 0px 0px;
	margin-bottom: 50px;
`;

export const EcoBannerTitleWrap = styled.div`
  padding: 0 100px;
  text-align: center;
`;

export const EcoBannerTitle = styled.h3`
  font-size: 48px;
  line-height: 72px;
  letter-spacing: 0.2px;
  color: #388bff!important;
  font-weight: bold!important;

	@media screen and (max-width: 768px) {
    font-size: 36px;
	}

  @media screen and (max-width: 480px) {
    font-size: 27px;
    line-height: 48px;
	}
`;