import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import createStore from '../../universal/redux/createStore';

import Routes from '../../universal/routes/Routes.js';

const history = createHistory();
const store = createStore(history);

ReactDOM.render(
    <Provider store={store}>
      <Routes history={history}/>
    </Provider>
    ,
    document.getElementById('mount')
);
