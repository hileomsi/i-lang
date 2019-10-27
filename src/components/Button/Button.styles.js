import styled, { css } from 'styled-components';
import { colors, fonts } from 'assets/styles';

export const Button = styled.button`
	border-radius: 25px;
  height: 45px;
  font-size: ${fonts.sizes.tiny};
  border: 0;
  background-color: transparent;
  padding: 0 1rem;
	font-family: ${fonts.primary};
  color: ${colors.primary.p4};
  transition: color .4s, border-color .4s;
  box-sizing: border-box;

  :focus,:active,:hover{
    background-color: inherit;
    outline: inherit;
    color: ${colors.primary.p5};
    border-color: ${colors.primary.p5};
  }

	${props =>
    props.outline &&
		css`
			border: 2px solid ${colors.primary.p4};
			padding: 0 3rem;
		`}

	${props =>
    props.full &&
		css`
			width: 100%;
		`}
    
  ${props =>
    props.strong &&
		css`
			background-color: ${colors.primary.p4};
			color: ${colors.white};
			padding: 0 3rem;
		`}
`;
