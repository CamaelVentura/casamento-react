import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';

import Casal1 from '../../assets/Carousel/casal1.jpeg'
import Casal2 from '../../assets/Carousel/casal2.jpeg'
import Casal3 from '../../assets/Carousel/casal3.jpeg'
import Casal4 from '../../assets/Carousel/casal4.jpeg'


export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      matches: window.matchMedia("(min-width: 481px)").matches,

    };
  }

  componentDidMount() {
    const handler = e => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 481px)").addListener(handler);
  }

  // Colocar centerMode caso o numero de exibicao seja impar

  render() {
    const { matches } = this.state;
    if (matches) {
      return (
        <>
          <Slider
            slidesToShow={2}
            autoplay
            autoplaySpeed={2000}
            arrows={false}
            shift={20}
            centerPadding={0}
          >
            <img src={Casal1} alt="Casal1" />
            <img src={Casal2} alt="Casal2" />
            <img src={Casal3} alt="Casal3" />
            <img src={Casal4} alt="Casal4" />
          </Slider>
        </>
      );
    }

    return (
      <>
        <Slider
          slidesToShow={1}
          autoplay
          autoplaySpeed={2000}
          arrows={false}
          shift={20}
          centerPadding={0}
        >
          <img src={Casal1} alt="Casal1" />
          <img src={Casal2} alt="Casal2" />
          <img src={Casal3} alt="Casal3" />
          <img src={Casal4} alt="Casal4" />
        </Slider>
      </>
    );


  }
}
