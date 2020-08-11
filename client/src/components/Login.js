import React from 'react'

export const Login = () => {
    return (
        <div className="login">
            <h1>Secrets. <span> 🔐 </span></h1>
            <div className="login-frame">
                <h2 className="login-welcome">Welcome Back!</h2>
                <form className="login-form">
                    <input type="email" placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>
                    <button type="submit" >Log In</button>
                </form>
            </div>
        </div>
    )
}
