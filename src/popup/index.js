import React, { Fragment } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import './index.css'
function Popup() {
    return (
        <Fragment>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </Fragment>
    );
}

export default Popup;
