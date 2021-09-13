import countriesJson from "../countries.json";

interface TypeCountry {
  Country: string;
  Slug: string;
}

const Selector = () => {
  console.log(countriesJson);
  //   countriesJson.map((country) => console.log(country));
  return (
    <div>
      <p>セレクタ-</p>
      <select>
        {countriesJson.map((country: TypeCountry) => {
          console.log(country.Country);
          console.log(country.Slug);
        })}
        <option>United Kingdom</option>
        <option>China</option>
        <option>Japan</option>
      </select>
    </div>
  );
};

export default Selector;
