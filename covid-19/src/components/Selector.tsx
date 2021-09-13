import { useState } from "react";
import countriesJson from "../countries.json";

interface InterfaceCountry {
  Country: string;
  Slug: string;
}

const Selector = () => {
  const [country, setCountry] = useState<string>("");
  // 選択したcountryのデータを取得する
  const getCountryData = () => {
    fetch(`https://api.covid19api.com/country/${country}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <p>セレクタ-</p>
      <option>Select A Country</option>
      {/* e: イベントパラメータ */}
      <select
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setCountry(e.target.value)
        }
      >
        {countriesJson.map((country: InterfaceCountry, index: number) => (
          <option value={country.Slug} key={index}>
            {country.Country}
          </option>
        ))}
      </select>
      {country}
      <button onClick={getCountryData}>Get Data</button>
    </div>
  );
};

export default Selector;
