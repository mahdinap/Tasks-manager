import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Buttons from './components/buttons.jsx'
import Input from './inputs.jsx'
import SingUp from './pages/signUp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <SingUp/>
  </StrictMode>,
)
