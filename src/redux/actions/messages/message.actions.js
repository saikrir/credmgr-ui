import { ACTIONS } from '../../../utils/app-constants';

export const addMessages = messages => {
  return dispatch => {
    dispatch({
      type: ACTIONS.ADD_MESSAGES,
      payload: messages
    });
  };
};

export const addMessage = message => {
  return dispatch => {
    dispatch(addMessages([message]));
  };
};

export const addInfoMessage = messageText => {
  return dispatch => {
    const infoMessage = createInfoMessage(messageText);
    dispatch(addMessage(infoMessage));
  };
};

export const addWarningMessage = messageText => {
  return dispatch => {
    const warningMessage = createWarningMessage(messageText);
    dispatch(addMessage(warningMessage));
  };
};

export const addErrorMessage = messageText => {
  return dispatch => {
    const errorMessage = createErrorMessage(messageText);
    dispatch(addMessage(errorMessage));
  };
};

export const clearMessages = () => {
  return dispatch => {
    dispatch({
      type: ACTIONS.CLEAR_MESSAGES
    });
  };
};

const createErrorMessage = errorText => {
  return {
    text: errorText,
    severity: 'ERROR'
  };
};

const createInfoMessage = infoMessage => {
  return {
    text: infoMessage,
    severity: 'INFO'
  };
};

const createWarningMessage = warningMessage => {
  return {
    text: warningMessage,
    severity: 'WARNING'
  };
};
