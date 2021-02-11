import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Allahabad");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=dd0ddb40f2a1e781ea7199055f2c7333`;
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
    <div className="App">
      <div className="box">
        <div className="input">
          <input
            type="search"
            value={search}
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            name=""
            id=""
          />
        </div>

        {!city ? (
          <p className="errorMsg">No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <i className=" fas fa-street-view fa-3x" id="weathericon"></i>
              <h2 className="location">{search}</h2>
              <h1 className="temp">{city.temp}°C</h1>
              <h3 className="tempmin_max">
                Min : {city.temp_min}°C | Max : {city.temp_max}°C 
              </h3>
            </div>
            <div className="wave">
              <div className="wave-one"></div>
              <div className="wave-two"></div>
              <div className="wave-three"></div>
            </div>
          </div>
        )}
      </div>
      </div>
    </>
  );
};

export default App;
