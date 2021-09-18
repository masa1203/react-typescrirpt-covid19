import Title from "../components/Title";
import Selector from "../components/Selector";
import Results from "../components/Results";

const TopPage = (props: any) => {
  console.log("TopPage props:", props);
  return (
    <div>
      <Title />
      <Selector
        countriesJson={props.countriesJson}
        setCountry={props.setCountry}
        getCountryData={props.getCountryData}
        Country={""}
        Slug={""}
      />
      <Results countryData={props.countryData} />
    </div>
  );
};

export default TopPage;
