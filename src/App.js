import React from 'react'
import Home from './MyComponent/Home'
import Navbar from './MyComponent/Navbar'
import RecipeId from './MyComponent/RecipeId'
import {Routes,Route} from 'react-router-dom'
import Categary from './MyComponent/Categary'
import './App.css'
import SearchElement from './MyComponent/SearchElement'

const App = () => {
  return (
   <> 
   <Routes>
    <Route path='/' Component={Home}/>
    <Route path='/:idMeal' Component={RecipeId}/>
    <Route path='/Categary/:name' Component={Categary}/>
    <Route path='/Search/:SearchTerm' Component={SearchElement}/>
    
   
   </Routes>
    </>
  )
}

export default App

