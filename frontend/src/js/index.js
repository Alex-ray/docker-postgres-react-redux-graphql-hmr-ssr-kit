import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './universal/store';

import AppContainer from './containers/app-container';
import HomeContainer from './containers/home-container';
import NotesContainer from './containers/notes-container';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={AppContainer}>
                <IndexRoute component={HomeContainer} />
                <Route path="notes" component={NotesContainer} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('mount')
)
