import styled from 'styled-components';

export const Options = styled.div`
  max-width:50vw;
  margin: 0px auto;
  align-items: center;
  text-align: center;
  h1{
    font-size:40px;
    margin-bottom:20px;
  }
  p {
    font-size: 22px;
    margin-bottom: 30px;
  }
  a {
    font-size: 26px;
  }

  @media (min-width: 320px) and (max-width: 480px){
    max-width:80vw;
    h1{
      font-size: 28px;
    }
    p {
      font-size: 18px;
    }
    a {
      font-size: 20px;
    }
    li {
      text-align: start;
      & + li {
        margin-top: 10px;
      }
    }
  }
`;
