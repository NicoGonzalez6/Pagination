import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const { data, loading } = useFetch();
  const [page, setPage] = useState(0);
  const [follower, setFollower] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollower(data[page]);
  }, [loading, page]);

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {follower.map((e) => {
            return <Follower key={e.id} {...e}></Follower>;
          })}
        </div>
        {!loading && (
          <div className="btn-container">
            {follower.map((e, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? "active-btn" : null}`}
                  onClick={() => {
                    setPage(index);
                  }}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
