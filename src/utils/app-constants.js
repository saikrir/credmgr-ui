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
  SYSTEM_CREDNTIAL_SEARCH_RESULTS_ERROR: 'SystemCredentialSearchError',
  SYSTEM_CREDNTIAL_FOUND_BY_ID: 'SystemCredentialFoundById',
  SYSTEM_CREDNTIAL_FIND_BY_ID_ERROR: 'SystemCredentialFindByIdError',
  SYSTEM_CREDNTIAL_DELETE: 'SystemCredentialDelete',
  SYSTEM_CREDNTIAL_DELETE_ERROR: 'SystemCredentialDeleteError',
  ADD_MESSAGES: 'AddMessages',
  CLEAR_MESSAGES: 'ClearMessages'
};

export const MESSAGES = {
  NETWORK_ERROR: 'Cannot connect to the server',
  SYSTEM_CREDENTIAL_CREATED: 'System Crednetial has been created',
  SYSTEM_CREDENTIAL_UPDATED: 'System Crednetial has been Updated',
  SYSTEM_CREDENTIAL_DELETED: 'System Crednetial has been Deleted',
  NO_SEARCH_RESULTS_FOUND: 'No Search results found',
  LOGGED_OUT: 'You have been logged out'
};
