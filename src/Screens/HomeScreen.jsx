import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Product from '../Product'
import ProductScreen from '../Components/ProductScreen'

const HomeScreen = () => {
  return (
    <>
    <Row>
        {
            Product.map((Product)=>(
                <Col key={Product.id} md={3}>
                     <ProductScreen Product={Product}/>                    
                </Col>
            ))
        }
    </Row>
      
    </>
  )
}

export default HomeScreen
