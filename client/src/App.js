import React, {useState} from "react";
import UploadButton from "./components/uploadButton";
import Link from "./components/link";
import "./App.css";

function App() {

    const [URL, setURL] = useState(null);

  return (
    <div className="App">
      <UploadButton setURL={setURL} />
      <Link URL={URL}/>
    </div>
  );
}

export default App;
