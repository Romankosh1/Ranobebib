import { formatDistanceToNow } from "date-fns";
import NewNews from "./NewNews";
const obj = {
  title: "Update",
  link: "#",
  user: "pepe",
  date: formatDistanceToNow(new Date(0), { addSuffix: true }),
};
const news = [obj, obj];

const LastNews = () => {
  return (
    <div className="bg-white rounded pt-2 px-3 pb-3">
      <h5 className="mb-2">Последние новости</h5>
      <div className=" flex-nowrap gx-2">
        {news.map((item, index) => {
          return (
            <div key={index}>
              <div>{item.title}</div>
              <div>{item.user}</div>
              <div>{item.date}</div>
            </div>
          );
        })}
        {/* <div className="col">
          <NewNews />
        </div>
        <div className="col">
          <NewNews />
        </div>
        <div className="col">
          <NewNews />
        </div>
        <div className="col">
          <NewNews />
        </div> */}
        <div className="col">
          <a href="news" className="hover-link">
            Все новости {">"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default LastNews;
