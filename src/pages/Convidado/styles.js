import styled from 'styled-components';

export const Row = styled.div`
  min-width:100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 30px;

  span {
    font-size: 24px;
    margin-right: 50px;
    width:150px;
  }

  input {
    flex: 0.5;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    text-align: center;
  }

  @media (min-width: 320px) and (max-width:480px) {
    flex-direction: column;
    span {
      font-size: 16px;
      margin-right: 0;
    }
    input {
      font-size:12px;
      padding: 10px 5px;
    }
  }
  @media (min-width: 481px) {
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  border: 0;
  padding: 10px 15px;
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
    padding: 10px 10px;
    margin-left: 0;
  }
`;
