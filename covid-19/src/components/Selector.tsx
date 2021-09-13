import countriesJson from "../countries.json";

const Selector = () => {
  console.log(countriesJson);
  countriesJson.map((country) => console.log(country));
  return (
    <div>
      <p>セレクタ-</p>
      <select>
        <option>United Kingdom</option>
        <option>China</option>
        <option>Japan</option>
      </select>
    </div>
  );
};

export default Selector;
