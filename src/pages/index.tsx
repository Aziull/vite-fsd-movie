import React from 'react'
import { Route, Routes } from 'react-router';
import Home from './home';
import About from './about';
import Movie from './movie';
import { LoginPage } from './login';
import { RegisterForm } from '@/features/authentication/Register';

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterForm />} />
        </Routes>
    )
}

export default Routing;