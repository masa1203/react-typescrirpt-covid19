import { useState } from "react";
import countriesJson from "./countries.json";
import TopPage from "./pages/TopPage";
import "./App.css";

interface InterfaceSetCountryData {
  date: string;
  newConfirmed: string;
  totalConfirmed: string;
  newRecovered: string;
  totalRecoverd: string;
}

function App() {
  const [country, setCountry] = useState<string>("");
  const [countryData, setCountryData] = useState<InterfaceSetCountryData>({
    date: "",
    newConfirmed: "",
    totalConfirmed: "",
    newRecovered: "",
    totalRecoverd: "",
  });

  // 選択したcountryのデータを取得する
  const getCountryData = () => {
    console.log("getCountryData start!");
    fetch(`https://api.covid19api.com/country/${country}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountryData({
          date: data[data.length - 1].Date,
          newConfirmed: String(
            data[data.length - 1].Confirmed - data[data.length - 2].Confirmed
          ),
          totalConfirmed: data[data.length - 1].Confirmed,
          newRecovered: String(
            data[data.length - 1].Recovered - data[data.length - 2].Recovered
          ),
          totalRecoverd: data[data.length - 1].Recovered,
        });
      });
  };

  return (
    <div>
      {console.log("App.countryData", countryData)}
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
