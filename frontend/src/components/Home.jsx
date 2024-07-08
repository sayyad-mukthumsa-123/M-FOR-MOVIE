import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import "../Styles/Home.css"

const Home = () => {
    return (
        <div className='Home'>
            <Link to="/login" className='link'>
                <Button variant="outline-info" className='btn1'>Sign In</Button>
            </Link>
            <Link to="/register" className='link'>
                <Button variant="outline-info" className='btn1'>Sign Up</Button>
            </Link>
        </div>
    )
}

export default Home;
