import { createStore, applyMiddleware, compose } from 'redux'
import { apiMiddleware } from 'redux-api-middleware';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


export default function configureStore() {
    const store = createStore(
            rootReducer,
            compose(
                applyMiddleware(apiMiddleware, thunk, routerMiddleware(browserHistory)),
                window.devToolsExtension ? window.devToolsExtension() : f => f
            )
    );

    //hot reload reducers
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            store.replaceReducer(require('./reducers'));
        });
    }

    return store;
}