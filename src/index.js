import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/main.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './jsx/Header'
import HomePage from './HomePage'
import LegalMentions from './jsx/LegalMentions'
import Footer from './jsx/Footer'
import ReactGA from 'react-ga4'
//import SmoothScrollBar from './jsx/SmoothScrollBar'

const root = ReactDOM.createRoot(document.getElementById('root'))
ReactGA.initialize('G-ZW4JSCH5P0')
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/mentions-legales" element={<LegalMentions />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
)
