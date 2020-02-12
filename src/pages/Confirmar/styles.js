import styled, { css } from 'styled-components';

export const Form = styled.form.attrs(props => ({
  disabled: props.error,
}))`
  margin: 0 auto;
  display: flex;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 22px;
  }

  p {
    display: none;
  }

  ${props =>
    props.error &&
    css`
      input {
        border: 1px solid #F00;
      }
      p {
        color: #F00;
        font-size: 12px;
        display: block;
        clear: both;
      }
    `
  }

  @media (min-width: 320px) and (max-width:480px) {
    flex-direction: column;
    margin-top: 0px;
    align-items:center;
    input {
      font-size: 18px;
      margin-bottom:15px;
      text-align: center;
    }
  }
  @media (min-width: 481px) {
    flex-direction: row;
    margin-top: 90px;
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  border: 0;
  padding: 10px 15px;
  margin-left: 10px;
  border-radius: 4px;
  font-size: 22px;
  background: #85c1b1;
  color: #fff;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;


export const H1 = styled.h1`
  text-align: center;
  margin-top:50px;
  @media (min-width: 320px) and (max-width:480px) {
    font-size:20px;
    margin-top:60px;
  }
`;
