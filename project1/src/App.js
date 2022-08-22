import { useState } from "react";
import List from "./list";
import Data from "./data";
import Btn from "./Btn";

function App() {
  const [people, setpeople] = useState(Data);
  function onClick() {
    setpeople([]);
  }
  return (
    <div className="container card mt-5 py-3 ">
      <div>
        <h1 className="text-primary">
          <span>{people.length}</span> birthday reminder
        </h1>
        <List people={people} />
        <Btn onClick={onClick} text="Got it!" />
      </div>
    </div>
  );
}

export default App;
