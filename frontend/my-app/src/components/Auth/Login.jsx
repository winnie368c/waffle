import React, { useState } from "react";
import "../../pages/Auth/AuthPage.css"
import { loginService } from "../../services/login.ts"

export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log(username);

            const user = {
                username: username,
                password: password,
            }

            const res = await loginService(user);

            if (res.data.code === 200) {
                localStorage.setItem('access_token', res.data.data.accessToken);
                localStorage.setItem('refresh_token', res.data.data.refreshToken);
              }
              setMessage(res.data.message);
        } catch (err) {
            console.log(err)
            setMessage("Uh oh, it looks like your username or password is incorrect!");
        }
    }

    return (
        <div className="login-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)}type="username" placeholder="Username" id="username" name="username" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                <button className="login-btn" type="submit">Log In</button>
            </form>
            <span className="login-msg">{message}</span>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}
