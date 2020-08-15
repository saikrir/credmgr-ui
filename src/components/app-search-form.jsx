import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Form, Container, Card } from 'semantic-ui-react';
import FormButtons from './form-buttons';
import { searchValidator } from '../utils/form-validators';
import CoreTextField from './core-ui/text-field';

const AppSearchForm = ({ handleSubmit, searchHandler, valid }) => {
  const systemSearch = values => {
    let searchTerm = values.systemName;
    searchHandler(searchTerm);
  };

  return (
    <Container>
      <Card fluid raised color="brown">
        <Card.Content>
          <Card.Header>Search Credentials </Card.Header> <br />
          <Form onSubmit={handleSubmit(systemSearch)} autoComplete="off">
            <Field component={CoreTextField} label="Search: " name="systemName" placeholder="System Name " required />
            <FormButtons submitEnabled={valid} />
          </Form>
        </Card.Content>
      </Card>
    </Container>
  );
};

export default reduxForm({
  form: 'searchForm',
  validate: searchValidator
})(AppSearchForm);
