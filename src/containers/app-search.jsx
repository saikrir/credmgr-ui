import { Container, Message } from 'semantic-ui-react';
import AppSearchForm from '../components/app-search-form';
import { connect } from 'react-redux';
import {
  searchCredentials,
  initialize,
  deleteSystemCredential
} from '../redux/actions/systemcredentials/system-credential-actions';
import SearchResults from '../components/search-results';
import React, { useEffect } from 'react';

const AppSearch = ({
  search,
  systemCredentialSearches,
  credentailOperationSuccessful,
  systemCredentialError,
  systemCredentialFormInit,
  deleteCredential
}) => {
  useEffect(() => {
    systemCredentialFormInit();
  }, []);

  const renderMessage = () => {
    if (!credentailOperationSuccessful) {
      return <Message error>Error Occured: {systemCredentialError}</Message>;
    } else {
      return <Message info>System Credential Deleted!</Message>;
    }
  };

  const searchResultsOrMessage = () => {
    if (credentailOperationSuccessful) {
      if (systemCredentialSearches && systemCredentialSearches.length > 0) {
        return <SearchResults searchResults={systemCredentialSearches} deleteHandler={deleteCredential} />;
      } else {
        return <Message error>No Search Results Found</Message>;
      }
    } else if (systemCredentialError) {
      return <Message error>Error occured when performing search: {systemCredentialError}</Message>;
    }
  };

  return (
    <Container>
      {renderMessage()}
      <AppSearchForm searchHandler={search} />
      <br />
      <Container>{searchResultsOrMessage()}</Container>
    </Container>
  );
};

const mapStateToProps = ({
  systemCredential: { systemCredentialSearches, credentailOperationSuccessful, systemCredentialError }
}) => {
  return { systemCredentialSearches, credentailOperationSuccessful, systemCredentialError };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    search: searchTerm => dispatch(searchCredentials(searchTerm)),
    systemCredentialFormInit: () => dispatch(initialize()),
    deleteCredential: id => dispatch(deleteSystemCredential(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppSearch);
