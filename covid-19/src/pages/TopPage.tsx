import Header from "../components/Header";
import Selector from "../components/Selector";
import Results from "../components/Results";
import { Container } from "react-bootstrap";

const TopPage = (props: any) => {
  console.log("TopPage props:", props);
  return (
    <div>
      <Header />
      <Container>
        <Selector
          countriesJson={props.countriesJson}
          setCountry={props.setCountry}
          getCountryData={props.getCountryData}
          Country={""}
          Slug={""}
        />
        <Results countryData={props.countryData} />
      </Container>
    </div>
  );
};

export default TopPage;
