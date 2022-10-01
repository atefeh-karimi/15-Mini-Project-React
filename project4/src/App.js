import React from "react";
import CardQuestion from "./component/CardQuestion";
import { questions } from "./content";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h4>Answer And Questions:</h4>
      <section>
        {questions.map((question) => {
          return <CardQuestion key={question.id} {...question} />;
        })}
      </section>
    </div>
  );
}

export default App;
