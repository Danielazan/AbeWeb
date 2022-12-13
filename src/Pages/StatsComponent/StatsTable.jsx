import React from "react";
import { Row, Col } from "react-bootstrap";

function StatsTable(props) {
  return (
    <React.Fragment>
      <h2 className='Stats-h2 mt-5'>Stats</h2>

      <Row
        style={{
          borderBlock: "3px solid #2e180e",
          fontWeight: "600",
        }}
        className='py-3 mt-3'
      >
        <Col className='text-center trun' xs={2}>
          Date
        </Col>

        <Col className='text-center trun' xs={2}>
          Ref No
        </Col>

        <Col className='text-center trun' xs={3}>
          Stock In
        </Col>

        <Col className='text-center trun' xs={3}>
          Stock Out
        </Col>

        <Col className='text-center trun' xs={2}>
          Balance
        </Col>
      </Row>

      {props.stats &&
        props.stats.map((item) => {
          return (
            <Row className='py-4 tb-row' key={item._id}>
              <Col className='text-center trun' xs={2}>
                {item.createdAt}
              </Col>

              <Col className='text-center trun' xs={2}>
                {item.RefNo}
              </Col>

              <Col className='text-center' xs={3}>
                {item.StockIn}
              </Col>

              <Col className='text-center' xs={3}>
                {item.StockOut}
              </Col>

              <Col className='text-center' xs={2}>
                {item.Balance}
              </Col>
            </Row>
          );
        })}
    </React.Fragment>
  );
}

export default StatsTable;
