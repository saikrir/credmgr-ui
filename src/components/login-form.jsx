import React from 'react';
import { Message, Form, Container, Divider, Segment } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import { useHistory } from 'react-router-dom';
import '../app.css';
import 'semantic-ui-css/semantic.min.css';

const LoginForm = ({ handleSubmit, doAuth, authError, authenticated }) => {
  let history = useHistory();
  let handleAuth = values => {
    let { username, password } = values;
    doAuth(username, password);
  };

  if (authenticated) {
    history.push('/private-home');
  }

  return (
    <Container>
      <Segment inverted textAlign="center" size="large" color="teal">
        <p>Please login into Credential Management System</p>
      </Segment>
      <Divider />
      {authError && (
        <Message error>
          <p>{authError}</p>
        </Message>
      )}
      <Form onSubmit={handleSubmit(handleAuth)}>
        <Form.Group widths="equal">
          <Field component={Form.Input} label="User: " name="username" placeholder="User " required />
          <Field
            component={Form.Input}
            type="password"
            label="Password: "
            name="password"
            placeholder="Password "
            required
          />
        </Form.Group>
        <Form.Group inline>
          <Form.Button primary size="large" color="google plus">
            Submit
          </Form.Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default reduxForm({
  form: 'loginForm',
  initialValues: {
    username: '',
    password: ''
  }
})(LoginForm);
