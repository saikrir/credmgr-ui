import React, { useEffect } from 'react';
import { Form, Container, Card } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import { useParams } from 'react-router-dom';
import AppMessages from '../containers/app-messages';
import FormButtons from './form-buttons';
import CoreTextArea from './core-ui/text-area';
import CoreTextField from './core-ui/text-field';
import { systemCredentialValidator } from '../utils/form-validators';

const SystemCredentailForm = ({
  handleSubmit,
  saveSystemCredential,
  reset,
  systemCredentialFormInit,
  getSystemCredentialRecord,
  updateSystemCredential,
  editMode,
  valid
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

  let typeProps = {};
  if (!editMode) {
    typeProps = { type: 'password' };
  }

  return (
    <Container>
      <AppMessages /> <br />
      <Card fluid raised color="brown">
        <Card.Content>
          <Card.Header> {editMode ? 'Update ' : 'Add  '}System Credentail </Card.Header>
          <br />
          <Form onSubmit={handleSubmit(createSystemCredential)} autoComplete="off">
            <Field
              component={CoreTextField}
              label="System Name: "
              name="systemName"
              placeholder="System Name "
              required
            />
            <Field component={CoreTextField} label="User: " name="userId" placeholder="User " required />
            <Field
              component={CoreTextField}
              {...typeProps}
              label="Password: "
              name="password"
              placeholder="Password "
              required
            />
            <Field component={CoreTextArea} label="Description: " name="description" placeholder="Description" />
            <FormButtons submitButtonTitle={editMode ? 'Update' : 'Create'} submitEnabled={valid} />
          </Form>
        </Card.Content>
      </Card>
    </Container>
  );
};

export default reduxForm({
  form: 'systemCredentialForm',
  enableReinitialize: true,
  validate: systemCredentialValidator
})(SystemCredentailForm);
