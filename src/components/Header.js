import React from 'react';
import unBanner from '../UNimages/un17banner.png';
import { Link } from 'react-router-dom';

const Header = (props)=>{
  return (
    <div className="header">
      <img src={unBanner} alt="sdg 7" id="sdg-banner"/><br/>
      <span >
        <Link to="/" className="menu-links">Home</Link>
        <Link to="/Goals" className="menu-links">Goals</Link>     
        <Link to="/App" className="menu-links">Game</Link>
        <Link to="/miniApp" className="menu-links">MiniApp</Link>
      </span>
    </div>
  );
};

export default Header;