import React, { useEffect } from 'react';
import { Form, Container, Segment, Card } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import { Redirect } from 'react-router-dom';
import '../app.css';
import 'semantic-ui-css/semantic.min.css';
import AppMessages from '../containers/app-messages';

const LoginForm = ({ handleSubmit, doAuth, validate, authenticated }) => {
  useEffect(() => {
    validate();
  }, [authenticated, validate]);

  let handleAuth = values => {
    let { username, password } = values;
    doAuth(username, password);
  };

  let renderLoginOrRedirect = () => {
    if (authenticated) return <Redirect to="/private-home" />;
    else
      return (
        <Container>
          <Segment inverted textAlign="center" size="massive" color="brown">
            <p>Credential Management System</p>
          </Segment>
          <AppMessages />
          <Card fluid raised color="brown">
            <Card.Content>
              <Card.Header>Login</Card.Header>
              <br />
              <Form onSubmit={handleSubmit(handleAuth)} autoComplete="off">
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
                <Form.Group>
                  <Form.Button primary size="large" color="brown">
                    Login
                  </Form.Button>
                </Form.Group>
              </Form>
            </Card.Content>
          </Card>
        </Container>
      );
  };

  return <>{renderLoginOrRedirect()}</>;
};

export default reduxForm({
  form: 'loginForm'
})(LoginForm);
