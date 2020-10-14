import React from "react";

function Results(props) {
  const { results } = props;
  console.log(results.length);

  if (results[0].recordid === -1) {
    return <h1 className="text-center no-result">No Result Found</h1>;
  } else {
    return results.map((data) => {
      return (
        <div
          className="card text-center text-white bg-dark"
          key={data.recordid}
        >
          <div className="card-body">
            <h5 className="card-title">{data.nameoftheorganisation}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{data.category}</h6>
            <p className="card-text">{data.descriptionandorserviceprovided}</p>
            <p>{data.city + "," + data.state}</p>
            <p>Phone No. :{data.phonenumber}</p>
            <a href={data.contact} className="btn btn-light">
              Link
            </a>
          </div>
        </div>
      );
    });
  }
}

export default Results;
