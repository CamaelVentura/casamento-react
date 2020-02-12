import styled, { css } from 'styled-components';

const DivForm = styled.div.attrs()`
  max-width:50vw;
  margin: 0px auto;
  align-items: center;
  text-align: center;

  p {
    display: none;
  }

  ${props =>
    props.error &&
    css`
      p {
        margin-top: 30px;
        color: #F00;
        display: block;
        clear: both;
        @media (min-width: 320px) and (max-width: 480px){
          font-size: 18px;
        }
        @media (min-width: 481px){

        font-size: 28px;
        }
      }
    `}

  ${props =>
    !props.error &&
    css`
      p {
        margin-top: 30px;
        color: #0F0;
        display: block;
        clear: both;
        @media (min-width: 320px) and (max-width: 480px){
          font-size: 18px;
        }
        @media (min-width: 481px){

        font-size: 28px;
        }
      }
    `}
`;

export default DivForm;
