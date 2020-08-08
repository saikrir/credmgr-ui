import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Message, Form, Container, Card } from 'semantic-ui-react';

const AppSearchForm = ({ handleSubmit, searchHandler }) => {
  const systemSearch = values => {
    let searchTerm = values.systemName;
    searchHandler(searchTerm);
  };

  return (
    <Container>
      <Card fluid raised color="teal">
        <Card.Content>
          <Card.Header>Search Credentials </Card.Header> <br />
          <Form onSubmit={handleSubmit(systemSearch)}>
            <Field component={Form.Input} label="Search: " name="systemName" placeholder="System Name " required />
            <Form.Button primary size="large" color="teal" textAlign="right">
              Search
            </Form.Button>
          </Form>
        </Card.Content>
      </Card>
    </Container>
  );
};

export default reduxForm({
  form: 'searchForm'
})(AppSearchForm);
