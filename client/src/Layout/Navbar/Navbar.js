import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import { RiUser4Fill } from 'react-icons/ri';
import { BsBox2HeartFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';

function Navbar() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.UserLogin);
  const { favourite } = useSelector((state) => state.UserGetFavoriteMovies);

  const [placeholder, setPlaceholder] = useState('Welcome to Cinecast...👻💕');
  const hover = "hover:text-subMain transition-colors text-white";
  const hoverActive = "text-subMain";
  const Hover = ({ isActive }) => (isActive ? hoverActive : hover);

   // Array of placeholder texts
  const placeholderTexts = [
  'Search movies here...',
  'Looking for a movie? Search here...', 
  'You can search by movie name...', 
  'You can search by movie genre...',
  'Login to add movies to your favourite list...',
  'Not a member? Register now...',
  'You can search by movie year...',
  'You can search by movie rating...',
  'Click on the movie to see more details...',
  'Quickly search for movies here...',
  'Do you want to see the latest movies? Search here...',
  'Download movies for free...',
  'Watch movies online for free...',

];
  
  useEffect(() => {
    
    // Function to update the placeholder text
    const updatePlaceholder = () => {
      const randomIndex = Math.floor(Math.random() * placeholderTexts.length);
      setPlaceholder(placeholderTexts[randomIndex]);
    };

    // Update the placeholder text every 3 seconds
    const interval = setInterval(updatePlaceholder, 6000);

    return () => {
      // Clear the interval when the component is unmounted
      clearInterval(interval);
    };
  }, [placeholderTexts]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/movies/get/${search}`);
    } else {
      navigate(`/movies`);
    }
  };
  return (
    <div className="bg-main shadow-md sticky top-0 z-20">
      <div className="container mx-auto py-6 px-2 lg:grid gap-10 lg:grid-cols-7 justify-between items-center">
        {/* LOGO */}
        <div className="col-span-1 lg:block hidden">
          <Link to="/">
            <img src="/images/logo.png" alt="logo" className="w-full h-12 object-contain" />
          </Link>
        </div>
        {/* SEARCH FORM */}
        <div className="col-span-3">
          <form onSubmit={handleSearch} className="w-90 text-sm bg-dryGray rounded flex-btn gap-4">
            <button type="submit" className="bg-subMain w-12 flex-colo h-12 rounded text-white">
              <BiSearchAlt style={{ fontSize: '25px', marginLeft: '10px' }} />
            </button>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={placeholder}
              className="font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black"
            />
          </form>
        </div>
        {/* MENUS */}
        <div className="col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
          <NavLink to="/movies" className={Hover} activeclassname={hoverActive}>
            Movies
          </NavLink>
          <NavLink to="/about-cinecast" className={Hover} activeclassname={hoverActive}>
            Cinecast
          </NavLink>
          <NavLink to="/contact-cinecast" className={Hover} activeclassname={hoverActive}>
            Contact
          </NavLink>
          <NavLink
            to={userInfo?.isAdmin ? "/dashboard" : userInfo ? "/profile" : "/login"}
            className={Hover}
            activeclassname={hoverActive}
          >
            {userInfo ? (
              <img
                src={userInfo?.image ? userInfo?.image : "/images/userdp.jpg"}
                alt={userInfo?.username}
                className="w-8 h-8 rounded-full border object-cover border-border"
              />
            ) : (
              <RiUser4Fill className="w-6 h-8" />
            )}
          </NavLink>
          <NavLink to="/favourites" className={`${Hover} relative flex items-center justify-center`} activeclassname={hoverActive}>
            <BsBox2HeartFill className="w-5 h-8" />
            <div className="w-5 h-5 rounded-full bg-subMain text-white text-center absolute -top-5 -right-1 flex items-center justify-center">
              <span className="text-xs">{favourite?.length}</span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
