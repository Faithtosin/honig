import styled from "styled-components";

export const AccordionWrap = styled.div`
	border: 1px solid #6eab3d;
	padding: 10px;
	border-radius: 15px;
	margin-bottom: 22px;
`;

export const AccordionItem = styled.div`
	padding-left: 33px;
`;

export const AccordionTitle = styled.div`
	cursor: pointer;
	display: flex;
  font-weight: 400;
`;

export const Toggle = styled.div`
	background-color: #6dab3c;
	height: 22px;
	min-width: 22px;
	border-radius: 20%;
	text-align: center;
	cursor: pointer;
	font-size: 17px;
  font-weight: 700;;
	color: #fff;
	margin-right: 11px;
  align-self: center;
`;

export const AccordionContent = styled.div`
	margin-top: 16px;
	margin-bottom: 22px;
`;
