import { ACTIONS } from '../../../utils/app-constants';

const INITIAL_STATE = {
  systemCredentialError: '',
  credentailOperationSuccessful: false,
  systemCredentialSearches: []
};

const SystemCredentialReducer = (state = INITIAL_STATE, action) => {
  let { type } = action;
  switch (type) {
    case ACTIONS.SYSTEM_CREDENTIAL_INITIALIZE: {
      return INITIAL_STATE;
    }
    case ACTIONS.SYSTEM_CREDENTIAL_CREATED: {
      return { ...state, credentailOperationSuccessful: true };
    }
    case ACTIONS.SYSTEM_CREDENTIAL_ERROR: {
      let { payload: error } = action;
      return {
        ...state,
        systemCredentialError: error,
        credentailOperationSuccessful: false,
        systemCredentialSearches: []
      };
    }
    case ACTIONS.SYSTEM_CREDNTIAL_SEARCH_RESULTS: {
      let { payload: searchResulsts } = action;
      return {
        ...state,
        systemCredentialError: '',
        credentailOperationSuccessful: true,
        systemCredentialSearches: searchResulsts
      };
    }
    case ACTIONS.SYSTEM_CREDNTIAL_SEARCH_RESULTS_ERROR: {
      return {
        ...state,
        systemCredentialError: 'Insufficient Criteria',
        credentailOperationSuccessful: false,
        systemCredentialSearches: []
      };
    }
    default: {
      return state;
    }
  }
};

export default SystemCredentialReducer;
