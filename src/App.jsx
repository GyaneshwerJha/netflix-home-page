import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Tv from './components/header/tv/Tv'
import Movie from './components/header/movie/Movie'
import Recent from './components/header/recent/Recent'
import Mylist from './components/header/myList/Mylist'

const App = () => {
  return (
    <Router>
      <Header />
      <Home />
      <Routes>
        <Route path='/tv' element={<Tv />}></Route>
        <Route path='/movie' element={<Movie />}></Route>
        <Route path='/recent' element={<Recent />}></Route>
        <Route path='/mylist' element={<Mylist />}></Route>
      </Routes>
    </Router>
  )
}

export default App