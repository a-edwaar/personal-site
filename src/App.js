import React from "react";
import logo from "./profile.png";
import "./App.css";
import Socials from "./socials";

function App() {
  return (
    <div className="App">
      <Socials />
      <hr />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hey, I'm Archie</h1>
        <p>
          Developer, Student and Blogger.
          <br></br>Currently working on a SaaS product for my final year uni
          project.
          <br></br> Previously @IBM and developing{" "}
          <a
            className="App-link"
            href="https://apps.apple.com/gb/app/co-shop/id1513591835"
          >
            Co-shop.
          </a>
          <br />
          📍 Birmingham, UK
        </p>
      </header>
    </div>
  );
}

export default App;
