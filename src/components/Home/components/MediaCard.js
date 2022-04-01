import { Link } from "react-router-dom";

const MediaCard = () => {
  return (
    <div className="card">
      <Link to="Tower">
        <img
          src="/img/tower.jpg"
          className="card-img-top"
          alt="Mightiness Tower"
        />
      </Link>
      <div className="card-body">
        <a
          href="Tower"
          className="text-decoration-none text-reset card-link fs-6 line-clamp"
        >
          Mightiness Tower
        </a>
      </div>
    </div>
  );
};

export default MediaCard;
