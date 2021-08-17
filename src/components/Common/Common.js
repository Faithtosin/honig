import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Container = styled.div`
	@media screen and (min-width: 576px) {
		width: 540px;
		max-width: 100%;
	}

	@media screen and (min-width: 768px) {
		width: 720px;
		max-width: 100%;
	}

	@media screen and (min-width: 992px) {
		width: 960px;
		max-width: 100%;
	}

	@media screen and (min-width: 1200px) {
		width: 1140px;
		max-width: 100%;
	}

	margin-left: auto;
	margin-right: auto;
	padding-left: 15px;
	padding-right: 15px;
`;

export const ContentWrap = styled.div`
	padding-top: 50px;
	width: 100%;
`;

export const ContentInnerWrap = styled.div`
	padding: 0 15px;
	min-height: 1px;
`;

export const Link = styled(LinkRouter)`
	text-decoration: underline;
	color: #388bff !important;
`;

export const LinkWrapper = styled.div`
	padding: 29px 0;
	text-align: center;
`;

export const Title = styled.div`
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

export const H3 = styled.h3`
	line-height: 30px;
	letter-spacing: 0.2px;
	text-transform: capitalize;
	font-size: 24px;
	margin: 0px 0px 8px 0px;
	color: #388bff !important;
	font-weight: bold !important;
`;

export const Paragraph = styled.p`
	font-weight: 400;
	line-height: 20px;
	letter-spacing: 0.2px;
	font-size: 16px;
	margin-bottom: 1rem;
`;

export const MainContent = styled.div`
	display: flex;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const QuoteImage = styled.img`
	float: right;
	@media screen and (max-width: 768px) {
		max-width: 223px;
	}
`;

export const ListWrap = styled.div`
	margin-left: 10px;
`;

export const OrderedList = styled.ol`
	list-style: none;
`;

export const ListElement = styled.li`
	display: flex;
	line-height: 20px;
	padding-bottom: 10px;
	margin-bottom: 5px;
	counter-increment: my-awesome-counter;

	&:before {
		content: counter(my-awesome-counter);
		color: #ffffff;
		font-weight: bold;
		font-size: 12px;
		background: #388bff;
		border-radius: 100%;
		padding: 0 4px;
		margin-right: 15px;
		max-height: 16px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const ImageWrapper = styled.div`
	margin-bottom: 35px;
`;

export const Image = styled.img`
	width: 100%;
	height: auto;
`;

export const Bdot = styled.div`
	margin-bottom: 30px;
`;

export const List = styled.ul`
	font-size: 16px;
	margin-left: 20px;
	padding-left: 15px;
`;

export const ListElementDot = styled.li`
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

export const VideoWrapper = styled.div`
	margin-bottom: 15px;
	position: relative;
	padding-bottom: 50%;
	height: 0;

	width: 300%; /* enlarge beyond browser width */
	left: -100%; /* center */
`;

export const Iframe = styled.iframe`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

export const H4 = styled.h4`
	font-weight: 400;
	font-size: 18px;
`;