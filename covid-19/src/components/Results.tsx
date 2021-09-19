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
  const { date, newConfirmed, totalConfirmed, newRecovered, totalRecoverd } =
    props.countryData;
  return (
    <Row className="my-2">
      <Col lg="10">
        <_Card bg="light">
          <_Card.Body>
            <_Card.Title className="text-muted">日付</_Card.Title>
            <_Card.Text>
              <li>{date.slice(0, 10)}</li>
            </_Card.Text>

            <_Card.Title className="text-muted">新規感染者</_Card.Title>
            <_Card.Text>
              <li>{newConfirmed.toLocaleString()}</li>
            </_Card.Text>

            <_Card.Title className="text-muted">感染者総数</_Card.Title>
            <_Card.Text>
              <li>{totalConfirmed.toLocaleString()}</li>
            </_Card.Text>
            <_Card.Title className="text-muted">新規回復者</_Card.Title>
            <_Card.Text>
              <li>{newRecovered.toLocaleString()}</li>
            </_Card.Text>
            <_Card.Title className="text-muted">回復者総数</_Card.Title>
            <_Card.Text>
              <li>{totalRecoverd.toLocaleString()}</li>
            </_Card.Text>
          </_Card.Body>
        </_Card>
      </Col>
    </Row>
  );
};

export default Results;
