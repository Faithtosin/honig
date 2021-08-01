import { H2, Title } from "./Common";

const ContentTitle = ({ title, style }) => {
	return (
		<>
			<Title style={style}>
				<H2>{title}</H2>
			</Title>
		</>
	);
};

export default ContentTitle;
