import React, { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Planets from "./components/Planets";
import People from "./components/People";

function App() {
  const [page, setPage] = useState("planets");
  return (
    <div className="App">
      <h1>Star Wars Info</h1>
      <Navbar setPage={setPage} />
      <main className="content">
        {page === "planets" ? <Planets /> : <People />}
      </main>
    </div>
  );
}

export default App;
