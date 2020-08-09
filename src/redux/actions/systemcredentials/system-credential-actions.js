import { API, ACTIONS, ENDPOINTS } from '../../../utils/app-constants';
import TokenStore from '../../../utils/token-store';
import axios from 'axios';

export const initialize = () => {
  return dispatch => {
    dispatch({
      type: ACTIONS.SYSTEM_CREDENTIAL_INITIALIZE
    });
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
          .then(response => {
            dispatch({
              type: ACTIONS.SYSTEM_CREDENTIAL_CREATED
            });
            resolve();
          })
          .catch(err => {
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
          .then(response => {
            dispatch({
              type: ACTIONS.SYSTEM_CREDENTIAL_CREATED
            });
            resolve();
          })
          .catch(err => {
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
          dispatch({
            type: ACTIONS.SYSTEM_CREDNTIAL_SEARCH_RESULTS,
            payload: searchResults
          });
        })
        .catch(error => {
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
        .catch(error => {
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
        })
        .catch(error => {
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
