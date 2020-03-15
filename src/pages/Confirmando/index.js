import React, { Component } from 'react';

import PropTypes from 'prop-types';
import api from '../../services/api';

import { Form, SubmitButton, Row, H1 } from './styles';
import DivForm from '../../components/DivForm';

export default class Confirmar extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    guest: [],
    confirmed_adults: 0,
    confirmed_kids: 0,
    error: false,
    loading: false,
    text: '',
    name: ''
  };

  async componentDidMount() {
    const { match } = this.props;

    const name = decodeURIComponent(match.params.name);

    const guestLocal = await JSON.parse(localStorage.getItem('guest'));

    if (guestLocal) {
      if (guestLocal.guest) {
        const { guest } = guestLocal;
        if (name.toLowerCase() !== guest.name.toLowerCase())
          this.props.history.push(`/confirmar/`);
        this.setState({
          guest,
          name,
          confirmed_adults: guest.confirmed ? guest.confirmed_adults : guest.expected_adults,
          confirmed_kids: guest.confirmed ? guest.confirmed_kids : guest.expected_kids
        });
      }
      else {
        const guest = guestLocal;
        if (name.toLowerCase() !== guest.name.toLowerCase())
          this.props.history.push(`/confirmar/`);
        this.setState({
          guest,
          name,
          confirmed_adults: guest.confirmed ? guest.confirmed_adults : guest.expected_adults,
          confirmed_kids: guest.confirmed ? guest.confirmed_kids : guest.expected_kids
        });
      }
    }
  }

  componentDidUpdate(_, prevState) {
    const { guest } = this.state;

    if (prevState.repositories !== guest) {
      localStorage.setItem('guest', JSON.stringify(guest));
    }
  }

  handleInputAdultsChange = e => {
    this.setState({ confirmed_adults: e.target.value });
  }

  handleInputKidsChange = e => {
    this.setState({ confirmed_kids: e.target.value });
  }

  handleSubmit = async e => {
    const { guest } = this.state;
    e.preventDefault();

    this.setState({ loading: true, text: '' });


    const { confirmed_adults, confirmed_kids } = this.state;

    guest.confirmed_adults = confirmed_adults;
    guest.confirmed_kids = confirmed_kids;

    try {
      await api.put(`/confirmar/${guest.name}`, {
        confirmed_adults,
        confirmed_kids,
      })

      this.setState({
        guest,
        text: 'Confirmado com sucesso!',
        error: false,
        loading: false
      });

    } catch (error) {
      this.setState({
        text: 'Erro ao confirmar!',
        error: true,
        loading: false
      });
    }

  }

  render() {
    const { confirmed_adults, confirmed_kids, text, error, loading, name } = this.state;
    return (
      <>
        <DivForm error={error}>
          <H1>Olá, {name}.<br /> Nós gostariamos de saber quantas pessoas irão com esse convite:</H1>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <span>Quantidade de adultos: </span>
              <input
                type="number"
                name="adults"
                id="adults"
                value={confirmed_adults}
                onChange={this.handleInputAdultsChange}
                min='1'
              />
            </Row>
            <Row>
              <span>Quantidade de crianças: </span>
              <input
                type="number"
                name="kids"
                id="kids"
                value={confirmed_kids}
                onChange={this.handleInputKidsChange}
                min='0'
              />
            </Row>
            <Row>
              <SubmitButton loading={loading ? 1 : 0}>Confirmar</SubmitButton>
            </Row>
          </Form>
          <p>{text}</p>
        </DivForm>
      </>
    );
  }
}
