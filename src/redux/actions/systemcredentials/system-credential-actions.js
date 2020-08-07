import { API, ACTIONS, ENDPOINTS } from '../../../utils/app-constants';
import TokenStore from '../../../utils/token-store';
import axios from 'axios';

export const createSystemCredential = systemCredential => {
  return dispatch => {
    const jwtToken = TokenStore.getAuthToken();

    if (!jwtToken) {
      dispatch({
        type: ACTIONS.AUTHENTICATION_FAILED
      });
    } else {
      let createSystemCredentailEndpoint = `${API.HOST}${API.CONTEXT_PATH}${ENDPOINTS.CREATE_SYSTEM_CREDENTIAL}`;

      let axiosInstance = getAuthEnabledAxios(jwtToken, createSystemCredentailEndpoint);

      axiosInstance
        .post(createSystemCredentailEndpoint, systemCredential)
        .then(response => {
          dispatch({
            type: ACTIONS.SYSTEM_CREDENTIAL_CREATED
          });
        })
        .catch(err => {
          dispatch({
            type: ACTIONS.SYSTEM_CREDENTIAL_ERROR
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
