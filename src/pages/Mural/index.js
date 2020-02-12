import React, { Component } from 'react';

import api from '../../services/api';

import DivForm from '../../components/DivForm'
import { Conteudo, H1, MessageInfos, MessageBody, Message, ButtonMessage } from './styles'

export default class Mural extends Component {
  state = {
    messages: [],
  };

  async componentDidMount() {

    const response = await api.get(`/mural`);
    this.setState({ messages: response.data });
  }

  newMessage = e => {
    e.preventDefault();
    this.props.history.push(`/recado`);
  }

  render() {
    const { messages } = this.state;

    return (
      <>
        <DivForm>
          <H1>Mural de recados</H1>
          <ButtonMessage onClick={this.newMessage}>Deixe seu recado</ButtonMessage>
        </DivForm>
        <Conteudo>
          {messages.map(message => (
            <Message key={message.name}>
              <MessageInfos>
                <h1>{message.name}</h1>
                <p>{message.formated_date}</p>
              </MessageInfos>
              <MessageBody>
                <p>{message.body}</p>
              </MessageBody>
            </Message>
          ))}
        </Conteudo>
      </>
    );
  }
}
