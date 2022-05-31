import React from 'react';
import { Link } from "react-router-dom";

const Header = props => {
    return (
        <div className="header">
            <Link to="app1">App 1</Link>
            <Link to="app2">App 2</Link>
        </div>
    )
}

export default Header