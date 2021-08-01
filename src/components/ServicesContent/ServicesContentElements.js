import styled from "styled-components";

export const ListWrap = styled.div`
	margin-left: 10px;
`;

export const OrderedList = styled.ol`
	list-style: none;
`;

export const ListElement = styled.li`
	line-height: 20px;
	padding-bottom: 10px;
	margin-bottom: 5px;
	counter-increment: my-awesome-counter;

	&:before {
		content: counter(my-awesome-counter);
		color: #ffffff;
		font-weight: bold;
		font-size: 12px;
		background: #388bff;
		border-radius: 100%;
    padding: 1px 4.5px;
    margin-right: 15px;
	}
`;

export const VideoWrapper = styled.div`
  margin-bottom: 15px;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
`;

export const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
