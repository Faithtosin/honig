import styled from "styled-components";
import { NavLink as LinkRouter } from "react-router-dom";
import { DropDownWrapper } from "../DropDown/DropDownElements";

export const MobileNav = styled.nav`
	display: none;
  position: absolute;
  z-index: 999;
  left: 0;
  right: 0;

	@media screen and (max-width: 992px) {
    display: block;
	}
`;

export const MobileNavItem = styled.li`
	background-color: #acacac;
	list-style: none;

	&:hover {
		background-color: #fff;
		transition: background-color 0.5s ease;
		text-shadow: 1px 1px 4px #acacac;
	}

	&:hover ${DropDownWrapper} {
		display: block;
	}
`;

export const MobileNavItemLink = styled(LinkRouter)`
	padding: 25px 16px;
	color: #fff !important;
	text-transform: uppercase;
	font-size: 14px;
	font-weight: 600;
	display: inline-block;
	text-decoration: none;
	width: 100%;

	@media screen and (min-width: 1200px) {
		padding: 15px 28px;
	}

	&:hover {
		color: #388bff !important;
		transition: all 0.5s ease;
	}
`;
