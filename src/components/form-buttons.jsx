import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const FormButtons = ({ submitButtonTitle = ' Search ' }) => {
  const history = useHistory();
  return (
    <Form.Group>
      <Form.Button primary size="large" color="brown">
        {submitButtonTitle}
      </Form.Button>
      <Button
        color="orange"
        onClick={e => {
          e.preventDefault();
          history.push('/private-home');
        }}
      >
        Cancel
      </Button>
    </Form.Group>
  );
};

export default FormButtons;
