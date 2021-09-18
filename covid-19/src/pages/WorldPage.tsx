import Header from "../components/Header";
import Card from "../components/Card";
import { Container } from "react-bootstrap";

const WorldPage = (props: any) => {
  return (
    <div>
      <Header />
      <Container style={{ marginBottom: 2 }}>
        <Card allCountriesData={props.allCountriesData} />
      </Container>
    </div>
  );
};

export default WorldPage;
