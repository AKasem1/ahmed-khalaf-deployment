import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sidebar.css';
import { faCodepen, faPalette, faImages, faThumbtack, faHeart, faChartLine, faFire, faMagic, faGem, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
  return (
    <div id="nav-bar">
      <input type="checkbox" id="nav-toggle" />

      <div id="nav-header">
        <a href="https://codepen.io" target="_blank" id="nav-title">
          Codepen <FontAwesomeIcon icon={faCodepen} />
        </a>
        <label htmlFor="nav-toggle">
          <span id="nav-toggle-burger"></span>
        </label>
        <hr />
      </div>

      <div id="nav-content">
        <div className="nav-button">
          <FontAwesomeIcon icon={faPalette} /> <span>Your Work</span>
        </div>
        <div className="nav-button">
          <FontAwesomeIcon icon={faImages} /> <span>Assets</span>
        </div>
        <div className="nav-button">
          <FontAwesomeIcon icon={faThumbtack} /> <span>Pinned Items</span>
        </div>
        <hr />
        <div className="nav-button">
          <FontAwesomeIcon icon={faHeart} /> <span>Following</span>
        </div>
        <div className="nav-button">
          <FontAwesomeIcon icon={faChartLine} /> <span>Trending</span>
        </div>
        <div className="nav-button">
          <FontAwesomeIcon icon={faFire} /> <span>Challenges</span>
        </div>
        <div className="nav-button">
          <FontAwesomeIcon icon={faMagic} /> <span>Spark</span>
        </div>
        <hr />
        <div className="nav-button">
          <FontAwesomeIcon icon={faGem} /> <span>Codepen Pro</span>
        </div>
        <div id="nav-content-highlight"></div>
      </div>

      <input type="checkbox" id="nav-footer-toggle" />

      <div id="nav-footer">
        <div id="nav-footer-heading">
          <div id="nav-footer-avatar">
            <img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" alt="Avatar" />
          </div>
          <div id="nav-footer-titlebox">
            <a href="https://codepen.io/uahnbu/pens/public" target="_blank" id="nav-footer-title">
              uahnbu
            </a>
            <span id="nav-footer-subtitle">Admin</span>
          </div>
          <label htmlFor="nav-footer-toggle">
            <FontAwesomeIcon icon={faCaretUp} />
          </label>
        </div>
        <div id="nav-footer-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;