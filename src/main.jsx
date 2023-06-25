import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ThemeProvider from './ThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
)
