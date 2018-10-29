import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Tasks from '../tasks/tasks.container';
import About from '../about/about';
import reducers from './reducers';

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function Root() {
    return (
        <Provider store={store}>
        <BrowserRouter>
                <div>
                    <Link to="/">tasks</Link>
                    <Link to="/about">about</Link>
                    <Route exact path="/" component={Tasks} />
                    <Route path="/about" component={About} />
          </div>
          </BrowserRouter>
      </Provider>
    );
}

export default Root;
