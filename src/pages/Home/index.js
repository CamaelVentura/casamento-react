import React, { Component } from 'react';

import Slider from '../Slider';

import { Div } from './styles';

export default class Home extends Component {
  state = {

  }

  // Colocar centerMode caso o numero de exibicao seja impar

  render() {
    return (
      <>
        <Div>
          <Slider />
        </Div>
      </>
    );
  }
}
