export const API = {
  HOST: 'http://skrao-app-server:9000',
  //HOST: 'http://localhost:8080',
  CONTEXT_PATH: '/v1/credmgr-api'
};

export const ENDPOINTS = {
  AUTH: '/users/authenticate',
  VALIDATE_TOKEN: '/users/token/{token}/validate',
  SYSTEM_CREDENTIAL: '/system-credentials'
};

export const ACTIONS = {
  AUTHENTICATION_SUCCESSFUL: 'AuthSuccess',
  AUTHENTICATION_FAILED: 'AuthFailed',
  USER_LOGOUT: 'Logout',
  SYSTEM_CREDENTIAL_INITIALIZE: 'SystemCredentialInitialze',
  SYSTEM_CREDENTIAL_CREATED: 'SystemCredentailCreated',
  SYSTEM_CREDENTIAL_ERROR: 'SystemCredentailError',
  SYSTEM_CREDNTIAL_SEARCH_RESULTS: 'SystemCredentialSearch',
  SYSTEM_CREDNTIAL_SEARCH_RESULTS_ERROR: 'SystemCredentialSearchError'
};
