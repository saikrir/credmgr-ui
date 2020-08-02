import React from 'react';
import { connect } from 'react-redux';
import authenticate from '../redux/actions/auth/auth-actions';
import LoginForm from '../components/login-form';

const mapStateToProps = ({ auth }) => {
  return auth;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    doAuth: (userName, password) => dispatch(authenticate(userName, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
