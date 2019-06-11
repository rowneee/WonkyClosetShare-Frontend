import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from '../Components/auth/auth_reducer.js';
import usersReducer from './usersReducer'


const rootReducer = combineReducers({
  form: formReducer,
  user: usersReducer
});

export default rootReducer;
