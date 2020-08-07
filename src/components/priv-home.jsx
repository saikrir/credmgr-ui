import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import AppHeader from '../containers/app-header';
import AppMenu from '../components/app-menu';
import SystemCredentailForm from '../containers/system-credential-form-container';

const PrivateHome = () => {
  return (
    <Container fluid>
      <Segment>
        <AppHeader />
        <AppMenu />
      </Segment>
      <Container>Welcome to Credential Management Application</Container>
      <SystemCredentailForm />
    </Container>
  );
};

export default PrivateHome;
