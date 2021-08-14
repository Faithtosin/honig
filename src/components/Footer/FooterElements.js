import styled from "styled-components";

export const FooterWrap = styled.div`
	margin-top: 30px;
	padding-top: 80px;
	background-color: #388bff !important;
`;

export const FooterRow = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FooterLogo = styled.img`
	margin: auto;
	max-width: 300px;
	margin-bottom: 30px;
`;

export const FooterAddress = styled.div`
	color: #fff;
	text-transform: uppercase;
	margin: auto;
	line-height: 1.5;
	font-size: 1rem;
`;

export const FooterCopyright = styled.div`
	border-top: 1px solid #4a4a4a;
	margin-top: 80px;
`;

export const FooterCopyrightInfo = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px 0;
`;

export const FooterCopyrightText = styled.p`
	color: #fff;
	margin-bottom: 16px;
	line-height: 1.5;
`;

export const GoToTop = styled.div`
	position: absolute;
	right: 0;
	cursor: pointer;
	width: 41px;
	height: 46px;
	text-align: center;
	line-height: 46px;
	background-color: #4a4a4a;
	color: #388bff;
	font-size: 20px;
`;