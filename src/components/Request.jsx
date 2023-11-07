import ProfilePic from "./ProfilePic";

const Request = ({ data }) => {
  return (
    <div className="flex-container">
      <ProfilePic picUrl={data.profilePic} />
      <div className="notification-content">
        <p>
          <a className="clr-dark-blue" href="#">
            {data.userName}
          </a>{" "}
          {data.message}
          {data.read ? "" : <span className="unread"></span>}
        </p>
        <p>{data.time}</p>
      </div>
    </div>
  );
};

export default Request;
