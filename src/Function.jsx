import lodash from "lodash";
import axios from "axios";

const noResult = {
  recordid: -1,
};

const Count = (data, type) => {
  var x = 0;
  data.forEach((element) => {
    x += element[type];
  });
  return x;
};

const Toggle = (event) => {
  console.log(event.currentTarget.nextElementSibling);

  event.currentTarget.nextElementSibling.classList.contains("d-none")
    ? event.currentTarget.nextElementSibling.classList.remove("d-none")
    : event.currentTarget.nextElementSibling.classList.add("d-none");
};

const Calculate = (arr, query, find) => {
  return arr.filter((data) => {
    return data[find] === query;
  });
};

const Finder = (str, resources, updateResults) => {
  var arr;

  var name = str.replace(/\w+/g, lodash.capitalize);

  arr = Calculate(resources, name, "city");

  if (arr.length === 0) arr = Calculate(resources, name, "state");

  arr.length === 0 ? updateResults([noResult]) : updateResults([...arr]);
};

function getCoordinates() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

const Locate = async (resources, updateResults) => {
  const position = await getCoordinates();
  var x = position.coords.latitude;
  var y = position.coords.longitude;
  axios
    .get(
      "https://api.opencagedata.com/geocode/v1/json?q=" +
        x +
        "+" +
        y +
        "&key=e2f71dbb452c4ebd90f841fc76f1bf6a"
    )
    .then(function (response) {
      var city = response.data.results[0].components.city;
      var state = response.data.results[0].components.state;
      var arr;

      arr = Calculate(resources, city, "city");

      if (arr.length === 0) arr = Calculate(resources, state, "state");

      arr.length === 0 ? updateResults([noResult]) : updateResults([...arr]);
    });
};

const Update = (data, type) => {
  if (
    data.hasOwnProperty("delta") &&
    data["delta"].hasOwnProperty(type) &&
    data["delta"][type] !== 0
  ) {
    return "(+ " + data["delta"][type] + ")";
  } else {
    return "";
  }
};
const CountUpdate = (data, type) => {
  var x = 0;
  data.forEach((element) => {
    x += element.delta[type];
  });
  if (x > 0) return "(+ " + x + ")";
  else return "";
};
export { Count, Toggle, Finder, Locate, Update, CountUpdate };
