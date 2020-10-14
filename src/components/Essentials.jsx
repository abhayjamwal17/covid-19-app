import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Results from "./Results";
import { EssentialsContext } from "../contexts/EssentialsContext";
import { Finder, Locate } from "../Function";

function Essentials() {
  var { resources, updateResources } = useContext(EssentialsContext);
  var [results, updateResults] = useState([]);

  useEffect(
    () => {
      axios
        .get("https://api.covid19india.org/resources/resources.json")
        .then(function (response) {
          updateResources(response.data.resources);
          updateResults([]);
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div>
      <h1 className="text-center essentials-header">Essentials Finder</h1>
      <form
        className="text-center essentials-form"
        onSubmit={(event) => {
          event.preventDefault();
          Finder(event.target.childNodes[0].value, resources, updateResults);
        }}
      >
        <input
          className="essentials-input"
          type="text"
          placeholder="Enter City or State"
        ></input>
      </form>
      <h6 className="text-center essentials-or">or</h6>
      <div className="essentials-button">
        <button
          className="btn btn-secondary btn-lg"
          onClick={() => {
            Locate(resources, updateResults);
          }}
        >
          Use My Location
        </button>
      </div>
      {results.length !== 0 ? <Results results={results} /> : null}
    </div>
  );
}
export default Essentials;
