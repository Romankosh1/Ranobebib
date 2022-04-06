import { Link } from "react-router-dom";

const MediaCard = () => {
  return (
    <div className="card border-light">
      <Link to="Tower">
        <div
          className="position-relative"
          title="Читать 99 главу. Башня небес!"
        >
          <img
            src="/img/tower.jpg"
            className="card-img-top"
            alt="Mightiness Tower"
          />
          <div className="position-absolute bottom-0 start-5 text-white">
            Том 1 Глава 99
          </div>
        </div>
      </Link>
      <div className="card-body ">
        <a href="Tower" className="fs-6 line-clamp hover-link">
          Mightiness Tower
        </a>
      </div>
    </div>
  );
};

export default MediaCard;
