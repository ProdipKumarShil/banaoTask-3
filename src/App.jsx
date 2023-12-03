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
  const [cardId, setCardId] = useState(false)
  const [card, setCard] = useState([])

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

  useEffect(() => {
    if(cardId == 0){
      return
    }
    axios
      .get(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${cardId}`)
      .then((res) => {
        if (res.data) {
          setCard(res.data);
        }
      });
  }, [cardId]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-8 ">
          <h1 className="text-center ">USERS LIST</h1>
          {/* mapping the users */}
          {users.map((user, index) => <UserList user={user} setCardId={setCardId} key={index}/> )}
        </div>
        <div className="col-4 ">
          <h1 className="text-center ">USER DETAILS</h1>
          {cardId ? <UserDetails card={card}/> : <p>not found</p> }
        </div>
      </div>
    </div>
  );
}

export default App;


