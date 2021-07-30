import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const ContentWrap = styled.div``;

export const TextWrap = styled.div`
  padding-top: 50px;
`;

export const H2 = styled.h2`
	text-align: center;
	font-size: 35px;
	line-height: 37px;
	color: #388bff !important;
	letter-spacing: 0.2px;
`;

export const H4 = styled.h4`
	text-align: center;
	color: #388bff !important;
	font-size: 18px;
	line-height: 25px;
	font-weight: 700 !important;
	font-style: normal;
	text-transform: capitalize;
	letter-spacing: 0.2px;
  margin-bottom: 8px;
`;

export const StrongTitle = styled.strong`
	text-transform: uppercase;
	font-size: 16px;
	font-weight: normal !important;
	margin-left: 7px;
`;

export const ContentElement = styled.div``;

export const Paragraph = styled.p`
	font-weight: 400;
	line-height: 20px;
	letter-spacing: 0.2px;
	font-size: 16px;
	margin-top: 0;
	margin-bottom: 1rem;
`;

export const Bdot = styled.div`
	margin-bottom: 30px;
`;

export const List = styled.ul`
	font-size: 16px;
	margin-left: 20px;
	padding-left: 15px;
`;

export const ListElement = styled.li`
	line-height: 20px;
	margin-bottom: 5px;
	list-style: none;

	&:before {
		content: "●";
		color: #388bff;
		font-weight: bold;
		display: inline-block;
		width: 1em;
		margin-left: -1em;
	}
`;

export const Strong = styled.strong`
	color: #388bff !important;
	font-weight: 700;
	letter-spacing: 0.2px;
	line-height: 20px;
	font-size: 16px;
`;

export const Link = styled(LinkRouter)`
  text-decoration: underline;
  color: #388bff!important;
`;
