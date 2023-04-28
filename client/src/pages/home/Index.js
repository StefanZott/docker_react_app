import React, { useContext } from "react";
import './Home.css'

import ThemeContex from '../../components/Theme/ThemeContext'

function Home() {
  const theme = useContext(ThemeContex)

  return (
    <div id="home-wrapper">
      <div id="home-info">
        <span style={{ color: theme.color,  marginBottom: 10 }}>Stefan</span>
        <br />
        <span style={{color: theme.color, marginBottom: 25}}>Zott</span>
        <br />
        <br />
        <span style={{color: theme.color}}>Embeeded Softwareentwickler</span>
      </div>
    </div>
  );
}

export default Home