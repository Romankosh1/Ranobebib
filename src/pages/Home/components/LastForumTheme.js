import NewForumTheme from "./NewForumTheme";

const LastForumTheme = () => {
  return (
    <div className="bg-white rounded pt-2 px-3 pb-3">
      <h5 className="mb-2 block_title">Последние темы форума</h5>
      <div className="flex-nowrap gx-2">
        <div className="col">
          <NewForumTheme />
        </div>
        <div className="col">
          <NewForumTheme />
        </div>
        <div className="col">
          <NewForumTheme />
        </div>
        <div className="col">
          <NewForumTheme />
        </div>
        <div className="col">
          <a href="news" className="hover-link">
            Все темы {">"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default LastForumTheme;
