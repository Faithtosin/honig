import { Container, ContentInnerWrap, ContentWrap } from "./Common";

const Content = ({ prop }) => {
	return (
		<>
			<ContentWrap>
				<Container>
					<ContentInnerWrap>{prop}</ContentInnerWrap>
				</Container>
			</ContentWrap>
		</>
	);
};

export default Content;
