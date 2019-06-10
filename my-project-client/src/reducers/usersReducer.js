import {
  LOGIN,
  LOGOUT,
  SIGNUP
} from "../Actions/types";

const initialState = {
  user: null
}

// TODO: do you need to nest the state here user.user
// {auth: {}, user: {user: }}

const usersReducer = (state = initialState, action) => {
  console.log('USERSREDUCER IS CALLED w action: ', action)
  switch (action.type) {
    case LOGIN:
      return {
        user: action.payload
      }
    case LOGOUT:
      return {
        user: null
      }
    case SIGNUP:
      return {
        user: action.payload
      }
    default:
      return state
  }
}

export default usersReducer
