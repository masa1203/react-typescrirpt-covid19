import Header from "../components/Header";
import Card from "../components/Card";
import { Container } from "react-bootstrap";

const WorldPage = (props: any) => {
  return (
    <div>
      <Header />
      <Container style={{ marginBottom: 2 }}>
        <h2>世界の感染状況</h2>
        <Card
          allCountriesData={props.allCountriesData}
          isLoading={props.isLoading}
        />
      </Container>
    </div>
  );
};

export default WorldPage;
