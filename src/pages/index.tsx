import React from 'react'
import { Route, Routes } from 'react-router';
import Home from './home';
import About from './about';
import Movie from './movie';

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/movie" element={<Movie />} />
        </Routes>
    )
}

export default Routing;