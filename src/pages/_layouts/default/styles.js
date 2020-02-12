import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(0deg, #8ea095, #85c1b1);

  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export const Menu = styled.div`

  z-index: 10;
  background: #fff;
  @media (min-width: 320px) and (max-width:480px) {
    min-width:100%;
    max-width:100vw;
    justify-content: center;
    display: flex;
    float: right;

    margin: 0 auto;
    display: flex;

    li {
      font-size: 14px;
      display: inline-block;
      list-style: none;
      padding: 15px 0;
      margin: 0 0.25rem;
      font-weight: bold;
    }
  }

  @media (min-width: 481px) {
    position: fixed;
    width:90%;
    justify-content: center;
    display: flex;
    float: right;

    margin: 0 5%;
    display: flex;

    li {
      font-size: 28px;
      display: inline-block;
      list-style: none;
      padding: 20px;
      margin: 0 0.25rem;
      font-weight: bold;
    }
  }
`;

export const Header = styled.div`
  @media (min-width: 320px) and (max-width:480px) {
    min-width: 100%;
    background: #fff;
    clear: both;
    margin: 0 auto;
    display: flex;

    img {
      max-width: 100vw;
      margin: 0 auto;
      display: flex;
      flex: 1;
    }
  }
  @media (min-width: 481px) {
    max-width: 90%;
    background: #fff;
    clear: both;
    margin: 0 auto;
    display: flex;

    img {
      max-width: 100%;
      margin: 0 auto;
      display: flex;
      flex: 1;
      margin-top: 80px;
    }
  }
`;

export const Conteudo = styled.div`
  background: #fff;
  padding: 30px 30px 0px 30px;
  margin: 0 auto;
  flex: 1;

  div {
    margin: 0 auto;
    align-items: center;
  }

  @media (min-width: 320px) and (max-width:480px) {
    min-width:100%;
    padding: 0;
    padding-top: 10px;
  }
  @media (min-width: 481px) {
    width:90%;
  }

`;
