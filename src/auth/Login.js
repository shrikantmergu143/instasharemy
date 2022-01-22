import React, { Component } from 'react';
import firebase from "firebase";
import "firebase/auth";

export default class Login extends Component {
  GoogleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
          var credential = result.credential;
          var token = credential.accessToken;
          var user = result.user;
          console.log(credential,token,user)
      }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  }
  FBLogin(){
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
          var credential = result.credential;
          var token = credential.accessToken;
          var user = result.user;
          console.log(credential,token,user)
      }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  }
  render() {
    
    if(firebase.auth()){
     // window.location.href="/";
    }
    return (
      <center style={{marginTop:"2%"}}>
        <div className="wrapper">
          <div className="header">
            <div className="top">
              <div style={{textAlign:"center"}}>
                <div className="text-center h1 font" style={{fontSize:30}}>InstaShare</div>
              </div>
                <div className="form">
                  <div className="input_field">
                    <input type="text" id="Email" name="Email" placeholder="Email" className="input" required/>
                  </div>
                  <div className="input_field">
                    <input type="password" id="Password" name="Password" placeholder="Password" className="input" required/>
                  </div>
                  <input className="btn btn-primary" type="submit" value="Log In"  style={{width:"100%",color:"white"}}/>
                </div>
              <div className="or">
                <div className="line"></div>
                <p>OR</p>
                <div className="line"></div>
              </div>
              <div className="dif">
                <div >
                   <div className={"signWithGoogle"} onClick={()=>this.GoogleLogin()}>
                     <i className={"fa fa-google"} style={{marginRight:10}} />
                      Sign In with Google
                   </div>
                </div>
                <div>
                <div style={{marginTop:20}} className={"signWithGoogle google"} onClick={()=>this.FBLogin()}>
                     <i className={"fa fa-facebook"} style={{marginRight:10}} />
                      Sign In with Facebook
                   </div>
                </div>
                <div className="forgot">
                  <a href="#">Forgot password?</a>
                </div>
              </div>
            </div>
            <div className="signup">
              <p>Don't have an account? <a className={"font"} href="register.html">Sign up</a></p>
            </div>
          </div>
          <div className="footer" style={{display:"flex",flexDirection:"column"}} >
            <div className="" >From</div>
            <div className="" text >FACEBOOK</div>
          </div>
        </div>
      </center>
    )
  }
}
