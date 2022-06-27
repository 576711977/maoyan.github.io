import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './assets/styles/style.css'
import './assets/styles/reset.css'
import './assets/font/iconfont.css'
 // 自适应


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
