import ProfilePic from "./ProfilePic";

const PrivateMessage = ({ data }) => {
  return (
    <div>
      <ProfilePic picUrl={data.profilePic} />
      <div>
        <p>
          <a className="clr-dark-blue" href="#">
            {data.userName}
          </a>{" "}
          {data.message}
          {data.read ? "" : <span className="unread"></span>}
        </p>
        <p>{data.time}</p>
        <div>{data.privateMessage}</div>
      </div>
    </div>
  );
};

export default PrivateMessage;
