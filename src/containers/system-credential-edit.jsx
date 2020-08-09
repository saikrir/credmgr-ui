import React from 'react';
import { connect } from 'react-redux';
import {
  getSystemCredential,
  initialize,
  updateSystemCredential
} from '../redux/actions/systemcredentials/system-credential-actions';
import SystemCredentialForm from '../components/system-credential-form';

const mapStateToProps = ({ systemCredential }) => {
  let {
    systemCredential: { userId, password, systemName, description }
  } = systemCredential;

  let initialValues = {
    userId,
    password,
    systemName,
    description
  };

  if (systemCredential.credentailOperationSuccessful) {
    initialValues = {};
  }

  return {
    initialValues,
    systemCredentialRecord: systemCredential.systemCredential,
    operationCompleted: systemCredential.credentailOperationSuccessful,
    systemCredentialError: systemCredential.systemCredentialError,
    editMode: true
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSystemCredentialRecord: id => dispatch(getSystemCredential(id)),
    systemCredentialFormInit: () => dispatch(initialize()),
    updateSystemCredential: (id, systemCredentail) => dispatch(updateSystemCredential(id, systemCredentail))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SystemCredentialForm);
