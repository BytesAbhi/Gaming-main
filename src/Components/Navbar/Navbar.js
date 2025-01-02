import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import companyLogo from '../company.png'
import { FaSearchPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBalanceVisible, setIsBalanceVisible] = useState(true); // State to toggle balance visibility
  const [isExpoVisible, setIsExpoVisible] = useState(true);
  const[isSearchBarOpen,SetIsSearchBarOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navi = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    // Close the dropdown if the click is outside the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the dropdown
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleBalanceToggle = () => {
    setIsBalanceVisible((prev) => !prev);
  };
  const handleExpoToggle = () => {
    setIsExpoVisible((prev) => !prev);
  };

  const signOutBtn = () => {
    setTimeout(()=>{
      navi('/')
    },1000)
  }

  const searchBar = () => {
    SetIsSearchBarOpen((prev) => !prev);
  }


  return (
    <div className="navbar_container">
      <div className="nav_leftSection">
        <img className="set_logo" src={companyLogo} alt="company_logo" />
      </div>

      <div className="nav_rightSection">
        {/* Search Bar */}
        <div className="group">
        {isSearchBarOpen && 
        <input
        id="query"
        className="input"
        type="search"
        placeholder="Search..."
        name="searchbar"
      />
        }
        <FaSearchPlus style={{fontSize:'1.2rem',cursor:'pointer'}} onClick={searchBar} />
          {/* <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg> */}

          
        </div>
        <p className="rules">Rules</p>
        <div className="balance_Exp">
          {isBalanceVisible && (
            <p className="balance">
              Balance:1500 
            </p>
          )}
          {isExpoVisible && (
            <p className="balance">Exp:0</p>
          )}
        </div>
        <div className="demo_icon" onClick={toggleDropdown} ref={dropdownRef}>
          <p className="demo">
            Demo{" "}
            <i
              style={{ fontSize: "1.1rem", fontWeight: "600" }}
              className={
                isDropdownOpen
                  ? "ri-arrow-drop-up-line icon"
                  : "ri-arrow-down-s-line icon"
              }
            ></i>
          </p>
          {isDropdownOpen && (
            <div className="dropdown_menu">
              <ul>
                <li>Account Statement</li>
                <li>Current Bet</li>
                <li>Casino Results</li>
                <li>Set Button Values</li>
                <li className="hide_screen">Rules</li>
                <li className="hide_screen">
                  Balance{" "}
                  <input
                    className="balance_inp"
                    type="checkbox"
                    onChange={handleBalanceToggle}
                  />
                </li>
                <li className="hide_screen">
                  Exposure <input onChange={handleExpoToggle} type="checkbox" className="exposure_inp" />
                </li>
                <hr />
                <li onClick={signOutBtn}>Sign Out</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
