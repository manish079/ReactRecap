import { useState } from "react";
import { Link } from "react-router";

export const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");

  return (
    <div className="header">
      <div className="logo">
        <img src="https://www.shutterstock.com/image-vector/chef-cook-presenting-delicious-pizza-260nw-2487122211.jpg" />
      </div>
      <nav className="nav-items">
        <ul>
          <li id="active">
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>Cart</li>
          <li
            className="login-btn"
            onClick={() => {
              loginButton === "Login"
                ? setLoginButton("Logout")
                : setLoginButton("Login");
            }}
          >
            {loginButton}
          </li>
          <li>Profile</li>
        </ul>
      </nav>
    </div>
  );
};

// export default Header;
