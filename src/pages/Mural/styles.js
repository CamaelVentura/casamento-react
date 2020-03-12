import styled from 'styled-components';

export const Conteudo = styled.div`
  margin-top:40px;
  min-width:90%;
  padding: 0 10vw;
  max-width: 100%;
`;

export const Message = styled.div`
  position:relative;
  align-items: center;
  text-align: start;
  font-size: 28px;
  height:180px;
  padding: 0 30px;
  background: #eee;
  border-radius: 4px;
  & + & {
    margin-top: 30px;
  }
  @media (min-width: 320px) and (max-width:480px) {
    font-size: 18px;
    height:300px;
    padding: 0;
  }
`;

export const MessageInfos = styled.div`
  @media (min-width: 320px) and (max-width: 480px){
    align-content: center;
    margin: 0 auto;
    h1 {
      padding-top:10px;
      font-size: 28px;
      padding-left: 10px;
    }
    p {
      font-size: 14px;
      padding-left: 10px;
      padding-bottom:10px;
    }
  }
  @media (min-width: 481px){
    float: left;
    position: absolute;
    transform: translate(0, -50%);
    top: 50%;
    h1 {
      padding-top:10px;
      font-size: 40px;
    }
    p {
      font-size: 20px;
    }
  }
`;

export const MessageBody = styled.div`
  @media (min-width: 320px) and (max-width:480px) {
    position: absolute;
    border-top: 1px solid;
    max-height: 76%;
    width: 100%;
    overflow-y: auto;
    word-wrap: break-word;
    p {
      padding: 0px 10px 10px 10px;
      margin-top: 10px;
    }
  }
  @media (min-width: 481px){
    position: absolute;
    transform: translate(0, -50%);
    top: 50%;
    max-height: 80%;
    float: left;
    max-width: 100%;
    overflow-y: auto;
    word-wrap: break-word;
    p {
      padding-right:50px;
      margin-left: 17vw;
      margin-top: 10px;
    }
  }
`;

export const ButtonMessage = styled.button`
  border: 0;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 22px;
  background: #85c1b1;
  color: #fff;
  font-weight: bold;
  margin-bottom:40px;
  @media (min-width: 320px) and (max-width:480px) {
    font-size:18px;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const H1 = styled.h1`
  text-align: center;
  margin-top:50px;
  @media (min-width: 320px) and (max-width:480px) {
    font-size:32px;
    margin-top:20px;

  }
`;

