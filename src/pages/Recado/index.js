import React, { Component } from 'react';

import api from '../../services/api';

import { Form, SubmitButton, Row, H1 } from './styles';
import DivForm from '../../components/DivForm';

export default class Recado extends Component {
  state = {
    name: '',
    body: '',
    error: false,
    loading: false,
  };

  handleInputNameChange = e => {
    this.setState({ name: e.target.value });
  }

  handleInputBodyChange = e => {
    this.setState({ body: e.target.value });
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { name, body } = this.state;

    this.setState({ loading: true });

    await api.post(`/recado`, {
      name,
      body,
    })

    this.setState({
      error: false,
      loading: false
    });

    this.props.history.push(`/mural`);

  }

  render() {
    const { body, error, loading, name } = this.state;
    return (
      <>
        <DivForm error={error}>
          <H1>Deixe seu recado:</H1>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <span>Seu nome: </span>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={this.handleInputNameChange}
                min='1'
              />
            </Row>
            <Row>
              <span>Mensagem: </span>
              <textarea
                name="body"
                id="body"
                value={body}
                onChange={this.handleInputBodyChange}
              />
            </Row>
            <Row>
              <SubmitButton loading={loading ? 1 : 0}>Enviar</SubmitButton>
            </Row>
          </Form>
        </DivForm>
      </>
    );
  }
}
