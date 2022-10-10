import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <span>Quiz</span>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/topic'>Topic</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/about'>About</Link>
            </nav>
        </div>
    );
};

export default Header;

//https://github.com/programming-hero-web-course2/b6-quiz-crackerz-Ismailjoney