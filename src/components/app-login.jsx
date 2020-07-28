import React from 'react';
import { Message, Form, Container, Divider } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import '../app.css';
import 'semantic-ui-css/semantic.min.css';

const AppLogin = ({ handleSubmit }) => {
  return (
    <Container>
      <Message>
        <p>Please login into Credential Management System</p>
      </Message>
      <Divider />
      <Form onSubmit={handleSubmit}>
        <Form.Group widths='equal'>
          <Field component={Form.Input} label='User: ' name='username' placeholder='User ' />
          <Field component={Form.Input} type='password' label='Password: ' name='password' placeholder='Password ' />
        </Form.Group>
        <Form.Group inline>
          <Form.Button primary>Submit</Form.Button>
          <Form.Button>Reset</Form.Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default reduxForm({
  form: 'loginForm'
})(AppLogin);
