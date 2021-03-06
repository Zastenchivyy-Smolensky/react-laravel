import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul className="nav">
                <Link to="/about">
                    <li className="ml-2">About</li>
                </Link>
                <Link to="/user">
                    <li>user</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;
