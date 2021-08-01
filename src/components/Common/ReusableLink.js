import { LinkWrapper, Link } from "./Common";

const ReuseableLink = ({ style, text, link, external = false }) => {
	return (
		<>
			<LinkWrapper style={style}>
				{external ? (
					<Link to={{ pathname: link }} target="_blank">
						{text}
					</Link>
				) : (
					<Link to={link}>{text}</Link>
				)}
			</LinkWrapper>
		</>
	);
};

export default ReuseableLink;
