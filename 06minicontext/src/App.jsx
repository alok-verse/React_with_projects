import { useState } from 'react'
import userContextProvider from './context/userContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <>
     <Login/>
    <userContextProvider>
      <h1>React- Context api</h1>
      <Profile/>
    </userContextProvider>

    </>
  )     
}

export default App
