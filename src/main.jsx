import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";

import './index.css'
import SingUp from './pages/signUp.jsx'
import Login from './pages/logIn.jsx';
import NotFoundPage from './pages/notfoundpage.jsx';
import Wellcome from './pages/wellcom.jsx';
import CreateNewTsk from './pages/create.jsx';
import Tasks from './pages/tasks.jsx';

const isAuth=()=>{
  return localStorage.getItem("Token") !==null
}

function ProtectedPage({element}){
return isAuth() ? element: <Navigate to="/login"/>
}

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
  ,
  {
    path: "/wellcome",
    element: <Wellcome/>,
  }
   ,
  {
    path: "/create",
    element:<ProtectedPage element={<CreateNewTsk/>} />,
  },
  {
    path:"/tasks",
    element:<ProtectedPage element={<Tasks/>}/>

  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='flex flex-col justify-center items-center h-full' >
      <RouterProvider router={router} />
    </div>
   
  </StrictMode>,
)
