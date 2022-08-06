import { Fragment } from "react";
import UserCard from "components/cards/UserCard";

const topUsers = [
  {
    avatar: "/img/placeholder.png",
    nickname: "Romankosh",
    profileLink: "/",
    topPosition: 1,
    level: 15,
    exp: 9025,
    expLimit: 10395,
  },
  {
    avatar: "/img/placeholder.png",
    nickname: "Umnik3420",
    profileLink: "/",
    topPosition: 2,
    level: 12,
    exp: 9025,
    expLimit: 10395,
  },
  {
    avatar: "/img/placeholder.png",
    nickname: "Rosh",
    profileLink: "/",
    topPosition: 3,
    level: 8,
    exp: 9025,
    expLimit: 10395,
  },
  {
    avatar: "/img/placeholder.png",
    nickname: "Rol",
    profileLink: "/",
    topPosition: 4,
    level: 9,
    exp: 9025,
    expLimit: 10395,
  },
  {
    avatar: "/img/placeholder.png",
    nickname: "Ivan",
    profileLink: "/",
    topPosition: 5,
    level: 7,
    exp: 852,
    expLimit: 7536,
  },
  {
    avatar: "/img/placeholder.png",
    nickname: "Vanga",
    profileLink: "/",
    topPosition: 6,
    level: 7,
    exp: 7500,
    expLimit: 7652,
  },
  {
    avatar: "/img/placeholder.png",
    nickname: "777",
    profileLink: "/",
    topPosition: 7,
    level: 777,
    exp: 776,
    expLimit: 777,
  },
  {
    avatar: "/img/placeholder.png",
    nickname: "pressF",
    profileLink: "/",
    topPosition: 8,
    level: 9,
    exp: 5032,
    expLimit: 5552,
  },
  {
    avatar: "/img/placeholder.png",
    nickname: "SAOtop",
    profileLink: "/",
    topPosition: 9,
    level: 3,
    exp: 500,
    expLimit: 780,
  },
  {
    avatar: "/img/placeholder.png",
    nickname: "IreadNovel",
    profileLink: "/",
    topPosition: 10,
    level: 5,
    exp: 1200,
    expLimit: 1300,
  },
];

const TopUsersList = () => {
  return (
    <div className="bg-white rounded pt-3 pb-3">
      <div className="px-3">
        <h6 className="user_title">Топ активных недели</h6>
      </div>
      <hr className="bg-primary" style={{ height: 2, opacity: 1 }} />
      <div className="px-3">
        {topUsers.map((user, index) => (
          <Fragment key={index}>
            <UserCard {...user} />
            {index !== topUsers.length - 1 && <hr />}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
export default TopUsersList;
