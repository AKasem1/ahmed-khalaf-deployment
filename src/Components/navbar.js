import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom'; 
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/logo.png';
import {useDispatch} from 'react-redux';

export const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <header className="header">
      <div className="logo">
        <RouterLink to='/' className="logo-link">
          <img src={logo} alt="منصة الحكيم التعليمية" />
        </RouterLink>
      </div>
      <nav className="nav">
        {/* <ScrollLink to="footer" smooth={true} duration={500} className='link'>
          تواصل معنا
        </ScrollLink>
        <ScrollLink to="aboutus" smooth={true} duration={500} className='link'>
          من نحن
        </ScrollLink>
        <ScrollLink to="courses" smooth={true} duration={500} className='link'>
          الكورسات
        </ScrollLink>
        <ScrollLink to="grades" smooth={true} duration={500} className='link'>
          المراحل الدراسية
        </ScrollLink>
        <ScrollLink to="home" smooth={true} duration={500} className='link'>
          الرئيسية
        </ScrollLink> */}
      </nav>

      <div className="menu-icon" onClick={toggleSidebar}>
        ☰
      </div>

      <div className={`sidebar ${sidebarVisible ? 'active' : ''}`}>
        <div className="close-btn" onClick={toggleSidebar}>
          &times;
        </div>
        <img src={logo} alt="منصة الحكيم" className="sidebar-logo"/>
        <hr />
        <button className="sidebar-button">
          حساب جديد
          <div className="arrow-wrapper">
            <div className="arrow"></div>
          </div>
        </button>
        <button className="sidebar-button">
          تسجيل دخول
          <div className="arrow-wrapper">
            <div className="arrow"></div>
          </div>
        </button>
      </div>
    </header>
  );
};
