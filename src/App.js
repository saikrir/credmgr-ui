import React from 'react';
import { Provider } from 'react-redux';
import AppLogin from './components/app-login';
import AppSearch from './components/app-search';
import createStore from './redux/createStore';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const store = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <AppLogin />
          </Route>
          <Route path='/search'>
            <AppSearch />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
