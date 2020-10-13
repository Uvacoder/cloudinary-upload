import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import "./upload.css";

function UploadButton() {
  const [imageSelected, setImage] = useState("");

  return (
    <>
      <input type="File" name="image" onChange={(e) => setImage(imageSelected + `${e.target.value}`)} />
      {imageSelected !== "" ? <SubmitButton /> : <p>no image is selected</p>}
    </>
  );
}

export default UploadButton;
