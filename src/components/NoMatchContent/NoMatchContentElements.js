import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const ToHomeWrapper = styled.div`
	display: flex;
`;

export const ToHomeLink = styled(LinkRouter)`
	background-color: #acacac;
	min-width: 202px;
	height: 48px;
	font-weight: 700;
	text-align: center;
	border-radius: 30px;
	line-height: 48px;
	text-decoration: none;
	color: #388bff;
	margin: auto;
`;
