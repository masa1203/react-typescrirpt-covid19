import { useState } from "react";

interface InterfaceCountriesSummaryData {
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
    InterfaceCountriesSummaryData[]
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
      {allCountriesData.map(
        (singleCountryData: InterfaceCountriesSummaryData, index: number) => (
          <div key={index}>
            <h2>{singleCountryData.Country}</h2>
            <p>新規感染者：{singleCountryData.NewConfirmed}</p>
            <p>感染者総数：{singleCountryData.TotalConfirmed}</p>
          </div>
        )
      )}
    </div>
  );
};

export default Card;
