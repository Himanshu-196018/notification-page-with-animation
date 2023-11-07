const ProfilePic = ({ picUrl }) => {
  return (
    <img
      className="avatar-img"
      src={"./public/images/" + picUrl}
      alt={picUrl}
    />
  );
};

export default ProfilePic;
