import React from "react";
import { Row, Col, FloatingLabel, Form, Button } from "react-bootstrap";

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
      {/* e: イベントパラメータ */}
      <Row className="align-items-center">
        <Col>
          <FloatingLabel controlId="floatingSelect" label="Select Country">
            <Form.Select
              aria-label="Floating label select Country"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                props.setCountry(e.target.value);
              }}
            >
              {props.countriesJson.map(
                (country: InterfaceCountry, index: number) => (
                  <option value={country.Slug} key={index}>
                    {country.Country}
                  </option>
                )
              )}
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col xs lg="2">
          <Button
            variant="outline-dark"
            size="lg"
            onClick={() => props.getCountryData()}
          >
            Get Data
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Selector;
