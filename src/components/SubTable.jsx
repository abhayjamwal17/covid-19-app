import React, { useContext } from "react";
import { TableContext } from "../contexts/TableContext";
import { Update } from "../Function";
import { v4 as uuidv4 } from "uuid";

function SubTable(props) {
  const { state } = useContext(TableContext);
  var data;

  state.forEach((element) => {
    if (element.statecode === props.code) {
      data = element.districtData;
    }
  });
  return (
    <div className="container sub">
      <div className="row justify-content-center">
        <div className="col-4 text-left title">District</div>
        <div className="col-2 text-right title">C</div>
        <div className="col-2 text-right title">A</div>
        <div className="col-2 text-right title">R</div>
        <div className="col-2 text-right title">D</div>
      </div>
      {data.map((element) => {
        return (
          <div key={uuidv4()}>
            <div className="row justify-content-center text-center">
              <div className="col-4 text-left data subdata">
                {element.district}
              </div>
              <div className="col-2 text-right data subdata">
                <div className="red update">
                  {Update(element.confirmed, "confirmed")}
                </div>
                {element.confirmed}
              </div>
              <div className="col-2 text-right data subdata">
                {element.active}
              </div>
              <div className="col-2 text-right data subdata">
                <div className="green update">
                  {Update(element.recovered, "recovered")}
                </div>
                {element.recovered}
              </div>
              <div className="col-2 text-right data subdata">
                <div className="black update">
                  {Update(element.deceased, "deceased")}
                </div>
                {element.deceased}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SubTable;
