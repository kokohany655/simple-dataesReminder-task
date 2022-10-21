import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DatesList = ({person}) => {
  return (
    <Row className='justify-content-center'>
        <Col sm='8'>
          <div className='rectangle p-2'>
            {person.length ?person.map(p=>(
              <div key={p.id} className='d-flex border-bottom mx-3 my-2'>
              <img className='img-avatar' src={p.img} alt='icon'/>
              <div className='px-3' style={{color:'black'}}>
                <p className='d-inline fs-5'>{p.name}</p>
                <p className='fs-6'>{p.date}</p>
              </div>
            </div>
            )): <h2 style={{color:'black'}} className='p-5 text-center'>no dates today</h2>}
              
          </div>
          
        </Col>
      </Row>
  )
}

export default DatesList