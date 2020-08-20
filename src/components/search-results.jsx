import React, { useState } from 'react';
import { Container, Button, Icon, Label, Segment, Card } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const SearchResults = ({ searchResults, deleteHandler }) => {
  let history = useHistory();
  let [showPassword, setShowPassword] = useState(false);

  const handleEdit = (e, id) => {
    history.push(`edit/${id}`);
  };

  const handleDelete = (e, id) => {
    if (id) {
      if (window.confirm('Are you sure you want to delete? ') === true) {
        deleteHandler(id);
      }
    }
  };

  const copyText = (e, copyText) => {
    if (!window.navigator.clipboard) {
      alert('Clipboard support not available');
    } else {
      window.navigator.clipboard.writeText(copyText);
    }
  };

  const togglePasswordDisplay = () => {
    setShowPassword(!showPassword);
  };

  const searchResultRow = searchResult => {
    return (
      <Card>
        <Card.Content>
          <Card.Header>
            <Segment raised>
              <Label as="a" color="red" ribbon>
                Name
              </Label>
              <span>{searchResult.systemName}</span>
            </Segment>
          </Card.Header>

          <Card.Meta textAlign="center">
            <br />
            <Label as="a" color="blue" image>
              <Icon name="user  circle" />
              Username:
              <Label.Detail>{searchResult.userId}</Label.Detail>
            </Label>
          </Card.Meta>

          <Card.Description textAlign="center">
            <Label as="a" color="blue" image>
              <Icon name="key circle" />
              Password:
              <Label.Detail>{showPassword ? searchResult.password : '********'}</Label.Detail>
            </Label>
            <br />
            <br />
            <Button circular size="tiny" color="blue" compact onClick={togglePasswordDisplay}>
              {showPassword ? <Icon name="eye slash" /> : <Icon name="eye" />}
              {showPassword ? 'Hide' : 'Show'}
            </Button>
            &nbsp;
            <Button
              circular
              size="tiny"
              color="green"
              compact
              onClick={e => {
                copyText(e, searchResult.password);
              }}
            >
              <Icon name="copy" />
              Copy
            </Button>
            <br />
            <br />
            <Card.Meta>
              <div>{searchResult.description}</div>
            </Card.Meta>
          </Card.Description>
        </Card.Content>

        <Card.Content extra>
          <div className="ui two buttons">
            <Button
              basic
              color="green"
              onClick={e => {
                handleEdit(e, searchResult.id);
              }}
            >
              Edit
            </Button>
            <Button
              basic
              color="red"
              onClick={e => {
                handleDelete(e, searchResult.id);
              }}
            >
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  };

  return (
    <Container>
      <Card.Group stackable doubling itemsPerRow={3}>
        {searchResults.map(searchResult => searchResultRow(searchResult))}
      </Card.Group>
    </Container>
  );
};

export default SearchResults;
