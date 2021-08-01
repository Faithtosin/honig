import { useState } from "react";
import { AccordionContent, AccordionItem, AccordionTitle, AccordionWrap, Toggle } from "./AccordionElements";

const Accordion = ({ title, content }) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<>
			<AccordionWrap>
				<AccordionTitle onClick={() => setIsActive(!isActive)}>
					{isActive ? <Toggle>-</Toggle> : <Toggle>+</Toggle>}
					{title}
				</AccordionTitle>
				<AccordionItem>{isActive && <AccordionContent>{content}</AccordionContent>}</AccordionItem>
			</AccordionWrap>
		</>
	);
};

export default Accordion;
