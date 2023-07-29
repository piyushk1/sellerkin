
import React, { useState } from 'react';
import "./Dashboard.css"
import { Progress } from 'flowbite-react';
import ProgressBar from "@ramonak/react-progress-bar";

const Dashboard = () => {

const [progress,setProgess] =useState(24)//as given
  const items = [
    {
      title: 'Keyword Finder',
      description: 'Check any metrics like views, favorites for any keyword',
    },
    {
      title: 'Listing Analyzer',
      description: "Analyze any listing using just its link or listing id on Etsy",
    },
    {
      title: 'Product Finder',
      description: 'Find products you are looking for based on a variety of filters',
    },
    {
      title: 'Shop Analyzer',
      description: 'Analyze any shop on Etsy and get their key insights',
    },
  ];
  return (
    <div className="dashboard-content">
    <div className="grid-container">
      <div className="left-column">
        <div className="grid-item1">
          <h2>Connect your Shop</h2>
          <p className="para">Connect your shop to get in depth analysis of your shop.We use Etsy's official website for connecting your shop securely</p>
          <button className="connectButton"><p className='buttonText'>Connect Etsy Shop</p></button>
          </div>
        <div className="grid-item2">
         <div><h2>Credits Used: {progress}/100</h2></div> 

          <div className="progressContainer"><div className="progressState"> {progress}% </div> <ProgressBar completed={progress.toString()} height ="30px" width="300px"/></div>

        </div>
      </div>
      <div className="right-column">
        <div className="grid-item3">
          <h3>Kickstart yout journey</h3>

          <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
         </ul>
        </div>
      </div>
    </div>
    </div>

      );
    }

export default Dashboard;
