import React, { useState, useEffect } from "react";
import Tours from "./Tours";
import Loading from "./Loading";
const url = "./data.json";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setDats] = useState([]);
  function removeDats(id) {
    const newData = data.filter((c) => c.id !== id);
    setDats(newData);
  }
  const loadData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setDats(data);
    } catch (error) {
      console.log(`Error Happend! ` + error);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  if (loading) {
    return <Loading />;
  }
  if (data.length === 0) {
    return (
      <div className="container text-white mt-5">
        <h1>No Tour Left</h1>
        <button
          className="btn btn-primary"
          onClick={() => {
            loadData();
          }}
        >
          Refresh
        </button>
      </div>
    );
  } else {
    return (
      <div className="container mt-5">
        <Tours data={data} removeDats={removeDats} />
      </div>
    );
  }
}

export default App;
