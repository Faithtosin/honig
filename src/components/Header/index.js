import logoImage from "../../media/images/logo.png";
import { Container } from "../Common/Container";
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
	"home",
	"about me",
	"my services",
	"shortcuts",
	"faqs",
	"coaching wisdom",
	"testimonials",
	"contact",
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
								{menuItems.map((item) => {
									return (
										<NavItem>
											<NavItemLink>{item}</NavItemLink>
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
