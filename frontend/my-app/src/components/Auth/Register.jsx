import React, { useState } from "react";
import { registerService } from '../../services/register.ts';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        try {
          e.preventDefault();
        //   if (confirmPassword !== password) {
        //     setMessage('wrong confirm password');
        //     return;
        //   }
    
          const user = {
            username: username,
            password: password,
            email: email,
          };
    
          if (username === '' || password === '' || email === '') {
            setMessage('Form must be filled');
            return
          }
    
          const res = await registerService(user);
    
          if (res.data.code === 201) {
            // router
          }
          setMessage(res.data.message);
        } catch (err) {
          console.log(err);
          setMessage('Uh oh, something went wrong!');
        }
      };

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input value={username} name="username" onChange={(e) => setUsername(e.target.value)} id="username" placeholder="Username" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <div className="register-msg"><h3>{message}</h3></div>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}
