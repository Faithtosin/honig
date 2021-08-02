import { DropDownWrapper, DropDownLink } from "./DropDownElements";

const DropDown = ({ dropDownContent }) => {
	return (
		<>
			<DropDownWrapper>
				{dropDownContent.map(({ label, to }) => (
					<DropDownLink activeStyle={{ backgroundColor: "#000", color:"#fff" }} to={to}>
						{label}
					</DropDownLink>
				))}
			</DropDownWrapper>
		</>
	);
};

export default DropDown;
