import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import SingUp from './pages/signUp.jsx'
import Login from './pages/logIn.jsx';
import NotFoundPage from './pages/notfoundpage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <SingUp/>,
    errorElement:<NotFoundPage/>,
  },
  {
    path: "/signUp",
    element: <SingUp/>,
    errorElement:<NotFoundPage/>,
  },
  {
    path: "/login",
    element: <Login/>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='flex flex-col justify-center items-center h-full' >
      <RouterProvider router={router} />
    </div>
   
  </StrictMode>,
)
