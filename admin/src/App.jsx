import React, { useContext } from 'react'
import Login from './pages/login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // const {aToken}=useContext(AppContext)

  return (
    <div>
      <Login/>
      <ToastContainer/>
    </div>
  )
}

export default App
