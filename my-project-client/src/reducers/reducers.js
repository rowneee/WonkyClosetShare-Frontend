import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from '../Components/auth/auth_reducer.js';


const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer
});

export default rootReducer;
