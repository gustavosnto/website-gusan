import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Home.jsx';
import Sobre from './Sobre.jsx';
import Header from './components/ui/Header/Index.jsx';
import Footer from './components/ui/Footer/Index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sobre",
    element: <Sobre />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header/>
      <RouterProvider router={router} />
    <Footer/>
  </>
)
