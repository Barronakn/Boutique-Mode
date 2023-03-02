import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="header">
        <div className="logo">
          <NavLink className="navActive" to="/">
            Akn <span>Shop</span>
          </NavLink>
        </div>
        <div className="nav">
          <ul>
            <li>
              <NavLink className="navActive" to="/">
                Maison
              </NavLink>
            </li>
            <li>
              <NavLink className="navActive" to="/boutiques">
                Boutiques
              </NavLink>
            </li>
            <li>
              <NavLink className="navActive" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="compte">
          <NavLink className="navActive" to="/login">
            Connexion
          </NavLink>
          <NavLink className="navActive" to="/register">
            Inscription
          </NavLink>
        </div>
        {show ? (
          <div onClick={() => setShow(false)} className="nav-res">
            <svg
              onClick={() => setShow(false)}
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              version="1.1"
              viewBox="0 0 17 17"
              className="icon_reset none w-auto text-2xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g></g>
              <path d="M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z"></path>
            </svg>

            <ul>
              <li>
                <NavLink
                  onClick={() => setShow(false)}
                  className="navActive"
                  to="/"
                >
                  Maison
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setShow(false)}
                  className="navActive"
                  to="/boutiques"
                >
                  Boutiques
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setShow(false)}
                  className="navActive"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        ) : null}
        <svg
          onClick={() => setShow(true)}
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 1024 1024"
          className="icon_menu text-4xl md:text-5xl w-auto"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Navigation;
