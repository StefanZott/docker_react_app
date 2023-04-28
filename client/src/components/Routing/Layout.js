import React, { Fragment, useState, useContext } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import Switch from 'react-js-switch';

import './Layout.css'

import Logo from '../../images/Logo.png'

import ThemeContext from "../Theme/ThemeContext";

function Layout(props) {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
    const theme = useContext(ThemeContext)

    return (
        <Fragment>
            <div id="layout-header" style={{borderColor: theme.borderColor}}>

                <div id="layout-header-title">
                    <img id="layout-header-title-image" src={Logo}/>
                </div>

                <div id="layout-header-space"></div>

                <div id="layout-header-menu">
                    <NavLink
                        style={({ isActive }) => ({
                            color: isActive ? '#545e6f' : theme.color,
                            background: isActive ? '#f0f0f0' : theme.backgroundColor,
                        })}
                        className="menu-links"
                        onClick={() => document.title = "Zott-IT - Startseite"}
                        to="/">Startseite
                    </NavLink>
                    <NavLink
                        style={({ isActive }) => ({
                            color: isActive ? '#545e6f' : theme.color,
                            background: isActive ? '#f0f0f0' : theme.backgroundColor,
                        })}
                        className="menu-links"
                        onClick={() => document.title = "Zott-IT - Über mich"}
                        to="/about">Über mich
                    </NavLink>
                    <NavLink
                        style={({ isActive }) => ({
                            color: isActive ? '#545e6f' : theme.color,
                            background: isActive ? '#f0f0f0' : theme.backgroundColor,
                        })}
                        className="menu-links"
                        onClick={() => document.title = "Zott-IT - Projekte"}
                        to="/dashboard">Projekte
                    </NavLink>
                    <Switch value={props.darkMode} onChange={props.setDarkMode} />
                </div>
            </div>
            <div id="layout-content">
                <Outlet />
            </div>
            <div id="layout-footer" style={{ borderColor: theme.borderColor, backgroundColor: theme.backgroundColor}}>
                <span style={{color: theme.color}}>@ Copyright 2021 - { currentYear } | Stefan Zott | <NavLink style={{color: theme.color}} className="footer-links" to="/impressum">Impressum</NavLink> | <NavLink style={{color: theme.color}} className="footer-links" to="/data">Datenschutzerklärung</NavLink></span>
            </div>
        </Fragment>
  );
}

export default Layout