import MediaCard from "./MediaCard";

const PopularUpdateList = () => {
  return (
    <div className="bg-white rounded pt-2 px-3 pb-3">
      <h5>Обновления популярного ранобэ</h5>
      <div className="row flex-nowrap gx-2">
        <div className="col-2">
          <MediaCard />
        </div>
        <div className="col-2">
          <MediaCard />
        </div>
        <div className="col-2">
          <MediaCard />
        </div>
        <div className="col-2">
          <MediaCard />
        </div>
        <div className="col-2">
          <MediaCard />
        </div>
        <div className="col-2">
          <MediaCard />
        </div>
      </div>
    </div>
  );
};
export default PopularUpdateList;
