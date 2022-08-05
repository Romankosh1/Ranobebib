import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/animations/shift-toward-subtle.css";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className="bg-primary py-2">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-2 col-sm-12">
            <Link to="/">
              <img
                className={`w-100 ${styles.logo}`}
                src="/img/logo.png"
                alt="Renobebib"
              />
            </Link>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-12">
            <div className="row">
              <div className="col col-md-4">
                <Tippy
                  maxWidth={170}
                  placement="bottom-start"
                  content={
                    <div className="row">
                      <div className="col-12">
                        <Link to="/catalog" className="btn btn-light w-100">
                          Японской
                        </Link>
                      </div>
                      <div className="col-12">
                        <Link
                          to="/catalog"
                          className="btn btn-light w-100 mt-1"
                        >
                          Котейской
                        </Link>
                      </div>
                      <div className="col-12">
                        <Link to="/catalog" className="btn btn-light w-100">
                          Китайской
                        </Link>
                      </div>
                      <div className="col-12">
                        <Link to="/catalog" className="btn btn-light w-100">
                          Английской
                        </Link>
                      </div>
                      <div className="col-12">
                        <Link to="/catalog" className="btn btn-light w-100">
                          Авторской
                        </Link>
                      </div>
                      <div className="col-12">
                        <Link to="/catalog" className="btn btn-light w-100">
                          Фанфиков
                        </Link>
                      </div>
                      <div className="col-12">
                        <Link to="/catalog" className="btn btn-light w-100">
                          Весь
                        </Link>
                      </div>
                      <div className="col-12">
                        <Link to="/catalog" className="btn btn-light w-100">
                          Случайный тайтл
                        </Link>
                      </div>
                    </div>
                  }
                  arrow={false}
                  trigger="click"
                  theme="light"
                  animation="shift-toward-subtle"
                  interactive
                >
                  <button className="btn btn-primary d-flex align-items-center">
                    <i className="fa fa-bars" />
                    <span className="mx-1">Котолог</span>
                    <i className="fa fa-caret-down" />
                  </button>
                </Tippy>
              </div>
              <div className="col col-md-3">
                <button className="btn btn-primary">Поиск</button>
              </div>
              <div className="col col-md-3">
                <button className="btn btn-primary">Форум</button>
              </div>
              <div className="col col-md-2">
                <Tippy
                  maxWidth={170}
                  placement="bottom-start"
                  content={
                    <div className="row">
                      <div className="col-12">
                        <Link to="/catalog" className="btn btn-light w-100">
                          Новости
                        </Link>
                      </div>
                      <div className="col-12">
                        <Link to="/catalog" className="btn btn-light w-100">
                          Контакты
                        </Link>
                      </div>
                      <div className="col-12">
                        <Link to="/catalog" className="btn btn-light w-100">
                          Рандом
                        </Link>
                      </div>
                    </div>
                  }
                  arrow={false}
                  trigger="click"
                  theme="light"
                  animation="shift-toward-subtle"
                  interactive
                >
                  <button className="btn btn-primary">...</button>
                </Tippy>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-5 col-sm-12">
            <div className="row">
              <div className="col col-md-3">
                <button className="btn btn-primary">Вход</button>
              </div>
              <div className="col col-md-5">
                <button className="btn btn-primary">Регистрация</button>
              </div>
              <div className="col col-md-4 col-lg-2">
                <button className="btn btn-primary">Dark</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
