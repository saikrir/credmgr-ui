import React from 'react';
import { Segment, Header, Message, Container, Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const PublicHome = () => {
  let history = useHistory();

  const clickHandler = () => {
    history.push('/login');
  };

  return (
    <div>
      <Segment size="massive" padded="very" vertical raised inverted textAlign="center" color="brown">
        <Header as="h1"> Welcome to Credential Manager Application </Header>
      </Segment>
      <br />
      <Container>
        <Message size="big" info>
          <p>
            This is a credential management application, that lets you manage your application credentials in a secure
            way, Please click here to login
          </p>
          <Button content="Login" primary onClick={clickHandler}></Button>
        </Message>
      </Container>
    </div>
  );
};

export default PublicHome;
