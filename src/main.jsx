import React from 'react'
import ReactDOM from 'react-dom/client'
import { Body } from './components/Body'
import { NavBar } from './components/NavBar'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './AppRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppRouter></AppRouter>
  </BrowserRouter>,
)
