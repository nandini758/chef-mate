import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';

const Navbar = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [user, setUser] = useState(null);
  const handleLogout = () => {
    auth.signOut();
    setUser(null);
    navigate('/');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/Search/${input}`);
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="Nav">
        <div className="left">
          <Link to='/Home' className='Link'>
            <img id='chef-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZAbMz8QA9Hh925XJn6hynUQeVbA8YKPOEiwHkWsAjpw&s' alt="Chef Logo" />
          </Link>
        </div>
        <div className='searchbox'>
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder='🔍 Search the recipe items'
            />
          </form>
        </div>
        <div className="right">
          <Link to={`/categary/indian`} className='Link'>
            <div>Indian</div>
          </Link>
          <Link to={`/categary/american`} className='Link'>
            <div>American</div>
          </Link>
          <Link to={`/categary/british`} className='Link'>
            <div>British</div>
          </Link>
          <Link to={`/categary/chinese`} className='Link'>
            <div>Chinese</div>
          </Link>
          <Link to={`/categary/thai`} className='Link'>
            <div>Thai</div>
          </Link>
          {user && <button className='logoutbtn' onClick={handleLogout}>Logout</button>}
        </div>
      </div>
    </>
  );
};

export default Navbar;