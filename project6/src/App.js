import React, { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { data } from "./data";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const { title, date, compony, duties } = data[index];
  return (
    <section>
      {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <>
          <h2>Experience</h2>
          <div className="contanier-job container">
            <div className="row">
              <div className="btn-container col-md-3 flex-md-column m-md-0 justify-content-md-start pt-md-2">
                {data.map((c, index) => {
                  return (
                    <button
                      key={index}
                      className="btn"
                      onClick={() => setIndex(index)}
                    >
                      {c.compony}
                    </button>
                  );
                })}
              </div>

              <article className="job col-md-9">
                <div className="job-details">
                  <h6>{title}</h6>
                  <h5>{compony}</h5>
                  <p className="text-muted">{date}</p>
                </div>
                {duties.map((duty, index) => {
                  return (
                    <div key={index} className="job-desc">
                      <FaAngleDoubleRight className="job-desc__icon" />
                      <p>{duty}</p>
                    </div>
                  );
                })}
              </article>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default App;
