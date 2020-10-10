import React from "react";

function Link(props) {
  return (
    <div>
      <h1>your link is here</h1>
      <input value={props.data||"wait while link generates"} />
    </div>
  );
}

export default Link;
