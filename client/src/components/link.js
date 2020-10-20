import React from "react";
import './link.css';

function Link({URL}) {
  return (
    <div>
      <h1>your link is here</h1>
      {
        URL ? <a href={URL}>{URL}</a> : "wait while link generates"
      }
      {URL !== null ? <img src={URL} alt="uploaded-img" style={{maxWidth: "200px", maxHeight:"200px", objectFit: "contain"}}/>  : null}
    </div>
  );
}

export default Link;
