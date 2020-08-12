import React, { useEffect } from 'react';
import { Form, Container, Card, TextArea } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import { useParams } from 'react-router-dom';
import AppMessages from '../containers/app-messages';
import FormButtons from './form-buttons';

const TextAreaComponent = props => (
  <Form.Field>
    <TextArea {...props.input} value={props.input.value} placeholder={props.label} />
  </Form.Field>
);

const SystemCredentailForm = ({
  handleSubmit,
  saveSystemCredential,
  reset,
  systemCredentialFormInit,
  getSystemCredentialRecord,
  updateSystemCredential,
  editMode
}) => {
  let { id } = useParams();

  useEffect(() => {
    systemCredentialFormInit();

    if (editMode && id) {
      getSystemCredentialRecord(id);
    }
  }, [id, editMode, systemCredentialFormInit, getSystemCredentialRecord]);

  const createSystemCredential = ({ userId, password, systemName, description }) => {
    let systemCredential = {
      userId,
      password,
      systemName,
      description
    };
    if (!editMode) {
      saveSystemCredential(systemCredential).then(() => {
        reset();
      });
    } else {
      if (id) {
        updateSystemCredential(id, systemCredential).then(() => {
          reset();
        });
      }
    }

    return false;
  };

  return (
    <Container>
      <AppMessages /> <br />
      <Card fluid raised color="brown">
        <Card.Content>
          <Card.Header> {editMode ? 'Update ' : 'Add  '}System Credentail </Card.Header>
          <br />
          <Form onSubmit={handleSubmit(createSystemCredential)} autoComplete="off">
            <Field component={Form.Input} label="System Name: " name="systemName" placeholder="System Name " required />
            <Field component={Form.Input} label="User: " name="userId" placeholder="User " required />
            <Field
              component={Form.Input}
              type={editMode ? 'input' : 'password'}
              label="Password: "
              name="password"
              placeholder="Password "
              required
            />

            <Field component={TextAreaComponent} label="Description: " name="description" placeholder="Description" />
            <FormButtons submitButtonTitle={editMode ? 'Update' : 'Create'} />
          </Form>
        </Card.Content>
      </Card>
    </Container>
  );
};

export default reduxForm({
  form: 'systemCredentialForm',
  enableReinitialize: true
})(SystemCredentailForm);
