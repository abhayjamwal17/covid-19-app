import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { TableContext } from "../contexts/TableContext";
import { Count, Toggle, CountUpdate } from "../Function";
import SubTable from "./SubTable";
import BannerData from "./BannerData";

const Table = () => {
  var { state, updateState } = useContext(TableContext);
  var [change, updateChange] = useState({});

  useEffect(
    function () {
      axios
        .get("https://api.covid19india.org/v2/state_district_wise.json")
        .then(function (response) {
          updateState([...response.data]);
        });

      axios
        .get("https://api.covid19india.org/v3/data.json")
        .then(function (response) {
          updateChange((prevValue) => {
            return response.data;
          });
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div>
      <div className="banner col-lg-3 col-md-6 text-center">
        <BannerData change={change} type={"confirmed"} key1={"TT"} />
      </div>
      <div className="banner col-lg-3 col-md-6 text-center">
        <BannerData change={change} type={"active"} key1={"TT"} />
      </div>
      <div className="banner col-lg-3 col-md-6 text-center">
        <BannerData change={change} type={"recovered"} key1={"TT"} />
      </div>
      <div className="banner col-lg-3 col-md-6 text-center">
        <BannerData change={change} type={"deceased"} key1={"TT"} />
      </div>

      <h1 className="text-center heading">State-wise Data</h1>

      <div className="container">
        <div className="row">
          <div className="col-4 text-left title">State</div>
          <div className="col-2 text-right title">C</div>
          <div className="col-2 text-right title">A</div>
          <div className="col-2 text-right title">R</div>
          <div className="col-2 text-right title">D</div>
        </div>
        {state.map((element) => {
          return (
            <div key={element.statecode}>
              <div
                className="row"
                onClick={element.statecode !== "UN" ? Toggle : null}
              >
                <div className="col-4 text-left data">{element.state}</div>

                <div className="col-2 text-right data align-text-bottom">
                  <div className="red update">
                    {CountUpdate(element.districtData, "confirmed")}
                  </div>
                  {Count(element.districtData, "confirmed")}
                </div>

                <div className="col-2 text-right data">
                  {Count(element.districtData, "active")}
                </div>

                <div className="col-2 text-right data">
                  <div className="green update">
                    {CountUpdate(element.districtData, "recovered")}
                  </div>
                  {Count(element.districtData, "recovered")}
                </div>

                <div className="col-2 text-right data">
                  <div className="black update">
                    {CountUpdate(element.districtData, "deceased")}
                  </div>
                  {Count(element.districtData, "deceased")}
                </div>
              </div>
              <div className="row  d-none">
                <div className="col">
                  <SubTable code={element.statecode} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* <div>
        <table className="table table-main table-striped table-responsive">
          <thead className="thead-dark">
            <tr>
              <th className="main">State</th>
              <th>Confirmed</th>
              <th>Active</th>
              <th>Recovered</th>
              <th>Deceased</th>
            </tr>
          </thead>

          {state.map((element) => {
            return (
              <tbody key={element.statecode}>
                <tr
                  id={element.statecode}
                  onClick={element.statecode !== "UN" ? Toggle : null}
                >
                  <td className="main">{element.state}</td>
                  <td>
                    <span>{Count(element.districtData, "confirmed")}</span>
                    <strong className="red update">
                      {" " + CountUpdate(element.districtData, "confirmed")}
                    </strong>
                  </td>
                  <td>
                    <span>{Count(element.districtData, "active")}</span>
                  </td>
                  <td>
                    <span>{Count(element.districtData, "recovered")}</span>
                    <strong className="green update">
                      {" " + CountUpdate(element.districtData, "recovered")}
                    </strong>
                  </td>
                  <td>
                    <span>{Count(element.districtData, "deceased")}</span>
                    <strong className="black update">
                      {" " + CountUpdate(element.districtData, "deceased")}
                    </strong>
                  </td>
                </tr>
                <tr className="d-none">
                  <td colSpan="5" className="subtable">
                    <SubTable code={element.statecode} />
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div> */}
    </div>
  );
};

export default Table;
