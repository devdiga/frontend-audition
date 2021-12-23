/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Content } from './layout/Navbar-style';
import { Link } from 'react-router-dom';

export default function Navbar() 
{
    const [active, setMode] = useState(false)

    const toggleMode = () => setMode(!active)


    const [navbar, setNavbar] = useState(false)

    const scrollNavbar = () => 
    {
        if(window.scrollY > 80)
        {
            setNavbar(true)
        }
        else 
        {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', scrollNavbar)

    return(
        <Content>
            
            <nav className={navbar ? 'active' : ''}>
                <div className='container'>
                    <Link to='/frontend-audition'>
                        Photo Library
                    </Link>

                    <div className='menu-icon' onClick={toggleMode}>
                        <i className={active ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>

                    <ul className={active ? 'menu open' : 'menu close'}>
                        <Link onClick={toggleMode} to="/frontend-audition">Home</Link>
                        <Link onClick={toggleMode} to="/frontend-audition/photos">Photos</Link>
                        <Link onClick={toggleMode} to="/frontend-audition/description">Description</Link>
                        <Link onClick={toggleMode} to="/frontend-audition/about">About Us</Link>
                    </ul>
                </div>
            </nav>
            
        </Content>
    )
}