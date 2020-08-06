import React from 'react';
import { connect } from 'react-redux';
import { Segment, Header, Button, Container } from 'semantic-ui-react';
import { doLogout } from '../redux/actions/auth/auth-actions';

const AppHeader = ({ loggedInUser, logout }) => {
  let dateStr = new Date().toLocaleDateString();
  return (
    <Segment size="massive" padded="very" vertical raised inverted textAlign="center" color="teal">
      <Header as="h1"> Welcome to {loggedInUser} </Header>
      <Header as="h4" textAlign="center">
        {dateStr}
        <Container textAlign="right" inline>
          <Button color="google plus" onClick={logout}>
            Logout
          </Button>
        </Container>
      </Header>
    </Segment>
  );
};

const mapStateToProps = ({ auth: { loggedInUser } }) => {
  return { loggedInUser };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(doLogout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
