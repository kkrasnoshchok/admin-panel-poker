import React from "react";
import s from "./Menu.module.css";
import {
  IoHomeOutline,
  IoChevronDownOutline,
  IoAnalyticsSharp,
  IoInformation,
} from "react-icons/io5";
import { ImVideoCamera } from "react-icons/im";
import { MdEmojiPeople, MdIntegrationInstructions } from "react-icons/md";

const Menu = () => {
  return (
    <div className={s.menu}>
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            {/* <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div> */}
            <div className="info">
              <a href="#" className="d-block">
                Firestorm
              </a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              <li className="nav-item menu-open">
                <a href="#" className="nav-link active">
                  <span>
                    <IoHomeOutline />
                  </span>

                  <p>Главная Страница</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <span>
                    <MdEmojiPeople />
                  </span>
                  <p>
                    Игрок
                    <IoChevronDownOutline />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <p>Формуляр</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <p>Турнирная сетка</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <p>Переводы</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <span>
                    <IoAnalyticsSharp />
                  </span>
                  <p>Статистика</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <span>
                    <IoInformation />
                  </span>
                  <p>
                    Отчеты
                    <IoChevronDownOutline />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <p>Игровая статистика</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <p>Финансы</p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a
                          href="pages/examples/login.html"
                          className="nav-link"
                        >
                          <p>Расходы</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/register.html"
                          className="nav-link"
                        >
                          <p>Доходы</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <p>Саппорт</p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a
                          href="pages/examples/login.html"
                          className="nav-link"
                        >
                          <p>Тикеты</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/register.html"
                          className="nav-link"
                        >
                          <p>Таски</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <span>
                    <MdIntegrationInstructions />
                  </span>
                  <p>Инструкции</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <span>
                    <ImVideoCamera />
                  </span>
                  <p>Видео</p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
};

export default Menu;
