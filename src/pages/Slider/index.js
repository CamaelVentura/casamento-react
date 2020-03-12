import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';

import Casal1 from '../../assets/Carousel/casal1.jpg'
import Casal2 from '../../assets/Carousel/casal2.jpg'
import Casal3 from '../../assets/Carousel/casal3.jpg'
import Casal4 from '../../assets/Carousel/casal4.jpg'
import Casal5 from '../../assets/Carousel/casal5.jpg'
import Casal6 from '../../assets/Carousel/casal6.jpg'
import Casal7 from '../../assets/Carousel/casal7.jpg'
import Casal8 from '../../assets/Carousel/casal8.jpg'
import Casal9 from '../../assets/Carousel/casal9.jpg'
import Casal10 from '../../assets/Carousel/casal10.jpg'
import Casal11 from '../../assets/Carousel/casal11.jpg'
import Casal12 from '../../assets/Carousel/casal12.jpg'
import Casal13 from '../../assets/Carousel/casal13.jpg'
import Casal14 from '../../assets/Carousel/casal14.jpg'
import Casal15 from '../../assets/Carousel/casal15.jpg'
import Casal16 from '../../assets/Carousel/casal16.jpg'
import Casal17 from '../../assets/Carousel/casal17.jpg'
import Casal18 from '../../assets/Carousel/casal18.jpg'
import Casal19 from '../../assets/Carousel/casal19.jpg'
import Casal20 from '../../assets/Carousel/casal20.jpg'
import Casal21 from '../../assets/Carousel/casal21.jpg'
import Casal22 from '../../assets/Carousel/casal22.jpg'
import Casal23 from '../../assets/Carousel/casal23.jpg'
import Casal24 from '../../assets/Carousel/casal24.jpg'


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
            autoplaySpeed={4000}
            arrows={false}
            shift={20}
            centerPadding={0}
          >
            <img src={Casal1} alt="Casal1" />
            <img src={Casal2} alt="Casal2" />
            <img src={Casal3} alt="Casal3" />
            <img src={Casal4} alt="Casal4" />
            <img src={Casal5} alt="Casal5" />
            <img src={Casal6} alt="Casal6" />
            <img src={Casal7} alt="Casal7" />
            <img src={Casal8} alt="Casal8" />
            <img src={Casal9} alt="Casal9" />
            <img src={Casal10} alt="Casal10" />
            <img src={Casal11} alt="Casal11" />
            <img src={Casal12} alt="Casal12" />
            <img src={Casal13} alt="Casal13" />
            <img src={Casal14} alt="Casal14" />
            <img src={Casal15} alt="Casal15" />
            <img src={Casal16} alt="Casal16" />
            <img src={Casal17} alt="Casal17" />
            <img src={Casal18} alt="Casal18" />
            <img src={Casal19} alt="Casal19" />
            <img src={Casal20} alt="Casal20" />
            <img src={Casal21} alt="Casal21" />
            <img src={Casal22} alt="Casal22" />
            <img src={Casal23} alt="Casal23" />
            <img src={Casal24} alt="Casal24" />

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
          <img src={Casal5} alt="Casal5" />
          <img src={Casal6} alt="Casal6" />
          <img src={Casal7} alt="Casal7" />
          <img src={Casal8} alt="Casal8" />
          <img src={Casal9} alt="Casal9" />
          <img src={Casal10} alt="Casal10" />
          <img src={Casal11} alt="Casal11" />
          <img src={Casal12} alt="Casal12" />
          <img src={Casal13} alt="Casal13" />
          <img src={Casal14} alt="Casal14" />
          <img src={Casal15} alt="Casal15" />
          <img src={Casal16} alt="Casal16" />
          <img src={Casal17} alt="Casal17" />
          <img src={Casal18} alt="Casal18" />
          <img src={Casal19} alt="Casal19" />
          <img src={Casal20} alt="Casal20" />
          <img src={Casal21} alt="Casal21" />
          <img src={Casal22} alt="Casal22" />
          <img src={Casal23} alt="Casal23" />
          <img src={Casal24} alt="Casal24" />

        </Slider>
      </>
    );


  }
}
