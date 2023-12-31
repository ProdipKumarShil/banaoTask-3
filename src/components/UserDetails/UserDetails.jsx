import moment from "moment/moment";
import bg from "../../assets/bg.svg";
import ProfileData from "../ProfileData/ProfileData";
import { motion } from "framer-motion";
const UserDetails = ({ card }) => {
  if (!card?.avatar && !card?.profile?.firstName) {
    return (
      <motion.div  className="d-flex mx-3 justify-content-center mt-4">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div initial={{scale: 0, }} animate={{scale: 1}} transition={{delay: 0.5, type: "spring"}} className=" mx-3 border overflow-hidden rounded-3 position-sticky top-0">
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

          <ProfileData title={"Bio"} data={card?.Bio} />
          <ProfileData
            title={"Full Name"}
            data={card?.profile?.firstName + " " + card?.profile?.lastName}
          />
          <ProfileData
            title={"Created On"}
            data={moment(card?.createdAt, "YYYYMMDD").fromNow()}
          />
          <ProfileData title={"Title"} data={card?.jobTitle} />
          <ProfileData title={"Email"} data={card?.profile?.email} />
        </div>
      </motion.div>
    );
  }
};

export default UserDetails;
