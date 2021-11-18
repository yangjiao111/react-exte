import React, { Fragment } from 'react';
import { Routes, Route, HashRouter as Router } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import './index.css';
/*global chrome*/
function Popup() {
  chrome.cookies.set({"name":"Sample1","url":"http://developer.chrome.com/extensions/cookies.html","value":"Dummy Data"},function (cookie){ 
    console.log(JSON.stringify(cookie)); 
    console.log(chrome.extension.lastError); 
    console.log(chrome.runtime.lastError); 
   }); 
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
