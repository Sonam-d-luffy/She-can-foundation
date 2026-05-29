import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { UserProvider } from './UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <UserProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </UserProvider>,
)
