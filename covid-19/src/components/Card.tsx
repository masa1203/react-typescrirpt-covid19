/* eslint-disable react/jsx-pascal-case */
import { Card as _Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
export interface InterfaceCountriesSummaryData {
  Country: string;
  CountryCode: string;
  Date: string;
  ID: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Premium: {};
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

interface InterfaceCard {
  allCountriesData: [];
}

const Card = (props: InterfaceCard) => {
  return (
    <Row xs={1} md={4} className="g-6">
      {props.allCountriesData.map(
        (singleCountryData: InterfaceCountriesSummaryData, index: number) => (
          <Col>
            <_Card
              bg="Light"
              key={index}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <_Card.Header>{singleCountryData.Country}</_Card.Header>
              <_Card.Body>
                <p>新規感染者：{singleCountryData.NewConfirmed}</p>
                <p>感染者総数：{singleCountryData.TotalConfirmed}</p>
              </_Card.Body>
            </_Card>
          </Col>
        )
      )}
    </Row>
  );
};

export default Card;
