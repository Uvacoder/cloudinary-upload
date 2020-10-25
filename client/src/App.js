import React, { useState } from "react";
import UploadButton from "./components/uploadButton";
import "./App.css";
import Link from"./components/link";

function App() {
  const [URL, setURL] = useState(null);
  const [isSelected, setSelected] = useState(false);
  return (
    <div className="App">
      <UploadButton setURL={setURL} setSelected={setSelected}/>
      <Link URL={URL} isSelected={isSelected}/>
    </div>
  );
}

export default App;
