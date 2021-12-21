import React from "react"
import './App.css'
import Nav from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'

export default function App()
{
    return(
        <>
            <header>
                <Nav />
            </header>

            <main>
                <Main />
            </main>
            
            <footer>
                <Footer />
            </footer>
        </>
    )
}