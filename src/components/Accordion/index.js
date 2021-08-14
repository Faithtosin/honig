import { useState, useRef } from "react";
import { AccordionContent, AccordionItem, AccordionTitle, AccordionWrap, Toggle } from "./AccordionElements";

const Accordion = ({ title, content }) => {
	const [isActive, setIsActive] = useState(false);
	const [maxHeight, setMaxHeight] = useState("0px");

	const contentHeight = useRef(null);

	const toggleAccordion = () => {
		setIsActive(!isActive);
		setMaxHeight(isActive ? "0px" : `${contentHeight.current.scrollHeight}px`);
	};

	return (
		<>
			<AccordionWrap>
				<AccordionTitle onClick={toggleAccordion}>
					{isActive ? <Toggle>-</Toggle> : <Toggle>+</Toggle>}
					{title}
				</AccordionTitle>
				<AccordionItem ref={contentHeight} style={{ maxHeight: maxHeight }}>
					<AccordionContent>{content}</AccordionContent>
				</AccordionItem>
			</AccordionWrap>
		</>
	);
};

export default Accordion;
