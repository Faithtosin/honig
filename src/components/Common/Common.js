import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Container = styled.div`
	@media screen and (min-width: 576px) {
		width: 540px;
		max-width: 100%;
	}

	@media screen and (min-width: 768px) {
		width: 720px;
		max-width: 100%;
	}

	@media screen and (min-width: 992px) {
		width: 960px;
		max-width: 100%;
	}

	@media screen and (min-width: 1200px) {
		width: 1140px;
		max-width: 100%;
	}

	margin-left: auto;
	margin-right: auto;
	padding-left: 15px;
	padding-right: 15px;
`;

export const ContentWrap = styled.div`
  padding-top: 50px;
  width: 100%;
`;

export const ContentInnerWrap = styled.div`
  padding: 0 15px;
  min-height: 1px;
`;

export const Link = styled(LinkRouter)`
  text-decoration: underline;
  color: #388bff!important;
`;

export const ContactLink = styled.div`
  padding: 29px 0;
  text-align: center;
`;