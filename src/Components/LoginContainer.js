import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Importing axios
import "./LoginContainer.css";
import companyLogo from "./company.png";
import Footer from "./Footer/Footer";

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To handle error messages
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Validate if fields are empty
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    try {
      const response = await axios.post(
        "https://saffron-abni.onrender.com/api/v1/user/login", 
        {
          email: email,
          password: password
        }
      );

      // If login is successful, you get a token or user data, store it
      if (response.data.token) {
        localStorage.setItem("auth_token", response.data.token); // Store token in localStorage or cookies
        setTimeout(() => {
          navigate("/home"); 
        }, 1000);
      }
    } catch (error) {
      // Handle API error
      setError(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  const handleLoginWithId = () => {
    navigate('/home');
  }

  return (
    <div className="front_container">
      <div className="set_something">
        <img className="companyLogo" src={companyLogo} alt="company_logo" />
        <div className="login_card">
          <p>
            Login <i className="fas fa-hand-point-down"></i>
          </p>
          <div className="inps_login">
            <div className="input_wrapper">
              <input
                type="text"
                className="input_field"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <i className="fas fa-user input_icon userIcon"></i>
            </div>
            <div style={{ marginTop: "15px" }} className="input_wrapper">
              <input
                type="password"
                className="input_field"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="fas fa-key input_icon userIcon"></i>
            </div>
          </div>

          {/* Display error message if login fails */}
          {error && <div className="error-message">{error}</div>}

          <div className="login_buttons">
            <button className="login_btn" onClick={handleLogin}>
              Login
            </button>
            <button onClick={handleLoginWithId} className="demo_btn">
              Login with demo ID
            </button>
          </div>

          <span className="protected_captcha">
            This site is protected by reCAPTCHA and the Google{" "}
            <a className="set_clr" href="#">Privacy Policy</a> and <a className="set_clr" href="#">Terms of Service</a> apply.
          </span>
        </div>
        <div className="foot">
          <div className="terms_condition">
            <a href="/terms-and-conditions" target="_blank">Terms and Conditions</a>
            <a href="/responsible-gaming" target="_blank">Responsible Gaming</a>
          </div>
          <div className="support">
            <p>24 X 7 Support</p>
            <div className="visibilty_hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
