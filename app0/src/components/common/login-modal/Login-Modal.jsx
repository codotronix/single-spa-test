import React, { useState } from 'react';
import { Link } from "react-router-dom";

const LoginModal = props => {
    const { handleLogin, setVisible } = props
    const [username, setUsername] = useState('')
    return (
        <div className="login-modal" onClick={() => setVisible(false)}>
            <div className='inner' onClick={e =>  e.stopPropagation()}>
                <h1>Login</h1>
                <p>A dummy login screen</p>
                <div>
                    <label>
                        <span>Username: </span> 
                        <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
                    </label>
                </div>
                <button type='button' onClick={() => handleLogin(username)}>Login</button>
            </div>
        </div>
    )
}

export default LoginModal