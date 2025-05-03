import React, { useState, useEffect } from "react";
import "./header.css"; // tạo file riêng cho style nếu cần
import logo from "./assets/logo.png";
import logo2 from "./assets/logo2.png";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header dtl_header ${isSticky ? "dtl_header_sticky" : ""}`}
    >
      <div className="container d-flex justify-content-between align-items-center py-2">
        {/* Logo */}
        <div className="d-flex align-items-center">
          <img
            src={isSticky ? logo2 : logo}
            alt="Vietnam Tourism"
            className="dtl_logo_header me-3"
            height={79}
          />
        </div>

        {/* Desktop Menu */}
        <ul className="nav d-none d-md-flex">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Destinations
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Experiences
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Events
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Plan Your Trip
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Travel Offers
            </a>
          </li>
        </ul>

        {/* Icons */}
        <div className="d-flex align-items-center">
          <button className="btn btn-link fs-5">
            <i className="fas fa-search"></i>
          </button>
          <div className="dropdown dtl_dropdown_menu_language d-none d-md-block">
            <button
              className="btn btn-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Language
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/">
                  English
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Vietnamese
                </a>
              </li>
            </ul>
          </div>
          <button className="btn btn-link dtl_btn_link fs-5">
            <i className="fas fa-envelope"></i>
          </button>
          <button className="btn btn-link dtl_btn_link fs-5">
            <i className="fa-light fa-user-tie"></i>
          </button>

          {/* Mobile Toggle */}
          <button
            className="btn btn-link d-md-none fs-4"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="d-md-none px-4 py-3 dtl_nav_show_mobile">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Destinations
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Experiences
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Plan Your Trip
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Travel Offers
              </a>
            </li>
            <div className="dropdown">
              <button
                className="btn btn-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Language
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    English
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Vietnamese
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
