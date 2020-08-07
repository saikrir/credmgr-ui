import React from 'react';
import { Message, Form, Container, Segment, Card, TextArea } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';

const TextAreaComponent = props => (
  <Form.Field>
    <TextArea {...props.input} value={props.input.value} placeholder={props.label} />
  </Form.Field>
);

const SystemCredentailForm = ({
  handleSubmit,
  saveSystemCredential,
  operationCompleted,
  systemCredentialError,
  ...rest
}) => {
  const createSystemCredential = ({ userId, password, systemName, description }) => {
    let systemCredential = {
      userId,
      password,
      systemName,
      description
    };
    saveSystemCredential(systemCredential);
  };

  return (
    <Container>
      {!operationCompleted && <Message error>Error Occured: {systemCredentialError}</Message>}

      <Card fluid raised color="teal">
        <Card.Content>
          <Card.Header>New System Credentail </Card.Header>
          <br />
          <Form onSubmit={handleSubmit(createSystemCredential)}>
            <Field component={Form.Input} label="User: " name="userId" placeholder="User " required />
            <Field
              component={Form.Input}
              type="password"
              label="Password: "
              name="password"
              placeholder="Password "
              required
            />
            <Field component={Form.Input} label="System Name: " name="systemName" placeholder="System Name " required />

            <Field component={TextAreaComponent} label="Description: " name="description" placeholder="Description" />

            <Form.Group textAlign="rigth">
              <Form.Button primary size="large" color="teal" textAlign="right">
                Create
              </Form.Button>
              <Form.Button primary size="large" color="google plus" textAlign="right">
                Reset
              </Form.Button>
            </Form.Group>
          </Form>
        </Card.Content>
      </Card>
    </Container>
  );
};

export default reduxForm({
  form: 'systemCredentialForm'
})(SystemCredentailForm);
