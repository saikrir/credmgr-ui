import React from 'react';
import { Container, Table, Reveal, Icon } from 'semantic-ui-react';

const SearchResults = ({ searchResults }) => {
  const searchResultRow = searchResult => {
    return (
      <Table.Row key={searchResult.id}>
        <Table.Cell>{searchResult.systemName}</Table.Cell>
        <Table.Cell>{searchResult.userId}</Table.Cell>
        <Table.Cell>
          <Reveal animated="move down">
            <Reveal.Content visible>
              <Icon name="square full" size="small" />
              <Icon name="square full" size="small" />
              <Icon name="square full" size="small" />
            </Reveal.Content>
            <Reveal.Content hidden>{searchResult.password}</Reveal.Content>
          </Reveal>
        </Table.Cell>
        <Table.Cell>{searchResult.description}</Table.Cell>
      </Table.Row>
    );
  };

  return (
    <Container>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>System Name</Table.HeaderCell>
            <Table.HeaderCell>User Id</Table.HeaderCell>
            <Table.HeaderCell>Password </Table.HeaderCell>
            <Table.HeaderCell>Description </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{searchResults.map(searchResult => searchResultRow(searchResult))}</Table.Body>
      </Table>
    </Container>
  );
};

export default SearchResults;
