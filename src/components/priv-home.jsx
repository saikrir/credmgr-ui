import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import AppHeader from '../containers/app-header';
import AppMenu from '../components/app-menu';

const PrivateHome = () => {
  return (
    <Container fluid>
      <Segment stacked vertical>
        <AppHeader />
        <AppMenu />
      </Segment>
      <div>Welcome to Credential Management Application</div>
    </Container>
  );
};

export default PrivateHome;
