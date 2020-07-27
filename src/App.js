import React from 'react';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import createStore from './redux/createStore';
import AppLogin from './components/app-login';
import './app.css';

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <div>
        <Container text>
          <AppLogin />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
