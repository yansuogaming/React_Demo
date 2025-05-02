import React, { useState } from "react";
import "./header.css"; // tạo file riêng cho style nếu cần
import logo from "./assets/logo.png";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header
      className="header text-white"
      style={{
        backgroundImage: "url('/assets/header-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container d-flex justify-content-between align-items-center py-2">
        {/* Logo */}
        <div className="d-flex align-items-center">
          <img
            src={logo}
            alt="Vietnam Tourism"
            className="logo me-3"
            height={50}
          />
        </div>

        {/* Desktop Menu */}
        <ul className="nav d-none d-md-flex">
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              Destinations
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              Experiences
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              Events
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              Plan Your Trip
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              Travel Offers
            </a>
          </li>
        </ul>

        {/* Icons */}
        <div className="d-flex align-items-center">
          <button className="btn btn-link text-white fs-5">
            <i className="fas fa-search"></i>
          </button>
          <div className="dropdown">
            <button
              className="btn btn-link text-white dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Language
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  English
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Vietnamese
                </a>
              </li>
            </ul>
          </div>
          <button className="btn btn-link text-white fs-5">
            <i className="fas fa-envelope"></i>
          </button>
          <i className="fa-light fa-user-tie"></i>

          {/* Mobile Toggle */}
          <button
            className="btn btn-link d-md-none text-white fs-4 ms-2"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="d-md-none bg-dark px-4 py-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                Destinations
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                Experiences
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                Plan Your Trip
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                Travel Offers
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
