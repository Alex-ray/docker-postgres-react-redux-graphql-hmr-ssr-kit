// Libraries
import React from  'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

// Routes
// For Development only
import * as RouteMap from '../routes/static.js';

// This is used in production for code splitting via `wepback.config.server.js`
// import * as RouteMap from '../routes/async.js';

const Routes = ({ history }) => (
  <ConnectedRouter history={history} >
    {/* <Route component={({ ...routerProps }) => ( */}
    <Route component={() => (
      <Switch>
        <Route exact path='/' component={RouteMap.Home} />
        <Route exact path='/counter' component={RouteMap.Counter} />
      </Switch>
    )} />
  </ConnectedRouter>
);


export default Routes;
