import styled from 'styled-components';


export const Conteudo = styled.div`
  @media (min-width: 481px){
    min-width:90%;
    padding-left: 5vw;
    margin: 0;
  }
  @media (min-width: 320px) and (max-width:480px) {
    padding-bottom: 30px;
  }
`;

export const Filter = styled.div`
  justify-content: center;
  padding-bottom: 15px;

  button {
    border-radius: 4px;
    outline: 0;
    border: 0;
    background:#85c1b1;
    color: #fff;
    font-weight: bold;
    text-align: center;

    padding: 20px 0;
    margin: 50px 1rem;
    font-size: 24px;
    margin-top: 30px;
    width: 175px;


    @media (min-width: 320px) and (max-width:480px) {
      padding: 0 20px;
      margin: 0px 0.5rem;
      font-size: 18px;
      margin-top: 10px;
      width: auto;
      height: 44px;
   }
    &:nth-child(${props => props.active + 1}) {
      background: #8ea095;
      color: #fff;
    }
  }
`;

export const Place = styled.div`
  text-align: start;
  @media (min-width: 320px) and (max-width: 480px){
    align-items: center;
    font-size: 18px;
    img {
      border-radius: 50%;
      width:100px;
      height:100px;
      display: block;
      position:relative;
      left:50%;
      top:50%;
      transform: translate(-50%, 30%);
    }
    & + & {
      margin-top: 30px;
      border-top: 1px solid #eee;
    }
  }
  @media (min-width: 481px){
    align-items: flex-start;
    font-size: 28px;
    height:200px;
    img {
      float: left;
      border-radius: 50%;
      width:200px;
      height:200px;
      margin-right: 20px;
      margin-top: 0px;
    }
    & + & {
      margin-top: 70px;
    }
  }


`;

export const PlaceInfos = styled.div`
  h1 {
    padding-top:10px;
  }
  @media (min-width: 320px) and (max-width:480px){
    width: 80%;
    font-size:16px;
    h1 {
      font-size:28px;
      text-align: center;
    }
    p {
      padding-top:10px;
      text-align: justify;
    }
  }

`;

export const H1 = styled.h1`
  text-align: start;
  margin-top: 30px;
`;

