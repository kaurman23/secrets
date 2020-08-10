import React from 'react'
import {Link} from 'react-router-dom';
export const Main = () => {
    return (
        <>
            <div className="main">
                <h1 className="main-heading">Secrets.</h1>
                <div className="main-content">
                    <p className="main-pronounce">/ˈsiːkrɪt/</p>
                    <p className="main-description">This is a safe space where you can let your secrets out without disclosing your identify.</p>
                </div>
                <div className="main-buttons">
                    <Link to="/login" className="login-btn">
                        <span  type="button"> Log In </span>
                    </Link>
                    <Link to="/register" className="register-btn">
                        <span  type="button"> Register</span>
                    </Link>
                </div>
            </div>
            <div className="main-features">
                <h2>Let it out!</h2>
            </div>
        </>  
        
    )
}
