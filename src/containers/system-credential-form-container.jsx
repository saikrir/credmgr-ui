import React from 'react';

import { createSystemCredential } from '../redux/actions/systemcredentials/system-credential-actions';
import { connect } from 'react-redux';
import SystemCredentailForm from '../components/system-credential-form';

const mapStateToProps = ({ systemCredential }) => {
  return {
    operationCompleted: systemCredential.credentailOperationSuccessful,
    systemCredentialError: systemCredential.systemCredentialError
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveSystemCredential: systemCredential => dispatch(createSystemCredential(systemCredential))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SystemCredentailForm);
