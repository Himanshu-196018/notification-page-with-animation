import ProfilePic from "./ProfilePic";

const ReactToPost = ({ data }) => {
  return (
    <div className={`flex-container ${data.read ? "" : "bg-unread"}`}>
      <ProfilePic picUrl={data.profilePic} />
      <div className="notification-content">
        <p>
          <a className="clr-dark-blue" href="#">
            {data.userName}
          </a>{" "}
          {data.message} <a href="#">{data.postName}</a>
          {data.read ? "" : <span className="unread"></span>}
        </p>
        <p className="time">{data.time}</p>
      </div>
    </div>
  );
};

export default ReactToPost;
