import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/googleSignIn">GoogleSignIn</Link>
        </div>
    );
};

export default Header;