import React from 'react';
import { Container, Segment, Message } from 'semantic-ui-react';
import AppHeader from './app-header';
import AppSearchForm from '../components/app-search-form';
import AppMenu from '../components/app-menu';
import { connect } from 'react-redux';
import { searchCredentials } from '../redux/actions/systemcredentials/system-credential-actions';
import SearchResults from '../components/search-results';

const AppSearch = ({ search, systemCredentialSearches, credentailOperationSuccessful }) => {
  const searchResultsOrMessage = () => {
    if (credentailOperationSuccessful && systemCredentialSearches && systemCredentialSearches.length > 0) {
      return <SearchResults searchResults={systemCredentialSearches} />;
    } else {
      return <Message error>No Search Results Found</Message>;
    }
  };

  return (
    <Container fluid>
      <Segment>
        <AppHeader />
        <AppMenu />
      </Segment>
      <AppSearchForm searchHandler={search} />
      <br />
      <Container>{searchResultsOrMessage()}</Container>
    </Container>
  );
};

const mapStateToProps = ({ systemCredential: { systemCredentialSearches, credentailOperationSuccessful } }) => {
  return { systemCredentialSearches, credentailOperationSuccessful };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    search: searchTerm => dispatch(searchCredentials(searchTerm))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppSearch);
