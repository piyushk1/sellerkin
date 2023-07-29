import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp, faMagnifyingGlass,faShop } from '@fortawesome/free-solid-svg-icons';
import ProgressBar from "@ramonak/react-progress-bar";
import logo from "./logo.png"

const Sidebar = () => {
  const iconStyle = { marginRight: '5px' };
  const [progress,setProgess] =useState(24)//as given
  return (
    <div className="sidebar">
      <div className='logoContainer'>
      <Link to="/">

        <div><img className="logoImage" src={logo} alt="logo" ></img> <span>Sellerkin</span></div>

      </Link>
      </div>
    
      <div className="menu">
      <Link to="/Card1">
        <FontAwesomeIcon icon={faMagnifyingGlass} style={iconStyle} />
        Dashboard
      </Link>
      <Link to="/Card2">
        <FontAwesomeIcon icon={faArrowTrendUp} style={iconStyle} />
        Keyword Finder
      </Link>
      <Link to="/Card3">
        <FontAwesomeIcon icon={faMagnifyingGlass} style={iconStyle} />
        Listing Analyzer
      </Link>
      <Link to="/Card3">
        <FontAwesomeIcon icon={faMagnifyingGlass} style={iconStyle} />
        Product Finder
      </Link>
      <Link to="/Card4">
        <FontAwesomeIcon icon={faShop} style={iconStyle} />
        Shop Analyzer
      </Link>
      </div>
    <div className="container">
         <div><p>Credits Used: {progress}/100</p></div> 

          <div className="progressContainerSidebar"><div className="progressStateSidebar"> {progress}% </div> <ProgressBar completed={progress.toString()} height ="20px" width="180px"/></div>
    </div>
      <div>
      <Link to="/Card6" className="logout"><p>Log out</p> 
      </Link>
      </div>
    </div>
  );
};

export default Sidebar;
