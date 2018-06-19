import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/index';
import Representatives from './components/Representatives/index';
import Representative from './components/Representative/index';

export default (
  <Switch>
    <Route exact path={'/'} component={Home} />
    <Route exact path={'/representatives'} component={Representatives} />
    <Route exact path={'/representative/:id'} component={Representative} />

  </Switch>
);
