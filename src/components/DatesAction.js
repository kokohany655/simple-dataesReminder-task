import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DatesAction = ({deleteData,showData}) => {
  return (
    <Row className='justify-content-center my-3'>
        <Col sm='8' className='d-flex justify-content-between'>
          <button onClick={showData} className='btn-style py-2'>Show</button>
          <button onClick={deleteData} className='btn-style py-2'>Delete</button>
        </Col>
      </Row>
  )
}

export default DatesAction