import React, { useState } from "react"
import logo from '../../logo.png'
import './AuthPage.css'
import { Login } from "../../components/Auth/Login"
import { Register } from "../../components/Auth/Register"

function AuthPage() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="AuthPage">
    <img src={logo} alt='logo' />
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default AuthPage;