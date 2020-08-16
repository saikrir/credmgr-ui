import React from 'react';
import { Container, Segment, Grid, Header, GridRow, GridColumn } from 'semantic-ui-react';
import { Switch, useRouteMatch, Route } from 'react-router-dom';

import AppHeader from '../containers/app-header';
import AppMenu from '../components/app-menu';
import AppFooter from './app-footer';
import AboutPage from './about-page';
import AppSearch from '../containers/app-search';
import SystemCredentailForm from '../containers/system-credential-form-container';
import SystemCredentialEdit from '../containers/system-credential-edit';

const HomeContent = () => {
  return (
    <Container textAlign='center'>
      <Segment>
        <Grid columns={1} padded>
          <Grid.Row>
            <Grid.Column>
              <Header as='h2'>Welcome to Credential Management System</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <p>
                This is a secure password management system, aimed to providing an easy to use interface to manage your
                System credentials <br />
                Please use the menu navigation to manage credentials
                <div />
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
};

const PrivateHome = () => {
  let { path } = useRouteMatch();

  return (
    <Container fluid>
      <Grid padded>
        <Grid.Row>
          <Grid.Column>
            <AppHeader />
            <AppMenu />
          </Grid.Column>
        </Grid.Row>

        <GridRow centered>
          <GridColumn>
            <Switch>
              <Route exact path={path}>
                <HomeContent />
              </Route>
              <Route exact path={`${path}/search`}>
                <AppSearch />
              </Route>
              <Route exact path={`${path}/new`}>
                <SystemCredentailForm />
              </Route>
              <Route exact path={`${path}/edit/:id`}>
                <SystemCredentialEdit />
              </Route>
              <Route exact path={`${path}/about`}>
                <AboutPage />
              </Route>
            </Switch>
          </GridColumn>
        </GridRow>
        <GridRow color='brown' textAlign='center' verticalAlign='bottom'>
          <GridColumn>
            <AppFooter />
          </GridColumn>
        </GridRow>
      </Grid>
    </Container>
  );
};

export default PrivateHome;
