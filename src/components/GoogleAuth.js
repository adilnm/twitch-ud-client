import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "182570092556-0j4v0fvackpri7d2mpup3adg5gl12ur9.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }

  renderAuthButton(){
      if (this.state.isSignedIn===null) {
          return <div>I don't know if we are signed in</div>
      } else if (this.state.isSignedIn===true){
          return <div>I am signed in</div>
      }else{
          return <div>I am not signed in</div>
      }

  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
