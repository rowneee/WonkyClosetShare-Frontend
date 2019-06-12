import {
  LOGIN,
  SIGNUP,
  LOGOUT
} from './types'

import axios from 'axios';

export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';

// export const itemsFetch = ({user, token}) => {
//   return dispatch => {
//     return fetch("http://localhost:3000/api/v1/items", {
//       headers: {
//         Authorization: `${token}`
//       }
//     })
//     .then(resp => resp.json())
//     .then(data => {
//       setState
//       dispatch({
//         type: 'fetch_items',
//         payload: data // [item1, item2...]
//       })
//     })
//     .catch(response => dispatch({
//       type: AUTHENTICATION_ERROR,
//       payload: 'Invalid username or password'
//     }))
//   }
// }

// export const loginGetItems = (user) => dispatch => {
//   dispatch(login(user))
//   fetch('http://localhost:3000/api/v1/items', {
//     headers: {
//       Authorization: `${user.token}`
//     }
//   })
//   .then(r => r.json())
//   .then((response) => dispatch({
//     type: AUTHENTICATED,
//     data: response.data
//   }))
//   .catch((response) => dispatch({
//     type: AUTHENTICATION_ERROR,
//     payload: 'Invalid username or password'
//   }))
// }

export const login = user => {
  return {
    type: LOGIN,
    payload: user
  }
  // we want fetch
  // dispatch all th4e goods
}

export const signup = (user) => {
  return {
    type: SIGNUP,
    payload: user
  }
}

export const logout = ({
  type: LOGOUT
})

export const borrowitem = (user) => {
  //do something 
}
export const autoLogin = (user) => {
  // fetch('localhost:4000/api/v1/auto_login')
  //   .then(r => r.json())
  //   .then(data => {
  //     data
  //     dispatch({user: data})
  //   })
  return {
    type: LOGIN,
    payload: user
  }
}
