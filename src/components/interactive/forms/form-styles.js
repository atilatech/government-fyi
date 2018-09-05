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
  width: 100%;
  font-size: 16px;
  padding-left: 4px;
  padding-top: 10px;
  padding-bottom: 10px;
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



export const ErrorMessage = styled.div`
  margin-top: 5px;
  font-family: ${props=>props.theme.fonts.helvetica};
  text-align: center;
  color: ${Color('orange2')};
`;

export const MoreFields = styled.div`
  font-family: ${props=>props.theme.fonts.helvetica};
  margin-top: 20px;
  font-size: 13px;
  outline: none;
  display: block;
`;

export const FieldSet = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
`;

export const SuccessStyle = styled.div`
  font-family: ${props=>props.theme.fonts.avant};
  font-weight: bold;
  font-size: 14px;
  line-height: 1.5em;
  letter-spacing: 1.4px;
  text-transform: uppercase;

  display: block;
  margin-top: 12px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 25px;
  background-color: #C9FFF3;
  color: #333;
  border: 4px solid #C9FFF3;
  -webkit-appearance: none;
  border-radius: 3px;
  text-align: center;
`;

export const SubmitButtonWithStyle = styled(SubmitButton)`
  font-family: ${props=>props.theme.fonts.h2};
  font-weight: bold;
  font-size: 14px;
  line-height: 1.5em;
  letter-spacing: 1.4px;
  text-transform: uppercase;

  text-align:center;
  display: block;
  margin-top: 12px;
  margin-left: auto;
  margin-right: auto;
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

export const SubmittingStyle = styled.div`
  font-family: ${props=>props.theme.fonts.h2};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5em;
  letter-spacing: 1.4px;
  text-transform: uppercase;

  text-align:center;
  display: flex;
  justify-content: center;
  margin-top: 12px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 25px;
  box-shadow: none;
  background-color: #999;
  color: #666;
  border: 2px solid #999;
  -webkit-appearance: none;
  border-radius: 3px;
`;

export const FormContainer = styled.div`
  padding: 30px 70px;
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
