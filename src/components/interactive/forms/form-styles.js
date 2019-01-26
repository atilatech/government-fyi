import styled from 'styled-components'
import Color from 'layout/colors'

import InputField from './text-field'
import SubmitButton from './submit-button'

export const TextField = styled(InputField)`
  font-family: ${props=>props.theme.fonts.helvetica};
  font-weight: bold;
  display: inline-block;
  box-sizing: border-box;
  line-height: 20px;
  text-transform: none;
  letter-spacing: none;
  width: 70%;
  font-size: 16px;
  padding-left: 4px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 9px;
  margin-bottom: 9px;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 5px solid #eee;
  outline: none;
  background-color: white;
  border-radius: 3px;

  ::placeholder {
    color: #999;
  }
  &:focus {
    transition: background-color 200ms ease-in;
    background-color: rgba(0,0,0,0.025);
    border-bottom: 5px solid ${Color('pink2')};
  }
  @media screen and (max-width: 767px) {
    font-size: 16px;
    border-radius: 0;
  }
`;


export const FieldSet = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
`;

const buttonStyle = styled.div`
  width: 30%;
  font-family: ${props=>props.theme.fonts.avant};
  font-weight: bold;
  font-size: 14px;
  line-height: 1.5em;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-left: 20px;
  margin-right: 20px;
  padding: 7px 25px;
  -webkit-appearance: none;
  border-radius: 2px;
  text-align: center;
  display:flex;
  align-items: center;
  justify-content: center;
`
export const ErrorMessage = styled(buttonStyle)`
  color: ${Color('orange2')};
  border: 4px solid ${Color('orange2')};

`;

export const SuccessStyle = styled(buttonStyle)`
  background-color: #C9FFF3;
  color: #333;
  border: 4px solid #C9FFF3;
`;

export const SubmitButtonWithStyle = styled(SubmitButton)`
  font-family: ${props=>props.theme.fonts.avant};
  font-weight: bold;
  font-size: 14px;
  line-height: 1.5em;
  letter-spacing: 1.4px;
  text-transform: uppercase;

  text-align:center;
  display: block;
  margin-left: 20px;
  margin-right: 0;
  padding: 10px 25px;
  color: ${Color('pink2')};
  border: 2px solid ${Color('pink2')};
  -webkit-appearance: none;
  border-radius: 3px;
  cursor: pointer;

  &:focus {
    background-color: ${Color('pink2')};
    color: white;
    text-decoration: underline;
    outline: none;
  }

  @media not all and (hover: none) {
    &:hover{
      background-color: ${Color('pink2')};
      color: white;
    }
  }
`;

export const SubmittingStyle = styled(buttonStyle)`
  background-color: #999;
  color: #666;
  border: 2px solid #999;

`;

export const FormContainer = styled.div`
  padding: 30px 30px;
  box-sizing: border-box;
  border 2px solid black;
  border-radius: 3px;
  filter: drop-shadow(12px 12px 0 rgba(0,0,0,0.15)) drop-shadow(-20px 16px  rgba(0,0,0,0.05));
  background-color: white;
  @media screen and (max-width: 767px) {
    padding: 20px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: none;
  margin-bottom: 30px;
`;
