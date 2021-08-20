import { useLocation } from "react-router-dom";
import { menuItems } from "../../utils/MenuData";
import DropDown from "../DropDown";
import { MobileNav, MobileNavItem, MobileNavItemLink } from "./MobileMenuElements";

const MobileMenu = () => {
	const { pathname } = useLocation();
	const activeStyle = { backgroundColor: "#000" };

	return (
		<>
			<MobileNav>
				{menuItems.map(({ title, to, dropDownContent }) => {
					return (
						<MobileNavItem key={title}>
							<MobileNavItemLink activeStyle={pathname === to && pathname !== "/" ? activeStyle : {}} to={to}>
								{title}
							</MobileNavItemLink>
							{dropDownContent && <DropDown style={{ width: "100%" }} dropDownContent={dropDownContent} />}
						</MobileNavItem>
					);
				})}
			</MobileNav>
		</>
	);
};

export default MobileMenu;
