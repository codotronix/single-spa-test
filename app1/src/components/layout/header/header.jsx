import { Link } from "react-router-dom";
import styles from './header.module.css';
import React from 'react';

const Header = props => {
    return (
        <div className="header">
            <Link to="page1">Page 1</Link>
            <Link to="page2">Page 2</Link>
        </div>
    )
}

export default Header