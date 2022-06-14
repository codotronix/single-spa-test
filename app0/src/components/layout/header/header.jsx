import React from 'react';
import { Link } from "react-router-dom";

const Header = props => {
    const { showLogin } = props
    return (
        <div className="header">
            <Link to="app1">App 1</Link>
            <Link to="app2">App 2</Link>
            <button type="login" onClick={showLogin}>Login</button>
        </div>
    )
}

export default Header