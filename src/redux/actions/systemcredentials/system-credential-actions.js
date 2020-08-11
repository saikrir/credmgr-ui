import { API, ACTIONS, ENDPOINTS, MESSAGES } from '../../../utils/app-constants';
import { systemErrorTranslator, searchErrorTranslator } from '../../../utils/error-translator';
import TokenStore from '../../../utils/token-store';
import axios from 'axios';
import { addInfoMessage, addWarningMessage, addErrorMessage, clearMessages } from '../messages/message.actions';

export const initialize = () => {
  return dispatch => {
    dispatch({
      type: ACTIONS.SYSTEM_CREDENTIAL_INITIALIZE
    });
    dispatch(clearMessages(dispatch));
  };
};

export const createSystemCredential = systemCredential => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      const jwtToken = TokenStore.getAuthToken();

      if (!jwtToken) {
        dispatch({
          type: ACTIONS.AUTHENTICATION_FAILED
        });
      } else {
        let createSystemCredentailEndpoint = `${API.HOST}${API.CONTEXT_PATH}${ENDPOINTS.SYSTEM_CREDENTIAL}`;

        let axiosInstance = getAuthEnabledAxios(jwtToken, createSystemCredentailEndpoint);

        axiosInstance
          .post(createSystemCredentailEndpoint, systemCredential)
          .then(_ => {
            dispatch({
              type: ACTIONS.SYSTEM_CREDENTIAL_CREATED
            });
            dispatch(addInfoMessage(MESSAGES.SYSTEM_CREDENTIAL_CREATED));
            resolve();
          })
          .catch(err => {
            let errorMessage = err.message;

            if (!err.response) {
              errorMessage = MESSAGES.NETWORK_ERROR;
            } else if (err.response.status) {
              errorMessage = systemErrorTranslator(err.response.status);
            }

            dispatch(addErrorMessage(errorMessage));
            dispatch({
              type: ACTIONS.SYSTEM_CREDENTIAL_ERROR
            });
            reject();
          });
      }
    }); //Promise
  };
};

export const updateSystemCredential = (id, systemCredential) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      const jwtToken = TokenStore.getAuthToken();

      if (!jwtToken) {
        dispatch({
          type: ACTIONS.AUTHENTICATION_FAILED
        });
      } else {
        let updateSystemCredentailEndpoint = `${API.HOST}${API.CONTEXT_PATH}${ENDPOINTS.SYSTEM_CREDENTIAL}/${id}`;

        let axiosInstance = getAuthEnabledAxios(jwtToken, updateSystemCredentailEndpoint);

        axiosInstance
          .put(updateSystemCredentailEndpoint, systemCredential)
          .then(_ => {
            dispatch({
              type: ACTIONS.SYSTEM_CREDENTIAL_CREATED
            });
            dispatch(addInfoMessage(MESSAGES.SYSTEM_CREDENTIAL_UPDATED));
            resolve();
          })
          .catch(err => {
            let errorMessage = err.message;
            if (!err.response) {
              errorMessage = MESSAGES.NETWORK_ERROR;
            } else if (err.response.status) {
              errorMessage = systemErrorTranslator(err.response.status);
            }

            dispatch(addErrorMessage(errorMessage));

            dispatch({
              type: ACTIONS.SYSTEM_CREDENTIAL_ERROR
            });
            reject();
          });
      }
    }); //Promise
  };
};

export const searchCredentials = searchTerm => {
  return dispatch => {
    const jwtToken = TokenStore.getAuthToken();

    if (!jwtToken) {
      dispatch({
        type: ACTIONS.AUTHENTICATION_FAILED
      });
    } else {
      let searchSystemCredentailEndpoint = `${API.HOST}${API.CONTEXT_PATH}${ENDPOINTS.SYSTEM_CREDENTIAL}`;
      let axiosIntance = getAuthEnabledAxios(jwtToken);

      axiosIntance
        .get(searchSystemCredentailEndpoint, {
          params: {
            systemName: searchTerm
          }
        })
        .then(response => {
          let { data: searchResults } = response;
          dispatch(clearMessages());
          if (!searchResults || searchResults.length === 0) {
            dispatch(addWarningMessage(MESSAGES.NO_SEARCH_RESULTS_FOUND));
          }

          dispatch({
            type: ACTIONS.SYSTEM_CREDNTIAL_SEARCH_RESULTS,
            payload: searchResults
          });
        })
        .catch(err => {
          let errorMessage = err.message;
          if (!err.response) {
            errorMessage = MESSAGES.NETWORK_ERROR;
          } else if (err.response.status) {
            errorMessage = searchErrorTranslator(err.response.status);
          }
          dispatch(addErrorMessage(errorMessage));

          dispatch({
            type: ACTIONS.SYSTEM_CREDNTIAL_SEARCH_RESULTS_ERROR
          });
        });
    }
  };
};

export const getSystemCredential = id => {
  return dispatch => {
    const jwtToken = TokenStore.getAuthToken();

    if (!jwtToken) {
      dispatch({
        type: ACTIONS.AUTHENTICATION_FAILED
      });
    } else {
      let searchSystemCredentailEndpoint = `${API.HOST}${API.CONTEXT_PATH}${ENDPOINTS.SYSTEM_CREDENTIAL}/${id}`;
      let axiosIntance = getAuthEnabledAxios(jwtToken);
      axiosIntance
        .get(searchSystemCredentailEndpoint)
        .then(response => {
          let { data: systemCredential } = response;
          dispatch({
            type: ACTIONS.SYSTEM_CREDNTIAL_FOUND_BY_ID,
            payload: systemCredential
          });
        })
        .catch(err => {
          let errorMessage = err.message;
          if (!err.response) {
            errorMessage = MESSAGES.NETWORK_ERROR;
          } else if (err.response.status) {
            errorMessage = searchErrorTranslator(err.response.status);
          }
          dispatch(addErrorMessage(errorMessage));

          dispatch({
            type: ACTIONS.SYSTEM_CREDNTIAL_FIND_BY_ID_ERROR
          });
        });
    }
  };
};

export const deleteSystemCredential = id => {
  return dispatch => {
    const jwtToken = TokenStore.getAuthToken();

    if (!jwtToken) {
      dispatch({
        type: ACTIONS.AUTHENTICATION_FAILED
      });
    } else {
      let searchSystemCredentailEndpoint = `${API.HOST}${API.CONTEXT_PATH}${ENDPOINTS.SYSTEM_CREDENTIAL}/${id}`;
      let axiosIntance = getAuthEnabledAxios(jwtToken);
      axiosIntance
        .delete(searchSystemCredentailEndpoint)
        .then(_ => {
          dispatch({
            type: ACTIONS.SYSTEM_CREDNTIAL_DELETE
          });
          dispatch(addInfoMessage(MESSAGES.SYSTEM_CREDENTIAL_DELETED));
        })
        .catch(err => {
          let errorMessage = err.message;
          if (!err.response) {
            errorMessage = MESSAGES.NETWORK_ERROR;
          } else if (err.response.status) {
            errorMessage = systemErrorTranslator(err.response.status);
          }
          dispatch(addErrorMessage(errorMessage));
          dispatch({
            type: ACTIONS.SYSTEM_CREDNTIAL_DELETE_ERROR
          });
        });
    }
  };
};

const getAuthEnabledAxios = jwtToken => {
  const authHeader = getAuthHeader(jwtToken);
  return axios.create({
    timeout: 1000,
    headers: authHeader
  });
};

const getAuthHeader = jwtToken => {
  return {
    Authorization: `Bearer ${jwtToken}`
  };
};
