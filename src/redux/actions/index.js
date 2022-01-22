import { 
  USER_EMAIL_STATE_CHANGE,
  USER_FULLNAME_STATE_CHANGE,
  USER_PASSWORD_STATE_CHANGE,
  USER_USERNAME_STATE_CHANGE,
} from "./../containts/index";
import firebase from "firebase";
import { db } from "../../config/Firebase";

export function emailChange(input){
  return ((dispatch)=>{
      dispatch({type:USER_EMAIL_STATE_CHANGE,paylaod:input})
  })
}
export function fullnameChange(input){
  return ((dispatch)=>{
      dispatch({type:USER_FULLNAME_STATE_CHANGE,paylaod:input})
  })
}
export function passwordChange(input){
  return ((dispatch)=>{
      dispatch({type:USER_PASSWORD_STATE_CHANGE,paylaod:input})
  })
}
export function usernameChange(input){
  return ((dispatch)=>{
      dispatch({type:USER_USERNAME_STATE_CHANGE,paylaod:input})
  })
}
