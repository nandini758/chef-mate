import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Footer from './Footer';
const TrendingSlider = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      const data = await api.json();
      // console.log(data.meals);
      setData(data.meals)
    }
    fetchData();
  }, [])
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <>
    <div style={{
      margin:"40px",width:"90%",
      height:"50vh",
      marginBottom:'0px',
      
      

    }}>
        <Slider {...settings}>
        {data.map((d)=> {
        return (
          <Link to={`/${d.idMeal}`} key={d.idMeal}>
          <div className='slider2'>
            <img src={d.strMealThumb
          } alt='' style={{width:"10rem",height:"13rem",}}/>
          </div>
          </Link>
        )
      })
      }
        </Slider>
     </div>
     <div className="footer">
     <Footer/>
     </div>
    </>
  )
}

export default TrendingSlider