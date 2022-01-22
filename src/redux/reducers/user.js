import { 
  USER_EMAIL_STATE_CHANGE,
  USER_FULLNAME_STATE_CHANGE,
  USER_PASSWORD_STATE_CHANGE,
  USER_USERNAME_STATE_CHANGE,
  CLEAR_DATA
} from "./../containts/index";

const initialState = {
  currentUser: null,
  username:"",
  password:"",
  email:"",
  fullname:"",
  posts: [],
  following: [],
}

export const user = (state = initialState, action) => {
  switch (action.type) {
      case USER_EMAIL_STATE_CHANGE:
          return {...state,email: action.payload}
      case USER_FULLNAME_STATE_CHANGE:
        return {...state,fullname: action.payload}
      case USER_PASSWORD_STATE_CHANGE:
        return {...state,password: action.payload}
      case USER_USERNAME_STATE_CHANGE:
        return {...state,username: action.payload}
      case CLEAR_DATA:
          return initialState
      default:
          return state;
  }
}
