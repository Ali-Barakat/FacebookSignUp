import React from "react";
import "./loginForm.scss";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailLogin: "",
      passwordLogin: ""
    };
  }

  handleChange = el => {
    this.setState({
      [el.target.name]: el.target.value
    });
  };

  handleSubmit = el => {
    el.preventDefault();
    console.log(this.state);
    this.handleReset();
  };

  handleReset = () => {
    this.setState({
      emailLogin: "",
      passwordLogin: ""
    });
  };

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="wrap__header">
            <div className="header-logo">
              {/* <img
    src="./images/facebook-logo-white-full.png"
    alt="logo"
    width="50px"
  /> */}
              facebook
            </div>
            <div className="wrap__header-login">
              <div className="header-login">
                <form onSubmit={this.handleSubmit} className="form__login">
                  <div className="form__field">
                    <label htmlFor="email-phone" className="login-label">
                      Email or Phone
                      <input
                        className="input-login"
                        id="email-phone"
                        type="text"
                        name="emailLogin"
                        value={this.state.emailLogin}
                        onChange={this.handleChange}
                      />
                    </label>
                  </div>
                  <div className="form__field">
                    <label htmlFor="password" className="login-label">
                      password
                      <input
                        className="input-login"
                        id="password"
                        type="password"
                        name="passwordLogin"
                        value={this.state.passwordLogin}
                        onChange={this.handleChange}
                      />
                      <div className="subline">
                        <a href="https://www.facebook.com">Forgot account?</a>
                      </div>
                    </label>
                  </div>
                  <div className="btn-login">
                    <button>Log In</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
