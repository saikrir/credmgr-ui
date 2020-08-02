import React from 'react';
import { Message, Form, Container, Divider } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import { useLocation, useHistory, Redirect } from 'react-router-dom';
import '../app.css';
import 'semantic-ui-css/semantic.min.css';

const LoginForm = ({ handleSubmit, doAuth, authError, authenticated }) => {
  let history = useHistory();
  let handleAuth = values => {
    let { username, password } = values;
    doAuth(username, password);
  };

  if (authenticated) {
    history.push('/search');
  }

  return (
    <Container>
      <Message>
        <p>Please login into Credential Management System</p>
      </Message>
      <Divider />
      {authError && !authenticated && (
        <Message error>
          <p>{authError}</p>
        </Message>
      )}
      <Form onSubmit={handleSubmit(handleAuth)}>
        <Form.Group widths="equal">
          <Field component={Form.Input} label="User: " name="username" placeholder="User " />
          <Field component={Form.Input} type="password" label="Password: " name="password" placeholder="Password " />
        </Form.Group>
        <Form.Group inline>
          <Form.Button primary>Submit</Form.Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default reduxForm({
  form: 'loginForm'
})(LoginForm);
