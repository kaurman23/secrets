import React from 'react'

export const Register = () => {
    return (
        <div className="register">
            <h1>Secrets. <span role="img"> 🔐 </span></h1>
            <div className="register-frame">
                <h2 className="register-welcome">Welcome!</h2>
                <form className="register-form">
                    <input type="text" placeholder="Name"></input>
                    <input type="email" placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>
                    <button type="submit" >Register</button>
                </form>
            </div>
        </div>
    )
}
