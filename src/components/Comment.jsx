import ProfilePic from "./ProfilePic";

const Comment = ({ data }) => {
  return (
    <div className={`flex-container ${data.read ? "" : "bg-unread"}`}>
      <ProfilePic picUrl={data.profilePic} />
      <div className="notification-content">
        <p>
          <a className="clr-dark-blue" href="#">
            {data.userName}
          </a>{" "}
          {data.message}
          {data.read ? "" : <span className="unread"></span>}
        </p>
        <p className="time">{data.time}</p>
      </div>
      <a className="pictures" href="#">
        <img src={"/images/" + data.picture} />
      </a>
    </div>
  );
};

export default Comment;
