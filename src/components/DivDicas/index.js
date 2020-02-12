import styled, { css } from 'styled-components';

const DivDicas = styled.div.attrs()`
  margin: 0px auto;
  align-items: center;
  text-align: center;

  @media (min-width: 320px) and (max-width: 480px){
    min-width:100%;

    p {
      display: none;
    }

  }

  @media (min-width: 481px){
    max-width:50vw;

    p {
      display: none;
    }
  }

  ${props =>
    props.error &&
    css`
      p {
        margin-top: 30px;
        color: #F00;
        font-size: 28px;
        display: block;
        clear: both;
      }
    `}

  ${props =>
    !props.error &&
    css`
      p {
        margin-top: 30px;
        color: #0F0;
        font-size: 28px;
        display: block;
        clear: both;
      }
    `}
`;

export default DivDicas;
