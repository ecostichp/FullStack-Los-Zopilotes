import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'

import App from './App.jsx'
import Prueba from './prueba/main_prueba.jsx'

import './main.css'



ReactDOM.createRoot(document.getElementById('root')).render(

  <NextUIProvider>
    <App />
    {/* <Prueba /> */}
  </NextUIProvider>
)
