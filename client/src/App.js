import React, { useContext, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import './App.css'

import ThemeContext from './components/Theme/ThemeContext'
import Theme from './components/Theme/Theme'

import Layout from "./components/Routing/Layout";
import Home from './pages/home/Index'
import About from './pages/about/Index'
import Dashboard from './pages/dashboad/Index'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const switch_onChange_handle = () => {
        setDarkMode(!darkMode);
    };

  return (
  <ThemeContext.Provider value={darkMode ? Theme.dark : Theme.light}>
    <div id="wrapper" style={{backgroundColor: darkMode ? Theme.dark.backgroundColor : Theme.light.backgroundColor}} >
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
          <Route path="/" element={<Layout setDarkMode={switch_onChange_handle} darkMode={ darkMode } />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  </ThemeContext.Provider>
  );
}

function PageNotFound() {
  return (
    <div>
      <p>404 Page not found</p>
    </div>
  );
}

export default App;
