import { ACTIONS } from '../../../utils/app-constants';

let INITIAL_STATE = {
  loggedInUser: '',
  authenticated: false
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.AUTHENTICATION_SUCCESSFUL: {
      let { user } = action.payload;
      if (user && user !== '') {
        state = { loggedInUser: user, authenticated: true };
      }
      break;
    }
    case ACTIONS.AUTHENTICATION_FAILED:
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
