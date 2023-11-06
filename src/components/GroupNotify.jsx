import ProfilePic from "./ProfilePic";

const GroupNotify = ({ data }) => {
  return (
    <div>
      <ProfilePic picUrl={data.profilePic} />
      <div>
        <p>
          <a className="clr-dark-blue" href="#">
            {data.userName}
          </a>{" "}
          {data.message} <a href="#">{data.groupName}</a>
          {data.read ? "" : <span className="unread"></span>}
        </p>
        <p>{data.time}</p>
      </div>
    </div>
  );
};
export default GroupNotify;
