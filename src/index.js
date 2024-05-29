import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/main.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
//import SmoothScrollBar from './jsx/SmoothScrollBar'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Router>
                <App />
        </Router>
    </React.StrictMode>
)