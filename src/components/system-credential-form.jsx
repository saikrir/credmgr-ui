import React, { useEffect } from 'react';
import { Message, Form, Container, Card, TextArea } from 'semantic-ui-react';
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
  reset,
  systemCredentialFormInit
}) => {
  useEffect(() => {
    systemCredentialFormInit();
  }, []);

  const createSystemCredential = ({ userId, password, systemName, description }) => {
    let systemCredential = {
      userId,
      password,
      systemName,
      description
    };
    saveSystemCredential(systemCredential).then(() => {
      reset();
    });
    return false;
  };

  const renderMessage = () => {
    if (systemCredentialError) {
      return <Message error>Error Occured: {systemCredentialError}</Message>;
    } else if (operationCompleted) {
      return <Message info>System Credential Created!</Message>;
    }
  };

  return (
    <Container>
      {renderMessage()}
      <Card fluid raised color='teal'>
        <Card.Content>
          <Card.Header>New System Credentail </Card.Header>
          <br />
          <Form onSubmit={handleSubmit(createSystemCredential)} autoComplete='off'>
            <Field component={Form.Input} label='User: ' name='userId' placeholder='User ' required />
            <Field
              component={Form.Input}
              type='password'
              label='Password: '
              name='password'
              placeholder='Password '
              required
            />
            <Field component={Form.Input} label='System Name: ' name='systemName' placeholder='System Name ' required />

            <Field component={TextAreaComponent} label='Description: ' name='description' placeholder='Description' />

            <Form.Group textAlign='rigth'>
              <Form.Button primary size='large' color='teal' textAlign='right'>
                Create
              </Form.Button>
              <Form.Button primary size='large' color='google plus' textAlign='right' onClick={reset}>
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
