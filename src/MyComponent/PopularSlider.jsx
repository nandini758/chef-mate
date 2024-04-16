import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { getDocs, collection, query, limit } from 'firebase/firestore'; // Import limit function
import { db } from '../Firebase';
import Footer from './Footer';
import TrendingSlider from './TrendingSlider';

const PopularSlider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mealsCollection = collection(db, 'meals');
        const mealsQuery = query(mealsCollection, limit(48)); // Apply limitToFirst(50) to the query
        const querySnapshot = await getDocs(mealsQuery);
        let fetchedData = [];
        querySnapshot.forEach((doc) => {
          fetchedData.push(doc.data());
        });
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data from Firestore:', error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    rows: 2,
    slidesPerRow: 3
  };

  return (
    <>
      <div style={{
        margin: 'auto',
        width: "90%",
        height: "120vh",
      }}>
        <Slider {...settings}>
          {data.map((d) => (
            <Link to={`/${d.id}`} key={d.id}>
              <div className='slider'>
                <img src={d.image} alt={d.name} style={{ width: "18rem", height: "17rem" }} />
              </div>
            </Link>
          ))}
        </Slider>
      </div>
      {/* <TrendingSlider /> */}
    </>
  );
}

export default PopularSlider;
