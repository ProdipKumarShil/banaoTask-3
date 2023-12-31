import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./custom.scss";
import Skeleton from "react-loading-skeleton";
import { useEffect, useId, useState } from "react";
import axios from "axios";
import UserList from "./components/UserList/UserList";
import UserDetails from "./components/UserDetails/UserDetails";
import CardPlaceholder from "./components/CardPlaceholder/CardPlaceholder";
import { motion } from "framer-motion";

function App() {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cardId, setCardId] = useState(false);
  const [card, setCard] = useState([]);

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
    if (cardId == 0) {
      return;
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
          <p className="text-center bg-success mx-2 p-2 display-6 mb-4">USERS LIST</p>
          {/* mapping the users */}
          {loading && (
            <div className="d-flex justify-content-center mt-4">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {users.map((user, index) => (
            <UserList user={user} setCardId={setCardId} key={index} />
          ))}
        </div>
        <div className="col-4 ">
          <h1 className="text-center bg-success mx-2 p-2 display-6 mb-4">USER DETAILS</h1>
          {cardId ? <UserDetails card={card} /> : <Loading />}
        </div>
      </div>
    </div>
  );
}

export default App;

const Loading = () => {
  return (
    <motion.div initial={{scale: 0, }} animate={{scale: 1}} transition={{delay: 0.5, type: "spring"}} style={{ color: "#acacac" }} className="border p-3 rounded-3 mx-3">
      <p className="display-6 text-center ">User Not Found</p>
      <p className="text-center">
        or <br /> select one to more details
      </p>
    </motion.div>
  );
};
