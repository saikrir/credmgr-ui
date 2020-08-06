import axios from 'axios';
import { API, ENDPOINTS, ACTIONS } from '../../../utils/app-constants';
import { authErrorTranslator } from '../../../utils/error-translator';
import TokenStore from '../../../utils/token-store';

export const authenticate = (userName, password) => {
  return dispatch => {
    let authEndpoint = `${API.HOST}${API.CONTEXT_PATH}${ENDPOINTS.AUTH}`;
    let requestBody = {
      userName,
      password
    };
    axios
      .post(authEndpoint, requestBody)
      .then(({ data: { authToken } }) => {
        TokenStore.setAuthToken(authToken);
        dispatch({
          type: ACTIONS.AUTHENTICATION_SUCCESSFUL,
          payload: {
            user: userName
          }
        });
      })
      .catch(err => {
        let errorMessage = err.message;

        if (!err.response) {
          // When you cannot connect to server
          errorMessage = 'Cannot connect to the server';
        } else if (err.response.status) {
          errorMessage = authErrorTranslator(err.response.status);
        }

        dispatch({
          type: ACTIONS.AUTHENTICATION_FAILED,
          payload: { error: errorMessage }
        });
      });
  };
};

export const validateToken = () => {
  return dispatch => {
    let token = TokenStore.getAuthToken();
    if (token && token !== '') {
      let tokenSubstitutedEndpoint = ENDPOINTS.VALIDATE_TOKEN.replace('{token}', token);
      let validateTokenEndpoint = `${API.HOST}${API.CONTEXT_PATH}${tokenSubstitutedEndpoint}`;
      axios
        .get(validateTokenEndpoint)
        .then(response => {
          let {
            data: { username }
          } = response;
          dispatch({
            type: ACTIONS.AUTHENTICATION_SUCCESSFUL,
            payload: {
              user: username
            }
          });
        })
        .catch(err => {
          let errorMessage = err.message;
          if (!err.response) {
            errorMessage = 'Cannot connect to the server';
          } else if (err.response.status) {
            errorMessage = authErrorTranslator(err.response.status);
          }

          dispatch({
            type: ACTIONS.AUTHENTICATION_FAILED,
            payload: { error: errorMessage }
          });
        });
    }
  };
};

export const doLogout = () => {
  return dispatch => {
    TokenStore.removeAuthToken();
    dispatch({
      type: ACTIONS.USER_LOGOUT
    });
  };
};
