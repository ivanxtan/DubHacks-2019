import React from "react";
import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";

function NavBar() {
    return (
        <nav className={styles.container}>
            <ul>
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/create`}>Create</Link></li>
                <li><Link to={`/delete`}>Delete</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;