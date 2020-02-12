import React, { Component } from 'react';
import { Form, Input } from '@rocketseat/unform';
import api from '../../services/api';

import DivForm from '../../components/DivForm';
import { Row, SubmitButton } from './styles';

export default class Convidados extends Component {
  state = {
    text: '',
    error: false,
    initialData: {
      name: '',
      expected_adults: 1,
      expected_kids: 0
    }
  }


  handleSubmit = async (data, { resetForm }) => {
    const expected_adults = parseInt(data.expected_adults, 10);
    const expected_kids = parseInt(data.expected_kids, 10);
    const { name } = data;
    try {
      const teste = await api.post('http://localhost:3030/convidados', {
        name,
        expected_adults,
        expected_kids
      });
      console.log(teste);

      this.setState({ text: 'Convidado adicionado com sucesso', error: false });
      resetForm({ expected_adults: '1', expected_kids: '0' });
    } catch (error) {
      this.setState({ text: 'Convidado nao adicionado', error: true });
    }
  }

  render() {
    const { text, error, initialData } = this.state;
    return (
      <>
        <DivForm>
          <Form onSubmit={this.handleSubmit} initialData={initialData}>
            <Row>
              <span>Nome: </span>
              <Input
                type="text"
                name="name"
                tabIndex="0"
              />
            </Row>
            <Row>
              <span>Quantidade de adultos esperados: </span>
              <Input
                type="number"
                name="expected_adults"
                min='1'
                tabIndex="0"
              />
            </Row>
            <Row>
              <span>Quantidade de crianças esperadas: </span>
              <Input
                type="number"
                name="expected_kids"
                min="0"
                tabIndex="0"
              />
            </Row>
            <Row>
              <SubmitButton>Enviar novo convidado</SubmitButton>
            </Row>
          </Form>
          <p error={error}>{text}</p>
        </DivForm>
      </>
    );
  }
}
