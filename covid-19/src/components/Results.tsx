/* eslint-disable react/jsx-pascal-case */
import { Card as _Card, Row, Col } from "react-bootstrap";

interface InterfaceResults {
  countryData: {
    date: string;
    newConfirmed: string;
    totalConfirmed: string;
    newRecovered: string;
    totalRecoverd: string;
  };
}

const Results = (props: InterfaceResults) => {
  return (
    <Row className="my-2">
      <Col lg="10">
        <_Card bg="light">
          <_Card.Body>
            <_Card.Title className="text-muted">日付</_Card.Title>
            <_Card.Text>
              <ul>
                <li>{props.countryData.date.slice(0, 10)}</li>
              </ul>
            </_Card.Text>

            <_Card.Title className="text-muted">新規感染者</_Card.Title>
            <_Card.Text>
              <ul>
                <li>{props.countryData.newConfirmed.toLocaleString()}</li>
              </ul>
            </_Card.Text>

            <_Card.Title className="text-muted">感染者総数</_Card.Title>
            <_Card.Text>
              <ul>
                <li>{props.countryData.totalConfirmed.toLocaleString()}</li>
              </ul>
            </_Card.Text>
            <_Card.Title className="text-muted">新規回復者</_Card.Title>
            <_Card.Text>
              <ul>
                <li>{props.countryData.newRecovered.toLocaleString()}</li>
              </ul>
            </_Card.Text>
            <_Card.Title className="text-muted">回復者総数</_Card.Title>
            <_Card.Text>
              <ul>
                <li>{props.countryData.totalRecoverd.toLocaleString()}</li>
              </ul>
            </_Card.Text>
          </_Card.Body>
        </_Card>
      </Col>
    </Row>
  );
};

export default Results;
