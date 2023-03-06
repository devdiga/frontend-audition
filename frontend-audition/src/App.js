import React from "react";
import './App.css';
import Nav from './components/Navbar';
import Fotos from './components/fotos';
import Home from './components/Home';
import Description from './components/Description';
import About from './components/About';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App()
{
    return(
        <BrowserRouter>

            <header>
                <Nav />
            </header>

            <main>
                <Routes>
                    <Route path="/frontend-audition" element={<Home />} />
                    <Route path="/frontend-audition/description" element={<Description />} />
                    <Route path="/frontend-audition/about" element={<About />} />
                    <Route path="/frontend-audition/photos" element={<Fotos />} />
                </Routes>
            </main>
            
            <footer>
                <Footer />
            </footer>

        </BrowserRouter>
    )
}