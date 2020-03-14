import React from 'react';
import { Link } from 'react-router-dom';

import { Options } from './styles';

export default function Noivos() {
  return (
    <Options>
      <h1>Bem vindos, Clara e Luiz Eduardo.</h1>
      <p>Deixei algumas opcoes aqui que so voces podem fazer, espero que gostem:</p>


      <li><Link to="/n/convidado">Adicionar novo convidado</Link></li>
      <li><Link to="/n/lista">Ver lista de convidados</Link></li>
      <li><Link to="/n/confirmados">Ver convidados confirmados</Link></li>
      <li><Link to="/n/local">Adicionar local nas dicas</Link></li>
    </Options>
  );
}
