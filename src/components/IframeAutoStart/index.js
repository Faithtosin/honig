import ReactPlayer from "react-player";

const IframeAutoStart = ({ videoId }) => {
	const url = `https://www.youtube.com/watch?v=${videoId}`;

	return (
		<>
			<ReactPlayer
				width="100%"
				height="100%"
				url={url}
				playing={true}
				loop={true}
				volume={0}
				muted={true}
				style={{ position: "absolute", top: "0", left: "0" }}
			/>
		</>
	);
};

export default IframeAutoStart;
