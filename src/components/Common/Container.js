import styled from "styled-components";

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
