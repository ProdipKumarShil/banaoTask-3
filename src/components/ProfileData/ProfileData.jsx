const ProfileData = ({title, data}) => {
  return (
    <div className="mb-3">
      <p className="text-16 mb-1">{title}</p>
      <div className="light-bg p-2 rounded">
        <p>{data}</p>
      </div>
    </div>
  );
};

export default ProfileData