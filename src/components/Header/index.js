import logoImage from "../../media/images/logo.png";
import { Container } from "../Common";
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
	Navigation,
	NavMenu,
	NavItem,
	NavItemLink,
} from "./HeaderElements";

const menuItems = [
	{ title: "home", to: "/" },
	{ title: "about me", to: "/about-us" },
	{ title: "my services", to: "/my-services" },
	{ title: "shortcuts", to: "/" },
	{ title: "faqs", to: "/" },
	{ title: "coaching wisdom", to: "/" },
	{ title: "testimonials", to: "/" },
	{ title: "contact", to: "/contact-us" },
];

const Header = () => {
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
						<Navigation>
							<NavMenu>
								{menuItems.map((obj) => {
									return (
										<NavItem key={obj.title}>
											<NavItemLink to={obj.to}>{obj.title}</NavItemLink>
										</NavItem>
									);
								})}
							</NavMenu>
						</Navigation>
					</NavigationBar>
				</Container>
			</HeaderTag>
		</>
	);
};

export default Header;
