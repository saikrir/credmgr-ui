import { ACTIONS } from '../../../utils/app-constants';

const INITIAL_STATE = {
  messages: []
};

const MessagesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.ADD_MESSAGES: {
      let messages = action.payload;
      return { messages };
    }
    case ACTIONS.CLEAR_MESSAGES: {
      return INITIAL_STATE;
    }

    default: {
      return state;
    }
  }
};

export default MessagesReducer;
