import styled from 'styled-components';

export const Spacer = styled.div`
	height: ${props=>props.height}px;
	@media screen and (max-width: 767px) {
		height: ${props=>props.xsHeight}px;
	}
`;
