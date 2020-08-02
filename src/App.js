import React from 'react';
import { Provider } from 'react-redux';
import LoginForm from './containers/login-container';
import AppSearch from './components/app-search';
import createStore from './redux/createStore';
import AuthenticatedRoute from './containers/authenticated-route';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const store = createStore();

const App = () => {
  let Home = () => <div>Home!</div>;

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <AuthenticatedRoute path="/search">
            <AppSearch />
          </AuthenticatedRoute>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
