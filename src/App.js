import React from "react";
import Books from "./Components/Books";
import image from "./Imgs/coolWall.jpg"
function App() {
  return (
    <div style={{ backgroundImage:`url(${image})`}}>
      <Books />
    </div>
  );
}

export default App;
