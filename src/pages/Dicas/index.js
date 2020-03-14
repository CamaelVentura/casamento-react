import React, { Component } from 'react';

import PropTypes from 'prop-types';

import api from '../../services/api';

import DivDicas from '../../components/DivDicas';
import { Filter, Place, Conteudo, H1, PlaceInfos } from './styles'

export default class Home extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    places: [],
    show: [],
    filters: [
      { state: '', label: 'Todas', active: true },
      { state: 'Salão de beleza', label: 'Salão de Beleza', active: false },
      { state: 'Hotel', label: 'Hotel', active: false },
    ],
    filterIndex: 0,
  };

  async componentDidMount() {

    const response = await api.get(`/dicas`);
    this.setState({ places: response.data, show: response.data });
  }

  loadPlaces = async () => {
    const { filters, filterIndex, places } = this.state;

    const { state } = filters[filterIndex];

    switch (state) {
      default:
        this.setState({ show: places });
        break;
      case 'Hotel':
        places.forEach(place => {
          if (place.type === state) {
            const { show } = this.state;
            this.setState({ show: [...show, place] })
          }
        });
        break;
      case 'Salão de beleza':
        places.forEach(place => {
          if (place.type === state) {
            const { show } = this.state;
            this.setState({ show: [...show, place] })
          }
        });
        break;
    }
  }

  handleFilterClick = async filterIndex => {
    await this.setState({ filterIndex, show: [] });
    this.loadPlaces();
  };

  render() {
    const { filters, filterIndex, show } = this.state;

    return (
      <>
        <DivDicas>
          <Filter active={filterIndex}>
            {filters.map((filter, index) => (
              <button
                type="button"
                key={filter.label}
                onClick={() => this.handleFilterClick(index)}
              >
                {filter.label}
              </button>
            ))}
          </Filter>
        </DivDicas>
        <Conteudo>
          {show.map(place => (
            <Place key={place.name}>
              <img src={`https://camael.club/files/${place.img}`} alt={place.name} />
              <PlaceInfos>
                <H1>{place.name}</H1>
                <p>{place.description}</p>
                <p>{place.phone}</p>
                <p>{place.address}</p>
              </PlaceInfos>
            </Place>
          ))}
        </Conteudo>
      </>
    );
  }
}
