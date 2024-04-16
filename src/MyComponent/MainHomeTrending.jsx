import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Footer from './Footer';

const MainHomeTrending = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast");
        if (!api.ok) {
          throw new Error('Failed to fetch data');
        }
        const responseData = await api.json();
        if (responseData && responseData.meals) {
          setData(responseData.meals);
        } else {
          setError('Invalid response data');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div style={{ margin: "40px", width: "90%", height: "50vh", marginBottom: '0px' }}>
        <Slider {...settings}>
          {data && data.map((d) => (
            <Link to={`/MainHomePageRecipeId/${d.idMeal}`} key={d.idMeal}>
              <div className='slider2'>
                <img src={d.strMealThumb} alt='' style={{ width: "10rem", height: "13rem" }} />
              </div>
            </Link>
          ))}
        </Slider>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default MainHomeTrending;