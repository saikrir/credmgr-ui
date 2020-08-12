import React from 'react';
import { Container, Segment, Grid, Header } from 'semantic-ui-react';

const AboutPage = () => {
  return (
    <Container textAlign="center">
      <Segment>
        <Grid columns={1} padded>
          <Grid.Row>
            <Grid.Column>
              <Header as="h2">About Page </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <p>
                UI version : 1.0 <br />
                API version : 1.0
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
};

export default AboutPage;
