import { ACTIONS } from '../../../utils/app-constants';

const INITIAL_STATE = {
  credentailOperationSuccessful: false,
  systemCredentialSearches: [],
  systemCredential: {}
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

    case ACTIONS.SYSTEM_CREDNTIAL_SEARCH_RESULTS: {
      let { payload: searchResulsts } = action;
      return {
        ...state,
        credentailOperationSuccessful: true,
        systemCredentialSearches: searchResulsts
      };
    }

    case ACTIONS.SYSTEM_CREDNTIAL_FOUND_BY_ID: {
      let systemCredential = action.payload;
      return {
        ...state,
        systemCredential
      };
    }

    case ACTIONS.SYSTEM_CREDNTIAL_DELETE: {
      return {
        ...state,
        credentailOperationSuccessful: true,
        systemCredential: {},
        systemCredentialSearches: []
      };
    }

    case ACTIONS.SYSTEM_CREDNTIAL_DELETE_ERROR:
    case ACTIONS.SYSTEM_CREDENTIAL_ERROR:
    case ACTIONS.SYSTEM_CREDNTIAL_FIND_BY_ID_ERROR:
    case ACTIONS.SYSTEM_CREDNTIAL_SEARCH_RESULTS_ERROR: {
      return {
        ...state,
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
