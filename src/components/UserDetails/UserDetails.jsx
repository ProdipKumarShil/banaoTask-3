import moment from "moment/moment";
import bg from "../../assets/bg.svg";
const UserDetails = ({ card }) => {
  return (
    <div className="border overflow-hidden rounded-3">
      <div className="position-relative">
        <img
          className="bg-img-height w-screen object-fit-cover"
          src={bg}
          alt=""
        />
        <img
          className="rounded-circle position-absolute img-position"
          src={card?.avatar}
          alt=""
        />
      </div>
      <div className="p-3">
        <p className="text-center text-24">{"@" + card?.profile?.username}</p>

        <ProfileData title={"Bio"} data={card?.Bio}/>
        <ProfileData title={"Full Name"} data={card?.profile?.firstName + " " + card?.profile?.lastName}/>
        <ProfileData title={"Created On"} data={moment(card?.createdAt, "YYYYMMDD").fromNow()}/>
        <ProfileData title={"Title"} data={card?.jobTitle}/>
        <ProfileData title={"Email"} data={card?.profile?.email}/>
      </div>
    </div>
  );
};

export default UserDetails;

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
