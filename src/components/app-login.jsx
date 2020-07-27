import React from 'react';
import { Message, Form } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';

const AppLogin = ({ handleSubmit }) => {
  return (
    <>
      <Message>
        <p>Please login into Credential Management System</p>
      </Message>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Field component={Form.Input} label="User: " name="username" placeholder="User " />
          <Field component={Form.Input} type="password" label="Password: " name="password" />
        </Form.Group>
        <Form.Group inline>
          <Form.Button primary>Submit</Form.Button>
          <Form.Button>Reset</Form.Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default reduxForm({
  form: 'loginForm'
})(AppLogin);
