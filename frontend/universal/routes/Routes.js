// Libraries
import React from  'react';
import { Route, Switch } from 'react-router';

// Containers
import AppContainer from 'universal/containers/App/AppContainer.js';

// Routes
// For Development only
import * as RouteMap from '../routes/static.js';

// This is used in production for code splitting via `wepback.config.server.js`
// import * as RouteMap from '../routes/async.js';

const Routes = ({ history }) => (
  <Switch>
    <Route component={() => (
      <AppContainer>
        <Switch>
          <Route exact path='/' component={RouteMap.Home} />
          <Route exact path='/counters' component={RouteMap.Counters} />
          <Route exact path='/counter/:counterId' component={RouteMap.Counter} />
        </Switch>
      </AppContainer>
    )} />
  </Switch>
);


export default Routes;
