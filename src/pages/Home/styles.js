import styled from 'styled-components';

export const Div = styled.div`
  .slider-control-centerright, .slider-control-centerleft {
    display: none;
  }
  .slider-control-bottomcenter {
    margin-top: 20px;
  }
  @media (min-width: 320px) and (max-width:480px) {
    margin: 0px;
    padding: 0px;
    width: 80%;
  }

  @media (min-width: 481px) {
    width: 1000px;

    img {
      height: 300px;
    }
  }
`;

export const H1 = styled.h1`
  padding: 20px 0 40px 0;
  font-size:30px;
  text-align: justify;
  p {
    text-indent: 25px;
    margin-bottom: 20px;
  }
  @media (min-width: 320px) and (max-width:480px) {
    font-size:20px;
  }
`;
