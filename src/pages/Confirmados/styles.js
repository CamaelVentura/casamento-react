import styled from 'styled-components';

export const Total = styled.div`
  display:flex;
  align-items: center;
  flex-direction: row;

  span {
    margin: 0 10px;
    font-size:28px;
    flex: 1;
    font-weight: bold;
    @media (min-width: 320px) and (max-width: 480px){
      font-size:18px;
    }
  }

`;

export const Confirmed = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h1 {
    margin: 0 10px;
    width:260px;
    font-size:38px;
    @media (min-width: 320px) and (max-width: 480px){
      font-size:28px;
      width:70px;
    }
  }

  span {
    margin: 0 10px;
    font-size:28px;
    flex: 1;
    font-weight: bold;
    @media (min-width: 320px) and (max-width: 480px){
      font-size:18px;
    }
  }

  & + & {
    border-top: 1px solid #000;
  }

`;

export const H1 = styled.h1`
  margin: 0 10px;
  width:260px;
  @media (min-width: 320px) and (max-width: 480px){
    width:70px;
  }
`;
