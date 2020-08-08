import { API, ACTIONS, ENDPOINTS } from '../../../utils/app-constants';
import TokenStore from '../../../utils/token-store';
import axios from 'axios';

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
