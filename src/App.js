import React from 'react'
import Home from './MyComponent/Home'

import RecipeId from './MyComponent/RecipeId'
import {Routes,Route} from 'react-router-dom'
import Categary from './MyComponent/Categary'
import MainHome from './MyComponent/MainHome'
import './App.css'
import SearchElement from './MyComponent/SearchElement'
import SignUp from './MyComponent/SignUp'
import Login from './MyComponent/Login'

const App = () => {
  return (
   <> 
   <Routes>
    <Route path='/' Component={MainHome}/>
    <Route path='/SignUp' Component={SignUp}/>
    <Route path='/Login' Component={Login}/>
    <Route path='/home' Component={Home}/>
    <Route path='/:idMeal' Component={RecipeId}/>
    <Route path='/Categary/:name' Component={Categary}/>
    <Route path='/Search/:SearchTerm' Component={SearchElement}/>
    
   
   </Routes>
    </>
  )
}

export default App

