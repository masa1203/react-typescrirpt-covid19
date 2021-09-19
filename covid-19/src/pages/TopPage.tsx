import Header from "../components/Header";
import Selector from "../components/Selector";
import Results from "../components/Results";
import { Container, Row, Col } from "react-bootstrap";

const TopPage = (props: any) => {
  console.log("TopPage props:", props);
  return (
    <div>
      <Header />
      <Container>
        <h2>国ごとの感染状況</h2>
        <Row>
          <Col>
            <Selector
              countriesJson={props.countriesJson}
              setCountry={props.setCountry}
              getCountryData={props.getCountryData}
              Country={""}
              Slug={""}
              isLoading={props.isLoading}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Results countryData={props.countryData} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopPage;
