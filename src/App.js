import React from 'react';
import { Provider } from 'react-redux';
import LoginForm from './containers/login-container';
import PrivateHome from './components/priv-home';
import PublicHome from './components/pub-home';
import createStore from './redux/createStore';
import AuthenticatedRoute from './containers/authenticated-route';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const store = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <PublicHome />
          </Route>
          <Route path='/login'>
            <LoginForm />
          </Route>
          <AuthenticatedRoute path='/private-home'>
            <PrivateHome />
          </AuthenticatedRoute>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
