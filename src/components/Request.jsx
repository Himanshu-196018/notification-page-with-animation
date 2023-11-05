import ProfilePic from "./ProfilePic";

const Request = ({ data }) => {
  return (
    <div>
      <ProfilePic picUrl={data.profilePic} />
      <div>
        <p>
          <a href="#">{data.userName}</a> {data.message}
          {data.read ? "" : <span className="unread"></span>}
        </p>
        <p>{data.time}</p>
      </div>
    </div>
  );
};

export default Request;
