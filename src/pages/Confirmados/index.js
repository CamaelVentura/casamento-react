import React, { Component } from 'react';

import api from '../../services/api';

import { Total, Confirmed, H1 } from './styles';
import DivDicas from '../../components/DivDicas';

export default class Confirmados extends Component {
  state = {
    confirmados: [],
    adults: 0,
    kids: 0,
  };

  async componentDidMount() {

    const response = await api.get(`/confirmados`);

    response.data.forEach(data => {
      const { confirmados, adults, kids } = this.state;
      this.setState({
        confirmados: [...confirmados, data],
        adults: adults + data.confirmed_adults,
        kids: kids + data.confirmed_kids
      });
    });
  }

  render() {
    const { confirmados, adults, kids } = this.state;

    return (
      <DivDicas>
        <Total>
          <H1 />
          <span>Total adultos: {adults}</span>
          <span>Total Criancas: {kids}</span>
        </Total>
        <div>
          {confirmados.map(confirmado => (
            <Confirmed key={confirmado.name}>
              <h1>{confirmado.name.toUpperCase()}</h1>
              <span>Adultos: {confirmado.confirmed_adults}</span>
              <span>Criancas: {confirmado.confirmed_kids}</span>
            </Confirmed>
          ))}
        </div>
      </DivDicas>
    );
  }
}
