import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import AppHeader from '../containers/app-header';
import AppMenu from '../components/app-menu';
import { Switch, useRouteMatch, Route } from 'react-router-dom';
import SystemCredentailForm from '../containers/system-credential-form-container';
import AppSearch from '../containers/app-search';

const PrivateHome = () => {
  let { path } = useRouteMatch();

  return (
    <Container fluid>
      <Segment>
        <AppHeader />
        <AppMenu />
      </Segment>

      <Switch>
        <Route exact path={path}>
          <Container>Welcome to Credential Management System</Container>
        </Route>
        <Route exact path={`${path}/search`}>
          <AppSearch />
        </Route>
        <Route exact path={`${path}/new`}>
          <SystemCredentailForm />
        </Route>
        <Route exact path={`${path}/edit/:id`}>
          <SystemCredentailForm />
        </Route>
      </Switch>
    </Container>
  );
};

export default PrivateHome;
