import styled from "styled-components";

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

export const TextWrapper = styled.div`
  padding: 0 15px;
  margin-bottom: 35px;
`;