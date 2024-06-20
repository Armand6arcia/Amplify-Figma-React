import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';

import config from './aws-exports'
import { Amplify } from 'aws-amplify';

import { ThemeProvider } from '@aws-amplify/ui-react'
import "@aws-amplify/ui-react/styles.css"
import CreateForm from './Pages/CreateForm';
import Ayuda from './Pages/Ayuda';
import UpdateForm from './Pages/UpdateForm';
import Configuracion from './Pages/Configuracion'

Amplify.configure(config)

const router = createBrowserRouter([{
  path: '/',
  element: <Home />,
},
{
  path: '/createform',
  element: <CreateForm />,
},
{
  path: '/ayuda',
  element: <Ayuda />
},
{
  path: '/updateform',
  element: <UpdateForm />
},
{
  path: '/configuracion',
  element: <Configuracion />
}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
      <div className='app'>
      <App />
      </div>
      <div className='content'>
        <RouterProvider router={router} />
      </div>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
