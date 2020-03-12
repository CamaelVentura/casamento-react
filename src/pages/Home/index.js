import React, { Component } from 'react';

import Slider from '../Slider';

import { Div, H1 } from './styles';

export default class Home extends Component {
  state = {

  }

  // Colocar centerMode caso o numero de exibicao seja impar

  render() {
    return (
      <>
        <Div>
          <Slider />
          <H1>
            <p> Ainda no colegial Deus fez com que nossos caminhos se encontrassem. Desde então, passamos por momentos de alegrias, tristezas, provações e grande evolução.</p>
            <p> Ousamos afirmar que crescemos juntos e alicerçados em Deus. Portanto, assim como Deus ensinou a comunidade de Coríntios por meio das cartas de Paulo, há quase 7 anos que Ele nos ensina o que é amar...</p>
            <p> “O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. Não maltrata, não procura seus interesses, não se ira facilmente, não guarda rancor. O amor não se alegra com a injustiça, mas se alegra com a verdade. Tudo sofre, tudo crê, tudo espera, tudo suporta.“ 1 Cor 13, 4-7.</p>
            <p> Então, se hoje nos amamos é porque Deus nos amou primeiro.</p>
          </H1>
        </Div>
      </>
    );
  }
}
