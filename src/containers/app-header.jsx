import React from 'react';
import { connect } from 'react-redux';
import { Grid, Header, Button, Container, Icon } from 'semantic-ui-react';
import { doLogout } from '../redux/actions/auth/auth-actions';
import { Link } from 'react-router-dom';

const AppHeader = ({ loggedInUser, logout }) => {
  let dateStr = new Date().toLocaleDateString();
  return (
    <Container fluid>
      <Grid inverted padded>
        <Grid.Row color="brown">
          <Grid.Column width={4}>
            <Link to="/private-home">
              <Icon name="user secret" size="huge" inverted corner />
            </Link>
          </Grid.Column>
          <Grid.Column width={8} textAlign="center">
            <Header as="h1" inverted>
              Credential Management System
            </Header>
            <Header as="h4" inverted>
              {dateStr} - ({process.env.NODE_ENV} Mode)
            </Header>
          </Grid.Column>
          <Grid.Column width={4} textAlign="right">
            <Button negative onClick={logout}>
              Logout {loggedInUser}
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
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
