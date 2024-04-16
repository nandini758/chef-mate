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
import MainHomePageRecipeId from './MyComponent/mainHomePageRecipeId'
import AboutUs from './MyComponent/AboutUs'
import ContactUs from './MyComponent/ContactUs'

const App = () => {
  return (
   <div className='main'> 
   <Routes>
    <Route path='/' Component={MainHome}/>
    <Route path='/SignUp' Component={SignUp}/>
    <Route path='/Login' Component={Login}/>
    <Route path='/AboutUs' Component={AboutUs}/>
    <Route path='/ContactUs' Component={ContactUs}/>
    <Route path='/MainHomePageRecipeId/:idMeal' Component={MainHomePageRecipeId}/>
    <Route path='/Home' Component={Home}/>
    <Route path='/:idMeal' Component={RecipeId}/>
    <Route path='/Categary/:name' Component={Categary}/>
    <Route path='/Search/:SearchTerm' Component={SearchElement}/>
    
   
   </Routes>
    </div>
  )
}

export default App

