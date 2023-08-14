import { useEffect, useState } from "react";
import "./App.css";
import Tours from "./components/Tours";
import { API_URL } from "./API";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [tour, setTour] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(API_URL);
      setTour(response.data);
      console.log(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1 className="head">Our Tours</h1>
      {loading ? <h4>Loading....</h4> : <Tours tour={tour} setTour={setTour} />}
    </div>
  );
}

export default App;
