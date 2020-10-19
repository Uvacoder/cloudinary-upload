import React, { useState } from "react";
import axios from "axios";
import "./upload.css";
import "./submit.css";

function UploadButton() {
  const [imageSelected, setImage] = useState(null);

  async function uploadImage() {
    const payload = new FormData();
    payload.append("image", imageSelected);
    console.log("uploading image....");
    const res = await axios.post("http://localhost:4444/", payload);
    console.log(res.data);
  }

  return (
    <>
      <input
        type="File"
        name="image"
        onChange={(e) => setImage(e.target.files[0])}
      />
      {imageSelected !== null ? (
        <button className="upload" onClick={() => uploadImage()}>submit</button>
      ) : (
        <p>select an image to get link</p>
      )}
    </>
  );
}

export default UploadButton;
