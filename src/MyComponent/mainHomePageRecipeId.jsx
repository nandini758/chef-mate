import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MainHomeTrending from './MainHomeTrending'
import { useNavigate } from 'react-router-dom'

const MainHomePageRecipeId = () => {
    // console.log(useParams());
    const navigate=useNavigate();
    const {idMeal}=useParams()
    const [data, setData] = useState([])
    const [active,setActive]=useState('ingredient')
    useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      const data = await api.json();
      
      setData(data.meals[0])
      console.log(data);
    }
    fetchData();
  }, [idMeal])
  function BackToHome(){
  navigate('/')
  }
  return (
    <>
    <div style={{width:"90%",marginTop:"10px", marginLeft:'50px',
    textAlign:"center"
    }}>
    <h2>{data.strMeal}</h2>
    <div 
    style={{display:"flex"
    }}>
    <div className="img " style={{width:'30%'}} >
        <img src={data.strMealThumb} alt='' style={{width:"18rem"}}/>
    </div>
    <div className='container 'style={{width:'60%'}}> 
    <button className="btn" onClick={()=>setActive('ingredient')}>Ingredient</button>
    <button className="btn"onClick={()=>setActive('instruction')}>Instruction</button>
    <button className='backToHome' onClick={BackToHome}>BackToHome</button>
   
    {
        active==='ingredient'?(<div>
        <div style={{fontSize:'1.5rem',fontWeight:'bold'}}>{data.strIngredient2}-{data.strMeasure2}</div>
        <div style={{fontSize:'1.5rem',fontWeight:'bold'}}>{data.strIngredient1}-{data.strMeasure1}</div>
        <div style={{fontSize:'1.5rem',fontWeight:'bold'}}>{data.strIngredient3}-{data.strMeasure3}</div>
        <div style={{fontSize:'1.5rem',fontWeight:'bold'}}>{data.strIngredient4}-{data.strMeasure4}</div>
        <div style={{fontSize:'1.5rem',fontWeight:'bold'}}>{data.strIngredient5}-{data.strMeasure5}</div>
        <div style={{fontSize:'1.5rem',fontWeight:'bold'}}>{data.strIngredient6}-{data.strMeasure6}</div>
        </div>):(
        <p>{data.strInstructions}</p>
        )
    }
    
    </div> 

    
    </div>
    </div>
    <div style={{marginTop:'0.8rem', marginLeft:'2rem'}}>
    <MainHomeTrending />
    </div>
    
    </>
  )
}

export default MainHomePageRecipeId
