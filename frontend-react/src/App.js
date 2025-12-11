import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Header/>
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
      
    </Router>
    <Footer/>
    </>
  )
}

export default App
