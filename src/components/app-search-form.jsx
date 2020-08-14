import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Form, Container, Card } from 'semantic-ui-react';
import FormButtons from './form-buttons';
import { searchValidator } from '../utils/form-validators';

const AppSearchForm = ({ handleSubmit, searchHandler }) => {
  const systemSearch = values => {
    let searchTerm = values.systemName;
    searchHandler(searchTerm);
  };

  const renderInput = ({ input, label, meta }) => {
    return (
      <div className='field'>
        <label>{label}</label>
        <input {...input} />
        <div>{meta.error}</div>
      </div>
    );
  };

  return (
    <Container>
      <Card fluid raised color='brown'>
        <Card.Content>
          <Card.Header>Search Credentials </Card.Header> <br />
          <Form onSubmit={handleSubmit(systemSearch)} autoComplete='off'>
            <Field component={renderInput} label='Search: ' name='systemName' placeholder='System Name ' required />
            <FormButtons />
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
