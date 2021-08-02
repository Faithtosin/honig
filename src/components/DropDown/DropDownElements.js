import styled from "styled-components";
import { NavLink as LinkRouter } from "react-router-dom";

export const DropDownLink = styled(LinkRouter)`
	display: block;
	text-decoration: none;
	color: #000;
	height: fit-content;
	padding: 15px 20px;

	&:hover {
		color: #fff;
		transition: all 0.5s ease;
		background-color: #000;
	}
`;

export const DropDownWrapper = styled.div`
	display: none;
	position: absolute;
	background-color: #fff;
	z-index: 15;
	width: 220px;
	box-shadow: 0px 7px 8px 0px rgb(51 51 51 / 20%);
`;
