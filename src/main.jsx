import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppContainer from './AppContainer.jsx'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <AppContainer />
  </HashRouter>
)
