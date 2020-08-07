import { ACTIONS } from '../../../utils/app-constants';

const INITIAL_STATE = {
  systemCredentialError: '',
  credentailOperationSuccessful: true
};

const SystemCredentialReducer = (state = INITIAL_STATE, action) => {
  let { type } = action;
  switch (type) {
    case ACTIONS.SYSTEM_CREDENTIAL_CREATED: {
      return INITIAL_STATE;
    }
    case ACTIONS.SYSTEM_CREDENTIAL_ERROR: {
      let { payload: error } = action;
      return { systemCredentialError: error, credentailOperationSuccessful: false };
    }
    default: {
      return INITIAL_STATE;
    }
  }
};

export default SystemCredentialReducer;
