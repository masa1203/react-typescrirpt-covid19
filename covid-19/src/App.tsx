import { useState } from "react";
import { useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import countriesJson from "./countries.json";
import TopPage from "./pages/TopPage";
import "./App.css";
import WorldPage from "./pages/WorldPage";
import { InterfaceCountriesSummaryData } from "./components/Card";

interface InterfaceSetCountryData {
  date: string;
  newConfirmed: string;
  totalConfirmed: string;
  newRecovered: string;
  totalRecoverd: string;
}

function App() {
  const [country, setCountry] = useState<string>("japan");
  const [countryData, setCountryData] = useState<InterfaceSetCountryData>({
    date: "",
    newConfirmed: "",
    totalConfirmed: "",
    newRecovered: "",
    totalRecoverd: "",
  });
  const [allCountriesData, setAllCountriesData] = useState<
    InterfaceCountriesSummaryData[]
  >([
    {
      Country: "ContryName",
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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 選択したcountryのデータを取得する
  const getCountryData = () => {
    console.log("getCountryData start!");
    setIsLoading(true);
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
        setIsLoading(false);
      });
  };

  // WorldPageが表示されたときにuseEffectでsammaryデータを取得したい
  useEffect(() => {
    console.log("getSummaryData start!");
    setIsLoading(true);
    // サマリーデータを取得する
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((data) => {
        setAllCountriesData(data.Countries);
        setIsLoading(false);
      });
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <TopPage
            countriesJson={countriesJson}
            setCountry={setCountry}
            getCountryData={getCountryData}
            countryData={countryData}
            isLoading={isLoading}
          />
        </Route>
        <Route exact path="/world">
          <WorldPage
            allCountriesData={allCountriesData}
            isLoading={isLoading}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
