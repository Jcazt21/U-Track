import React from "react";
import LoginForm from "./components/LoginForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>U-Track</h1>
        <img src="public/logo.png" alt="logo" className="logo" />
      </div>
      <LoginForm />
    </div>
  );
}

export default App;
