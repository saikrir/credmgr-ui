import { reducer as FormReducer } from 'redux-form';
import { combineReducers } from 'redux';
import AuthReducer from './auth/auth.reducer';

const rootReducer = combineReducers({
  form: FormReducer,
  auth: AuthReducer
});

export default rootReducer;
