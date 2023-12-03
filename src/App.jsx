import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./custom.scss";
import Skeleton from 'react-loading-skeleton'
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((res) => {
        if (res.data) {
          setUser(res.data);
          setLoading(false);
        }
      });
  }, []);

  console.log({ loading, users });
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 ">
          <h1 className="text-center ">USERS LIST</h1>
          {/* mapping the users */}
          {users.map(user => <UserList user={user} key={user.id}/> )}
        </div>
        <div className="col-4 ">
          <h1 className="text-center ">USER DETAILS</h1>
        </div>
      </div>
    </div>
  );
}

export default App;

const UserList = ({user}) => {
  const {profile, avatar, jobTitle} = user
  return(
    <div className="p-2 mb-2 border  rounded-3 d-flex align-items-center gap-4">
      <img className="img-sizing rounded-circle" src={avatar} alt="" />
      <div className="flex-grow-1">
        <p className="text-24">{profile.firstName + " " + profile.lastName}</p>
        <p>{jobTitle}</p>
      </div>
      <div className=" ">
        <button className="btn btn-warning ml-auto">View Details</button>
      </div>
    </div>
  )
}
