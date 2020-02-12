import styled from 'styled-components';

export const Row = styled.div`
  min-width:100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 10px;

  span {
    font-size: 24px;
    margin-right: 50px;
    width:100px;
  }

  input {
    flex: 0.5;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 22px;
  }
  textarea {
    flex: 0.5;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 22px;
  }

  @media (min-width: 320px) and (max-width:480px) {
    flex-direction: column;
    padding-top:40px;

    & + & {
      margin-top:-10px;
    }

    span {
      font-size: 18px;
      margin-right: 0;
    }
    input {
      font-size:16px;
      padding: 10px 5px;
    }
    textarea {
      font-size: 16px;
      padding: 10px 5px;
    }
  }
  @media (min-width: 481px) {
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 320px) and (max-width:480px) {
    margin-top: 0px;
    align-items:center;
  }
  @media (min-width: 481px) {
    margin-top: 50px;
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  border: 0;
  padding: 15px 20px;
  margin-left: 10px;
  border-radius: 4px;
  font-size: 22px;
  color: #fff;
  background: #85c1b1;
  font-weight:bold;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 320px) and (max-width: 480px){
    font-size: 18px;
    padding: 10px 15px;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const H1 = styled.h1`
  text-align: center;
  margin-top:10px;
  @media (min-width: 320px) and (max-width:480px) {
    font-size:26px;
  }
`;
