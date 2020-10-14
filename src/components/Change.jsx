import React from "react";

const Change = (props) => {
  const { change, key1, type } = props;
  return (
    <div>
      <h3>
        {change.hasOwnProperty(key1) && change[key1].delta.hasOwnProperty(type)
          ? "↑ " + change[key1].delta[type]
          : null}
      </h3>
    </div>
  );
};
export default Change;
