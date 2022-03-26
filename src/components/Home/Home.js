import PopularUpdateList from "./components/PopularUpdateList";
import TopUsersList from "./components/TopUsersList";

const Home = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-9">
          <PopularUpdateList />
        </div>
        <div className="col-3">
          <TopUsersList />
        </div>
      </div>
    </div>
  );
};
export default Home;
