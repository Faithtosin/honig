import styled from "styled-components";

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
