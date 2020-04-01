import React from "react";
import Form from "./components/Form/Form.js";
import "./styles.css";
import LoginForm from "./components/LoginForm/LoginForm";

export default function App() {
  return (
    <div className="App">
      <div>
        <LoginForm />
      </div>
      <div>
        <Form />
      </div>
      <div className="footer">
        <p>
          Englis(us) Nederlands Frysk Polski Turkce Deutsch Francais(France)
          العربية Espanol Portugues (Brasil) Italiano <button>+</button>
        </p>
        <hr />
        <p>Sign Up Log In Messenger Facebook Lite Watch ....</p>
        <p> FACEBOOK C 2020 </p>
      </div>
    </div>
  );
}
