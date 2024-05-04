import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './component/navbar.jsx'
import Heroic from './component/heroic.jsx'
import Card from './component/card.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Heroic/>
    <Card/>
    <App />
  </React.StrictMode>,
)
