import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./custom.scss";
import Skeleton from 'react-loading-skeleton'
import { useEffect, useId, useState } from "react";
import axios from "axios";
import UserList from "./components/UserList/UserList";
import UserDetails from "./components/UserDetails/UserDetails";

function App() {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cardId, setCardId] = useState(0)
  console.log(cardId)

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
          {users.map(user => <UserList user={user} setCardId={setCardId} key={user.id}/> )}
        </div>
        <div className="col-4 ">
          <h1 className="text-center ">USER DETAILS</h1>
          <UserDetails />
        </div>
      </div>
    </div>
  );
}

export default App;


