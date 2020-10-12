import React from 'react'
import AppRouter from './containers/AppRouter'
import './main.css'
import {
  RecoilRoot
} from 'recoil'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App () {
  return (
    <RecoilRoot>
      <AppRouter/>
      <ToastContainer />
    </RecoilRoot>

  )
}

export default App
