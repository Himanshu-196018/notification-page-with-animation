const ProfilePic = ({ picUrl }) => {
  return <img className="avatar-img" src={"/images/" + picUrl} alt={picUrl} />;
};

export default ProfilePic;
