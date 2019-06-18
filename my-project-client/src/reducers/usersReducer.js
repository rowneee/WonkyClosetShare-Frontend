import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  SET_CURRENT_USER
} from "../Actions/types";

const initialState = {
  user: null,
  loggedIn: false,
  authenticatingUser: false,
  failedLogin: false
}

// TODO: do you need to nest the state here user.user
// {auth: {}, user: {user: }}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        user: action.payload
      }
    case LOGOUT:
      return initialState
    case SIGNUP:
      return { ...state, user: action.payload, loggedIn: true, authenticatingUser: false }
    default:
      return state
  }
}

export default usersReducer
