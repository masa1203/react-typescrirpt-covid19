import { useState } from "react";
import countriesJson from "../countries.json";

interface InterfaceCountry {
  Country: string;
  Slug: string;
}

const Selector = () => {
  const [country, setCountry] = useState<string>("");
  return (
    <div>
      <p>セレクタ-</p>
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
    </div>
  );
};

export default Selector;
