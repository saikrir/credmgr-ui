import { reducer as FormReducer } from 'redux-form';
import { combineReducers } from 'redux';
import AuthReducer from './auth/auth.reducer';
import SystemCredentialReducer from './systemcredentials/system-credential.reducer';
import MessagesReducer from './messages/messages.reducer';

const rootReducer = combineReducers({
  form: FormReducer,
  auth: AuthReducer,
  systemCredential: SystemCredentialReducer,
  appMessages: MessagesReducer
});

export default rootReducer;
