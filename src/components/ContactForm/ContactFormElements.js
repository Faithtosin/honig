import styled from "styled-components";

export const Input = styled.input`
	padding: 14px 25px 15px;
	border: 1px solid #d7d8d8;
	font-size: 14px;
	width: 100%;
	color: #2b2b2b;

	&:focus {
		border: 1px solid rgba(0, 0, 0, 0.3);
		outline: 0;
	}
`;

export const TextArea = styled(Input).attrs({ as: "textarea" })``;
