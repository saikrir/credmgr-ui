import React from 'react';
import { connect } from 'react-redux';
import { Segment, Header } from 'semantic-ui-react';

const AppHeader = ({ loggedInUser }) => {
  let dateStr = new Date().toLocaleDateString();
  return (
    <Segment size="massive" padded="very" vertical raised inverted textAlign="center" color="teal">
      <Header as="h1"> Welcome to {loggedInUser} </Header>
      <Header as="h4" textAlign="center">
        {dateStr}
      </Header>
    </Segment>
  );
};

const mapStateToProps = ({ auth: { loggedInUser } }) => {
  return { loggedInUser };
};

export default connect(mapStateToProps)(AppHeader);
