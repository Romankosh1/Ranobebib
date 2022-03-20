const Header = () => {
  return (
    <div className="bg-primary py-2">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-2 col-lg-1">
            <img className="w-100" src="/img/logo.png" alt="Renobebib" />
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col">
                <button className="btn btn-primary">Котолог</button>
              </div>
              <div className="col">
                <button className="btn btn-primary">Поиск</button>
              </div>
              <div className="col">
                <button className="btn btn-primary">Форум</button>
              </div>
              <div className="col">
                <button className="btn btn-primary">...</button>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col">
                <button className="btn btn-primary">Вход</button>
              </div>
              <div className="col">
                <button className="btn btn-primary">Регистрация</button>
              </div>
              <div className="col">
                <button className="btn btn-primary">DarkSide</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
