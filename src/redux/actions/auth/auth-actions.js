import axios from 'axios';
import { API, ENDPOINTS, ACTIONS } from '../../../utils/app-constants';

const authenticate = (userName, password) => {
  return dispatch => {
    let authEndpoint = `${API.HOST}${API.CONTEXT_PATH}${ENDPOINTS.AUTH}`;
    let requestBody = {
      userName,
      password
    };
    axios
      .post(authEndpoint, requestBody)
      .then(response => {
        console.log(response.data.authToken);
        dispatch({
          type: ACTIONS.AUTHENTICATION_SUCCESSFUL,
          payload: {
            user: userName
          }
        });
      })
      .catch(err => {
        dispatch({
          type: ACTIONS.AUTHENTICATION_FAILED,
          payload: { error: err.message }
        });
      });
  };
};

export default authenticate;
