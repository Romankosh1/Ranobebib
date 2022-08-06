const UserCard = ({
  avatar,
  nickname,
  profileLink,
  topPosition,
  level,
  exp,
  expLimit,
}) => {
  return (
    <div className="row gx-2">
      <div className="col-3">
        <img src={avatar} className="w-100" />
      </div>
      <div className="col-9">
        <div className="row">
          <div className="col user_name pb-1">
            <a href={profileLink} className="hover-link">
              {nickname}
            </a>
          </div>
          <div className="col d-flex justify-content-end user_name">
            <b>#{topPosition}</b>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <span className="user_level">Уровень: {level}</span>
          </div>
          <div className="col d-flex align-items-center justify-content-end">
            <span className="user_level">
              {exp} / {expLimit}
            </span>
          </div>
        </div>
        <div className="bg-light">
          <div
            className="bg-primary"
            style={{ width: `${(exp / expLimit) * 100}%`, height: 5 }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
