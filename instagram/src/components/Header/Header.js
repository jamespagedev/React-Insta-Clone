import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import cameraImage from '../../Images/Header/header-camera.png';
import { Instagram, Compass, Heart, User } from 'react-feather';
import dividerImage from '../../Images/Header/header-divider.png';
import logoImage from '../../Images/Header/header-logo.png';
import circleDiamondImage from '../../Images/Header/header-circle-diamond.png';
import heartImage from '../../Images/Header/header-heart.png';
import personImage from '../../Images/Header/header-person.png';
import './Style.css';

const Header = props => {
  return (
  <div className="header">
    <div className="header-left-side">
      <Instagram className="header-icons" size={48} />
      <img src={dividerImage} alt="" />
      <img class="header-logo-img" src={logoImage} alt="" />
    </div>
    <SearchBar />
    <div className="header-right-side">
      <Compass className="header-icons" size={48} />
      <Heart className="header-icons" size={48} />
      <User className="header-icons" size={48} />
    </div>
  </div>
  );
}

export default Header;