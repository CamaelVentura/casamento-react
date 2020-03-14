import React, { Component } from 'react';

import api from '../../services/api';

import { Total, Confirmed, H1 } from './styles';
import DivDicas from '../../components/DivDicas';

export default class Lista extends Component {
  state = {
    convidados: [],
    adults: 0,
    kids: 0,
  };

  async componentDidMount() {

    const response = await api.get(`/convidados`);

    response.data.forEach(data => {
      const { convidados, adults, kids } = this.state;
      this.setState({
        convidados: [...convidados, data],
        adults: adults + data.confirmed_adults,
        kids: kids + data.confirmed_kids
      });
    });
  }

  render() {
    const { convidados, adults, kids } = this.state;

    return (
      <DivDicas>
        <Total>
          <H1 />
          <span>Total adultos: {adults}</span>
          <span>Total Criancas: {kids}</span>
        </Total>
        <div>
          {convidados.map(convidado => (
            <Confirmed key={convidado.id}>
              <h1>{convidado.name}</h1>
              <span>Adulconvidadotos: {convidado.confirmed_adults}</span>
              <span>Criancas: {convidado.confirmed_kids}</span>
            </Confirmed>
          ))}
        </div>
      </DivDicas>
    );
  }
}
