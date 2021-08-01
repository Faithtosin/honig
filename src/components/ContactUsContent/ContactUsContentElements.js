import styled from "styled-components";

export const ContactWrap = styled.div`
	display: flex;

	@media screen and (max-width: 768px) {
    flex-direction: column;
	}
`;

export const ContactInfoWrap = styled.div`
	min-width: 50%;
  margin-bottom: 35px;
`;

export const ContactFormWrap = styled.div`
	min-width: 50%;
  margin-bottom: 35px;
  padding: 0 15px;
`;
