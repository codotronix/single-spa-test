import React from 'react';
import { Link } from "react-router-dom";

const Header = props => {
    return (
        <div className="header">
            <Link to="page1">Page 1</Link>
            <Link to="page2">Page 2</Link>
        </div>
    )
}

export default Header