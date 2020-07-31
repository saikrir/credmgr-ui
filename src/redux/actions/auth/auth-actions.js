import axios from 'axios';
import { API, ENDPOINTS } from '../../../utils/app-constants';

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
        console.log(response);
      })
      .catch(err => {});
  };
};

export default authenticate;
