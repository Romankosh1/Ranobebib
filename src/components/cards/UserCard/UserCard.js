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
          <div className="col">
            <a href={profileLink} className="hover-link">
              {nickname}
            </a>
          </div>
          <div className="col d-flex justify-content-end">
            <b>#{topPosition}</b>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <span style={{ fontSize: 12 }}>Уровень: {level}</span>
          </div>
          <div className="col d-flex align-items-center justify-content-end">
            <span style={{ fontSize: 12, marginTop: 3 }}>
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
