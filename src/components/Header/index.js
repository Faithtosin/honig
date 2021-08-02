import logoImage from "../../media/images/logo.png";
import { Container } from "../Common";
import { useLocation } from "react-router";
import {
	HeaderTag,
	TopBar,
	NavigationBar,
	LogoWrap,
	Link,
	Logo,
	LinkedInIcon,
	LinkedInIconWrap,
	SearchButton,
	SearchIcon,
	NavMenu,
	NavItem,
	NavItemLink,
} from "./HeaderElements";
import DropDown from "../DropDown";

const menuItems = [
	{ title: "home", to: "/" },
	{ title: "about me", to: "/about-us" },
	{ title: "my services", to: "/my-services" },
	{
		title: "shortcuts",
		to: "#",
		dropDownContent: [
			{ label: "Why Businesses Fall Short Of Their Potential", to: "/why-businesses-fall-short-of-their-potential" },
			{ label: "Why Is Your Company in or Headed to Work-Out?", to: "/why-is-your-company-in-or-headed-to-work-out" },
			{ label: "The Turnaround Solution", to: "/the-turnaround-solution-the-path-to-a-successful-turnaround" },
			{ label: "The Affordable Advisor (TAA) Program", to: "/the-affordable-advisor-taa-program" },
		],
	},
	{ title: "faqs", to: "/faq" },
	{ title: "coaching wisdom", to: "/coaching-wisdom" },
	{ title: "testimonials", to: "/testimonials" },
	{ title: "contact", to: "/contact-us" },
];

const Header = () => {
	const activeStyle = { backgroundColor: "#000" };
	const { pathname } = useLocation();
	return (
		<>
			<HeaderTag>
				<Container>
					<TopBar>
						<LogoWrap>
							<Link to="/">
								<Logo src={logoImage} />
							</Link>
						</LogoWrap>

						<LinkedInIconWrap>
							<Link to={{ pathname: "https://www.linkedin.com/in/ross-g-honig-493860" }} target="_blank">
								<LinkedInIcon />
							</Link>
						</LinkedInIconWrap>

						<SearchButton>
							<SearchIcon />
						</SearchButton>
					</TopBar>

					<NavigationBar>
						<nav>
							<NavMenu>
								{menuItems.map(({ title, to, dropDownContent }) => {
									return (
										<NavItem key={title}>
											<NavItemLink activeStyle={pathname === to && pathname !== "/" ? activeStyle : {}} to={to}>
												{title}
											</NavItemLink>
											{dropDownContent && <DropDown dropDownContent={dropDownContent} />}
										</NavItem>
									);
								})}
							</NavMenu>
						</nav>
					</NavigationBar>
				</Container>
			</HeaderTag>
		</>
	);
};

export default Header;
