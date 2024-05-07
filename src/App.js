import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './jsx/Header'
import Footer from './jsx/Footer'
import HomePage from './HomePage'
import LegalMentions from './jsx/LegalMentions'

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/mentions-legales" element={<LegalMentions />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App