import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='navbar'>
            <span> Q-uiz</span>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/topic'>Static</Link>
                <Link to='/blog'>Blog</Link>
              
            </nav>
        </div>
    );
};

export default Header;

//https://github.com/programming-hero-web-course2/b6-quiz-crackerz-Ismailjoney