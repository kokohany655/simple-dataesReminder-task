import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DatesCount = ({person}) => {
  return (
    <Row className='justify-content-center header my-2'>
    <Col sm='8'>
      you have {person.length} dates today
    </Col>
  </Row>
  )
}

export default DatesCount