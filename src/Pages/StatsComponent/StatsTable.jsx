import React from 'react'
import {  Row, Col } from "react-bootstrap";

function StatsTable() {
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

      <Row className='py-4 tb-row'>
        <Col className='text-center' xs={2}>
          01/11/22
        </Col>

        <Col className='text-center' xs={2}>
          001
        </Col>

        <Col className='text-center' xs={3}>
          3000
        </Col>

        <Col className='text-center' xs={3}></Col>

        <Col className='text-center' xs={2}></Col>
      </Row>
    </React.Fragment>
  );
}

export default StatsTable