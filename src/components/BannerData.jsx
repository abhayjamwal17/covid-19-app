import React from "react";
import Change from "./Change";

const activeTotal = (change, key1) => {
  if (change.hasOwnProperty(key1))
    return (
      <h3>
        {change[key1].total["confirmed"] -
          change[key1].total["recovered"] -
          change[key1].total["deceased"] -
          change[key1].total["migrated"]}
      </h3>
    );
};
const BannerData = (props) => {
  const { change, type, key1 } = props;

  return (
    <div
      className={(type === "active" ? "activeCases" : type) + " text-center"}
    >
      {type !== "active" ? (
        <Change change={change} key1={key1} type={type} />
      ) : null}
      <div>
        <h1>{type.toUpperCase()}</h1>
      </div>
      {type !== "active" ? (
        <div>
          <h3>
            {change.hasOwnProperty(key1) ? change[key1].total[type] : null}
          </h3>
        </div>
      ) : (
        activeTotal(change, key1)
      )}
    </div>
  );
};
export default BannerData;
