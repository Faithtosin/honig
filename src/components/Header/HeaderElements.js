import styled from "styled-components";
import { NavLink as LinkRouter } from "react-router-dom";
import { LinkedinIn } from "@styled-icons/fa-brands";
import { Search } from "@styled-icons/evaicons-solid";
import { DropDownWrapper } from "../DropDown/DropDownElements";
import { Menu } from "@styled-icons/evaicons-solid";

export const HeaderTag = styled.header``;

export const TopBar = styled.div`
	padding: 25px 0;
	display: inline-flex;
	width: 100%;
`;

export const LogoWrap = styled.div`
	width: 25%;
	margin-right: auto;
`;

export const Link = styled(LinkRouter)`
	text-decoration: none;
	color: #388bff !important;
	height: fit-content;
	align-self: center;
`;

export const Logo = styled.img`
	height: auto;
	width: 100%;
`;

export const LinkedInIconWrap = styled.div`
	border-left: 1px solid #d4d4d4;
	border-right: 1px solid #d4d4d4;
	padding-right: 21px;
	padding-left: 20px;
	min-height: 30px;
	height: 30px;
	display: flex;
	align-self: center;
`;

export const LinkedInIcon = styled(LinkedinIn)`
	width: auto;
	height: 14px;
`;

export const SearchIcon = styled(Search)`
	width: auto;
	height: 14px;
	color: #487e04;
`;

export const MobileMenuBar = styled(Menu)`
	width: auto;

	@media screen and (min-width: 992px) {
		display: none;
	}
`;

export const SearchButton = styled.button`
	cursor: pointer;
	background: transparent none repeat scroll 0 0;
	width: 40px;
	border: 0;
`;

export const NavigationBar = styled.div`
	display: none;
	
	@media screen and (min-width: 992px) {
		display: block;
	}
`;

export const NavMenu = styled.ul`
	background-color: #acacac;
	display: flex;
	width: fit-content;
	margin: auto;
	list-style: none;
`;

export const NavItem = styled.li`
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

export const NavItemLink = styled(LinkRouter)`
	padding: 25px 16px;
	color: #fff !important;
	text-transform: uppercase;
	font-size: 14px;
	font-weight: 600;
	display: inline-block;
	text-decoration: none;

	@media screen and (min-width: 1200px) {
		padding: 15px 28px;
	}

	&:hover {
		color: #388bff !important;
		transition: all 0.5s ease;
	}
`;
