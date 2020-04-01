import React, { Component } from "react";
import "./formStyle.scss";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      passWord: "",
      gender: ""
    };
  }

  resetForm = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      passWord: "",
      gender: "",
      newsfeed: null,
      newsletter: null
    });
  };

  handleChange = e => {
    let myValue;
    const { name, checked, value, type } = e.target;
    if (type !== "checkbox") {
      myValue = value;
    } else {
      myValue = checked;
    }
    this.setState({ [name]: myValue });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    this.resetForm();
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      gender,
      passWord,
      newsletter,
      newsfeed
    } = this.state;

    const isEnabled =
      firstName.length > 0 &&
      lastName.length > 0 &&
      email.length > 0 &&
      gender.length > 0 &&
      passWord.length > 0;

    return (
      <div className="">
        <div className="container">
          <div className="Wrap__content">
            <div className="recent-login">
              <div className="u-mr-t-15">
                <h2>Recent Logins</h2>
                <p>Click your Picture or add an account.</p>
              </div>
            </div>
            <div className="create-account">
              <div className="u-mr-t-15">
                <h2>Create a New Account</h2>
                <p>it's quick and easy.</p>
              </div>
              <form
                onSubmit={this.handleSubmit}
                className="form__signup  u-mr-b-15"
              >
                {/* <fieldset>
                <label htmlFor="newsLetter">
                  Newsletter
                  <input
                    name="newsletter"
                    type="checkbox"
                    id="newsLetter"
                    checked={newsletter === true}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="newsFeed">
                  Newsfeed
                  <input
                    name="newsfeed"
                    type="checkbox"
                    id="newsFeed"
                    checked={newsfeed === true}
                    onChange={this.handleChange}
                  />
                </label>
              </fieldset> */}

                <fieldset>
                  <div className="input__set u-width100  u-mr-t">
                    <div className="input__field u-inline u-width50">
                      <label htmlFor="firstname">
                        <input
                          className="input__text u-width95"
                          name="firstName"
                          type="text"
                          id="firstName"
                          placeholder="First Name"
                          onChange={this.handleChange}
                          value={firstName}
                        />
                      </label>
                    </div>
                    <div className="input__field u-inline u-width50  u-al-r  u-mr-t">
                      <label htmlFor="lastname">
                        <input
                          className="input__text u-width95"
                          name="lastName"
                          type="text"
                          id="lastName"
                          placeholder=" Last name"
                          onChange={this.handleChange}
                          value={lastName}
                        />
                      </label>
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <div className="input__field  u-width100  u-mr-t">
                    <label htmlFor="eMail">
                      <input
                        className="input__text  u-width100"
                        name="email"
                        type="email"
                        id="eMail"
                        placeholder="mobiel number or email"
                        onChange={this.handleChange}
                        value={email}
                      />
                    </label>
                  </div>
                  <div className="input__field  u-width100  u-mr-t">
                    <label htmlFor="passWord">
                      <input
                        className="input__text  u-width100"
                        name="passWord"
                        type="password"
                        id="password"
                        placeholder="New password"
                        onChange={this.handleChange}
                        value={passWord}
                      />
                    </label>
                  </div>
                </fieldset>
                <fieldset>
                  <h3 className="t-color-gray  u-mr-t-15">Birthday</h3>
                  <div className="u-mr-t">
                    <select>
                      <option>Mar</option>
                    </select>
                    <select>
                      <option>31</option>
                    </select>
                    <select>
                      <option>1995</option>
                    </select>
                  </div>
                </fieldset>
                <fieldset>
                  <div>
                    <h3 className="t-color-gray  u-mr-t-15">Gender </h3>
                  </div>
                  <div className="u-mr-t">
                    <label className="u-mr-r-15" htmlFor="female">
                      <input
                        className="u-mr-r-5"
                        name="gender"
                        value="female"
                        id="female"
                        type="radio"
                        checked={gender === "female"}
                        onChange={this.handleChange}
                      />
                      Female
                    </label>
                    <label className="u-mr-r-15" htmlFor="male">
                      <input
                        className="u-mr-r-5"
                        name="gender"
                        value="male"
                        type="radio"
                        id="male"
                        checked={gender === "male"}
                        onChange={this.handleChange}
                      />
                      Male
                    </label>
                    <label className="u-mr-r-15" htmlFor="custom">
                      <input
                        className="u-mr-r-5"
                        type="radio"
                        value="custom"
                        name="gender"
                        id="custom"
                        checked={gender === "custom"}
                        onChange={this.handleChange}
                      />
                      Custom
                    </label>
                  </div>
                </fieldset>
                <fieldset>
                  <div className="u-mr-t-15">
                    <button
                      className="btn__submit-green"
                      type="submit"
                      disabled={!isEnabled}
                    >
                      Sign Up
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
