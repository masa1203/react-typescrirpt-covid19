import countriesJson from "../countries.json";

interface InterfaceCountry {
  Country: string;
  Slug: string;
}

const Selector = () => {
  return (
    <div>
      <p>セレクタ-</p>
      <select>
        {countriesJson.map((country: InterfaceCountry, index: number) => (
          <option value={country.Slug} key={index}>
            {country.Country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
