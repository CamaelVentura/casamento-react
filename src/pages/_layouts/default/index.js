import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Wrapper, Menu, Conteudo, Header } from './styles';
import HomeMobile from '../../../assets/Convite.png';
import Home from '../../../assets/Home.png';


export default function DefaultLayout({ children }) {
  return (
    <>
      <Wrapper>
        <Menu>
          <Link to='/' ><li>Home</li></Link>
          <Link to='/confirmar'><li>Confirmar presença</li></Link>
          <Link to='/dicas' ><li>Dicas</li></Link>
          <Link to='/mural' ><li>Mural de recados</li></Link>
        </Menu>
        <Header>
          <picture>
            <source srcSet={Home} media="(min-width: 481px)" />
            <source srcSet={HomeMobile} media="(max-width: 480px)" />
            <img src={HomeMobile} alt="" />
          </picture>
        </Header>
        <Conteudo>
          {children}
        </Conteudo>
      </Wrapper>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
