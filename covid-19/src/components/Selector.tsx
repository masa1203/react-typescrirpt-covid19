import React from "react";

interface InterfaceCountry {
  Country: string;
  Slug: string;
}

interface SelectorProps extends InterfaceCountry {
  countriesJson: InterfaceCountry[];
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  getCountryData: () => void;
}

const Selector = (props: SelectorProps) => {
  console.log("Selector props: ", props);

  return (
    <div>
      <p>セレクタ-</p>
      <option>Select A Country</option>
      {/* e: イベントパラメータ */}
      <select
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          props.setCountry(e.target.value);
        }}
      >
        {props.countriesJson.map((country: InterfaceCountry, index: number) => (
          <option value={country.Slug} key={index}>
            {country.Country}
          </option>
        ))}
      </select>
      <button onClick={() => props.getCountryData()}> Get Data </button>
    </div>
  );
};

export default Selector;
