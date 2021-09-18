import React from "react";
import countriesJson from "./countries.json";
import { useState } from "react";
import TopPage from "./pages/TopPage";
import "./App.css";

type setCountryDataType = {
  date: string;
  // newConfirmed: string;
  totalConfirmed: string;
  // newRecovered: string;
  totalRecoverd: string;
};

function App() {
  const [country, setCountry] = useState<string>("");
  const [countryData, setCountryData] = useState<setCountryDataType>({
    date: "",
    // newConfirmed: "",
    totalConfirmed: "",
    // newRecovered: "",
    totalRecoverd: "",
  });

  // 選択したcountryのデータを取得する
  const getCountryData = () => {
    console.log("getCountryData");
    fetch(`https://api.covid19api.com/country/${country}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountryData({
          date: data[data.length - 1].Date,
          // newConfirmed: data[data.length - 2].Confirmed,
          totalConfirmed: data[data.length - 1].Confirmed,
          // newRecovered: data[data.length - 2].Recovered,
          totalRecoverd: data[data.length - 1].Recovered,
        });
      });
  };

  return (
    <div>
      {console.log("countryData", countryData)}
      <TopPage
        countriesJson={countriesJson}
        setCountry={setCountry}
        getCountryData={getCountryData}
        countryData={countryData}
      />
    </div>
  );
}

export default App;
