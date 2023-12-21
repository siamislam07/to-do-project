import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './provide/AuthProvider.jsx';
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <ToastContainer  position='top-right'/>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
