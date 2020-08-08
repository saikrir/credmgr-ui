import React from 'react';
import { Container, Message } from 'semantic-ui-react';
import AppSearchForm from '../components/app-search-form';
import { connect } from 'react-redux';
import { searchCredentials } from '../redux/actions/systemcredentials/system-credential-actions';
import SearchResults from '../components/search-results';

const AppSearch = ({ search, systemCredentialSearches, credentailOperationSuccessful, systemCredentialError }) => {
  const searchResultsOrMessage = () => {
    if (credentailOperationSuccessful) {
      if (systemCredentialSearches && systemCredentialSearches.length > 0) {
        return <SearchResults searchResults={systemCredentialSearches} />;
      } else {
        return <Message error>No Search Results Found</Message>;
      }
    } else if (systemCredentialError) {
      return <Message error>Error occured when performing search: {systemCredentialError}</Message>;
    }
  };

  return (
    <Container>
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
    search: searchTerm => dispatch(searchCredentials(searchTerm))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppSearch);
