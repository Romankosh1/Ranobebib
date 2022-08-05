import PopularUpdateList from "./components/PopularUpdateList";
import TopUsersList from "./components/TopUsersList";
import LastNews from "./components/LastNews";
import LastForumTheme from "./components/LastForumTheme";

const Home = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-9">
          <PopularUpdateList />
          <div className="row mt-3">
            <div className="col-6">
              <LastNews />
            </div>
            <div className="col-6">
              <LastForumTheme />
            </div>
          </div>
        </div>

        <div className="col-3">
          <TopUsersList />
        </div>
      </div>
    </div>
  );
};
export default Home;
