import ProfilePic from "./ProfilePic";

const PrivateMessage = ({ data }) => {
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
        <div className="dm">{data.privateMessage}</div>
      </div>
    </div>
  );
};

export default PrivateMessage;
