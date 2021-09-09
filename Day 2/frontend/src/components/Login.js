import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

function Login() {
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function submitForm(e) {
        e.preventDefault();
        const newUser = {
            email,
            password,
        }
        // setUsers([...users, newUser]);
        setEmail("");
        setPassword("");
        history.push("/");
    }
    return (
        <div className="login">
            <form onSubmit={submitForm}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} ></input>
                <input type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
                <input type="submit" value="Add"></input>
                <span>Password vergessen?</span>
            </form>
        </div>
    )
}

export default Login
