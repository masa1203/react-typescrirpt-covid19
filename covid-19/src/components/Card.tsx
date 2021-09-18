import { useState } from "react";

interface InterfaceAllCountriesData {
  Country: string;
  CountryCode: string;
  Date: string;
  ID: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Premium: {};
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

const Card = () => {
  const [allCountriesData, setAllCountriesData] = useState<
    InterfaceAllCountriesData[]
  >([
    {
      Country: "",
      CountryCode: "",
      Date: "",
      ID: "",
      NewConfirmed: 0,
      NewDeaths: 0,
      NewRecovered: 0,
      Premium: {},
      Slug: "",
      TotalConfirmed: 0,
      TotalDeaths: 0,
      TotalRecovered: 0,
    },
  ]);
  const getAllCountriesData = () => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((data) => setAllCountriesData(data.Countries));
  };
  return (
    <div>
      {console.log(allCountriesData)}
      <h1>ワールド</h1>
      <button onClick={() => getAllCountriesData()}>
        Get All Countries Data
      </button>
      {allCountriesData.map((singleCountryData) =>
        console.log(singleCountryData)
      )}
    </div>
  );
};

export default Card;
