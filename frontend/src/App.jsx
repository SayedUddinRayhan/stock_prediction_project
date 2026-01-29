import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'


function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-950 text-white">
      
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default App
