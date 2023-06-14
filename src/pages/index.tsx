import React from 'react'
import { Route, Routes } from 'react-router';
import { HomePage } from './home';
import About from './about';
import { LoginPage } from './login';
import { RegisterForm } from '@/features/authentication/Register';
import { MediaPage } from './media';
import { ProfilePage } from './profile';
import MoviesPage from './Movies/Page/Page';
import SeriesPage from './Series/Page/Page';
import { Groups } from './groups';

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/media/:mediaId" element={<MediaPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/series" element={<SeriesPage />} />
            <Route path="/groups" element={<Groups />} />

        </Routes>
    )
}

export default Routing;