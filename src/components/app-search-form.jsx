import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Form, Container, Card } from 'semantic-ui-react';
import FormButtons from './form-buttons';
const AppSearchForm = ({ handleSubmit, searchHandler }) => {
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
            <Field component={Form.Input} label="Search: " name="systemName" placeholder="System Name " required />
            <FormButtons />
          </Form>
        </Card.Content>
      </Card>
    </Container>
  );
};

export default reduxForm({
  form: 'searchForm'
})(AppSearchForm);
