import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './routes/Route';

import Confirmados from './pages/Confirmados';
import Confirmando from './pages/Confirmando';
import Confirmar from './pages/Confirmar';
import Convidado from './pages/Convidado';
import Dicas from './pages/Dicas';
import Home from './pages/Home';
import Local from './pages/Local';
import Mural from './pages/Mural';
import Noivos from './pages/Noivos'
import Recado from './pages/Recado';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/n" exact component={Noivos} />
        <Route path="/n/confirmados" component={Confirmados} />
        <Route path="/n/convidado" component={Convidado} />
        <Route path="/n/local" component={Local} />
        <Route path="/confirmar" exact component={Confirmar} />
        <Route path="/confirmar/:name" component={Confirmando} />
        <Route path="/dicas" component={Dicas} />
        <Route path="/mural" component={Mural} />
        <Route path="/recado" component={Recado} />
      </Switch>
    </BrowserRouter>
  );
}
