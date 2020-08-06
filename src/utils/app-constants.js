export const API = {
  HOST: 'http://skrao-app-server:9000',
  CONTEXT_PATH: '/v1/credmgr-api'
};

export const ENDPOINTS = {
  AUTH: '/users/authenticate',
  VALIDATE_TOKEN: '/users/token/{token}/validate'
};

export const ACTIONS = {
  AUTHENTICATION_SUCCESSFUL: 'AuthSuccess',
  AUTHENTICATION_FAILED: 'AuthFailed',
  USER_LOGOUT: 'Logout'
};
