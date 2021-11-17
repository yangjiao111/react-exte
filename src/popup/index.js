import React, { Fragment } from 'react';
import { Routes, Route, HashRouter as Router } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import './index.css'
function Popup() {
    return (
        <Fragment>
        <div>1112233366</div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </Router>
        </Fragment>
    );
}

export default Popup;
