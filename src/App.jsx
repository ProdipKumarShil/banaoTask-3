
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './custom.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUser] = useState([])
  useEffect(() => {
    axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
      .then(res => console.log(res))
  }, [])
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 ">
          s
        </div>
        <div className="col-4 ">

        </div>
      </div>
    </div>
  )
}

export default App
