import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router'
import About from './About'
import Home from './Home'
import Contact from './Contact'

const NavigationDynamic = () => {
    const links = ['home', 'about', 'contact']
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    {links.map((link) => (
                        <li key={link}>
                            <NavLink to={`/products/${link}`}>{link}</NavLink>
                        </li>))}
                </ul>
            </nav>

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>

    )
}

export default NavigationDynamic
