import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import createStore from '../../universal/redux/createStore';

const history = createHistory();
const store = createStore(history);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
          <h1>HOME</h1>
        </Router>
    </Provider>,
    document.getElementById('mount')
);
