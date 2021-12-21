/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Content } from './layout/Navbar-style'

export default function Navbar() 
{
    const [active, setMode] = useState(false)

    const toggleModeIcon = () => 
    {
        setMode(!active)
    }

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
                    <a href=''>
                        DankePrompt
                    </a>

                    <div className='menu-icon' onClick={toggleModeIcon}>
                        <i className={active ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>

                    <ul className={active ? 'menu open' : 'menu close'}>
                        <a href=''>Home</a>
                        <a href='#'>Photos</a>
                        <a href='#'>Description</a>
                        <a href='#'>About Us</a>
                    </ul>
                </div>
            </nav>
            
        </Content>
    )
}