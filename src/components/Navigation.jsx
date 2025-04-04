import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router'
import About from './About'
import Home from './Home'
import Contact from './Contact'

const Navigation = () => {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/home" end> Home </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" end> About </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" end> Contact </NavLink>
                    </li>
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

export default Navigation
