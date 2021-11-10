import React from "react";
import s from "./Header.module.css";
import { GoGrabber } from "react-icons/go";

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.nav}>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          {/* Left navbar links */}
          <div className={s.burgerMenu}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-widget="pushmenu"
                  href="#"
                  role="button"
                >
                  <GoGrabber />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className={s.headerTitle}>Главная страница</div>
      <div className={s.headerImage}>
        <div className="image">
          <img
            src="dist/img/user2-160x160.jpg"
            className="img-circle elevation-2"
            alt="User Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
