import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/animations/shift-toward-subtle.css";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className="bg-primary py-2">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-2 col-sm-12">
            <img
              className={`w-100 ${styles.logo}`}
              src="/img/logo.png"
              alt="Renobebib"
            />
          </div>
          <div className="col-lg-4 col-md-5 col-sm-12">
            <div className="row">
              <div className="col col-md-3">
                <Tippy
                  content={
                    <div className="row">
                      <div className="col-12">
                        <button className="btn btn-light w-100">
                          Японский
                        </button>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-light w-100 mt-1">
                          Котейский
                        </button>
                      </div>
                    </div>
                  }
                  arrow={false}
                  trigger="click"
                  theme="light"
                  animation="shift-toward-subtle"
                  interactive
                >
                  <button className="btn btn-primary">Котолог</button>
                </Tippy>
              </div>
              <div className="col col-md-3">
                <button className="btn btn-primary">Поиск</button>
              </div>
              <div className="col col-md-3">
                <button className="btn btn-primary">Форум</button>
              </div>
              <div className="col col-md-2">
                <button className="btn btn-primary">...</button>
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
