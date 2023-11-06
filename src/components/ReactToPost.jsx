import ProfilePic from "./ProfilePic";

const ReactToPost = ({ data }) => {
  return (
    <div>
      <ProfilePic picUrl={data.profilePic} />
      <div>
        <p>
          <a className="clr-dark-blue" href="#">
            {data.userName}
          </a>{" "}
          {data.message} <a href="#">{data.postName}</a>
          {data.read ? "" : <span className="unread"></span>}
        </p>
        <p>{data.time}</p>
      </div>
    </div>
  );
};

export default ReactToPost;
