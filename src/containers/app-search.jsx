import { Container } from 'semantic-ui-react';
import AppSearchForm from '../components/app-search-form';
import { connect } from 'react-redux';
import {
  searchCredentials,
  initialize,
  deleteSystemCredential
} from '../redux/actions/systemcredentials/system-credential-actions';
import SearchResults from '../components/search-results';
import React, { useEffect } from 'react';
import AppMessages from './app-messages';

const AppSearch = ({ search, systemCredentialSearches = [], systemCredentialFormInit, deleteCredential }) => {
  useEffect(() => {
    systemCredentialFormInit();
  }, []);

  return (
    <Container>
      <AppMessages /> <br />
      <AppSearchForm searchHandler={search} />
      <br />
      <Container>
        {systemCredentialSearches.length > 0 && (
          <SearchResults searchResults={systemCredentialSearches} deleteHandler={deleteCredential} />
        )}
      </Container>
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
