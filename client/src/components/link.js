import React from "react";
import './link.css';

function Link({URL}) {
  return (
    <div>
      <h1>your link is here</h1>
      <p>
        {
          URL || "wait while link generates"
        }
      </p>
      {URL !== null ? <img src={URL} alt="uploaded image" style={{maxWidth: "200px", maxHeight:"200px", objectFit: "contain"}}/>  : null}
    </div>
  );
}

export default Link;
