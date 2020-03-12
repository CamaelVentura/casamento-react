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
    },
    file: null,
    type: 'Hotel'
  }

  handleChange = (e) => {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    this.setState({ file: data });
  }

  handleSelectChange = (e) => {
    const data = e.target.value;
    this.setState({ type: data });
  }


  handleSubmit = async (data) => {
    const { name, address, description, phone } = data;
    const { file, type } = this.state;
    try {
      const teste = await api.post('/dicas', {
        name,
        address,
        description,
        phone,
        type,
        img: 'path'
      });
      await api.post(`/dicas/img/${teste.data._id}`, file);

      this.setState({ text: 'Dica adicionada com sucesso', error: false });

    } catch (error) {
      this.setState({ text: 'Dica nao adicionada', error: true });
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
              <span>Endereço: </span>
              <Input
                type="text"
                name="address"
                tabIndex="0"
              />
            </Row>
            <Row>
              <span>Descrição: </span>
              <Input
                type="text"
                name="description"
                tabIndex="0"
              />
            </Row>
            <Row>
              <span>Telefone: </span>
              <Input
                type="text"
                name="phone"
                tabIndex="0"
              />
            </Row>
            <Row>
              <span>Tipo: </span>
              <select
                id="type"
                name="type"
                size="1"
                onChange={this.handleSelectChange}
              >
                <option value="Hotel" selected>Hotel</option>
                <option value="Salão de beleza">Salão de Beleza</option>
              </select>
            </Row>
            <Row>
              <span>Img: </span>
              <Input
                type="file"
                name="img"
                tabIndex="0"
                accept="image/*"
                onChange={this.handleChange}
              />
            </Row>
            <Row>
              <SubmitButton>Enviar nova dica</SubmitButton>
            </Row>
          </Form>
          <p error={error}>{text}</p>
        </DivForm>
      </>
    );
  }
}
