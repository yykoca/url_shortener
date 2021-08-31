import React from 'react'

function Login() {
    return (
        <div className="login">
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
            <input type="submit" value="Login"></input>
            <span>Password vergessen?</span>
        </div>
    )
}

export default Login
