import React from "react";
import "./link.css";

function Link({ URL }) {
  function copyToClipboard(){
    var textField = document.createElement('textarea')
    textField.innerText = URL
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  return (
    <div>
      <h1>your link is here</h1>
      {URL ? <a href={URL}>{URL}</a> : "wait while link generates"}
      {URL && <button className=".copy-btn" onClick={()=> copyToClipboard()}>copy link</button>}
      {URL !== null ? (
        <img
          src={URL}
          alt="uploaded-img"
          style={{
            maxWidth: "200px",
            maxHeight: "200px",
            objectFit: "contain",
          }}
        />
      ) : null}
    </div>
  );
}

export default Link;
