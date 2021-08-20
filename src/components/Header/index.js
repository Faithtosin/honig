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
	MobileMenuBar,
} from "./HeaderElements";
import DropDown from "../DropDown";
import { useState } from "react";
import MobileMenu from "../MobileMenu";
import { menuItems } from "../../utils/MenuData";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
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

						{/* <SearchButton>
							<SearchIcon />
						</SearchButton> */}

						<SearchButton onClick={() => setIsOpen(!isOpen)}>
							<MobileMenuBar />
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
					{isOpen && <MobileMenu />}
				</Container>
			</HeaderTag>
		</>
	);
};

export default Header;
