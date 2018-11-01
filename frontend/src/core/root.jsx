import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import sagas from './sagas';
import Tasks from '../tasks/tasks.container';
import About from '../about/about';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);

function Root() {
    return (
        <Provider store={store}>
        <BrowserRouter>
                <div>
                    <Route exact path="/" component={Tasks} />
                    <Route path="/about" component={About} />
          </div>
          </BrowserRouter>
      </Provider>
    );
}

export default Root;
