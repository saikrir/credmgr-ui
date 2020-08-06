import { ACTIONS } from '../../../utils/app-constants';

let INITIAL_STATE = {
  loggedInUser: '',
  authenticated: false,
  authError: ''
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.AUTHENTICATION_SUCCESSFUL: {
      let { user } = action.payload;
      if (user && user !== '') {
        state = { loggedInUser: user, authenticated: true, authError: '' };
      }
      break;
    }
    case ACTIONS.AUTHENTICATION_FAILED: {
      let { error } = action.payload;
      if (error && error !== '') {
        state = { loggedInUser: '', authenticated: false, authError: error };
      }
      break;
    }
    case ACTIONS.USER_LOGOUT: {
      state = INITIAL_STATE;
      break;
    }
    default:
      break;
  }
  return state;
};

export default AuthReducer;
