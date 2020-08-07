import React, { useEffect } from 'react';
import { Message, Form, Container, Segment, Card } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import { useHistory } from 'react-router-dom';
import '../app.css';
import 'semantic-ui-css/semantic.min.css';

const LoginForm = ({ handleSubmit, doAuth, validate, authError, authenticated }) => {
  useEffect(() => {
    console.log('UseEffect Called');
    validate();
  }, [validate]);

  let handleAuth = values => {
    let { username, password } = values;
    doAuth(username, password);
  };

  let history = useHistory();
  if (authenticated) {
    history.push('/private-home');
  }

  return (
    <Container>
      <Segment inverted textAlign="center" size="massive" color="teal">
        <p>Credential Management System</p>
      </Segment>
      {authError && (
        <Message error>
          <p>{authError}</p>
        </Message>
      )}
      <Card fluid raised color="teal">
        <Card.Content>
          <Card.Header>Login</Card.Header>
          <br />
          <Form onSubmit={handleSubmit(handleAuth)}>
            <Form.Group widths="equal" inline={false}>
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
            <Form.Group textAlign="rigth">
              <Form.Button primary size="large" color="teal" textAlign="right">
                Login
              </Form.Button>
            </Form.Group>
          </Form>
        </Card.Content>
      </Card>
    </Container>
  );
};

export default reduxForm({
  form: 'loginForm'
})(LoginForm);
