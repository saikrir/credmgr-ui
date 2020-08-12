import React from 'react';
import { Container, Table, Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const SearchResults = ({ searchResults, deleteHandler }) => {
  let history = useHistory();

  const handleEdit = (e, id) => {
    history.push(`edit/${id}`);
  };

  const handleDelete = (e, id) => {
    if (id) {
      deleteHandler(id);
    }
  };

  const searchResultRow = searchResult => {
    return (
      <Table.Row key={searchResult.id}>
        <Table.Cell>{searchResult.systemName}</Table.Cell>
        <Table.Cell>{searchResult.userId}</Table.Cell>
        <Table.Cell>{searchResult.password}</Table.Cell>
        <Table.Cell>{searchResult.description}</Table.Cell>
        <Table.Cell>
          <div>
            <Button
              primary
              onClick={e => {
                handleEdit(e, searchResult.id);
              }}
            >
              Edit
            </Button>
            <Button
              color="google plus"
              onClick={e => {
                handleDelete(e, searchResult.id);
              }}
            >
              Delete
            </Button>
          </div>
        </Table.Cell>
      </Table.Row>
    );
  };

  return (
    <Container>
      <Table celled padded columns="5" textAlign="center" sortable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>System Name</Table.HeaderCell>
            <Table.HeaderCell>User Id</Table.HeaderCell>
            <Table.HeaderCell>Password </Table.HeaderCell>
            <Table.HeaderCell>Description </Table.HeaderCell>
            <Table.HeaderCell>Actions </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{searchResults.map(searchResult => searchResultRow(searchResult))}</Table.Body>
      </Table>
    </Container>
  );
};

export default SearchResults;