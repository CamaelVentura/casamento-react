import React, { Component } from 'react';

import api from '../../services/api';

import { Form, SubmitButton, H1 } from './styles';
import DivForm from '../../components/DivForm';

export default class Confirmar extends Component {
  state = {
    newConfirmation: '',
    error: false,
    text: '',
    guest: []
  };

  componentDidMount() {

  }

  componentDidUpdate(_, prevState) {
    const { guest } = this.state;

    if (prevState.guest !== guest) {
      localStorage.setItem('guest', JSON.stringify(guest));
    }
  }

  handleInputChange = e => {
    this.setState({ newConfirmation: e.target.value });
  }

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ error: false });

    const { newConfirmation } = this.state;
    try {

      const response = await api.post(`/confirmar`, {
        name: newConfirmation,
      });

      this.setState({ guest: response.data });

      this.props.history.push(`/confirmar/${encodeURIComponent(newConfirmation)}`);

    } catch (error) {
      this.setState({
        error: true,
        text: 'Não foi possível confirmar convidado!',
      });
    }
  };

  render() {
    const { newConfirmation, error, text } = this.state;
    return (
      <>
        <div>
          <H1>Para confirmar presença, basta digitar<br /> o nome que está no convite</H1>
          <DivForm error={error}>
            <Form
              onSubmit={this.handleSubmit}
              error={error}
            >
              <input
                type="text"
                placeholder="Digite seu nome aqui"
                onChange={this.handleInputChange}
                value={newConfirmation}
              />
              <SubmitButton>Confirmar</SubmitButton>
            </Form>
            <p>{text}</p>
          </DivForm>
        </div>
      </>
    );
  }
}
